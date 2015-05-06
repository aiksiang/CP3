<?php

//In order to run this php code and transfer the data from json files to MySQL databases, all the 7 json files must be presented under the same directory.
//Setup Situations
//1. have content in mySQL databases but no json files. => Run update.php to generate the json files.
//2. have json files but empty mySQL databases. => Run this to transfer data into mySQL databases
//3. No content in mySQL databases and no json files. => Run initializes.php (only with the basic old data) to generate the json files then run this.  

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
//Insert QandA
$jsonurl = "qanda.json";
$json = file_get_contents($jsonurl,0,null,null);

$json_output = json_decode($json,true);

for($i = 0; $i<count($json_output);$i++) {
	$sql = "INSERT INTO QandA (id,question,answer) VALUES (".($i+1).",\"".$json_output[$i]['question']."\",\"".$json_output[$i]['answer']."\")";

	if ($db->query($sql) === TRUE) {
    
	} else {
    echo( "Error: " . $sql . "<br>" . $db->error);
	}
}

//Insert Errata;
$jsonurl = "Errata.json";
$json = file_get_contents($jsonurl,0,null,null);

$json_output = json_decode($json,true);

for($i = 0; $i<count($json_output);$i++) {
	$sql = "INSERT INTO Errata(severity,type,pageNum,content,isFixed,authorName,raise_time,version) VALUES (".$json_output[$i]['severity'].",".$json_output[$i]['type'].",".$json_output[$i]['pageNum'].",\"".$json_output[$i]['content']."\",".$json_output[$i]['isFixed'].",\"".$json_output[$i]['authorName']."\", \"".$json_output[$i]['raise_time']."\",".$json_output[$i]['version'].");";

	if ($db->query($sql) === TRUE) {
    
	} else {
    echo( "Error: " . $sql . "<br>" . $db->error);
	}
}
//Insert ErrataPendingList;

$jsonurl = "ErrataP.json";
try {
$json = file_get_contents($jsonurl,0,null,null);
} catch (Exception $e) {
	$myfile = fopen($jsonurl, "w") or die("Unable to open file!");
	fclose($myfile);
	$json = file_get_contents($jsonurl,0,null,null);
}
$json_output = json_decode($json,true);

for($i = 0; $i<count($json_output);$i++) {
	$sql = "INSERT INTO ErrataP(severity,type,pageNum,content,authorName,raise_time,version) VALUES (".$json_output[$i]['severity'].",".$json_output[$i]['type'].",".$json_output[$i]['pageNum'].",\"".$json_output[$i]['content']."\",\"".$json_output[$i]['authorName']."\", \"".$json_output[$i]['raise_time']."\",".$json_output[$i]['version'].");";

	if ($db->query($sql) === TRUE) {
    
	} else {
    echo( "Error: " . $sql . "<br>" . $db->error);
	}
}
//Insert Testimonial
$jsonurl = "Testimonial.json";
$json = file_get_contents($jsonurl,0,null,null);

$json_output = json_decode($json,true);

for($i = 0; $i<count($json_output);$i++) {
	$sql = "INSERT INTO Testimonial(author,content,nationality,region,credit,imgURL) VALUES (\"".$json_output[$i]['author']."\",\"".$json_output[$i]['content']."\",\"".$json_output[$i]['nationality']."\",\"".$json_output[$i]['region']."\",\"".$json_output[$i]['credit']."\",\"".$json_output[$i]['imageURL']."\");";

	if ($db->query($sql) === TRUE) {
    
	} else {
    echo( "Error: " . $sql . "<br>" . $db->error);
	}
}
//Insert Testimonial Pending List
$jsonurl = "TestimonialP.json";
try {
$json = file_get_contents($jsonurl,0,null,null);
} catch (Exception $e) {
	$myfile = fopen($jsonurl, "w") or die("Unable to open file!");
	fclose($myfile);
	$json = file_get_contents($jsonurl,0,null,null);
}
$json_output = json_decode($json,true);

for($i = 0; $i<count($json_output);$i++) {
	$sql = "INSERT INTO TestimonialP(author,content,nationality,region,credit,imgURL) VALUES (\"".$json_output[$i]['author']."\",\"".$json_output[$i]['content']."\",\"".$json_output[$i]['nationality']."\",\"".$json_output[$i]['region']."\",\"".$json_output[$i]['credit']."\",\"".$json_output[$i]['imgURL']."\");";

	if ($db->query($sql) === TRUE) {
    
	} else {
    echo( "Error: " . $sql . "<br>" . $db->error);
	}
}
//Insert Downloads
$jsonurl = "download.json";
$json = file_get_contents($jsonurl,0,null,null);

$json_output = json_decode($json,true);

for($i = 0; $i<count($json_output);$i++) {
	$sql = "INSERT INTO Download(name,count,URL,remark,LastUpdate) VALUES (\"".$json_output[$i]['name']."\",".intval($json_output[$i]['count']).",\"".$json_output[$i]['URL']."\",\"".$json_output[$i]['remark']."\",now());";

	if ($db->query($sql) === TRUE) {
    
	} else {
    echo( "Error: " . $sql . "<br>" . $db->error);
	}
}

//Insert Problem Credits
$jsonurl = "QuestionCredit.json";
$json = file_get_contents($jsonurl,0,null,null);

$json_output = json_decode($json,true);

for($i = 0; $i<count($json_output);$i++) {
	$sql = "INSERT INTO Credit(name,setter,appearance) VALUES (\"".$json_output[$i]['name']."\",\"".$json_output[$i]['setter']."\",\"".$json_output[$i]['appearance']."\");";

	if ($db->query($sql) === TRUE) {
    
	} else {
    echo( "Error: " . $sql . "<br>" . $db->error);
	}
}
?>