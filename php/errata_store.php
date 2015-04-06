
<?php
header('Content-type: application/json');
//The errata table should consist 
//	serverity_level
//	type
//	page number
//  content
//  status (fixed/not fixed)
//  author_id 
//	raise_time
//  fix_time
//  admin_comment
//  Version
//
define("syntax_error",1); //spelling or typo or styling error
define("grammatical_error",2); //sentence structure and grammatical error
define("content_mismatch_error",3); //e.g refer to (a) but the expected should be refer to (b) OR calling function f(a,b) but it should be f(b,a) or even f(a,c)
define("expression_error",4);//O(n) becomes O(1) etc
define("logic_error",5); //The algorithm is wrong in certain cases or the sample code has problems
define("new_feature", 6); //Possible improvement in later CP version

$errata_content = array(
					//CP3
					"memset(dfs_num, UNVISITED, sizeof dfs_num); was a legacy code. We have changed dfs_num from plain array to vi (vector of integers), therefore the initialization part should be written as dfs_num.assign(V, UNVISITED);",
					"For very competitive programmer E: ... solve this 'well known' problem in ≤ 15 minutes...'.",
					"Footnote 5. 'This number may vary', not 'This numbers may vary'.",
					"Question 4 should not have the word 'randomly'. The points are only randomly scattered in Question 8, not in Question 4.",
					"Question 8, option (a). The complete search mentioned in question 4 (not question 3).",
					"The answer for exercise 1.2.2, question 3. should be ' (f) Fenwick Tree ... then (e) Segment Tree' (the reference letters are wrong).",
					"The comment 'Wed' written as the output for Exercise 1.2.3, task 3 is wrong. 9 August 2010 is 'Mon'.",
					"The typedef pair<int, ii> iii in Exercise 1.2.3. task 5 is slightly wrong, it should be typedef pairt<ii, int> iii, because I use pair first (for Month and Day), and then one more integer for Year",
					"The RegEx for Exercise 1.2.3 task 10 is not perfect as it may give extra spaces before and after the '***'. The correct answer should be System.out.println(S.replaceAll('\'\b[a-z][0-9][0-9]'\'\b\', '***''));",
					"Figure 4.13. The sentence 'Edge 1-2 is fixed' is wrong. It should be 'Edge 0-1' is fixed (off-by-one error).",
					"Binet's formula is NOT an approximation formula. It is a closed form formula to compute Fib(n). It is imprecise due to floating point computation. It is also not an O(1) method, but O(log n) method as raising a number to the power of n requires O(log n) steps.",
					"Exercise 5.4.4.2 answer. The 'above' in 'see above' refer to the fundamental counting principle mentioned in the answer of Exercise 5.4.4.1.",
					"There is an extra 'and' in 'Postfix Calculator and (Infix to Postfix) Conversion and (Section 9.27)'.",
					"Section 9.2 about Bitonic TSP should be Section 9.3 (off-by-one error).",

					//CP2
					"add newline characters in ch1_02_scanf.cpp",
					"in ft_adjust function, the comparison k <= (int)t.size() should be k < (int)t.size(). Otherwise, we will get array out-of-bound error.",
					"Our LA 4793 code is AC in Live Archive (the outlined algorithm should be AC too in the actual World Finals) but TLE in UVa online judge problem 1098. We have managed to improve the solution and get AC in UVa 1098 using the 'meet in the middle' technique. But this will need lots of explanation. In CP3, we will include the discussion of this technique (maybe in Chapter 8). For now, the readers of CP2 can try testing their code on ICPC Live Archive 4793, which has less strict time limit for the same problem (and similar test data).",
					"M - price[0][i] in can_reach[M - price[0][i]][0] = true; may be < 0 and causes RTE. Use a simple if statement to prevent this.",
					"Every time you see '->' in function 'graphCheck' and 'AlternatingPath', replace it with a '.'",
					"Every time you see '->' in function 'graphCheck' and 'AlternatingPath', replace it with a '.'",
					"We rename 'AlternatingPath' algorithm to 'AugmentingPath' algorithm.\nWe also notice that the sample Bipartite Graph in Figure 4.37 is slightly wrong. The correct one should be:\nV = 4, num_vertices_on_left = 2\nAdjList[0] = {(2,1), (3,1)} // index 0 belong to the left set\nAdjList[1] = {(2,1)} // index 1 belong to the left set\nAdjList[2] = {}\nAdjList[3] = {} \nso that the 'AugmentingPath' algorithm will behave like described in Page 116-117.",
					"There is a unknown bug with our UVa 10681 code (powers of square matrix), we have replaced our sample code with the solution of similar problem: UVa 10229",
					"We have managed to identify the (subtle) bug in our Suffix Array code involving simple test case like T = 'AAAA'. The shortest quick fix is to add T[n++] = '.'; (add '.', a dot, as the end of string delimiter to break ties in our counting sort routine) before calling constructSA(); See our updated sample code: ch6_03_sa.cpp in ch6.zip in this supporting material page.",
					"comparison function in struct Point is buggy, change 'if (fabs(x - other.x) < EPS)' to 'if (fabs(x - other.x) > EPS)'",
					"Page viii,Point 1: We have not mentioned that we use A5 book size in the list of changes (it was last minute decision).",
					"Page viii,Point 2: 'Some minor bug...' should be 'Some minor bugs...'.",
					"Page xi,There is a sentence that 'Steven's wife, Grace, is pregnant during the time the second edition of this book is released.'. Our daughter, Jane Angelina Halim has been born on Monday, 24 October 2011.",
					"Page xii,Convention: Our Java codes also use the same fixed-width font like the C++ codes.",
					"We want to use the term 'problem author' instead of 'problem setter'.",
					"We want to use the term 'problem author' instead of 'problem setter'.",
					"We want to use the term 'problem author' instead of 'problem setter'.",
					"We want to use the term 'problem author' instead of 'problem setter'.",
					"We want to use the term 'problem author' instead of 'problem setter'.",
					"We want to use the term 'problem author' instead of 'problem setter'.",
					"We want to use the term 'problem author' instead of 'problem setter'.",
					"We want to use the term 'problem author' instead of 'problem setter'.",
					"We want to use the term 'problem author' instead of 'problem setter'.",
					"We want to use the term 'problem author' instead of 'problem setter'.",
					"We want to use the term 'problem author' instead of 'problem setter'.",
					"We want to use the term 'problem author' instead of 'problem setter'.",
					"We want to use the term 'problem author' instead of 'problem setter'.",
					"Section 1.2.2  Tip 3: Do Algorithm Analysis.Modern computers can do a BILLION operations a second, not a MILLION.  Your table of 'worst AC algorithm' is using a limit of 1,000,000, but I'm generally comfortable with around 10^8 (NOT 10^6) simple operations per test case.  On TopCoder around 300,000,000 to 400,000,000 (O(n^5) for the usual n=50) is the limit.  There's no perfect measure for ICPC, of course.",
					"first paragraph: '... coding this simple problem ...' should be '... coding the solution for this simple problem ...'",
					"Exercise 1.2.4, Question 2 (and the corresponding solution in page 215): '....TLE response for an your O(N^3)...', please delete 'an'.",
					"Tip 6 is not 'last tip', it is the 'second last tip'.",
					"Steven's and Felix's UVA statistics are no longer correct :). We have solved much more problems since 1 August 2011.",
					"'... history said it was ...' should be '... history said he was ..'.",
					"UVa 00837 - Y3K should be UVa 00893",
					"Bitmask, point no 3... 'true if one of the bits is true'.",
					"8 lines from top, 'left 4 times' should be 'left 2 times'.",
					"Last paragraph about 'Heap' data structure. The default behavior of partial_sort is to sort in ascending order, not in descending order. So,'...dequeuing the maximum element...' should be '...dequeuing the minimum element...'.",
					"A tighter analysis of segment tree build routine shown in this page actually runs in O(n).",
					"footnote 23 and definition of 'Segment [L, R] is larger than query range [i, j]' is not 100% accurate. Let's just say Segment [L, R] is larger than query range [i, j] if [L, R] is not outside query range (footnote 24) and not inside query range (footnote 25).",
					" 'In Figure 2.6, the ft_rsq(t, 6)...' should be 'In Figure 2.6, the ft_rsq(ft, 6)...'",
					"the iterative complete search solution presented for UVa 725 actually runs in 100K * 10 = 1M operations as we have to use another loop to check whether all 10 digits are different.",
					"Numbering error, Exercise 3.2.1.4 appears twice...",
					"Numbering error, Exercise 3.2.1.4 appears twice...",
					"Footnote 2 is technically incorrect, next_permutation in C++ STL algorithm is written iteratively.",
					"LIS(7) in this example should be 2, from {-7, 1}, not 4.",
					"'The dimension of the DP table must be the size of distinct sub-problems.' must be 'The size of the DP table must be the size of distinct sub-problems.'",
					" middle page, ' that's is, this is ...' should be ' that's it, this is ...'",
					"Forward/Cross edge (1, 4) should be (1, 3)",
					"first paragraph, '...can be used to solve various graph algorithms on top of...' should be '...can be used to solve various graph problems on top of...'",
					"two paragraphs above Figure 4.18, last two sentences. 'dist[1] = 988 and dist[1] = 946...' must be 'dist[2] = 988 and dist[1] = 946...'. Similarly in the next sentence, 'i.e. relaxing dist[1] = 946+15 = 961 < 988!' must be 'i.e. relaxing dist[2] = 946+15 = 961 < 988!'",
					"The arbitrage example (UVa 436) still uses French Franc (FRF), but this currency is already changed to Euro since 2002... We will change this in the 3rd edition (if Euro still used by then :).",
					"first paragraph, last sentence: '... of overlapping subproblem to covered earlier...' should be '... of overlapping subproblem covered earlier...'",
					"'we will never no longer encounter...' should be 'we will never encounter'.",
					"LA4201 - Switch Bulbs is in the wrong category. This is just a BFS + bitmask (in page 94), similar to UVa 11974",
					"first paragraph, last sentence. 'Answer: floor(sqrt(n))' should be 'Answer: floor(sqrt(X))'... I use X instead of n in the previous sentence. And if X is a square number, further reduce the answer by 1.",
					"Footnote 26: Change '% 10' to '/ 10'...",
					"'we have just find the first repetition...' should read 'we have just found the first repetition'.",
					"remove 'tortoise = mu;' in the third part of floydCycleFinding function otherwise we will have an infinite loop.",
					"There are actually 285 UVa (+ 11 others) programming exercises in Chapter 5.",
					"the back table of 'SEVENTY SEVEN' stops at index 12, character 'N', with b[12] = 4. We need one more at index 13, character 'NULL', with b[13] = 5.",
					"LA4717 - In-cicles again should be LA4714",
					"LA4717 - In-cicles again should be LA4714",
					"Section 7.3.6 Cutting Polygon With a Straight Line.You fail to mention that for non-convex polygons such a cut may return more than one polygon.  Your code will return a weird degenerate polygon (with a 0-width line connecting polygons) when it should actually return a list of polygons.  Or you can just comment that the code should only be called for convex polygons.",
					"middle, '// notice that we does not sort P[0]' should be '// notice that we do not sort P[0]'",
					"bullet point 3: 'But if we slide tile 0 downwards, we have h(s+) = 0. This causes g(s+)+h(s+) = 0+0 = 0' should read 'This causes g(s+)+h(s+) = 1+0 = 1'.",
					"'An edge (i,j) in Kn has weight according to the weight of the original edge (if it exists)' is incorrect; it should ALWAYS be the shortest path weight, regardless of whether there is already an edge connecting the two (eg the weight-6 edge in your K4 diagram should be weight 3).  Here is an example: \n0 <-> 1 weight 100\n0 <-> 2 weight 100\n0 <-> 3 weight 100\n1 <-> 2 weight 100\n1 <-> 3 weight 100\n2 <-> 3 weight 100\n0 <-> 4 weight 1\n4 <-> 1 weight 1\n1 <-> 5 weight 1\n5 <-> 2 weight 1\n2 <-> 6 weight 1\n6 <-> 3 weight 1\n3 <-> 7 weight 1\n7 <-> 0 weight 1\nThe best tour has weight 612, not 808.",
					"'Sub problem: The vertices adjacent to the current vertices' should be 'Sub problem: The vertices adjacent to the current vertex'",
					"on handling negative parameter values with offset technique, the smallest value that we can actually reach is 0 - 100 - 100 (29 times), or -2900, not -2800.",
					"Exercise 1.2.2, Sub question 4. The answers are now both O(V+E) Dynamic Programming and O((V+E) log V) Dijkstra's. Their performances are too hard to differentiate.",
					"Exercise 6.2.3, string vowel = 'abcde' should be string vowel ='aeiou'.",
					"Exercise 7.2.1.1. The answer should be 5.0.",
					"Figure 2.6, The highlight for range [7..7] is not needed. What we intend to highlight is ft[6] (range [5..6]) + ft[4] (range [1..4])",
					"Figure 4.2, The spanning tree is a bit 'wrong'. There is an edge between 40 and 60 and not between 55 and 60.",
					"Figure 4.13, The text refers to vertices that are 1-based, but the diagram is actually 0-based :(. Please take note.",
					"footnote 15. There is a potential tricky test case that can break the Max to Min heap conversion trick. What is that? Think first :)",
					"O(M alpha(n)) complexity of UFDS is achievable with two strategies: Path Compression and Union by Rank. The one used in CP2 is UFDS that calls Path Compression occasionally (Exercise 2.3.2.2).",
					"Powers of Square Matrix (Section 5.9) is another example of Divide and Conquer principle.",
					"UVa 12024 - Hats is an example of Derangement problem.",
					"The directed version of this Chinese Postman problem is MUCH more likely to show up in programming contests, since it reduces to Bipartite Matching rather than General Matching.",
					"additional problem authors that we have contacted: Howard Cheng, Christopher Chen, Bernard Blackham, Norman Hugh Anderson.",
					"Chapter 1, More fine-grained sub-categorization of Ad Hoc problems.",
					"Section 3.2.1, more detailed discussion of iterative complete search involving permutations and subsets.",
					"MAP LA 4995 to UVA 12250 Title Language Detection",
					"MAP LA 3173 to UVA 1209 Title Wordfish",
					"MAP LA 3135 to UVA 1203 Title Argus",
					"MAP LA 4843 to UVA 1260 Title Sales",
					"MAP LA 4793 to UVA 1098 Title Robots on Ice",
					"MAP LA 3171 to UVA 1208 Title Oreon",
					"MAP LA 4138 to UVA 1235 Title Anti Brute Force Lock",
					"MAP LA 4408 to UVA 12160 Title Unlock the Lock",
					"MAP LA 4637 to UVA 1251 Title Repeat Substitution with Sed",
					"MAP LA 3126 to UVA 1201 Title Taxi Cab Scheme",
					"MAP LA 4104 to UVA 1230 Title MODEX",
					"MAP LA 3170 to UVA 1207 Title AGTC",
					"MAP LA 4601 to UVA 1249 Title Euclid",
					"MAP LA 3169 to UVA 1206 Title Boundary Points",
					"MAP LA 4445 to UVA 1079 Title A Careful Approach",
					"MAP LA 4407 to UVA 12159 Title Gun Fight",
					"MAP LA 4607 to UVA 1250 Title Robot Challenge",
					"MAP LA 4794 to UVA 1099 Title Sharing Chocolate",
					"MAP LA 3136 to UVA 1204 Title Fun Game",
					"MAP LA 4643 to UVA 1252 Title Twenty Questions",
					"MAP LA 4106 to UVA 1231 Title ACORN",
					"MAP LA 4143 to UVA 1238 Title Free Parentheses",
					"MAP LA 4146 to UVA 1240 Title ICPC Team Strategy",
					
					//CP1
					"Bellman Ford's code shown there has a minor bug (does not affect its correctness though). The correct one is: REP (i, 0, V - 2) // relax all E edges V-1 times, O(V)",
					"the intersect test is buggy, it cannot handle special cases (code dropped).",
					"'Solutoin' -> 'Solution'.",
					"UVa 10001 should be UVa 10101.",
					"UVa 11277 should be UVa 11227.",
					"UVa 10401 should be UVa 11401.",
					"Opening page should start with page number i, not ii.",
					"Table 1.2: UVa 10911 discussed in the early part of Chapter 1 will be inserted in this table.",
					"Question 2: The question must be rephrased, otherwise a trivial linear scan is already sufficient.",
					"Figure 2.1; BST/left. Node '20' must be changed to '50' as '20' does not satisfy the BST property... :(",
					"UVa 11790 is not in the sorted position.",
					"UVa 507 and UVa 10684 are not in the sorted position.",
					"Japan09 should be written as Tokyo09.",
					"bottom: There is an unused white space.",
					"Rephrase 'Standard Application (for MST)' to 'Kruskal's Standard Application (for MST)'",
					"UVa 11015 is not in the sorted position.",
					"UVa 10029 is not in the sorted position.",
					"Japan05 should be written as Tokyo05.",
					"The name 'Fibonacci' should be in italic.",
					"UVa 10551 and UVa 10814 are not in the sorted position.",
					"UVa 10551 and UVa 10814 are not in the sorted position.",
					"bottom: There is an unused white space.",
					"UVa 11048 is not in the sorted position. ",
					"In various places: The term 'World Final' should be written as 'World Finals'.",
					"We will add a figure to illustrate the discussion of UVa 10911.",
					"Figure 3.13: This blurry figure will be enhanced.",
					"Page 97, 111, and in many other pages with programming exercises: We will try to have one liner hints for each problem. The hints are from Steven's 'Methods to Solve' website (in progress, almost done).",
					"Some examples in the first edition are using old programming problems. In the second edition, we will use more newer examples (if necessary).",
					"Explanation of some data structures and algorithms will be expanded.",
					"All example codes have more meaningful comments to help readers understand the code.",
					"Existing figures in ch4/6/7 are re-drawn and enhanced. Many new figures are added.",
					"The second edition is written with a more balanced ICPC and IOI viewpoint. After IOI 2010, both Steven and Felix can say that both have experienced IOI and ICPC World Finals.",
					"Problem credits will be given to all problem authors that we manage to contact.",
					"More information density per page: using single line spacing instead of one half line spacing on the same A4 sheet.\nMore number of pages for almost all chapters even though the line spacing is smaller.\nHere is the statistics of number of pages in the 1st edition versus the 2nd edition.(+image URL)",
					"Much more programming exercises (more than 600 are new).\nThese are the programming exercises that Steven/Felix have solved in UVa online judge within 9 August 2010 - publication date of the 2nd edition,\nincluding some problems from recent ICPC World Finals 2010 and IOI 2010-2011.\n(note: references to other online judges other than UVa/LA/SPOJ/TopCoder are removed to keep the exercises focused).\nHere is the statistics of programming problems mentioned in 1st edition versus in 2nd edition (final).(+image URL) Here is the current classification of programming problems in 2nd edition, not up to date... (click to enlarge)(+image URL)",
					"Problem index. If you want to look for solution for a certain UVa online judge problem, just browse through the book's index page in binary search fashion :).",
					"Java support is substantially enhanced. We will provide sample codes using both C++ (our default choice) and Java.",
					"More usage of programming problems in UVa online judge that are inspired from real-life CS problems (to further promote CS to younger generations) (listed in ch1 Ad Hoc problems).",
					"Profile of data structure/algorithm inventors (done: Bayer, Adelson-Velskii, Landis, Fenwick, Kruskal, Prim, Jarnik, Tarjan, Hopcroft, Dijkstra, Bellman, Ford, Floyd, Warshall, Fulkerson, Edmonds, Karp, Fibonacci, Zeckendorf, Pascal, Catalan, Erasthotenes, Euler, Goldbach, Diophantus, Knuth, Morris, Pratt, Needleman, Wunsch, Smith, Waterman, Manber, Myers, Phytagoras, Euclid, Heron, Graham).",
					"New sections Chapter 2: Fenwick Tree;",
					"New sections Chapter 3: New insights on bottom up DP technique, DP 0-1 Knapsack/Subset Sum; DP TSP, More explanation on non classical DP problems.",
					"New sections Chapter 4: Special Graph: New insights of DP and implicit DAG, Eulerian Graph; Alternating Path algorithm for Bipartite Matching.",
					"New sections Chapter 5: New ad hoc section, enhanced Combinatorics section (Fibonacci/Binomial Theorem/Catalan Numbers), More Number Theory (Factorial/Prime Factors/Modulo Arithmetic); Probability Theory; Game Theory; Powers of a (Square) Matrix",
					"New sections Chapter 6: New basic string processing skills/list of problems, String Matching (KMP), updated write up on Suffix Array and its applications.",
					"New sections Chapter 7: Major update on geometric library routines.",
					"New sections Chapter 8: More Advanced Techniques.",
					"More conceptual exercises throughout the book (a LOT of them) with hints/short solutions as appendix (almost done)."
);
$errata_page = array(127,2,6,9,10,27,28,28,29,141,204,229,231,317, //CP3
					//CP2
					 9,36,46,59,77,117,117,148,169,176,0,0,0,0,1,10,11,88,99,100,102,107,129,147,188,208,221,
					 6,9,11,12,12,14,17,23,24,27,32,32,36,40,40,41,44,61,57,75,77,82,93,99,108,110,112,122,
					 140,144,144,149,158,185,190,193,203,205,207,209,213,221,222,36,73,87,28,32,50,142,206,227,
					 0,0,0,18,25,28,45,46,89,89,94,94,118,128,162,181,194,202,202,202,210,210,210,211,211,211,
					 //CP1
					 76,130, 9,107,121,105, 0,4,8,17,55,56,59,71,73,80,88,93,101,104,105,107,111,0, 2,54, 0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0
					);
