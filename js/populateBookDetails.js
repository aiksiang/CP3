function populateBookDetails(edition, selection, callback) {
	if(selection == SELECT_ERR)
		displayErrata(edition);
	else if(selection == SELECT_INFO)
   		showInfo(edition);
	
	callback();
}
