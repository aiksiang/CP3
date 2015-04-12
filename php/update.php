<?php
//This is to update the data bases and JSON files
//So all the post request (etc. posting new Errata and testimonial will be done in this file)
require_once 'config.php';

$db = new mysqli(db_host, db_uid, db_pwd, db_name);
if ($db->connect_errno) 
	echo("Failed to connect to MySQL: (" . $db->connect_errno . ") " . $db->connect_error);

$tables = array("QandA","Errata","ErrataP","Testimonial","TestimonialP","Download","Credit");

$jsonFiles = array( "qanda.json",
				    "Errata.json",
				    "ErrataP.json",
				    "Testimonial.json",
				    "TestimonialP.json",
				    "download.json",
				    "QuestionCredit.json");

//Testing email functionality, Failed at CP3101B VM but received a successful feedback (e.g mail()==true)
$email_address = "A0101891@u.nus.edu";


function normalRunSQL($sql) {
if ($db->query($sql) === TRUE) {
	echo "Record updated successfully";
} else {
echo "Error updating record: " . $db->error;
}
}

function errataInsertion(){
	$author = $_POST['name'];
	$page = $_POST['page'];
	$severity = $_POST['severity'];
	$type = $_POST['type'];
	$content = $_POST['content'];
	$version = $_POST['version'];
	//Insert into the pending list first
	$sql = "INSERT INTO ErrataP(severity,type,pageNum,content,authorName,raise_time,version) VALUES (".$severity.",".$type.",".$page.",\"".$content."\",\"".$name."\",now(),".$version.");";
	normalRunSQL($sql);
	$count = $db->query("SELECT * from ErrataP;");
	$num_rows = mysql_num_rows($count);
	$title = "A New Errata Raised from CP3 website";
	$message = "Author ".$author." describes an Errata : \n\t".$content."\nThere are ".$num_rows." items in the Errata pending list.";
	mail($email_address,$title,$message);
}

function testimonialInsertion(){
	$author = $_POST['name'];
	$comment = $_POST['comment'];
	$nationality = $_POST['nationality'];
	$region = $_POST['region'];
	$credit = $_POST['Credibility'];
	$sql = "INSERT INTO TestimonialP(author,content,nationality,region,credit,imgURL) VALUES (\"".$author."\",\"".$comment."\",\"".$nationality."\",\"".$region."\",\"".$credit."\",\""."\");";
	normalRunSQL($sql);
	$count = $db->query("SELECT * from TestimonialP;");
	$num_rows = mysql_num_rows($count);

	$title = "A New Recommendation Raised from CP3 website";
	$message = "Author ".$author."from ".$nationality." has provided a Recommendation for CP3 book : \n\t".$content."\nThere are ".$num_rows." items in the Recommendation pending list.";
	mail($email_address,$title,$message);
}

function newDownloadRequest($id) {
	$sql = "UPDATE Download SET count = count+1 WHERE id = ".$id.";";
	normalRunSQL($sql);
}

function approveErrata($entry_id) {
	$status = $_POST['status']; //either 0(not fixed) or 1 (fixed)
		$sth = $db->query("SELECT * from ErrataP WHERE id =".$entry_id.";");
		while($row = mysqli_fetch_row($sth)) {
        //$row_array['id'] = $row[0];
        $row_array['severity'] = $row[1];
        $row_array['type'] = $row[2];
        $row_array['pageNum'] = $row[3];
        $row_array['content'] = $row[4];
        $row_array['authorName'] = $row[5];
        $row_array['raise_time'] = $row[6];
        $row_array['version'] = $row[7];

    	}
    	$sql = "INSERT INTO Errata(severity,type,pageNum,content,isFixed,authorName,raise_time,version) VALUES (".$row_array['severity'].",".$row_array['type'].",".$row_array['pageNum'].",\"".$row_array['content']."\",".$status.",\"".$row_array['authorName']."\", \"".$row_array['raise_time']."\",".$row_array['version'].");";
    	normalRunSQL($sql);
		//Remove from the pending list
		$sql = "DELETE FROM ErrataP WHERE id = ".$entry_id.";";
		normalRunSQL($sql);
}

function approveTestimonial($entry_id){
	$sql = "INSERT INTO Testimonial(author,content,nationality,region,credit,imgURL) SELECT author,content,nationality,region,credit,imgURL FROM TestimonialP WHERE id =".$entry_id.";";
	normalRunSQL($sql);
	//remove from the pending list
	$sql = "DELETE FROM TestimonialP WHERE id = ".$entry_id.";";
	normalRunSQL($sql);
}

