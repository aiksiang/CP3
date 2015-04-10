function showContent(edition) {
	$(".book-edition-content").html("");
	var HTMLtoBeInserted = "";

	switch(edition) {
		case FIRST_EDITION:
			HTMLtoBeInserted += '\
				<div class="row" id="book-nav">\
					<ul class="nav nav-tabs">\
						<li class="chp1" role="presentation"><a href="#chap1">Chapter 1</a></li>\
						<li class="chp2" role="presentation"><a href="#chap2">Chapter 2</a></li>\
						<li class="chp3" role="presentation"><a href="#chap3">Chapter 3</a></li>\
						<li class="chp4" role="presentation"><a href="#chap4">Chapter 4</a></li>\
						<li class="chp5" role="presentation"><a href="#chap5">Chapter 5</a></li>\
						<li class="chp6" role="presentation"><a href="#chap6">Chapter 6</a></li>\
						<li class="chp7" role="presentation"><a href="#chap7">Chapter 7</a></li>\
					</ul>\
   				</div>\
				<div class="row book-content">\
					<a name="chap1"></a>\
				    <div class="col-md-7 col-md-offset-1">\
				    	<div class="classWithPad well">\
				    		<h4>Chapter 1: Introduction</h4>\
				    		<ul>\
					    		<li>Introducing the world of Competitive Programming. </li>\
					    		<li>Tips to be a competitive programmer, shared by us who were IOI & ICPC contestants in the past and now are coaches</li>\
								<li>Collection of (easy-medium) Ad Hoc problems to start your journey</li>\
							</ul>\
						</div>\
				   	</div>\
				   	<div class="col-md-3">\
						<div class="row"><div class="classWithPad"><img src="img/sorting.gif" alt="sorting" class="img-responsive"></div></div>\
					</div>\
				</div>\
				\
				<div class="row book-content">\
					<a name="chap2"></a>\
					<div class="col-md-3 col-md-offset-2">\
				    	<div class="row"><div class="classWithPad"><img src="img/list.gif" alt="list" class="img-responsive"></div></div>\
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
				<div class="row book-content">\
					<a name="chap3"></a>\
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
				<div class="row book-content">\
					<a name="chap4"></a>\
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
				\
				<div class="row book-content">\
					<a name="chap5"></a>\
					<div class="col-md-6 col-md-offset-1">\
						<div class="classWithPad well">\
							<h4>Chapter 5: Mathematics</h4>\
							<ul>\
								<li>Number Theory, Big Integer, and many more topics in mathematics that are frequently appear in programming contests</li>\
							</ul>\
						</div>\
					</div>\
						<div class="col-md-3">\
						<div class="row"><div class="classWithPad"><img src="img/bit.gif" alt="bit" class="img-responsive"></div></div>\
					</div>\
				</div>\
				\
				<div class="row book-content">\
					<a name="chap6"></a>\
					<div class="col-md-3">\
						<div class="row"><div class="classWithPad"><img src="img/suffixarray.gif" alt="suffixarray" class="img-responsive"></div></div>\
					</div>\
					<div class="col-md-3">\
						<div class="row"><div class="classWithPad"><img src="img/suffixtree.gif" alt="suffixtree" class="img-responsive"></div></div>\
					</div>\
					<div class="col-md-6">\
						<div class="classWithPad well">\
							<h4>Chapter 6: String Processing</h4>\
							<ul>\
								<li>Ad Hoc string problems</li>\
								<li>String problems solvable with DP</li>\
								<li>Large string problems that must be solved with efficient DS: Suffix Tree/Array</li>\
							</ul>\
						</div>\
					</div>\
				</div>\
				\
				<div class="row book-content">\
					<a name="chap7"></a>\
					<div class="col-md-6 col-md-offset-1">\
						<div class="classWithPad well">\
							<h4 name="chap7">Chapter 7: (Computational) Geometry</h4>\
							<ul>\
								<li>Library of "Geometry Basics", Convex Hull, Intersection Problems, D&C in Geometry Problems</li>\
							</ul>\
						</div>\
					</div>\
					<div class="col-md-3">\
						<div class="row"><div class="classWithPad"><img src="img/geometry.gif" alt="geometry" class="img-responsive"></div></div>\
					</div>\
				</div>\
		  	';
		  	break;
		case SECOND_EDITION:
			HTMLtoBeInserted += '\
				<div class="row" id="book-nav">\
					<ul class="nav nav-tabs">\
						<li class="chp1" role="presentation"><a href="#chap1">Chapter 1</a></li>\
						<li class="chp2" role="presentation"><a href="#chap2">Chapter 2</a></li>\
						<li class="chp3" role="presentation"><a href="#chap3">Chapter 3</a></li>\
						<li class="chp4" role="presentation"><a href="#chap4">Chapter 4</a></li>\
						<li class="chp5" role="presentation"><a href="#chap5">Chapter 5</a></li>\
						<li class="chp6" role="presentation"><a href="#chap6">Chapter 6</a></li>\
						<li class="chp7" role="presentation"><a href="#chap7">Chapter 7</a></li>\
						<li class="chp8" role="presentation"><a href="#chap8">Chapter 8</a></li>\
						<li class="app-A" role="presentation"><a href="#appendix-A">Appendix A</a></li>\
						<li class="ind" role="presentation"><a href="#index">Index</a></li>\
					</ul>\
   				</div>\
				<div class="row book-content">\
					<a name="chap1"></a>\
				    <div class="col-md-7 col-md-offset-1">\
				    	<div class="classWithPad well">\
				    		<h4>Chapter 1: Introduction</h4>\
				    		<ul>\
					    		<li>Collection of hundreds more Ad Hoc problems with hints to kick start your training programme</li>\
					    		<li>More contest-related exercises :)</li>\
								<li>More persuasive writing that the world of competitive programming is fun</li>\
								<li>More balanced viewpoint: C++ vs Java, ICPC vs IOI</li>\
								<li>Lots of footnotes in the second edition that gives more insights on the stuffs being discussed in the body text</li>\
							</ul>\
						</div>\
				   	</div>\
				   	<div class="col-md-3">\
						<div class="row"><div class="classWithPad"><img src="img/sorting.gif" alt="sorting" class="img-responsive"></div></div>\
					</div>\
				</div>\
				\
				<div class="row book-content">\
					<a name="chap2"></a>\
					<div class="col-md-3 col-md-offset-2">\
				    	<div class="row"><div class="classWithPad"><img src="img/list.gif" alt="list" class="img-responsive"></div></div>\
				    </div>\
					<div class="col-md-6">\
						<div class="classWithPad well">\
							<h4>Chapter 2: Data Structure and Algorithms</h4>\
							<ul>\
								<li>New: Discussion of lightweight set of Boolean (bitmask technique). This technique is important for competitive programmers and will be used several times in various sections of this book</li>\
								<li>New: Short discussion on implicit graph</li>\
								<li>New: Fenwick Tree (Binary Indexed Tree), uses bit manipulation</li>\
								<li>More conceptual exercises</li>\
							</ul>\
						</div>\
					</div>\
				</div>\
				\
				<div class="row book-content">\
					<a name="chap3"></a>\
				    <div class="col-md-6">\
				    	<div class="classWithPad well">\
				    		<h4>Chapter 3: Problem Solving Paradigms</h4>\
				    		<ul>\
									<li>More speed up tips to improve your solution (thanks to nhahtdh), (especially the brute force solution)</li>\
									<li>More Divide and Conquer examples, clearer explanation of "binary search the answer" technique</li>\
									<li>More Greedy example: interval covering problem.</li>\
									<li>Clearer explanation of DP technique: the steps required to come up with a DP solution, especially the bottom-up version</li>\
									<li>Reconstructing the optimal DP solution</li>\
									<li>O(n log k) solution for LIS problem</li>\
									<li>0-1 Knapsack/Subset Sum</li>\
									<li>DP TSP (bitmask technique again)</li>\
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
				<div class="row book-content">\
					<a name="chap4"></a>\
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
								<li>Reorganization of graph sections (more reader friendly now)</li>\
								<li>Prim\'s algorithm, Minimax/Maximin problem</li>\
								<li>Clearer explanation of the "TopCoder" style Dijkstra\'s implementation</li>\
								<li>More application of Floyd Warshall\'s algorithm: Arbitrage</li>\
								<li>Clearer explanation of Edmonds Karp\'s max flow algorithm</li>\
								<li>Training to identify the flow graph of a problem solvable with max flow</li>\
								<li>DP as a traversal of (implicit) DAG</li>\
								<li>One more special graph: Eulerian Graph</li>\
								<li>Augmenting Path Bipartite Matching algorithm</li>\
								<li>A chapter with lots of short profiles of algorithm inventors (new feature of this book)</li>\
							</ul>\
						</div>\
					</div>\
				</div>\
				\
				<div class="row book-content">\
					<a name="chap5"></a>\
					<div class="col-md-6 col-md-offset-1">\
						<div class="classWithPad well">\
							<h4>Chapter 5: Mathematics</h4>\
							<ul>\
								<li>Much more mathematics problems</li>\
								<li>Combinatorics section expanded: Binomial Coefficients, Catalan Numbers, principle of counting</li>\
								<li>More emphasis on the 3 important methods for dealing with large computations: BigInteger, prime power, or modulo arithmetic</li>\
								<li>More discussion on Floyd\'s cycle finding algorithm</li>\
								<li>Game Theory (new section)</li>\
								<li>Powers of a (Square) Matrix (new section), can be applied to DP too</li>\
							</ul>\
						</div>\
					</div>\
						<div class="col-md-3">\
						<div class="row"><div class="classWithPad"><img src="img/bit.gif" alt="bit" class="img-responsive"></div></div>\
					</div>\
				</div>\
				\
				<div class="row book-content">\
					<a name="chap6"></a>\
					<div class="col-md-3">\
						<div class="row"><div class="classWithPad"><img src="img/suffixarray.gif" alt="suffixarray" class="img-responsive"></div></div>\
					</div>\
					<div class="col-md-3">\
						<div class="row"><div class="classWithPad"><img src="img/suffixtree.gif" alt="suffixtree" class="img-responsive"></div></div>\
					</div>\
					<div class="col-md-6">\
						<div class="classWithPad well">\
							<h4>Chapter 6: String Processing</h4>\
							<ul>\
								<li>Basic string processing skills (new section)</li>\
								<li>Much more string problems + categorization</li>\
								<li>String matching: KMP, matching on 2D grid</li>\
								<li>Enhanced explanation of Suffix Trie, Tree, and Array</li>\
							</ul>\
						</div>\
					</div>\
				</div>\
				\
				<div class="row book-content">\
					<a name="chap7"></a>\
					<div class="col-md-6 col-md-offset-1">\
						<div class="classWithPad well">\
							<h4 name="chap7">Chapter 7: (Computational) Geometry</h4>\
							<ul>\
								<li>Expanded libraries, especially on points, lines and polygons</li>\
								<li>New: inPolygon, cutPolygon routines</li>\
								<li>Clearer explanation of Graham\'s scan convex hull algorithm</li>\
							</ul>\
						</div>\
					</div>\
					<div class="col-md-3">\
						<div class="row"><div class="classWithPad"><img src="img/geometry.gif" alt="geometry" class="img-responsive"></div></div>\
					</div>\
				</div>\
				\
				<div class="row book-content">\
					<a name="chap8"></a>\
					<div class="col-md-3">\
						<div class="row"><div class="classWithPad"><img src="img/matching.gif" alt="matching" class="img-responsive"></div></div>\
					</div>\
					<div class="col-md-3">\
						<div class="row"><div class="classWithPad"><img src="img/union.gif" alt="union" class="img-responsive"></div></div>\
					</div>\
					<div class="col-md-6">\
						<div class="classWithPad well">\
							<h4>Chapter 8: More Advanced Techniques</h4>\
							<ul>\
								<li>Problem Decomposition: 2 components, 3 components...</li>\
								<li>More advanced search techniques: A*, Depth Limited Search, Iterative Deepening Search, Iterative Deepening A*</li>\
								<li>More advanced DP: bitmask technique, compilation of common DP states, better state representation, etc</li>\
							</ul>\
						</div>\
					</div>\
				</div>\
				\
				<div class="row book-content">\
					<a name="appendix-A"></a>\
					<div class="col-md-6 col-md-offset-1">\
						<div class="classWithPad well">\
							<h4 name="chap7">Appendix A: Hints/Brief Solutions</h4>\
							<ul>\
								<li>Lots of conceptual exercises scattered throughout the book</li>\
							</ul>\
						</div>\
					</div>\
					<div class="col-md-3">\
						<div class="row"><div class="classWithPad"><img src="img/recursion.gif" alt="recursion" class="img-responsive"></div></div>\
					</div>\
				</div>\
				\
				<div class="row book-content">\
					<a name="index"></a>\
					<div class="col-md-3">\
						<div class="row"><div class="classWithPad"><img src="img/heap.gif" alt="heap" class="img-responsive"></div></div>\
					</div>\
					<div class="col-md-3">\
						<div class="row"><div class="classWithPad"><img src="img/bitmask.gif" alt="bitmask" class="img-responsive"></div></div>\
					</div>\
					<div class="col-md-6">\
						<div class="classWithPad well">\
							<h4>Index</h4>\
							<ul>\
								<li>Steven\'s Methods to Solve is now integrated in the second edition</li>\
								<li>1198 UVa problems are listed, 600 more than the 1st edition. Getting more than 1000 problems AC is no longer a wild dream.</li>\
							</ul>\
						</div>\
					</div>\
				</div>\
		  	';
			break;
		case THIRD_EDITION:
			HTMLtoBeInserted += '\
				<div class="row" id="book-nav">\
					<ul class="nav nav-tabs">\
						<li class="chp1" role="presentation"><a href="#chap1">Chapter 1</a></li>\
						<li class="chp2" role="presentation"><a href="#chap2">Chapter 2</a></li>\
						<li class="chp3" role="presentation"><a href="#chap3">Chapter 3</a></li>\
						<li class="chp4" role="presentation"><a href="#chap4">Chapter 4</a></li>\
						<li class="chp5" role="presentation"><a href="#chap5">Chapter 5</a></li>\
						<li class="chp6" role="presentation"><a href="#chap6">Chapter 6</a></li>\
						<li class="chp7" role="presentation"><a href="#chap7">Chapter 7</a></li>\
						<li class="chp8" role="presentation"><a href="#chap8">Chapter 8</a></li>\
						<li class="chp9" role="presentation"><a href="#chap9">Chapter 9</a></li>\
						<li class="ind" role="presentation"><a href="#index">Index</a></li>\
					</ul>\
   				</div>\
				<div class="row book-content">\
					<a name="chap1"></a>\
				    <div class="col-md-7 col-md-offset-1">\
				    	<div class="classWithPad well">\
				    		<h4>Chapter 1: Introduction</h4>\
				    		<ul>\
					    		<li>A gentler intro: Anatomy of programming contest problem; Parsing Input/Formatting Output for beginners; Common errors; Common shortcut tricks</li>\
							</ul>\
						</div>\
				   	</div>\
				   	<div class="col-md-3">\
						<div class="row"><div class="classWithPad"><img src="img/sorting.gif" alt="sorting" class="img-responsive"></div></div>\
					</div>\
				</div>\
				\
				<div class="row book-content">\
					<a name="chap2"></a>\
					<div class="col-md-3 col-md-offset-2">\
				    	<div class="row"><div class="classWithPad"><img src="img/list.gif" alt="list" class="img-responsive"></div></div>\
				    </div>\
					<div class="col-md-6">\
						<div class="classWithPad well">\
							<h4>Chapter 2: Data Structure and Algorithms</h4>\
							<ul>\
								<li>NEW: Deque</li>\
								<li>NEW: Many written exercises about basic data structures from Steven\'s other course in SoC, NUS.</li>\
								<li>Union Find Data Structure now uses "union by rank" by default.</li>\
								<li>UFDS, Segment Tree, and BIT are now written in OOP fashion</li>\
							</ul>\
						</div>\
					</div>\
				</div>\
				\
				<div class="row book-content">\
					<a name="chap3"></a>\
				    <div class="col-md-6">\
				    	<div class="classWithPad well">\
				    		<h4>Chapter 3: Problem Solving Paradigms</h4>\
				    		<ul>\
									<li>NEW: iterative solution for subset and permutation problems</li>\
									<li>Updated discussion nested loops and recursive backtracking (8 queens problem)</li>\
									<li>NEW: discussion of one important trick for dealing with greedy problems: sorting</li>\
									<li>Updated discussion of top-down and bottom-up DP</li>\
									<li>NEW: Alternative way to code top-down DP and to print out top-down DP solution, inclusion of Kadane\'s algorithm for static 1D/2D range sum query</li>\
									<li>Much more programming exercises with a better categorization system.</li>\
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
				<div class="row book-content">\
					<a name="chap4"></a>\
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
								<li>Graph traversal and MST sections are revisited and rewritten to make the discussed algorithms clearer.</li>\
								<li>NEW: Example of (medium level) graph modeling for shortest path problem, network flow problem, and bipartite matching problem.</li>\
								<li>Discussion of Dinic\'s max flow algorithm (placed in Chapter 9), Hopcroft Karp\'s bipartite matching algorithm (also placed in Chapter 9), and important trick to improve the runtime of the Augmenting Path Bipartite Matching algorithm.</li>\
								<li>Much more programming exercises</li>\
							</ul>\
						</div>\
					</div>\
				</div>\
				\
				<div class="row book-content">\
					<a name="chap5"></a>\
					<div class="col-md-6 col-md-offset-1">\
						<div class="classWithPad well">\
							<h4>Chapter 5: Mathematics</h4>\
							<ul>\
								<li>Strengthening the explanation of various sections</li>\
								<li>NEW: New trick of using Java BigInteger, more collection of classic combinatorics problems</li>\
								<li>Improved discussion of Matrix Power (now placed in Chapter 9)</li>\
								<liInsights on the faster Brent\'s cycle-finding algorithm and the Pollard\'s rho integer factoring algorithm (as exercise and in Chapter 9)</li>\
							</ul>\
						</div>\
					</div>\
						<div class="col-md-3">\
						<div class="row"><div class="classWithPad"><img src="img/bit.gif" alt="bit" class="img-responsive"></div></div>\
					</div>\
				</div>\
				\
				<div class="row book-content">\
					<a name="chap6"></a>\
					<div class="col-md-3">\
						<div class="row"><div class="classWithPad"><img src="img/suffixarray.gif" alt="suffixarray" class="img-responsive"></div></div>\
					</div>\
					<div class="col-md-3">\
						<div class="row"><div class="classWithPad"><img src="img/suffixtree.gif" alt="suffixtree" class="img-responsive"></div></div>\
					</div>\
					<div class="col-md-6">\
						<div class="classWithPad well">\
							<h4>Chapter 6: String Processing</h4>\
							<ul>\
								<li>NEW:New trick of using Java String class</li>\
								<li>More collection of Ad Hoc string problems</li>\
								<li>Further strengthening of Suffix Trie/Tree/Array explanation; the terminating symbol is restored</li>\
							</ul>\
						</div>\
					</div>\
				</div>\
				\
				<div class="row book-content">\
					<a name="chap7"></a>\
					<div class="col-md-6 col-md-offset-1">\
						<div class="classWithPad well">\
							<h4 name="chap7">Chapter 7: (Computational) Geometry</h4>\
							<ul>\
								<li>NEW: Several new geometric library routines are added</li>\
								<li>Existing library routines are enhanced.</li>\
							</ul>\
						</div>\
					</div>\
					<div class="col-md-3">\
						<div class="row"><div class="classWithPad"><img src="img/geometry.gif" alt="geometry" class="img-responsive"></div></div>\
					</div>\
				</div>\
				\
				<div class="row book-content">\
					<a name="chap8"></a>\
					<div class="col-md-3">\
						<div class="row"><div class="classWithPad"><img src="img/matching.gif" alt="matching" class="img-responsive"></div></div>\
					</div>\
					<div class="col-md-3">\
						<div class="row"><div class="classWithPad"><img src="img/union.gif" alt="union" class="img-responsive"></div></div>\
					</div>\
					<div class="col-md-6">\
						<div class="classWithPad well">\
							<h4>Chapter 8: More Advanced Techniques</h4>\
							<ul>\
								<li>Reorder the sections so that the more advanced search and DP techniques are listed before problem decomposition (as it may involve those advanced search/DP techniques)</li>\
								<li>NEW: Backtracking with Bitmask, State Space Search, Meet in the Middle.</li>\
							</ul>\
						</div>\
					</div>\
				</div>\
				\
				<div class="row book-content">\
					<a name="chap9"></a>\
					<div class="col-md-6 col-md-offset-1">\
						<div class="classWithPad well">\
							<h4 name="chap7">Chapter 9: Rare Topics</h4>\
							<ul>\
								<li>Collection of (many, 34 of them) rare algorithms, data structures, and/or programming problems that have not been listed in the first eight chapters</li>\
							</ul>\
						</div>\
					</div>\
					<div class="col-md-3">\
						<div class="row"><div class="classWithPad"><img src="img/recursion.gif" alt="recursion" class="img-responsive"></div></div>\
					</div>\
				</div>\
				\
				<div class="row book-content">\
					<a name="index"></a>\
					<div class="col-md-3">\
						<div class="row"><div class="classWithPad"><img src="img/heap.gif" alt="heap" class="img-responsive"></div></div>\
					</div>\
					<div class="col-md-3">\
						<div class="row"><div class="classWithPad"><img src="img/bitmask.gif" alt="bitmask" class="img-responsive"></div></div>\
					</div>\
					<div class="col-md-6">\
						<div class="classWithPad well">\
							<h4>Index</h4>\
							<ul>\
								<li>Discussion of ~1700 UVa + other OJ problems</li>\
								<li>Some UVa problems are re-classified into sa better category :)</li>\
							</ul>\
						</div>\
					</div>\
				</div>\
		  	';
			break;	 
	}

	$(".book-edition-content").html(HTMLtoBeInserted);
}

