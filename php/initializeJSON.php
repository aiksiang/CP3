<?php
require_once 'config.php'; // your PHP script(s) can access this, but the rest cannot

$db = new mysqli(db_host, db_uid, db_pwd, db_name);
if ($db->connect_errno) 
	echo("Failed to connect to MySQL: (" . $db->connect_errno . ") " . $db->connect_error);

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
//$myfile1 = fopen("qanda.json", "w") or die("Unable to open file!");

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
//Create ErrataP table to store the pending Errata Content
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
//$myfile2 = fopen("Errata.json", "w") or die("Unable to open file!");

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
//$myfile3 = fopen("Testimonial.json", "w") or die("Unable to open file!");

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
?>