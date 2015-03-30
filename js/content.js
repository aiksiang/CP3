function showContent() {
	$(".content").html("");
	var HTMLtoBeInserted = "";
	HTMLtoBeInserted += '\
		<div class="row">\
		    <div class="col-md-6">\
		    	<div class="classWithPad well">\
		    		<h4>Chapter 1: Introduction</h4>\
		    		<ul>\
			    		<li>Introducing the world of Competitive Programming. </li>\
			    		<li>Tips to be a competitive programmer, shared by us who were IOI & ICPC contestants in the past and now are coaches</li>\
						<li>Collection of (easy-medium) Ad Hoc problems to start your journey</li>\
					</ul>\
				</div>\
		   	</div>\
		   	<div class="col-md-6">\
		    	<div class="row"><div class="classWithPad"></div></div>\
		    </div>\
		</div>\
		\
		<div class="row">\
			<div class="col-md-6">\
		    	<div class="row"><div class="classWithPad"><img src="img/visualgo-logo.png" alt="visualgo" class="img-responsive"></div></div>\
		    </div>\
			<div class="col-md-6">\
				<div class="classWithPad well">\
					<h4>Chapter 2: Data Structure and Algorithms</h4>\
					<ul>\
						<li>Are you aware that many DS have built-in libraries?</li>\
						<li>Do you use them often?</li>\
						<li>Are you aware that there are many other useful DS out there without built-in libraries as of 2010?</li>\
					</ul>\
				</div>\
			</div>\
		</div>\
		\
		<div class="row">\
		    <div class="col-md-6">\
		    	<div class="classWithPad well">\
		    		<h4>Chapter 3: Problem Solving Paradigms</h4>\
		    		<ul>\
			    		<li>Do you hammer every contest problem with brute force?</li>\
			    		<li>Are you sure that you are familiar with these terms:</li>\
						<ol>\
							<li>Complete Search that is not that brute... Master the art of search space reduction...</li>\
							<li>Divide and Conquer (D&C)... Master the art of using binary search principle...</li>\
							<li>Greedy... Increase your aptitude towards problems solvable with greedy technique...</li>\
							<li>Dynamic Programming (DP)... Master one of the most useful technique in the world of Competitive Programming...</lI>\
						</ol>\
					</ul>\
				</div>\
		   	</div>\
		   	<div class="col-md-3">\
		    	<div class="row"><div class="classWithPad"><br><br><img src="img/bst.gif" alt="bst" class="img-responsive"></div></div>\
		    </div>\
		   	<div class="col-md-3">\
		   	 	<div class="row"><div class="classWithPad"><br><br><img src="img/graphs.gif" alt="graph" class="img-responsive"></div></div>\
		    </div>\
		</div>\
		\
		<div class="row">\
			<div class="col-md-3">\
				<div class="row"><div class="classWithPad"><img src="img/maxflow.gif" alt="maxflow" class="img-responsive"></div></div>\
			</div>\
			<div class="col-md-3">\
				<div class="row"><div class="classWithPad"><img src="img/mst.gif" alt="mst" class="img-responsive"></div></div>\
			</div>\
			<div class="col-md-6">\
				<div class="classWithPad well">\
					<h4>Chapter 4: Graph</h4>\
					<ul>\
						<li>Graph Traversals, Min Spanning Trees, Shortest Paths, Max Flow</li>\
						<li>Special Graphs (our highlight, this section usually does not exist in other algorithm books)</li>\
					</ul>\
				</div>\
			</div>\
		</div>\
  	';
	$(".content").html(HTMLtoBeInserted);
}

