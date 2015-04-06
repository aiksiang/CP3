<?php
//connect MYSQL
require_once '../config.php'; // your PHP script(s) can access this, but the rest cannot

$db = new mysqli(db_host, db_uid, db_pwd, db_name);
if ($db->connect_errno) 
	echo("Failed to connect to MySQL: (" . $db->connect_errno . ") " . $db->connect_error);

require_once 'question.php';
require_once 'errata_store.php';
require_once 'download.php';
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
		$v_index =$v_index+1;
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

for($i = 0;$i<count($datalinks);$i++){
	$sql = "INSERT INTO Download(name,count,URL,remark,LastUpdate) VALUES (\"".$datalinks[$i]."\",0,\"".$datapath.$datalinks[$i]."\",\"".$data_remarks[$i]."\",now());";
	if ($db->query($sql) === TRUE) {
    
		} else {
    	echo( "YError: " . $sql . "<br>" . $db->error);
		}
}
$sth = $db->query("SELECT * from QandA;");

while($row = mysqli_fetch_row($sth)) {
    fwrite($myfile1,json_encode($row)."\n");
}


fclose($myfile1);

$sth = $db->query("SELECT * from Errata;");

while($row = mysqli_fetch_row($sth)) {
    fwrite($myfile2,json_encode($row)."\n");
}


fclose($myfile2);

$sth = $db->query("SELECT * from Download;");

while($row = mysqli_fetch_row($sth)) {
    fwrite($myfile4,json_encode($row)."\n");
}


fclose($myfile4);
?>
