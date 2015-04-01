
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
					"Our LA 4793 code is AC in Live Archive (the outlined algorithm should be AC too in the actual World Finals) but TLE in UVa online judge problem 1098. We have managed to improve the solution and get AC in UVa 1098 using the \"meet in the middle\" technique. But this will need lots of explanation. In CP3, we will include the discussion of this technique (maybe in Chapter 8). For now, the readers of CP2 can try testing their code on ICPC Live Archive 4793, which has less strict time limit for the same problem (and similar test data).",
					"M - price[0][i] in can_reach[M - price[0][i]][0] = true; may be < 0 and causes RTE. Use a simple if statement to prevent this.",
					"Every time you see '->' in function 'graphCheck' and 'AlternatingPath', replace it with a '.'",
					"Every time you see '->' in function 'graphCheck' and 'AlternatingPath', replace it with a '.'",
					"We rename 'AlternatingPath' algorithm to 'AugmentingPath' algorithm.\nWe also notice that the sample Bipartite Graph in Figure 4.37 is slightly wrong. The correct one should be:\nV = 4, num_vertices_on_left = 2\nAdjList[0] = {(2,1), (3,1)} // index 0 belong to the left set\nAdjList[1] = {(2,1)} // index 1 belong to the left set\nAdjList[2] = {}\nAdjList[3] = {} \nso that the 'AugmentingPath' algorithm will behave like described in Page 116-117.",
					"There is a unknown bug with our UVa 10681 code (powers of square matrix), we have replaced our sample code with the solution of similar problem: UVa 10229",
					"We have managed to identify the (subtle) bug in our Suffix Array code involving simple test case like T = 'AAAA'. The shortest quick fix is to add T[n++] = '.'; (add '.', a dot, as the end of string delimiter to break ties in our counting sort routine) before calling constructSA(); See our updated sample code: ch6_03_sa.cpp in ch6.zip in this supporting material page.",
					"comparison function in struct Point is buggy, change \"if (fabs(x - other.x) < EPS)\" to \"if (fabs(x - other.x) > EPS)\"",
					"Point 1: We have not mentioned that we use A5 book size in the list of changes (it was last minute decision).",
					"Point 2: \"Some minor bug...\" should be \"Some minor bugs...\".",
					"There is a sentence that \"Steven's wife, Grace, is pregnant during the time the second edition of this book is released.\". Our daughter, Jane Angelina Halim has been born on Monday, 24 October 2011.",
					"Convention: Our Java codes also use the same fixed-width font like the C++ codes.",
					"We want to use the term \"problem author\" instead of \"problem setter\".",
					"We want to use the term \"problem author\" instead of \"problem setter\".",
					"We want to use the term \"problem author\" instead of \"problem setter\".",
					"We want to use the term \"problem author\" instead of \"problem setter\".",
					"We want to use the term \"problem author\" instead of \"problem setter\".",
					"We want to use the term \"problem author\" instead of \"problem setter\".",
					"We want to use the term \"problem author\" instead of \"problem setter\".",
					"We want to use the term \"problem author\" instead of \"problem setter\".",
					"We want to use the term \"problem author\" instead of \"problem setter\".",
					"We want to use the term \"problem author\" instead of \"problem setter\".",
					"We want to use the term \"problem author\" instead of \"problem setter\".",
					"We want to use the term \"problem author\" instead of \"problem setter\".",
					"We want to use the term \"problem author\" instead of \"problem setter\".",
					"Section 1.2.2  Tip 3: Do Algorithm Analysis.Modern computers can do a BILLION operations a second, not a MILLION.  Your table of \"worst AC algorithm\" is using a limit of 1,000,000, but I'm generally comfortable with around 10^8 (NOT 10^6) simple operations per test case.  On TopCoder around 300,000,000 to 400,000,000 (O(n^5) for the usual n=50) is the limit.  There's no perfect measure for ICPC, of course.",
					"first paragraph: \"... coding this simple problem ...\" should be \"... coding the solution for this simple problem ...\"",
					"Exercise 1.2.4, Question 2 (and the corresponding solution in page 215): \"....TLE response for an your O(N^3)...\", please delete \"an\".",
					"Tip 6 is not \"last tip\", it is the \"second last tip\".",
					


);
$errata_page = array(127,2,6,9,10,27,28,28,29,141,204,229,231,317);
$errata_status = array(1,1,1,0,0,0,0,0,0,0,1,1,1,0);
$errata_type = array(5,2,1,1,3,3,3,5,5,1,4,3,1,3);
$version_index = array(14);
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