function removeEntry($table_id,$entry_id){
	$sql = "DELETE FROM ".$tables[$table_id]." WHERE id = ".$entry_id.";";
	normalRunSQL($sql);
}

function addQandA($row){
	$sql = "INSERT INTO QandA (question,answer) VALUES (\"".$row['question']."\",\"".$row['answer']."\")";
	normalRunSQL($sql);
}

function addErrata($row){
	$sql = "INSERT INTO Errata(severity,type,pageNum,content,isFixed,authorName,raise_time,version) VALUES (".$row['severity'].",".$row['type'].",".$row['pageNum'].",\"".$row['content']."\",".$row['isFixed'].",\"".$row['authorName']."\", \"".$row['raise_time']."\",".$row['version'].");";
	normalRunSQL($sql);
}

function addErrataP($row){
	$sql = "INSERT INTO ErrataP(severity,type,pageNum,content,authorName,raise_time,version) VALUES (".$row['severity'].",".$row['type'].",".$row['pageNum'].",\"".$row['content']."\",\"".$row['authorName']."\", \"".$row['raise_time']."\",".$row['version'].");";
	normalRunSQL($sql);
}

function addTestimonial($row) {
	$sql = "INSERT INTO Testimonial(author,content,nationality,region,credit,imgURL) VALUES (\"".$row['author']."\",\"".$row['content']."\",\"".$row['nationality']."\",\"".$row['region']."\",\"".$row['credit']."\",\"".$row['imgURL']."\");";
	normalRunSQL($sql);
}

function addTestimonialP($row) {
	$sql = "INSERT INTO TestimonialP(author,content,nationality,region,credit,imgURL) VALUES (\"".$row['author']."\",\"".$row['content']."\",\"".$row['nationality']."\",\"".$row['region']."\",\"".$row['credit']."\",\"".$row['imgURL']."\");";
	normalRunSQL($sql);
}

function addDownload($row) {
	$sql = "INSERT INTO Download(name,count,URL,remark,LastUpdate) VALUES (\"".$row['name']."\",".intval($row['count']).",\"".$row['URL']."\",\"".$row['remark']."\",now());";
	normalRunSQL($sql);
}

function addCredit($row) {
	$sql = "INSERT INTO Credit(name,setter,appearance) VALUES (\"".$row['name']."\",\"".$row['setter']."\",\"".$row['appearance']."\");";
	normalRunSQL($sql);
}

function modifyQandA($row,$id){
	$question = $row['question'];
	$ans = $row['answer'];
	$sql = "UPDATE QandA SET question=\"".$question."\", answer=\"".$ans."\" WHERE id=".$id.";";
	normalRunSQL($sql);
}

function modifyErrata($row,$id){
	$author = $row['name'];
	$page = $row['page'];
	$severity = $row['severity'];
	$type = $row['type'];
	$content = $row['content'];
	$version = $row['version'];
	$status = $row['status'];
	$time = $row['raise_time'];
	$sql = "UPDATE Errata SET severity = ".$severity.",type = ".$type.",pageNum =".$page.",content = \"".$content."\",isFixed =".$status.",authorName = \"". $author."\",raise_time = \"".$time."\",versioin =".$version." WHERE id = ".$id.";";
	normalRunSQL($sql);
}

function modifyErrataP($row,$id) {
	$author = $row['name'];
	$page = $row['page'];
	$severity = $row['severity'];
	$type = $row['type'];
	$content = $row['content'];
	$version = $row['version'];
	$time = $row['raise_time'];
	$sql = "UPDATE ErrataP SET severity = ".$severity.",type = ".$type.",pageNum =".$page.",content = \"".$content."\",authorName = \"". $author."\",raise_time = \"".$time."\",versioin =".$version." WHERE id = ".$id.";";
	normalRunSQL($sql);
}

function modifyTestimonial($row,$id,$table_id) {
	$sql = "UPDATE ".$tables[$table_id]." SET author = \"".$row['author']."\",content = \"".$row['content']."\",nationality = \"".$row['nationality']."\", region = \"".$row['region']."\",credit = \"".$row['credit']."\",imgURL = \"".$row['imgURL']."\" WHERE id = ".$id.";";
	normalRunSQL($sql);
}

function modifyDownload($row,$id) {
	$sql = "UPDATE Download SET name = \"".$row['name']."\",count = ".$row['count'].", URL = \"".$row['URL']."\",remark = \"".$row['remark']."\" WHERE id = ".$id.";";
	normalRunSQL($sql);
}

function modifyCredit($row,$id) {
	$sql = "UPDATE Credit SET name = \"".$row['name']."\",setter = \"".$row['setter']."\",appearance = \"".$row['appearance']."\" WHERE id = ".$id.";";
	normalRunSQL($sql);
}

