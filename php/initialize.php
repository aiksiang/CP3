<?php
//connect MYSQL
require_once '../config.php'; // your PHP script(s) can access this, but the rest cannot

$db = new mysqli(db_host, db_uid, db_pwd, db_name);
if ($db->connect_errno) 
	echo("Failed to connect to MySQL: (" . $db->connect_errno . ") " . $db->connect_error);

require_once 'question.php';
require_once 'errata_store.php';
//Create Question Table

$sql = "CREATE TABLE QandA (id INT PRIMARY KEY, 
							question VARCHAR(300),
							answer VARCHAR(100))";
if (mysqli_query($db, $sql)) {} 
else {
    echo("Error creating table: " . $db->error);
}
//Create Errata Table
$sql = "CREATE TABLE Errata (id INT PRIMARY KEY AUTO_INCREMENT, 
							severity INT,
							type INT DEFAULT 0,
							pageNum INT,
							content VARCHAR(1000),
							isFixed BOOLEAN,
							authorName VARCHAR(50),
							raise_time TIMESTAMP,
							fix_time TIMESTAMP);";

if (mysqli_query($db, $sql)) {} 
else {
    echo("Error creating table: " . $db->error);
}

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

//Create Download Material Table
$sql = "CREATE TABLE Download (id INT PRIMARY KEY AUTO_INCREMENT,
							   name VARCHAR(200),
							   count INT,
							   URL VARCHAR(500));";
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
for($i = 0;$i<count($errata_content);$i++){
	$sql = "INSERT INTO Errata(severity,type,pageNum,content,isFixed,raise_time) VALUES (1,".$errata_type[$i].",".$errata_page[$i].",\"".$errata_content[$i]."\",".$errata_status[$i].", now());";
	if ($db->query($sql) === TRUE) {
    
	} else {
    echo( "Error: " . $sql . "<br>" . $db->error);
	}
}
?>
