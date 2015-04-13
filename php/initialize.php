<?php
//connect MYSQL
require_once 'config.php'; // your PHP script(s) can access this, but the rest cannot

$db = new mysqli(db_host, db_uid, db_pwd, db_name);
if ($db->connect_errno) 
	echo("Failed to connect to MySQL: (" . $db->connect_errno . ") " . $db->connect_error);

require_once 'question.php';
require_once 'errata_store.php';
require_once 'testimonial.php';
require_once 'download.php';
require_once 'problem_credict.php';

function prettyPrint( $json )
{
    $result = '';
    $level = 0;
    $in_quotes = false;
    $in_escape = false;
    $ends_line_level = NULL;
    $json_length = strlen( $json );

    for( $i = 0; $i < $json_length; $i++ ) {
        $char = $json[$i];
        $new_line_level = NULL;
        $post = "";
        if( $ends_line_level !== NULL ) {
            $new_line_level = $ends_line_level;
            $ends_line_level = NULL;
        }
        if ( $in_escape ) {
            $in_escape = false;
        } else if( $char === '"' ) {
            $in_quotes = !$in_quotes;
        } else if( ! $in_quotes ) {
            switch( $char ) {
                case '}': case ']':
                    $level--;
                    $ends_line_level = NULL;
                    $new_line_level = $level;
                    break;

                case '{': case '[':
                    $level++;
                case ',':
                    $ends_line_level = $level;
                    break;

                case ':':
                    $post = " ";
                    break;

                case " ": case "\t": case "\n": case "\r":
                    $char = "";
                    $ends_line_level = $new_line_level;
                    $new_line_level = NULL;
                    break;
            }
        } else if ( $char === '\\' ) {
            $in_escape = true;
        }
        if( $new_line_level !== NULL ) {
            $result .= "\n".str_repeat( "\t", $new_line_level );
        }
        $result .= $char.$post;
    }

    return $result;
}

//Create Question Table

$sql = "CREATE TABLE QandA (id INT PRIMARY KEY, 
                            question VARCHAR(300),
                            answer VARCHAR(100))";
if (mysqli_query($db, $sql)) {} 
else {
    //To avoid old database with the same name
    $sql = "DROP TABLE QandA;";
    mysqli_query($db, $sql);
    $sql = "CREATE TABLE QandA (id INT PRIMARY KEY, 
                            question VARCHAR(300),
                            answer VARCHAR(100))";
    if (mysqli_query($db, $sql)) {} 
    else echo("Error creating table: " . $db->error);
}
$myfile1 = fopen("qanda.json", "w") or die("Unable to open file!");
//Create Errata Table
$sql = "CREATE TABLE Errata (id INT PRIMARY KEY AUTO_INCREMENT, 
                            severity INT,
                            type INT DEFAULT 0,
                            pageNum INT,
                            content VARCHAR(1000),
                            isFixed BOOLEAN,
                            authorName VARCHAR(50),
                            raise_time TIMESTAMP,
                            version INT);";

if (mysqli_query($db, $sql)) {} 
else {
    $sql = "DROP TABLE Errata;";
    mysqli_query($db, $sql);
    $sql = "CREATE TABLE Errata (id INT PRIMARY KEY AUTO_INCREMENT, 
                            severity INT,
                            type INT DEFAULT 0,
                            pageNum INT,
                            content VARCHAR(1000),
                            isFixed BOOLEAN,
                            authorName VARCHAR(50),
                            raise_time TIMESTAMP,
                            version INT);";
    if (mysqli_query($db, $sql)) {} 
    else echo("Error creating table: " . $db->error);
}
$myfile2 = fopen("Errata.json", "w") or die("Unable to open file!");
//Create ErrataP
$sql = "CREATE TABLE ErrataP (id INT PRIMARY KEY AUTO_INCREMENT, 
                            severity INT,
                            type INT DEFAULT 0,
                            pageNum INT,
                            content VARCHAR(1000),
                            authorName VARCHAR(50),
                            raise_time TIMESTAMP,
                            version INT);";

if (mysqli_query($db, $sql)) {} 
else {
    $sql = "DROP TABLE ErrataP;";
    mysqli_query($db, $sql);
    $sql = "CREATE TABLE ErrataP (id INT PRIMARY KEY AUTO_INCREMENT, 
                            severity INT,
                            type INT DEFAULT 0,
                            pageNum INT,
                            content VARCHAR(1000),
                            authorName VARCHAR(50),
                            raise_time TIMESTAMP,
                            version INT);";
    if (mysqli_query($db, $sql)) {} 
    else echo("Error creating table: " . $db->error);
}
$myfile6 = fopen("ErrataP.json", "w") or die("Unable to open file!");
fclose($myfile6);
//Create Testimonial Table 
$sql = "CREATE TABLE Testimonial (id INT PRIMARY KEY AUTO_INCREMENT,
                                  author VARCHAR(100),
                                  content VARCHAR(3000),
                                  nationality VARCHAR(100),
                                  region VARCHAR(100),
                                  credit VARCHAR(200),
                                  imgURL VARCHAR(500));";
