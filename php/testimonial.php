<?php
//What a testimonial should have
//0. ID
//1. Author
//2. Author's Credentials
//3. Author's URL
//4. Content
//5. Nationality
//6. Continent
//7. imageURL
//8. Maplocation(x,y)
//45 ENTRIES

$authors = array (
					"Brian C. Dean",
					"Amanda Sturgill",
					"Baochuan Lu",
					"Kip Irvine",
					"Brent Baas",
					"Tim Korb",
					"Christopher S Mayfield",
					"New York University",
					"Stanford University",
					"Shawn A Bohner",
					"Howard Cheng",
					"University of Waterloo",
					"Neilor Tonin",
					"Maria da Graça Campos Pimentel",
					"Joao Comba",
					"André Gustavo dos Santos",
					"A Brazilian Contestant",
					"Another Brazilian Contestant",
					"",
					"A contestant from Colombia",
					"A contestant from Universidad Nacional de Trujillo - Peru",
					"A contestant from Alexandria University in Egypt",
					"Richard Forster",
					"Miguel A. Revilla",
					"Marco Antonio Gómez Martín",
					"Martin Tillmann",
					"Luigi Laura",
					"An IOI contestant from Estonia",
					"A reader from Lithuania who now stays in UK",
					"A student from Russia",
					"Mikhail Goncharov",
					"Janos Csirik",
					"National University of Singapore",
					"Nanyang Technological University",
					"Indonesian Ministry of Education",
					"University of Indonesia",
					"Bina Nusantara University",
					"Teddy Mantoro",
					"Invited observer from Malaysia new IOI team",
					"several students in Thailand (notably students from Chulalongkorn University)",
					"several students in Thailand (notably students from Kasetsart University)",
					"several students in Thailand (notably students from Prince of Songkla University)",
					"a few Indians/Vietnamese/Bangladeshi students",
					"Mongolian IOI team",
					"some Australians"
				);
$entries = count($authors);
$content = array (
					"Competitive Programming is a unique resource that I recommend to any student interested in raising their algorithmic programming skills to the next level. It is packed with insightful tips and techniques that are hard to find elsewhere, and remarkably thorough in its use of examples and references to sample problems.",
					"There are books providing coaching on various contest problems, but they aren't accessible to everyone because they are written in Russian or Chinese, according to Steven Halim, coach of the National University of Singapore team and author of 'Competitive Programming,' a book on the various types of problems found in the World Finals. 'I purposely wrote this book for everyone else,' Halim said of his decision to publish a book in English. The book covers problems contained in 40 percent of the ACM problem archive (edit: the new URL for ACM problem archive is: UVa online judge) Halim said. It contains problem descriptions, suggested algorithms for solving the problem with explanations, sample implementations and a list of examples implementations. The book is for sale at lulu.com", 
					"I recently read your excellent book on competitive programming... I consider adopting it for our ICPC training course. ",
					"I very much enjoyed reading your excellent Competitive Programming book, and I use it in a course at Florida International University (Miami, Florida)",
					"Great stuff! Thanks for taking the time to put this material together is such a readable form.",
					"Used by Purdue Computer Science Department",
					"Used by James Madison University",
					"Used in New York University",
					"Recommended in Stanford University training page",
					"Used in Rose-Hulman Institute of Technology",
					"Thanks for providing this great book. I'll definitely recommend my students to study this book.",
					"Used by some students in University of Waterloo.",
					"Congratulations for the new book!!! Thank you for this amazing work!!!",
					"Congratulations on the launching of the new edition of your book! We will use this book for our course this semester (https://sistemas.usp.br/jupiterweb/jupDisciplina?sgldis=SCC0210) ",
					"This is a great book for a programming challenges class. I will use as a companion to the Skiena's book in our course here at the Federal University of Rio Grande do Sul (UFRGS)",
					"We use your book in our University",
					"Congratulations for your Book Competitive Programming !! Very good for Contests !",
					"Hey Felix!!! Congratulation for your BOOK!!!! Veeeery good!!!!",
					"Thanks for your work on your book it's really awesome!!!",
					"A very good book. Previously, I solve by myself (without previous readings) the problem 10608 - Friends. Later, I read the book and find out that this problems is 'Union-Find Disjoint Sets'. Then I study 'Union-Find Disjoint Sets' and I learn the generalization for other similar problem's.",
					"Your book will be one of the most important material that I have",
					"The content of the book is so rich with information, I really like that. I am in 2nd year CS and I want to say that this book has become a friend of mine and many others. I take it everywhere and reading it whenever I have time. I am so excited (about CP3 being about 2xCP2) and am going to tell everyone to work hard mastering CP2. We are expecting much from you and thanks for your great efforts. Hope one day every computer programmer will have a CP hand book",
					"It is not a substitute for an algorithms textbook but it is an excellent accompanying book and one which comes highly recommended",
					"I cannot imagine a better complement for the UVa Online Judge site",
					"Congratulations for your uHunt site and your book. I am a lecturer at a spanish university and I use both of them to train some students :) Great work!",
					"Your book would make a great addition to our learning material.",
					"Italian IOI team is a satisfied customer of CP book. CP2 is used for Italian IOI 2012-2013 preparation and CP3 will be used for Italian IOI 2014preparation",
					"Thank you for writing this book",
					"Received this awesome book today (mid August 2011) ",
					"I am very interested to buy this book",
					"I am a professional developer who loves to compete and definitely recommend this book for anyone who want to participate on TopCoder / Google Code Jam",
					"I would like to give a course for our students based on your excellent book",
					"Used in National University of Singapore (Steven's host University)",
					"Used in Nanyang Technological University.",
					"We will buy and distribute your book to our National Science Olympiad contestants 2011, as with last year",
					"Used in University of Indonesia",
					"Used in Bina Nusantara University",
					"We will likely set up a competitive programming course using 'Competitive Programming 2'",
					"A good book to help us start our IOI training",
					"This book is definitely owned and read by several students in Thailand",
					"This book is definitely owned and read by several students in Thailand",
					"This book is definitely owned and read by several students in Thailand",
					"We know at least a few Indians/Vietnamese/Bangladeshi who own this book.",
					"Mongolian IOI team 2012 visited Steven in September 2012.",
					"This book is owned by some Australian whom we meet in IOI and ICPC"
				);

