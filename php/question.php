<?php
header('Content-type: application/json');

$question = array(
					"How many answers are there in page 27 Exercise 1.2.2?",
					"What is the tips number in page 78?",
					"What is the first underlined Uva question on page 25?",
					"How many questions/Exercises in page 47 has a '*'?",
					"How many points of 'Tips 6 Optimizing your coding' are there in page 78 and page 79?",
					"What is the first Uva question number mentioned in page 86?",
					"In page 126,what is the content in the bracket() next to the title '4.2.5 Topological Sort'?",
					"What is the content of the largest title on page 133?",
					"what is the algorithm discussed on page 155?",
					"How many questions on page 197 without a '*' and underlines?",
					"On page 216, there are 2 largest titles, what is the content of the second one?",
					"On page 248 there are 2 algorithm inventors, what is the number of citations of paper written by the second inventor in 1990?",
					"How many triangles are there in page 279?",
					"How many circles are there from page 277 to 280?",
					"How many digrams are there on page 291?",
					"When was the photo on page 298 taken?",
					"What is the total number of Exercises on page 311?",
					"What is the figure number on page 315? e.g X.Y",
					"Is there a figure on page 322? Yes/No",
					"What is the word on the deep color ballon held by Steven at page 334?",
					"What is the Chinese Proverb on page 335?",
					"How many vertices are there in the graph on page 350?",
					"What is the content of the biggest title on page 366?",
					"What is the figure number on page 388? e.g X.Y",
					"What is the sum of 3 numbers in the table on page 392?",
					"How many terms are there in the Bibliography on page 398-401?",
					"What is the largest page number of this book?",
					"What is the largest Uva number on page 421?",
					"How many pages are there in the Content part of this book?",
					"How many distinct First Letters (e.g ABC, A is the first letter) are there in the Abbreviation of this book?"
);
$answers = array(
					"9",
					"6",
					"00403",
					"8",
					"12",
					"11935",
					"Direct Acyclic Graph",
					"4.2.9 Finding Strongly Connected Component (Directed Graph)",
					"Floyd Warshall's Algorithm",
					"24",
					"5.5.8 Modulo Arithmetic",
					"24000",
					"4",
					"7",
					"6",
					"2007",
					"21",
					"8.11",
					"No",
					"IBM",
					"Learning is a treasure that will follow its owner everywhere.",
					"8",
					"DP Speed-up with Matrix Power",
					"9.13",
					"153",
					"71",
					"423",
					"11984",
					"5",
					"17"
);

/*
if ($_GET['action'] == 'getRandomQuestion') {
	$randomNumber = rand(0, count($question) - 1);
	$randomQuestion = $question[$randomNumber];
	$reply = array("questionNumber" => $randomNumber,
					"question" => $randomQuestion
					);
	echo json_encode($reply);
}

if ($_GET['action'] == 'checkAnswer') {
	$questionNumber = $_GET['questionNumber'];
	$userAnswer = $_GET['answer'];
	$realAnswer = $answers[$questionNumber];
	//TODO algorithm for checking answer
	$reply = array($realAnswer, $userAnswer);
	echo json_encode($reply);
}*/

?>