if (mysqli_query($db, $sql)) 
{
    
} 
else {
    $sql = "DROP TABLE Testimonial;";
    mysqli_query($db, $sql);
    $sql = "CREATE TABLE Testimonial (id INT PRIMARY KEY AUTO_INCREMENT,
                                  author VARCHAR(100),
                                  content VARCHAR(3000),
                                  nationality VARCHAR(100),
                                  region VARCHAR(100),
                                  credit VARCHAR(200),
                                  imgURL VARCHAR(500));";
    if (mysqli_query($db, $sql)) {}
    else echo("Error creating table: " . $db->error);
}
$myfile3 = fopen("Testimonial.json", "w") or die("Unable to open file!");

//Create table TestimonialP for pending Testimonial Content
$sql = "CREATE TABLE TestimonialP (id INT PRIMARY KEY AUTO_INCREMENT,
                                  author VARCHAR(100),
                                  content VARCHAR(3000),
                                  nationality VARCHAR(100),
                                  region VARCHAR(100),
                                  credit VARCHAR(200),
                                  imgURL VARCHAR(500));";
if (mysqli_query($db, $sql)) 
{
    
} 
else {
    $sql = "DROP TABLE TestimonialP;";
    mysqli_query($db, $sql);
    $sql = "CREATE TABLE TestimonialP (id INT PRIMARY KEY AUTO_INCREMENT,
                                  author VARCHAR(100),
                                  content VARCHAR(3000),
                                  nationality VARCHAR(100),
                                  region VARCHAR(100),
                                  credit VARCHAR(200),
                                  imgURL VARCHAR(500));";
    if (mysqli_query($db, $sql)) {}
    else echo("Error creating table: " . $db->error);
}
$myfile7 = fopen("Testimonial.json", "w") or die("Unable to open file!");
fclose($myfile7);
//Create Download Material Table
$sql = "CREATE TABLE Download (id INT PRIMARY KEY AUTO_INCREMENT,
                               name VARCHAR(200),
                               count INT,
                               URL VARCHAR(500),
                               Remark VARCHAR(500),
                               LastUpdate TIMESTAMP);";
//$myfile4 = fopen("download.json", "w") or die("Unable to open file!");
if (mysqli_query($db, $sql)) {} 
else {
    $sql = "DROP TABLE Download;";
    mysqli_query($db, $sql);
    $sql = "CREATE TABLE Download (id INT PRIMARY KEY AUTO_INCREMENT,
                               name VARCHAR(200),
                               count INT,
                               URL VARCHAR(500),
                               Remark VARCHAR(500),
                               LastUpdate TIMESTAMP);";
    if (mysqli_query($db, $sql)) {} 
    else echo("Error creating table: " . $db->error);
}

$myfile4 = fopen("download.json", "w") or die("Unable to open file!");
//Create Question Credit Table
$sql = "CREATE TABLE Credit (id INT PRIMARY KEY AUTO_INCREMENT,
                             name VARCHAR(150),
                             setter VARCHAR(100),
                             appearance VARCHAR(20));";
//$myfile5 = fopen("QuestionCredit.json", "w") or die("Unable to open file!");
if (mysqli_query($db, $sql)) {} 
else {
    $sql = "DROP TABLE Credit;";
    mysqli_query($db, $sql);
    $sql = "CREATE TABLE Credit (id INT PRIMARY KEY AUTO_INCREMENT,
                             name VARCHAR(150),
                             setter VARCHAR(100),
                             appearance VARCHAR(20));";
    if (mysqli_query($db, $sql)) {} 
    else echo("Error creating table: " . $db->error);
}

$myfile5 = fopen("QuestionCredit.json", "w") or die("Unable to open file!");

//Insertion QandA
for($i = 0;$i<count($question);$i++){
	$sql = "INSERT INTO QandA (id,question,answer) VALUES (".($i+1).",\"".$question[$i]."\",\"".$answers[$i]."\")";

	if ($db->query($sql) === TRUE) {
    
	} else {
    echo( "Error: " . $sql . "<br>" . $db->error);
	}
}


