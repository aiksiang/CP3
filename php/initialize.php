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
//Create Question Table

$sql = "CREATE TABLE QandA (id INT PRIMARY KEY, 
							question VARCHAR(300),
							answer VARCHAR(100))";
if (mysqli_query($db, $sql)) {} 
else {
    echo("Error creating table: " . $db->error);
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
    echo("Error creating table: " . $db->error);
}
$myfile2 = fopen("Errata.json", "w") or die("Unable to open file!");
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
	echo("done");
} 
else {
    echo("Error creating table: " . $db->error);
}
$myfile3 = fopen("Testimonial.json", "w") or die("Unable to open file!");
//Create Download Material Table
$sql = "CREATE TABLE Download (id INT PRIMARY KEY AUTO_INCREMENT,
							   name VARCHAR(200),
							   count INT,
							   URL VARCHAR(500),
							   Remark VARCHAR(500),
							   LastUpdate TIMESTAMP);";
$myfile4 = fopen("download.json", "w") or die("Unable to open file!");
if (mysqli_query($db, $sql)) {} 
else {
    echo("Error creating table: " . $db->error);
}
//Create Question Credit Table
$sql = "CREATE TABLE Credit (id INT PRIMARY KEY AUTO_INCREMENT,
							 name VARCHAR(150),
							 setter VARCHAR(100),
							 appearance VARCHAR(20));";
$myfile5 = fopen("QuestionCredit.json", "w") or die("Unable to open file!");
if (mysqli_query($db, $sql)) {} 
else {
    echo("Error creating table: " . $db->error);
}

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

fwrite($myfile1,"{\"QandAs\":[");
$sth = $db->query("SELECT * from QandA;");

while($row = mysqli_fetch_row($sth)) {
   	fwrite($myfile1, "\n {\"id\":\"".$row[0]."\",");
    fwrite($myfile1, "\n \"question\":\"".$row[1]."\",");
    fwrite($myfile1, "\n \"answer\":\"".$row[2]."\"},");
}
fwrite($myfile1, "]}");

fclose($myfile1);

$sth = $db->query("SELECT * from Errata;");
fwrite($myfile2,"{\"Erratas\":[");
while($row = mysqli_fetch_row($sth)) {
    fwrite($myfile2, "\n {\"id\":\"".$row[0]."\",");
    fwrite($myfile2, "\n \"severity\":\"".$row[1]."\",");
    fwrite($myfile2, "\n \"type\":\"".$row[2]."\",");
    fwrite($myfile2, "\n \"pageNum\":\"".$row[3]."\",");
    fwrite($myfile2, "\n \"content\":\"".$row[4]."\",");
    fwrite($myfile2, "\n \"isFixed\":\"".$row[5]."\",");
    fwrite($myfile2, "\n \"authorName\":\"".$row[6]."\",");
    fwrite($myfile2, "\n \"raise_time\":\"".$row[7]."\",");
    fwrite($myfile2, "\n \"version\":\"".$row[8]."\"},");
}

fwrite($myfile2, "]}");
fclose($myfile2);

$sth = $db->query("SELECT * from Testimonial;");
fwrite($myfile3,"{\"Testimonials\":[");
while($row = mysqli_fetch_row($sth)) {
    fwrite($myfile3, "\n {\"id\":\"".$row[0]."\",");
    fwrite($myfile3, "\n \"author\":\"".$row[1]."\",");
    fwrite($myfile3, "\n \"content\":\"".$row[2]."\",");
    fwrite($myfile3, "\n \"nationality\":\"".$row[3]."\",");
    fwrite($myfile3, "\n \"region\":\"".$row[4]."\",");
    fwrite($myfile3, "\n \"credit\":\"".$row[5]."\",");
    fwrite($myfile3, "\n \"imgURL\":\"".$row[6]."\"},");
}

fwrite($myfile3, "]}");
fclose($myfile3);

$sth = $db->query("SELECT * from Download;");
fwrite($myfile4,"{\"Downloads\":[");
while($row = mysqli_fetch_row($sth)) {
    fwrite($myfile4, "\n {\"id\":\"".$row[0]."\",");
    fwrite($myfile4, "\n \"name\":\"".$row[1]."\",");
    fwrite($myfile4, "\n \"count\":\"".$row[2]."\",");
    fwrite($myfile4, "\n \"URL\":\"".$row[3]."\",");
    fwrite($myfile4, "\n \"Remark\":\"".$row[4]."\",");
    fwrite($myfile4, "\n \"LastUpdate\":\"".$row[5]."\"},");
}

fwrite($myfile4, "]}");
fclose($myfile4);

$sth = $db->query("SELECT * from Credit;");
fwrite($myfile5,"{\"Credits\":[");
while($row = mysqli_fetch_row($sth)) {
    fwrite($myfile5, "\n {\"id\":\"".$row[0]."\",");
    fwrite($myfile5, "\n \"Problem name\":\"".$row[1]."\",");
    fwrite($myfile5, "\n \"Setter name\":\"".$row[2]."\",");
    fwrite($myfile5, "\n \"Location\":\"".$row[3]."\"},");
}

fwrite($myfile5, "]}");
fclose($myfile5);
?>
