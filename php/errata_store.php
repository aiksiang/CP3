
<?php
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
//
define("syntax_error",1); //spelling or typo or styling error
define("grammatical_error",2); //sentence structure and grammatical error
define("content_mismatch_error",3); //e.g refer to (a) but the expected should be refer to (b) OR calling function f(a,b) but it should be f(b,a) or even f(a,c)
define("expression_error",4);//O(n) becomes O(1) etc
define("logic_error",5); //The algorithm is wrong in certain cases or the sample code has problems

$errata_content = array (
							"memset(dfs_num, UNVISITED, sizeof dfs_num); was a legacy code. We have changed dfs_num from plain array to vi (vector of integers), therefore the initialization part should be written as dfs_num.assign(V, UNVISITED);",
							"For very competitive programmer E: ... solve this 'well known' problem in ≤ 15 minutes...'.",
							"Footnote 5. \"This number may vary\", not \"This numbers may vary\".",
							"Question 4 should not have the word \"randomly\". The points are only randomly scattered in Question 8, not in Question 4.",
							"Question 8, option (a). The complete search mentioned in question 4 (not question 3).",
							"The answer for exercise 1.2.2, question 3. should be \" (f) Fenwick Tree ... then (e) Segment Tree\" (the reference letters are wrong).",
							"The comment \"Wed\" written as the output for Exercise 1.2.3, task 3 is wrong. 9 August 2010 is \"Mon\".",
							"The typedef pair<int, ii> iii in Exercise 1.2.3. task 5 is slightly wrong, it should be typedef pairt<ii, int> iii, because I use pair first (for Month and Day), and then one more integer for Year",
							"The RegEx for Exercise 1.2.3 task 10 is not perfect as it may give extra spaces before and after the \"***\". The correct answer should be System.out.println(S.replaceAll(\"\\b[a-z][0-9][0-9]\\b\", \"***\"));",
							"Figure 4.13. The sentence \"Edge 1-2 is fixed\" is wrong. It should be \"Edge 0-1\" is fixed (off-by-one error).",
							"Binet's formula is NOT an approximation formula. It is a closed form formula to compute Fib(n). It is imprecise due to floating point computation. It is also not an O(1) method, but O(log n) method as raising a number to the power of n requires O(log n) steps.",
							"Exercise 5.4.4.2 answer. The \"above\" in \"see above\" refer to the fundamental counting principle mentioned in the answer of Exercise 5.4.4.1.",
							"There is an extra \"and\" in \"Postfix Calculator and (Infix to Postfix) Conversion and (Section 9.27)\".",
							"Section 9.2 about Bitonic TSP should be Section 9.3 (off-by-one error)."
						);
$errata_page = array (
						127,
						2,
						6,
						9,
						10,
						27,
						28,
						28,
						29,
						141,
						204,
						229,
						231,
						317
					 )
$errata_status = array (
						1,1,1,0,0,0,0,0,0,0,1,1,1,0
					)
$errata_type = array(5,2,1,1,3,3,3,5,5,1,4,3,1,3)

?>
