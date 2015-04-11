<?php
//This is to update the data bases and JSON files
//So all the post request (etc. posting new Errata and testimonial will be done in this file)
require_once 'config.php';

$db = new mysqli(db_host, db_uid, db_pwd, db_name);
if ($db->connect_errno) 
	echo("Failed to connect to MySQL: (" . $db->connect_errno . ") " . $db->connect_error);
$tables = array("QandA","Errata","ErrataP","Testimonial","TestimonialP","Download","Credit");
$jsonFiles = array("qanda.json","Errata.json","ErrataP.json","Testimonial.json","TestimonialP.json","download.json","QuestionCredit.json");
$command = $_POST['command']; //EITHER "new_errata", "new_testimonial" or "add","modify","approve","remove" (these 3 are from the adminstration side)

$email_address = "A0101891@u.nus.edu";

if($command == "new_errata") {
	$author = $_POST['name'];
	$page = $_POST['page'];
	$severity = $_POST['severity'];
	$type = $_POST['type'];
	$content = $_POST['content'];
	$version = $_POST['version'];
	//Insert into the pending list first
	$sql = "INSERT INTO ErrataP(severity,type,pageNum,content,authorName,raise_time,version) VALUES (".$severity.",".$type.",".$page.",\"".$content."\",\"".$name."\",now(),".$version.");";

	if ($db->query($sql) === TRUE) {
    
	} else {
    echo( "Error: " . $sql . "<br>" . $db->error);
	}
	$count = $db->query("SELECT * from ErrataP;");
	$num_rows = mysql_num_rows($count);
	$title = "A New Errata Raised from CP3 website";
	$message = "Author ".$author." describes an Errata : \n\t".$content."\nThere are ".$num_rows." items in the Errata pending list.";
	mail($email_address,$title,$message);
}
else if ($command == "new_testimonial") {
	$author = $_POST['name'];
	$comment = $_POST['comment'];
	$nationality = $_POST['nationality'];
	$region = $_POST['region'];
	$credit = $_POST['Credibility'];
	$sql = "INSERT INTO TestimonialP(author,content,nationality,region,credit,imgURL) VALUES (\"".$author."\",\"".$comment."\",\"".$nationality."\",\"".$region."\",\"".$credit."\",\""."\");";

	if ($db->query($sql) === TRUE) {
    
	} else {
    echo( "Error: " . $sql . "<br>" . $db->error);
	}

	$count = $db->query("SELECT * from TestimonialP;");
	$num_rows = mysql_num_rows($count);

	$title = "A New Recommendation Raised from CP3 website";
	$message = "Author ".$author."from ".$nationality." has provided a Recommendation for CP3 book : \n\t".$content."\nThere are ".$num_rows." items in the Recommendation pending list.";
	mail($email_address,$title,$message);
}
else if ($command == "modify") {
	$table = $_POST['table_name'];
	$id = $_POST['entry_id'];
	$content = $_POST['modify_content']; //Pass in a JSON format entry? like the entries in json files
	$row = json_decode($content,true);
	//need to implement based on the actual table

}
else if ($command == "approve") {
	$table = $_POST['table_name']; //either ErrataP or TestimonialP
	$entry_id = $_POST['id'];
	if($table == "ErrataP") {
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

		if ($db->query($sql) === TRUE) {
    
		} else {
    	echo( "Error: " . $sql . "<br>" . $db->error);
		}
		//Remove from the pending list
		$sql = "DELETE FROM ErrataP WHERE id = ".$entry_id.";";

		if ($db->query($sql) === TRUE) {
    
		} else {
    	echo( "Error: " . $sql . "<br>" . $db->error);
		}
	}
	else if ($table == "TestimonialP") {
		$sql = "INSERT INTO Testimonial(author,content,nationality,region,credit,imgURL) SELECT author,content,nationality,region,credit,imgURL FROM TestimonialP WHERE id =".$entry_id.";";

		if ($db->query($sql) === TRUE) {
    
		} else {
    	echo( "Error: " . $sql . "<br>" . $db->error);
		}
		//remove from the pending list
		$sql = "DELETE FROM TestimonialP WHERE id = ".$entry_id.";";

		if ($db->query($sql) === TRUE) {
    
		} else {
    	echo( "Error: " . $sql . "<br>" . $db->error);
		}
	}

}
else if ($command == "remove") {
	$table_id = $_POST['table_id']; //0-6
	$entry_id = $POST['entry_id'];
	$sql = "DELETE FROM ".$tables[$table_id]." WHERE id = ".$entry_id.";";
}
//adding new content
else if ($command == "add") {
	$table_id = $_POST['table_id'];
	$content = $_POST['modify_content']; //Pass in a JSON format entry? like the entries in json files
	$row = json_decode($content,true);
	switch ($table_id) {
		case 0: //QANDA
		{
			$sql = "INSERT INTO QandA (question,answer) VALUES (\"".$row['question']."\",\"".$row['answer']."\")";

			if ($db->query($sql) === TRUE) {
    
			} else {
    		echo( "Error: " . $sql . "<br>" . $db->error);
			}
			break;
		}
		case 1: //Errata
		{
			$sql = "INSERT INTO Errata(severity,type,pageNum,content,isFixed,authorName,raise_time,version) VALUES (".$row['severity'].",".$row['type'].",".$row['pageNum'].",\"".$row['content']."\",".$row['isFixed'].",\"".$row['authorName']."\", \"".$row['raise_time']."\",".$row['version'].");";

			if ($db->query($sql) === TRUE) {
    
			} else {
    		echo( "Error: " . $sql . "<br>" . $db->error);
			}
			break;
		}
		case 2: //ErrataP may not be necessary
		{
			$sql = "INSERT INTO ErrataP(severity,type,pageNum,content,authorName,raise_time,version) VALUES (".$row['severity'].",".$row['type'].",".$row['pageNum'].",\"".$row['content']."\",\"".$row['authorName']."\", \"".$row['raise_time']."\",".$row['version'].");";

			if ($db->query($sql) === TRUE) {
    
			} else {
    		echo( "Error: " . $sql . "<br>" . $db->error);
			}
			break;
		}
		case 3: //Testimonial
		{
			$sql = "INSERT INTO Testimonial(author,content,nationality,region,credit,imgURL) VALUES (\"".$row['author']."\",\"".$row['content']."\",\"".$row['nationality']."\",\"".$row['region']."\",\"".$row['credit']."\",\"".$row['imgURL']."\");";

			if ($db->query($sql) === TRUE) {
    
			} else {
    			echo( "Error: " . $sql . "<br>" . $db->error);
			}
			break;
		}
		case 4: //Testimonial Pending
		{
			$sql = "INSERT INTO TestimonialP(author,content,nationality,region,credit,imgURL) VALUES (\"".$row['author']."\",\"".$row['content']."\",\"".$row['nationality']."\",\"".$row['region']."\",\"".$row['credit']."\",\"".$row['imgURL']."\");";

			if ($db->query($sql) === TRUE) {
    
			} else {
    			echo( "Error: " . $sql . "<br>" . $db->error);
			}
			break;
		}
		case 5: //Download
		{
			$sql = "INSERT INTO Download(name,count,URL,remark,LastUpdate) VALUES (\"".$row['name']."\",".intval($row['count']).",\"".$row['URL']."\",\"".$row['remark']."\",now());";
			if ($db->query($sql) === TRUE) {
    		} else {
    			echo( "Error: " . $sql . "<br>" . $db->error);
			}
			break;
		}
		case 6: //Problem Credit
		{
			$sql = "INSERT INTO Credit(name,setter,appearance) VALUES (\"".$row['name']."\",\"".$row['setter']."\",\"".$row['appearance']."\");";

			if ($db->query($sql) === TRUE) {
    
			} else {
    			echo( "Error: " . $sql . "<br>" . $db->error);
			}
			break;
		}
	}
}
?>