//Insertion Errata
$v_index = 0;
$version = 3;
$a_index = 0;
for($i = 0;$i<count($errata_content);$i++){
	if($i==$version_index[$v_index]) {
		if($v_index<count($version_index)-1){
			$v_index =$v_index+1;
		}
		$version = $version -1;
	}
	if($i == $author_index[$a_index]){
		$sql = "INSERT INTO Errata(severity,type,pageNum,content,isFixed,authorName,raise_time,version) VALUES (1,".$errata_type[$i].",".$errata_page[$i].",\"".$errata_content[$i]."\",".$errata_status[$i].",\"".$authors[$a_index]."\", now(),".$version.");";
		if($a_index <count($author_index)-1)
		$a_index = $a_index+1;
		if ($db->query($sql) === TRUE) {
    
		} else {
    	echo( "Error: " . $sql . "<br>" . $db->error);
		}
	}
	else {
		$sql = "INSERT INTO Errata(severity,type,pageNum,content,isFixed,authorName,raise_time,version) VALUES (1,".$errata_type[$i].",".$errata_page[$i].",\"".$errata_content[$i]."\",".$errata_status[$i].",\""."NULL\", now(),".$version.");";
		if ($db->query($sql) === TRUE) {
    
		} else {
    	echo( "YError: " . $sql . "<br>" . $db->error);
		}
	}
}
//Insertion Testimonial
for($i = 0;$i<$entries;$i++){
	
	$sql = "INSERT INTO Testimonial(author,content,nationality,region,credit,imgURL) VALUES (\"".$authors[$i]."\",\"".$content[$i]."\",\"".$Nationality[$i]."\",\"".$Region[$i]."\",\"".$Credit[$i]."\",\"".$imgURL[$i]."\");";
	if ($db->query($sql) === TRUE) {
    
		} else {
    	echo( "YError: " . $sql . "<br>" . $db->error);
		}
}
//Insertion Download
for($i = 0;$i<count($datalinks);$i++){
	$sql = "INSERT INTO Download(name,count,URL,remark,LastUpdate) VALUES (\"".$datalinks[$i]."\",0,\"".$datapath.$datalinks[$i]."\",\"".$data_remarks[$i]."\",now());";
	if ($db->query($sql) === TRUE) {
    
		} else {
    	echo( "YError: " . $sql . "<br>" . $db->error);
		}
}
//Insertion Credit
$s_index = 0;
for($i = 0;$i<count($problems);$i++) {
	if($i == $setters_indexes[$s_index]) {
		$sql = "INSERT INTO Credit(name,setter,appearance) VALUES (\"".$problems[$i]."\",\"".$setters[$s_index]."\",\"".$locations[$i]."\");";
		if($s_index<count($setters_indexes)-1){
			$s_index = $s_index+1;
		}
	} else {
		$sql = "INSERT INTO Credit(name,setter,appearance) VALUES (\"".$problems[$i]."\",\"\",\"".$locations[$i]."\");";
	}
	if ($db->query($sql) === TRUE) {
    
		} else {
    	echo( "Error: " . $sql . "<br>" . $db->error);
		}
	
}


$sth = $db->query("SELECT * from QandA;");
$json_response1 = array();
while ($row = mysqli_fetch_row($sth)) {
        //$row_array['id'] = $row[0];
        $row_array1['question'] = $row[1];
        $row_array1['answer'] = $row[2];
        //push the values in the array
        array_push($json_response1,$row_array1);
    }
fwrite($myfile1, prettyPrint(json_encode($json_response1)));
fclose($myfile1);

$sth = $db->query("SELECT * from Errata;");
$json_response2 = array();

while($row = mysqli_fetch_row($sth)) {
        //$row_array['id'] = $row[0];
        $row_array2['severity'] = $row[1];
        $row_array2['type'] = $row[2];
        $row_array2['pageNum'] = $row[3];
        $row_array2['content'] = $row[4];
        $row_array2['isFixed'] = $row[5];
        $row_array2['authorName'] = $row[6];
        $row_array2['raise_time'] = $row[7];
        $row_array2['version'] = $row[8];
        //push the values in the array
        array_push($json_response2,$row_array2);
}

fwrite($myfile2, prettyPrint(json_encode($json_response2)));
fclose($myfile2);

$sth = $db->query("SELECT * from Testimonial;");
$json_response3 = array();
while($row = mysqli_fetch_row($sth)) {
	    $row_array3['author'] = $row[1];
        $row_array3['content'] = $row[2];
        $row_array3['nationality'] = $row[3];
        $row_array3['region'] = $row[4];
        $row_array3['credit'] = $row[5];
        $row_array3['imageURL'] = $row[6];
        //push the values in the array
        array_push($json_response3,$row_array3);
}

fwrite($myfile3, prettyPrint(json_encode($json_response3)));
fclose($myfile3);

$sth = $db->query("SELECT * from Download;");
$json_response4 = array();
while($row = mysqli_fetch_row($sth)) {
	    $row_array4['name'] = $row[1];
        $row_array4['count'] = $row[2];
        $row_array4['URL'] = $row[3];
        $row_array4['remark'] = $row[4];
        //$row_array4['LastUpdate'] = $row[5];
        //push the values in the array
        array_push($json_response4,$row_array4);
}

fwrite($myfile4, prettyPrint(json_encode($json_response4)));
fclose($myfile4);

$sth = $db->query("SELECT * from Credit;");
$json_response5 = array();
while($row = mysqli_fetch_row($sth)) {
		$row_array5['name'] = $row[1];
        $row_array5['setter'] = $row[2];
        $row_array5['appearance'] = $row[3];

        //push the values in the array
        array_push($json_response5,$row_array5);
}

fwrite($myfile5, prettyPrint(json_encode($json_response5)));
fclose($myfile5);


?>