$Nationality = array (
						"USA","USA","USA","USA","USA","USA","USA","USA","USA","USA",
						"CANADA","CANADA",
						"BRAZIL","BRAZIL","BRAZIL","BRAZIL","BRAZIL","BRAZIL",
						"BOLIVIA",
						"COLOMBIA",
						"PERU",
						"EGYPT",
						"UNITED KINGDOM",
						"SPAIN","SPAIN",
						"GERMANY",
						"ITALY",
						"ESTONIA",
						"LITHUANIA",
						"RUSSIA","RUSSIA",
						"HUNGARY",
						"SINGAPORE","SINGAPORE",
						"INDONESIA","INDONESIA","INDONESIA",
						"MALAYSIA","MALAYSIA",
						"THAILAND","THAILAND","THAILAND",
						"INDIA/VIETNAM/BANGLADESH",
						"MONGOLIA",
						"AUSTRALIA",

				);
$Region = array (
						"North America","North America","North America","North America","North America","North America","North America","North America","North America","North America","North America","North America",
						"South America","South America","South America","South America","South America","South America","South America","South America","South America",
						"Africa",
						"Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe","Europe",
						"Asia","Asia","Asia","Asia","Asia","Asia","Asia","Asia","Asia","Asia","Asia","Asia",
						"Australia / Oceania"
						
				);
$Credit = array (
						"Associate Director, USA Computing Olympiad, Clemson University",
						"ICPCNews",
						"an instructor from Southwest Baptist University, USA",
						"an instructor at Florida International University, USA",
						"Chair of Computer Science Department, LeTourneau University, Texas",
						"Assistant Head, CS Department, Purdue University",
						"Assistant Professor, Department of Computer Science, James Madison University",
						"New York University",
						"Stanford University",
						"Rose-Hulman Institute of Technology",
						"University of Lethbridge, Alberta, Canada",
						"University of Waterloo",
						"a professor at URI - Campus de Erechim",
						"a professor at Universidade de Sao Paulo (USP)",
						"a professor in UFRGS",
						"a professor in Universidade Federal de Viçosa",
						"",
						"",
						"",
						"",
						"A contestant from Universidad Nacional de Trujillo - Peru",
						"A contestant from Alexandria University in Egypt",
						"IOI IC president",
						"UVa Online Judge site creator, ACM-ICPC Problem Archivist, Universidad de Valladolid",
						"Universidad Complutense de Madrid",
						"Karlsruhe Institute of Technology",
						"Italian IOI team/deputy leader",
						"",
						"",
						"",
						"",
						"ICPC coach from University of Szeged, Hungary",
						"National University of Singapore",
						"Nanyang Technological University",
						"(Tim Olimpiade Komputer Indonesia / TOKI)",
						"University of Indonesia",
						"Bina Nusantara University",
						"International Islamic University Malaysia",
						"Invited observer from Malaysia new IOI team",
						"",
						"",
						"",
						"",
						"",
						""
				);