function prettyPrint( $json )
{
    $result = '';
    $level = 0;
    $in_quotes = false;
    $in_escape = false;
    $ends_line_level = NULL;
    $json_length = strlen( $json );

    for( $i = 0; $i < $json_length; $i++ ) {
        $char = $json[$i];
        $new_line_level = NULL;
        $post = "";
        if( $ends_line_level !== NULL ) {
            $new_line_level = $ends_line_level;
            $ends_line_level = NULL;
        }
        if ( $in_escape ) {
            $in_escape = false;
        } else if( $char === '"' ) {
            $in_quotes = !$in_quotes;
        } else if( ! $in_quotes ) {
            switch( $char ) {
                case '}': case ']':
                    $level--;
                    $ends_line_level = NULL;
                    $new_line_level = $level;
                    break;

                case '{': case '[':
                    $level++;
                case ',':
                    $ends_line_level = $level;
                    break;

                case ':':
                    $post = " ";
                    break;

                case " ": case "\t": case "\n": case "\r":
                    $char = "";
                    $ends_line_level = $new_line_level;
                    $new_line_level = NULL;
                    break;
            }
        } else if ( $char === '\\' ) {
            $in_escape = true;
        }
        if( $new_line_level !== NULL ) {
            $result .= "\n".str_repeat( "\t", $new_line_level );
        }
        $result .= $char.$post;
    }

    return $result;
}

function updateJson($jsonFiles,$db){
	for($i = 0; $i<count($jsonFiles);$i++){
		unlink($jsonFiles[$i]);
	}

	$myfile1 = fopen("qanda.json", "w") or die("Unable to open file!");
	$sth = $db->query("SELECT * from QandA;");
	$json_response1 = array();
	while ($row = mysqli_fetch_row($sth)) {
	        //$row_array['id'] = $row[0];
	        $row_array1['question'] = $row[1];
	        $row_array1['answer'] = $row[2];
	        //push the values in the array
	        array_push($json_response1,$row_array1);
	    }
	fwrite($myfile1, prettyPrint(json_encode($json_response1)));
	fclose($myfile1);

	$myfile2 = fopen("Errata.json", "w") or die("Unable to open file!");
	$sth = $db->query("SELECT * from Errata;");
	$json_response2 = array();

	while($row = mysqli_fetch_row($sth)) {
	        //$row_array['id'] = $row[0];
	        $row_array2['severity'] = $row[1];
	        $row_array2['type'] = $row[2];
	        $row_array2['pageNum'] = $row[3];
	        $row_array2['content'] = $row[4];
	        $row_array2['isFixed'] = $row[5];
	        $row_array2['authorName'] = $row[6];
	        $row_array2['raise_time'] = $row[7];
	        $row_array2['version'] = $row[8];
	        //push the values in the array
	        array_push($json_response2,$row_array2);
	}

	fwrite($myfile2, prettyPrint(json_encode($json_response2)));
	fclose($myfile2);

	$myfile3 = fopen("ErrataP.json", "w") or die("Unable to open file!");
	$sth = $db->query("SELECT * from ErrataP;");
	$json_response3 = array();

	while($row = mysqli_fetch_row($sth)) {
	        //$row_array['id'] = $row[0];
	        $row_array3['severity'] = $row[1];
	        $row_array3['type'] = $row[2];
	        $row_array3['pageNum'] = $row[3];
	        $row_array3['content'] = $row[4];
	        $row_array3['authorName'] = $row[5];
	        $row_array3['raise_time'] = $row[6];
	        $row_array3['version'] = $row[7];
	        //push the values in the array
	        array_push($json_response3,$row_array3);
	}

	fwrite($myfile3, prettyPrint(json_encode($json_response3)));
	fclose($myfile3);

	$myfile4 = fopen("Testimonial.json", "w") or die("Unable to open file!");
	$sth = $db->query("SELECT * from Testimonial;");
	$json_response4 = array();
	while($row = mysqli_fetch_row($sth)) {
		    $row_array4['author'] = $row[1];
	        $row_array4['content'] = $row[2];
	        $row_array4['nationality'] = $row[3];
	        $row_array4['region'] = $row[4];
	        $row_array4['credit'] = $row[5];
	        $row_array4['imageURL'] = $row[6];
	        //push the values in the array
	        array_push($json_response4,$row_array4);
	}

	fwrite($myfile4, prettyPrint(json_encode($json_response4)));
	fclose($myfile4);

	$myfile5 = fopen("TestimonialP.json", "w") or die("Unable to open file!");
	$sth = $db->query("SELECT * from TestimonialP;");
	$json_response5 = array();
	while($row = mysqli_fetch_row($sth)) {
		    $row_array5['author'] = $row[1];
	        $row_array5['content'] = $row[2];
	        $row_array5['nationality'] = $row[3];
	        $row_array5['region'] = $row[4];
	        $row_array5['credit'] = $row[5];
	        $row_array5['imageURL'] = $row[6];
	        //push the values in the array
	        array_push($json_response5,$row_array5);
	}

	fwrite($myfile5, prettyPrint(json_encode($json_response5)));
	fclose($myfile5);

	$myfile6 = fopen("download.json", "w") or die("Unable to open file!");
	$sth = $db->query("SELECT * from Download;");
	$json_response6 = array();
	while($row = mysqli_fetch_row($sth)) {
		    $row_array6['name'] = $row[1];
	        $row_array6['count'] = $row[2];
	        $row_array6['URL'] = $row[3];
	        $row_array6['remark'] = $row[4];
	        //$row_array4['LastUpdate'] = $row[5];
	        //push the values in the array
	        array_push($json_response6,$row_array6);
	}

	fwrite($myfile6, prettyPrint(json_encode($json_response6)));
	fclose($myfile6);

	$myfile7 = fopen("QuestionCredit.json", "w") or die("Unable to open file!");
	$sth = $db->query("SELECT * from Credit;");
	$json_response7 = array();
	while($row = mysqli_fetch_row($sth)) {
			$row_array7['name'] = $row[1];
	        $row_array7['setter'] = $row[2];
	        $row_array7['appearance'] = $row[3];

	        //push the values in the array
	        array_push($json_response5,$row_array7);
	}

	fwrite($myfile7, prettyPrint(json_encode($json_response7)));
	fclose($myfile7);
}