$errata_status = array(1,1,1,0,0,0,0,0,0,0,1,1,1,0,//CP3
						1,1,1,1,1,1,1,1,1,1,1,
						1,1,1,1,1,1,1,1,1,1,
						1,1,1,1,1,1,1,1,1,1,
						1,1,1,1,1,1,1,1,1,1,
						1,1,1,1,1,1,1,1,1,1,
						1,1,1,1,1,1,1,1,1,1,
						1,1,1,1,1,1,1,1,1,1,
						1,1,1,1,1,1,0,1,1,1,
						1,1,1,1,1,1,1,1,1,1,
						1,1,1,1,1,1,1,1,1,1,
						1,1,1,1, //CP2
						1,1,1,1,1,1,1,1,1,1,
						1,1,1,1,1,1,1,1,1,1,
						1,1,1,1,1,1,1,1,1,1,
						1,1,1,1,1,1,1,1,1,1,
						1,1,1,1,1,1,1 //CP1
					);
$errata_type = array(5,2,1,1,3,3,3,5,5,1,4,3,1,3, //CP3
					 1,5,5,5,1,1,3,5,5,5,//CP2 (A)
					 2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,5,2,2,3,2,2,3,2,1,2,4,4,4,4,1,1,5,5,2,2,3,2,3,2,2,2,3,4,4,2,2,4,5,3,5,2,4,5,2,4,5,2,4,//CP2(B)
					 3,4,5,//CP2(C)
					 5,5,5,3,3,2,//CP2(D)
					 4,4,4,//CP2(E)
					 3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,//CP2(F)
					 5,5, //CP1(A)
					 2,3,3,3, //CP1(B)
					 1,3,5,5,1,1,2,2,2,1,1,2,2,1,1,1,1,2, //CP1(C)
					 6,6, //CP1(D)
					 6,6,6,6,6,6,6, //CP1(E)
					 6,6,6,6,6,6,6,6,6,6,6,6,6,6 //CP1(F)
					);
$version_index = array(14,119);
$author_index = array(40,45,74,77);
$authors = array("Derek Kisman","Josephus","Derek Kisman","Derek Kisman");
if ($_GET['action'] == 'getErrata') {
	$reply = array();
	for ($x = 0; $x < count($errata_content); $x++) {
		$errata = array(
				"errata" => $errata_content[$x],
				"errataPage" => $errata_page[$x],
				"errataStatus" => $errata_status[$x],
				"errataType" => $errata_type[$x]
				);
		array_push($reply, $errata);
	}

	echo json_encode($reply);
}


?>