$imgURL = array(

					"https://sites.google.com/site/stevenhalim/_/rsrc/1371100861873/home/testimonials/200px-Clemson_University_Seal.svg.png?height=200&amp;width=200",
					"",
					"https://sites.google.com/site/stevenhalim/_/rsrc/1371110814685/home/testimonials/NorthAmerica-SouthwestBaptistUniversity.jpg",
					"https://sites.google.com/site/stevenhalim/_/rsrc/1371100999713/home/testimonials/Florida_International_University_Seal.png?height=200&amp;width=200",
					"https://sites.google.com/site/stevenhalim/_/rsrc/1371110867063/home/testimonials/NorthAmerica-LeTourneauUniversity.jpg",
					"https://sites.google.com/site/stevenhalim/_/rsrc/1371110798324/home/testimonials/NorthAmerica-PurdueUniversity.png",
					"https://sites.google.com/site/stevenhalim/_/rsrc/1371110844852/home/testimonials/NorthAmerica-JamesMadisonUniversity.jpg",
					"https://sites.google.com/site/stevenhalim/_/rsrc/1371113890901/home/testimonials/NorthAmerica-USA-NewYorkUniversity.png",
					"https://sites.google.com/site/stevenhalim/_/rsrc/1371114039004/home/testimonials/NorthAmerica-USA-StanfordUniversity.png",
					"https://sites.google.com/site/stevenhalim/_/rsrc/1373007696916/home/testimonials/rosehulman.jpg",

					"https://sites.google.com/site/stevenhalim/_/rsrc/1371101411246/home/testimonials/200px-University_of_lethbridge_logo.svg.png?height=200&amp;width=148",
					"https://sites.google.com/site/stevenhalim/_/rsrc/1371114054188/home/testimonials/NorthAmerica-Canada-UniversityOfWaterloo.gif",
					
					"https://sites.google.com/site/stevenhalim/_/rsrc/1371111310178/home/testimonials/SouthAmerica-UniversidadeRegionalIntegrada.jpg" ,
					"https://sites.google.com/site/stevenhalim/_/rsrc/1371111328946/home/testimonials/SouthAmerica-UniversidadeDeSaoPaulo.gif",
					"https://sites.google.com/site/stevenhalim/_/rsrc/1371111347257/home/testimonials/SouthAmerica-UniversidadeFederalDoRioGrandeDoSul.jpg",
					"https://sites.google.com/site/stevenhalim/_/rsrc/1371101665154/home/testimonials/UFV.jpeg.jpeg?height=193&amp;width=200",
					"",
					"",

					"",


					"",

					"https://sites.google.com/site/stevenhalim/_/rsrc/1371111474700/home/testimonials/UNTrujilo.jpg",

					"https://sites.google.com/site/stevenhalim/_/rsrc/1371111600001/home/testimonials/Africa-Egypt-AlexandriaUniversity.png",
					
					"",

					"https://sites.google.com/site/stevenhalim/_/rsrc/1371111705747/home/testimonials/Europe-Spain-UniversidadDeValladolid.jpg",
					"https://sites.google.com/site/stevenhalim/_/rsrc/1371111852453/home/testimonials/Europe-Spain-UniversidadComplutenseDeMadrid.jpg",
					
					"https://sites.google.com/site/stevenhalim/_/rsrc/1371111944639/home/testimonials/Europe-Germany-Karlsruhe%20InstituteofTechnology.png",
					
					"",

					"",
					"",
					"",
					"",
					"",

					"https://sites.google.com/site/stevenhalim/_/rsrc/1371112439691/home/testimonials/Asia-Singapore-NationalUniversityOfSingapore.gif",
					"https://sites.google.com/site/stevenhalim/_/rsrc/1371112452151/home/testimonials/Asia-Singapore-NanyangTechnologicalUniversity.png",
					
					"",
					"https://sites.google.com/site/stevenhalim/_/rsrc/1371112184654/home/testimonials/Asia-Indonesia-UniversityOfIndonesia.jpg",
					"https://sites.google.com/site/stevenhalim/_/rsrc/1371112196730/home/testimonials/Asia-Indonesia-BinaNusantaraUniversity.jpg",
					
					"https://sites.google.com/site/stevenhalim/_/rsrc/1371112530005/home/testimonials/Asia-Malaysia-InternationalIslamicUniversityMalaysia.jpg",
					"",
					
					"https://sites.google.com/site/stevenhalim/_/rsrc/1371115230464/home/testimonials/Asia-Thailand-ChulalongkornUniversity.png",
					"https://sites.google.com/site/stevenhalim/_/rsrc/1371115243577/home/testimonials/Asia-Thailand-KasetsartUniversity.jpg",
					"https://sites.google.com/site/stevenhalim/_/rsrc/1371115258792/home/testimonials/Asia-Thailand-PrinceOfSongklaUniversity.jpg",
					
					"",
					"",
					""


				);

?>