session_start();

$command = $_POST['command']; 
//EITHER "new_errata", "new_testimonial" or "add","modify","approve","remove" (these 4 are from the adminstration side)



if($command == "new_errata") {
	errataInsertion();
}
else if ($command == "new_testimonial") {
	testimonialInsertion();
}
else if ($command == "new_download") {
	$id = $_POST['entry_id'];
	newDownloadRequest($id);
}
else if ($command == "modify") {
	$table = $_POST['table_name'];
	$id = $_POST['entry_id'];
	$content = $_POST['modify_content']; //Pass in a JSON format entry? like the entries in json files
	$row = json_decode($content,true);
	//need to implement based on the actual table
	switch($table) {
		case 0: //QandA
		{
			modifyQandA($row,$id);
			break;
		}
		case 1: //Errata
		{
			modifyErrata($row,$id);
			break;
		}
		case 2: //ErrataP
		{
			modifyErrataP($row,$id);
			break;
		}
		case 3: //Testimonial
		{
			modifyTestimonial($row,$id,$table);
			break;
		}
		case 4: //TestimonialP
		{
			modifyTestimonial($row,$id,$table);
			break;
		}
		case 5: //Download
		{
			modifyDownload($row,$id);
			break;
		}
		case 6: //Credit
		{
			modifyCredit($row,$id);
			break;
		}
	}
}
else if ($command == "approve") {
	$table = $_POST['table_name']; //either ErrataP or TestimonialP
	$entry_id = $_POST['id'];
	if($table == "ErrataP") {
		approveErrata($entry_id);
	}
	else if ($table == "TestimonialP") {
		approveTestimonial($entry_id);
	}

}
else if ($command == "remove") {
	$table_id = $_POST['table_id']; //0-6
	$entry_id = $POST['entry_id'];
	removeEntry($table_id,$entry_id);
}
//adding new content
else if ($command == "add") {
	$table_id = $_POST['table_id'];
	$content = $_POST['modify_content']; //Pass in a JSON format entry? like the entries in json files
	$row = json_decode($content,true);
	switch ($table_id) {
		case 0: //QANDA
		{
			addQandA($row);
			break;
		}
		case 1: //Errata
		{
			addErrata($row);
			break;
		}
		case 2: //ErrataP may not be necessary
		{
			addErrataP($row);
			break;
		}
		case 3: //Testimonial
		{
			addTestimonial($row);
			break;
		}
		case 4: //Testimonial Pending
		{
			addTestimonialP($row);
			break;
		}
		case 5: //Download
		{
			addDownload($row);
			break;
		}
		case 6: //Problem Credit
		{
			addCredit($row);
			break;
		}
	}
}


//Update Json files after all the changes

updateJson($jsonFiles,$db);

?>