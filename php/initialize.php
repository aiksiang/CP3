<?php
//connect MYSQL
require_once 'config.php'; // your PHP script(s) can access this, but the rest cannot
$db = new mysqli(db_host, db_uid, db_pwd, db_name);
if ($db->connect_errno) // are we connected properly?
	exit("Failed to connect to MySQL: (" . $db->connect_errno . ") " . $db->connect_error);
include_file "question.php";
$sql = "CREATE TABLE QandA (index INT PRIMARY KEY, question VARCHAR(300),answer VARCHAR(100))";
if (mysqli_query($db, $sql)) {} 
else {
    die("Error creating table: " . $db->error);
}
for($i = 0;$i<count($question);$i++){
	$sql = "INSERT INTO QandA (index,question,answer) VALUES (".($i+1).",\"".$question[$i]."\",\"".$answers[$i]."\")";
	if ($db->query($sql) === TRUE) {
    
	} else {
    //exit( "Error: " . $sql . "<br>" . $db->error);
	}
}
?>
