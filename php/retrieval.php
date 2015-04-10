<?php
header('Content-type: application/json');
require_once 'config.php';

$db = new mysqli(db_host, db_uid, db_pwd, db_name);
if ($db->connect_errno) 
	echo("Failed to connect to MySQL: (" . $db->connect_errno . ") " . $db->connect_error);



if ($_GET['action'] == 'getErrata') {
	global $db;
	$query = "SELECT * FROM `Errata`";
	$result = array();
	if ($queryResult = $db->query($query)) {
		while ($entry = $queryResult->fetch_assoc()) {
			array_push($result, $entry);
		}
	}
	echo json_encode($result);
}

if ($_GET['action'] == 'getRandomQuestion') {
	global $db;
	$query = "SELECT `id`,`question`,`answer` FROM `QandA`";
	$result = array();
	if ($queryResult = $db->query($query)) {
		while ($entry = $queryResult->fetch_assoc()) {
			array_push($result, $entry);
		}
	}
	$randomNumber = rand(0, count($result) - 1);
	$randomQuestion = $result[$randomNumber];
	echo json_encode($randomQuestion);
}

if ($_GET['action'] == 'checkAnswer') {
	global $db;
	$userAnswer = $_GET['answer'];
	$query = "SELECT `id`,`answer` FROM `QandA`";
	$result = array();
	if ($queryResult = $db->query($query)) {
		while ($entry = $queryResult->fetch_assoc()) {
			array_push($result, $entry);
		}
	}
	$answer;
	$questionNumber = $_GET['questionNumber'];
	for ($i = 0; $i < count($result); $i++) {
		if ($result[$i]['id'] == $questionNumber) {
			$answer = $result[$i]['answer'];
		}
	}
	echo json_encode((strcmp(strtolower((string)$answer),strtolower((string)$userAnswer)) == 0) ? true : false);
}

if ($_GET['action'] == 'getTestimonials') {
	global $db;
	$query = "SELECT * FROM `testimonial` ORDER BY `region`,`nationality`,`author`";
	$result = array();
	if ($queryResult = $db->query($query)) {
		while ($entry = $queryResult->fetch_assoc()) {
			array_push($result, $entry);
		}
	}
	echo json_encode($result);
}

?>