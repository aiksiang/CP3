<?php
//connect MYSQL
require_once 'config.php'; // your PHP script(s) can access this, but the rest cannot

$db = new mysqli(db_host, db_uid, db_pwd, db_name);
if ($db->connect_errno) // are we connected properly?
	exit("Failed to connect to MySQL: (" . $db->connect_errno . ") " . $db->connect_error);

include_file "question.php";
include_file 'errata_store.php';
//Create Question Table
$sql = "CREATE TABLE QandA (index INT PRIMARY KEY, 
							question VARCHAR(300),
							answer VARCHAR(100))";
if (mysqli_query($db, $sql)) {} 
else {
    die("Error creating table: " . $db->error);
}
//Create Errata Table
$sql = "CREATE TABLE Errata (index INT PRIMARY KEY AUTO_INCREMENT, 
							severity INT,
							type INT DEFAULT 0,
							pageNum INT,
							content VARCHAR(1000),
							isFixed BOOLEAN,
							authorName VARCHAR(50),
							raise_time TIMESTAMP,
							fix_time TIMESTAMP DEFAULT NULL);";

if (mysqli_query($db, $sql)) {} 
else {
    die("Error creating table: " . $db->error);
}
//Create Testimonial Table 
$sql = "CREATE TABLE Testimonial (index INT PRIMARY KEY AUTO_INCREMENT,
								  author VARCHAR(100),
								  content VARCHAR(3000),
								  nationality VARCHAR(100),
								  credit VARCHAR(200),
								  imgURL VARCHAR(500));"
if (mysqli_query($db, $sql)) {} 
else {
    die("Error creating table: " . $db->error);
}
//Create Download Material Table
$sql = "CREATE TABLE Download (index INT PRIMARY KEY AUTO_INCREMENT,
							   name VARCHAR(200),
							   count INT,
							   URL VARCHAR(500));"
if (mysqli_query($db, $sql)) {} 
else {
    die("Error creating table: " . $db->error);
}

for($i = 0;$i<count($question);$i++){
	$sql = "INSERT INTO QandA (index,question,answer) VALUES (".($i+1).",\"".$question[$i]."\",\"".$answers[$i]."\")";

	if ($db->query($sql) === TRUE) {
    
	} else {
    exit( "Error: " . $sql . "<br>" . $db->error);
	}
}
?>
