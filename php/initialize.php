<?php
//connect MYSQL
require_once 'config.php'; // your PHP script(s) can access this, but the rest cannot

$db = new mysqli(db_host, db_uid, db_pwd, db_name);
if ($db->connect_errno) // are we connected properly?
	exit("Failed to connect to MySQL: (" . $db->connect_errno . ") " . $db->connect_error);
include_file "question.php";
include_file 'errata_store.php';
$sql = "CREATE TABLE QandA (index INT PRIMARY KEY, question VARCHAR(300),answer VARCHAR(100))";
if (mysqli_query($db, $sql)) {} 
else {
    die("Error creating table: " . $db->error);
}
$sql = "CREATE TABLE Errata (index INT PRIMARY KEY, severity INT,type INT DEFAULT 0,pageNum INT,content VARCHAR(1000),isFixed BOOLEAN,authorID VARCHAR(50),raise_time TIMESTAMP,fix_time TIMESTAMP,admin_comment VARCHAR(1000))";

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
