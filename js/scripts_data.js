window.theme={primary:"#3B7DDD",secondary:"#6c757d",success:"#1cbb8c",info:"#17a2b8",warning:"#fcb92c",danger:"#dc3545",white:"#fff","gray-100":"#f8f9fa","gray-200":"#e9ecef","gray-300":"#dee2e6","gray-400":"#ced4da","gray-500":"#adb5bd","gray-600":"#6c757d","gray-700":"#495057","gray-800":"#343a40","gray-900":"#212529",black:"#000"};
window.acceptablecolors={primary:"#3B7DDD",secondary:"#6c757d",success:"#1cbb8c",info:"#17a2b8",warning:"#fcb92c",danger:"#dc3545",black:"#000","gray-100":"#f8f9fa","gray-200":"#e9ecef","gray-300":"#dee2e6","gray-400":"#ced4da","gray-500":"#adb5bd","gray-600":"#6c757d","gray-700":"#495057","gray-800":"#343a40","gray-900":"#212529"};

/*global variables*/
var checkNUB = {undefined: undefined,null:null};

var setCookie = function(cName, cValue, exDays = 30) {
	let _thisDate = new Date();

	_thisDate.setTime(_thisDate.getTime() + (exDays*24*60*60*1000));
	document.cookie = `${cName}=${cValue};expires=${_thisDate.toUTCString()};path=/`;
}
var getCookie = function(cName) {
	let name = `${cName}=`,
		decodedCookie = decodeURIComponent(document.cookie),
		ca = decodedCookie.split(';');

	for(let i = 0; i <ca.length; i++) {
		let c = ca[i];

		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}

		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}

	return null;
}
var cloner = function(_from, _to, _checkChildIfHave = false, _classCheck = "", _removeIfExists = true, _prepend = false) {
	let _fDom = document.getElementById(_from),
		_tDom = document.getElementById(_to),
		_checkChilds, _checkChilds1, _cCheck;

	if(typeof _from === "object") { _fDom = _from; }
	if(typeof _to === "object") { _tDom = _to; }
	if(_fDom != undefined && _tDom != undefined) {
		if(_classCheck != "" && _removeIfExists) {
			_checkChilds1 = _tDom.querySelectorAll(_classCheck);
			Array.from(_checkChilds1).find(function(_element) {
				_element.parentNode.removeChild(_element);
			});
		}
		if(_checkChildIfHave) {
			// check if this element already exists
			_checkChilds = _tDom.querySelectorAll("." + _fDom.id);
			Array.from(_checkChilds).find(function(_element) {
				_element.parentNode.removeChild(_element);
			});
		}

		_fDom = _fDom.cloneNode(true);
		_fDom.classList.add(_fDom.id);
		_fDom.removeAttribute("id");

		if(_prepend && _tDom.children.length > 0) {
			_tDom.insertBefore(_fDom, _tDom.children[0]);
		} else {
			_tDom.appendChild(_fDom);
		}
	}

	return _fDom || null;
};
var removeElement = function(element) {
	return element.parentNode.removeChild(element);
};

var myUrlsRaw = [
	{
		"name": "Github",
		"url": "https://github.com/daikkin",
		"icon_1": "bi bi-github",
		"index": true,
	},
	{
		"name": "LinkedIn",
		"url": "https://www.linkedin.com/in/reancy-villacarlos-a689401b0",
		"icon_1": "bi bi-linkedin",
		"index": true,
	},
	{
		"name": "Netlify",
		"url": "https://reancy-villacarlos.netlify.app",
		"icon_1": null,
	},
];

var myProjects = [
	{
		"project_title": "ALAS Wifi",
		"category_short": "local",
		"client_name": null,
		"company_name": "ALAS Electronics Engineering Services",
		"project_date": "Upcoming",
		"project_url": null,
		"project_description": "A free Wifi module with a limit based on what is set by the admin (default of 30mins of connectivity). This module can be used by candidates that are planning to run for a government-selected field (Baranggay Captain, Counselors, etc...). While they are making their speech, listeners will be able to do a live feed of the candidate or use the internet using this free Wifi module.",
		"project_main_image": null,
		"technologies_used": [
			"Python (Flask, Jinja, etc...)", "CSS (Bootstrap)", "JavaScript", "SocketIO", "Node.js (PM2)", "SQLite", "RaspberryPi (Linux-based OS)"
		],
		"project_images": [],
	},
	{
		"project_title": "ALAS HRIS",
		"category_short": "local",
		"client_name": null,
		"company_name": "ALAS Electronics Engineering Services",
		"project_date": "Upcoming",
		"project_url": null,
		"project_description": "A web platform that centralizes employee data and automates HR tasks like payroll, timekeeping, benefits administration, and onboarding. It should allow organizations to streamline operations and empowers employees with self-service portals to request leaves and view payslips. this web app should also be allowed to handle multiple organizations and should also allow generating API Keys in each organization to be able to handle requests via API calls.",
		"project_main_image": null,
		"technologies_used": [],
		"project_images": [],
	},
	{
		"project_title": "Southside Devs",
		"category_short": "website",
		"client_name": null,
		"company_name": "Freelance",
		"project_date": "2026",
		"project_url": "https://southsidedevs.com/",
		"project_description": "SouthSide Devs is a Cebu-based web development agency that helps businesses build a professional online presence without the high upfront costs typically associated with custom websites. Instead of traditional project-based pricing, they offer a subscription model that includes website design, development, maintenance, and ongoing support. Their focus is on creating modern, business-driven websites that not only look great but also help generate leads, build credibility, and support growth.",
		"project_main_image": "assets/southsidedevs/landing_1.jpeg",
		"technologies_used": [
			"PHP (Codeigniter Framework)", "CSS", "JavaScript", "MySQL"
		],
		"project_images": [],
	},
	{
		"project_title": "Reptov",
		"category_short": "website",
		"client_name": null,
		"company_name": "PhotoAndVideoEdits.com",
		"project_date": "2026",
		"project_url": "https://reptov.com/",
		"project_description": "Reptov is a real-estate-photo-to-video editing website that turns listing photos into real estate video tour.",
		"project_main_image": "assets/reptov/landing_1.jpeg",
		"technologies_used": [
			"ReactJS", "JavaScript", "TypeScript", "PostgreSQL"
		],
		"project_images": [],
	},
	{
		"project_title": "ALAS IT Control",
		"category_short": "local",
		"client_name": null,
		"company_name": "ALAS Electronics Engineering Services",
		"project_date": "2025",
		"project_url": null,
		"project_description": "A server-side Node.js application for tracking student attendance with scan in/out functionality.",
		"project_main_image": "assets/alas_scanattenditcontrol/show_1.png",
		"technologies_used": [
			"Python (Flask, Jinja, etc...)", "CSS (Bootstrap)", "JavaScript", "TypeScript", "SocketIO", "Node.js", "Express.js", "SQLite", "RaspberryPi (Linux-based OS)"
		],
		"project_images": [
			"assets/alas_scanattenditcontrol/show_2.jpeg",
			"assets/alas_scanattenditcontrol/show_3.jpeg",
			"assets/alas_scanattenditcontrol/show_4.jpeg",
			"assets/alas_scanattenditcontrol/show_5.jpeg",
		],
	},
	{
		"project_title": "Python Scrapper",
		"category_short": "local",
		"client_name": null,
		"company_name": "PhotoAndVideoEdits.com",
		"project_date": "2025",
		"project_url": null,
		"project_description": "A python script that would download images in a website.",
		"project_main_image": null,
		"technologies_used": [
			"Python (Selenium, etc...)"
		],
		"project_images": [],
	},
	{
		"project_title": "Python Request Handler",
		"category_short": "local",
		"client_name": null,
		"company_name": null,
		"project_date": "2025",
		"project_url": null,
		"project_description": "I created a request handler in Python that receives RAW images (CR2, DNG, etc...), converts it to JPEG format and use HuggingFace, Transformers and Torch to classify real-estate property images if the image is an exterior or interior image. I also added video classifier if the video is an exterior or interior shot.",
		"project_main_image": null,
		"technologies_used": [
			"Python (HuggingFace, Transformers, fal.ai Client, Flask, Jinja, etc...)", "SocketIO", "Node.js"
		],
		"project_images": [],
	},
	{
		"project_title": "Algo Trade HQ",
		"category_short": "website",
		"client_name": null,
		"company_name": "Freelance",
		"project_date": "2025",
		"project_url": "https://algotradehq.com/",
		"project_description": "A trading system that helps new traders. This system automates trading like never before. With the help of an AI Trading Buddy, you won't even need to always keep track of of your risks, your AI Trading Buddy will help you with it.",
		"project_main_image": "assets/algotradehq/landing_1.jpeg",
		"technologies_used": [
			"PHP (Laravel Framework)", "CSS (Bootstrap)", "JavaScript", "MySQL"
		],
		"project_images": [],
	},
	{
		"project_title": "ALAS Queueing",
		"category_short": "local",
		"client_name": null,
		"company_name": "ALAS Electronics Engineering Services",
		"project_date": "2024",
		"project_url": null,
		"project_description": "A queueing system can be described as customers arriving for service, waiting for service if it is not immediate, and if having waited for service, leaving the service after being served. With this system, everything can be done with your mobile phone. When you arrive in the establishment, simply connect to the Wifi using your phone's Wifi Scanner, enter your information, then add your queue. Our system will automatically queue you without any hassle.",
		"project_main_image": "assets/alas_queueing/index.png",
		"technologies_used": [
			"Python (Flask, Jinja, etc...)", "CSS (Bootstrap)", "JavaScript", "SocketIO", "Node.js (PM2)", "SQLite", "RaspberryPi (Linux-based OS)"
		],
		"project_images": [
			"assets/alas_queueing/admin_1.png",
			"assets/alas_queueing/admin_2.png",
			"assets/alas_queueing/admin_3.png",
			"assets/alas_queueing/admin_4.png",
			"assets/alas_queueing/admin_5.png",
			"assets/alas_queueing/admin_6.png",
			"assets/alas_queueing/counter_1.png",
			"assets/alas_queueing/customer_1.png",
			"assets/alas_queueing/customer_2.png",
		],
	},
	{
		"project_title": "ALAS Alarm System",
		"category_short": "local",
		"client_name": null,
		"company_name": "ALAS Electronics Engineering Services",
		"project_date": "2024",
		"project_url": null,
		"project_description": "This system help schools and/or establishments have an automated alarm system with heavy-duty amplifier and speakers that surrounds the establishment.",
		"project_main_image": "assets/alas_alarmsystem/login.png",
		"technologies_used": [
			"Python (Flask, Jinja, etc...)", "CSS (Bootstrap)", "JavaScript", "SocketIO", "Node.js (PM2)", "SQLite", "OrangePi (Linux-based OS)"
		],
		"project_images": [
			"assets/alas_alarmsystem/dashboard.png"
		],
	},
	{
		"project_title": "VCoop",
		"category_short": "local",
		"client_name": null,
		"company_name": null,
		"project_date": "2024",
		"project_url": null,
		"project_description": "This website is created to monitor loans and calculate interests added to the loans. It also reminds if there are payments expected on a specific date. This can also be used as a cooperative, where each members have a contribution and they can either have it as a sinking fund or they can find new ventures to increase their money.",
		"project_main_image": "assets/vcoop/login.png",
		"technologies_used": [
			"PHP (Laravel Framework)", "CSS (Bootstrap)", "JavaScript (Native, jQuery Library, DataTables.js)", "MySQL"
		],
		"project_images": [
			"assets/vcoop/admin_1.png",
			"assets/vcoop/admin_2.png",
			"assets/vcoop/admin_3.png",
			"assets/vcoop/admin_4.png",
			"assets/vcoop/admin_5.png",
		],
	},
	{
		"project_title": "HD Tours",
		"category_short": "website",
		"client_name": null,
		"company_name": "PhotoAndVideoEdits.com",
		"project_date": "2023 - 2024",
		"project_url": "https://www.hd.tours/",
		"project_description": "HD Tours is a tour templating website for real estate agents. They provide the URL and/or the link with the property's ready images to their customers. My contributions to this system is I am part of the first team that developed this website.",
		"project_main_image": "assets/hdtours/user_home.png",
		"technologies_used": [
			"PHP (Laravel Framework)", "CSS (Bootstrap)", "JavaScript (Native, jQuery Library, DataTables.js, Chart.js)", "MySQL"
		],
		"project_images": [],
	},
	{
		"project_title": "PassportLove PH",
		"category_short": "website",
		"client_name": null,
		"company_name": "Freelance",
		"project_date": "2023",
		"project_url": null,
		"project_description": "PassportLove PH is a dating website that helps find love online. It is location-based and preference-based and does not limit to one race, gender, ethnicity, and class. After connecting two people, they can continue with getting to know each other on the website's messaging.",
		"project_main_image": "assets/passportlove/landing.png",
		"technologies_used": [
			"PHP (Laravel Framework)", "CSS (Bootstrap)", "JavaScript (Native, jQuery Library)", "MySQL"
		],
		"project_images": [
			"assets/passportlove/landing_1.png",
			"assets/passportlove/landing_2.png",
		],
	},
	{
		"project_title": "Photo And Video Edits",
		"category_short": "website",
		"client_name": null,
		"company_name": "PhotoAndVideoEdits.com",
		"project_date": "2022 - 2026",
		"project_url": "https://www.photoandvideoedits.com/",
		"project_description": "PhotoAndVideoEdits.com is a real estate photo-editing company. My contributions to this website is mostly on fixing bugs encountered by customers and supports and added new features to the website.",
		"project_main_image": "assets/pve/mainpage.png",
		"technologies_used": [
			"PHP (Laravel Framework)", "CSS (Bootstrap)", "JavaScript (Native, jQuery Library, DataTables.js, Chart.js, etc...)", "MySQL"
		],
		"project_images": [],
	},
	{
		"project_title": "BodyBlendz IMS",
		"category_short": "website",
		"client_name": "BodyBlendz",
		"company_name": "MET Philippines",
		"project_date": "2022",
		"project_url": null,
		"project_description": "BodyBlendz is an Australian company that sells beauty products or skincare products internationally. IMS is an inventory website that would handle inventory on their multiple warehouses. It would also help their team with requesting new stocks to their suppliers.",
		"project_main_image": "assets/bodyblendz/landing.png",
		"technologies_used": [
			"PHP (Laravel Framework)", "CSS (Bootstrap)", "JavaScript (Native, jQuery Library, DataTables.js, Chart.js)", "MySQL"
		],
		"project_images": [
			"assets/bodyblendz/user_1.png",
			"assets/bodyblendz/user_2.png",
			"assets/bodyblendz/user_3.png",
			"assets/bodyblendz/user_4.png",
			"assets/bodyblendz/user_5.png",
			"assets/bodyblendz/user_6.png",
			"assets/bodyblendz/user_7.png",
			"assets/bodyblendz/user_8.png",
			"assets/bodyblendz/user_9.png",
			"assets/bodyblendz/user_10.png",
			"assets/bodyblendz/user_11.png",
		],
	},
	{
		"project_title": "Abdal HR Quarantine Facility",
		"category_short": "website",
		"client_name": "Abdal HR",
		"company_name": "Freelance",
		"project_date": "2021 - 2022",
		"project_url": null,
		"project_description": "With COVID-19 still active, this website helps people that will travel to Saudi have a faster and safer way of interacting with confirming their booking. This would also help the facility in verifying expected travelers to arrive.",
		"project_main_image": "assets/abdalhr/landing.png",
		"technologies_used": [],
		"project_images": [
			"assets/abdalhr/landing_1.png",
			"assets/abdalhr/landing_2.png",
			"assets/abdalhr/landing_3.png",
			"assets/abdalhr/pdf_generated.png",
		],
	},
	{
		"project_title": "Kintone Project",
		"category_short": "website",
		"client_name": "GKLine, Inc.",
		"company_name": "MET Philippines",
		"project_date": "2021 - 2022",
		"project_url": null,
		"project_description": "Kintone Project is a client-access input form that links to an admin-access record. This website connects to the admin-access records using API to have a more secure and reliable access to the forms and records without needing the access of the admin.",
		"project_main_image": "assets/kintone/landing.png",
		"technologies_used": [
			"PHP (Laravel Framework)", "CSS (Bootstrap)", "JavaScript (Native, jQuery Library, DataTables.js)", "MySQL"
		],
		"project_images": [
			"assets/kintone/admin_1.png",
			"assets/kintone/admin_2.png",
			"assets/kintone/admin_3.png",
			"assets/kintone/admin_4.png",
		],
	},
	{
		"project_title": "MET Invoice ",
		"category_short": "website",
		"client_name": "MET Philippines",
		"company_name": "MET Philippines",
		"project_date": "2021",
		"project_url": null,
		"project_description": "This website is created for creating invoice, saving the invoice details, sends an invoice to clients and reminds clients on a specific time period if the clients have not yet made the payment.",
		"project_main_image": "assets/metinvoice/landing.png",
		"technologies_used": [
			"PHP Native", "CSS (Bootstrap)", "MySQL"
		],
		"project_images": [
			"assets/metinvoice/landing_1.png",
			"assets/metinvoice/landing_2.png",
		],
	},
	{
		"project_title": "Survey Questionnaire",
		"category_short": "website",
		"client_name": "FFL Insurance",
		"company_name": "Freelance",
		"project_date": "2021",
		"project_url": null,
		"project_description": "This website provides customizable questions, depending on answers provided by customers, if a customer applies for a quote. This also helps the insurance agency to provide which service is best for the applicant.",
		"project_main_image": "assets/survey/landing.png",
		"technologies_used": [
			"PHP (Laravel Framework)", "JavaScript (Native, jQuery Library)", "Calendly API", "CSS (Bootstrap)", "MySQL"
		],
		"project_images": [
			"assets/survey/landing_1.png",
			"assets/survey/landing_2.png",
			"assets/survey/landing_3.png",
			"assets/survey/landing_4.png",
			"assets/survey/landing_5.png",
		],
	},
	{
		"project_title": "EC Ranking Tool",
		"category_short": "website",
		"client_name": "GKLine, Inc.",
		"company_name": "Freelance",
		"project_date": "2021 - 2022",
		"project_url": null,
		"project_description": "EC Ranking Tool is a ranking system that would help our client determine which product is ranked in which number on 3 websites (Yahoo, Paypay and Rakuten Mall). With the help of a web scraper, we would be able to determine the ranks of each products on these respective online malls.",
		"project_main_image": "assets/ranking/landing_1.png",
		"technologies_used": [
			"PHP (Laravel Framework)", "JavaScript (Native, jQuery Library, Express, DataTables.js, Chart.js)", "CSS (Bootstrap)", "ScrapeStorm (Web scraper)", "MySQL"
		],
		"project_images": [
			"assets/ranking/landing_2.png",
			"assets/ranking/landing_3.png",
			"assets/ranking/landing_4.png",
			"assets/ranking/landing_5.png",
			"assets/ranking/landing_6.png",
			"assets/ranking/landing_7.png",
			"assets/ranking/landing_8.png",
			"assets/ranking/landing_9.png",
		],
	},
	{
		"project_title": "Mohrah Smart",
		"category_short": "website",
		"client_name": "Mohrah Smart Systems",
		"company_name": "Freelance",
		"project_date": "2021 - 2022",
		"project_url": "https://www.mohrahsmart.com/",
		"project_description": "Mohrah Smart Systems is a Saudi organization specialized in advanced smart technologies. This website helps their company market their products and have a customizeable website.",
		"project_main_image": "assets/mohrah/landing.png",
		"technologies_used": [
			"PHP (Laravel Framework)", "CSS (Bootstrap)", "Javascript (Native, jQuery Library)", "MySQL"
		],
		"project_images": [
			"assets/mohrah/admin_login.png",
			"assets/mohrah/admin_1.png",
			"assets/mohrah/admin_2.png",
			"assets/mohrah/admin_3.png",
			"assets/mohrah/admin_4.png",
		],
	},
	{
		"project_title": "C Projects",
		"category_short": "local",
		"client_name": null,
		"company_name": "Freelance",
		"project_date": "2021",
		"project_url": null,
		"project_description": `<p>This was a college project for the younger sibling of my schoolmate's girlfriend at the time. It consisted of eight C programming exercises:</p> <ul><li>Input a set of integers and determine which sums are greater than or equal to 10.</li><li>Determine whether a given integer exists in an array.</li><li>Find the largest integer in an array.</li><li>Find the index of a given value in an array.</li><li>Print the values of a nested array.</li><li>Count the occurrences of a given integer in a nested array.</li><li>Determine whether a matrix is a square matrix. If it is, print its values.</li><li>Create a simple basketball scoresheet system.</li></ul>`,
		"project_main_image": null,
		"technologies_used": [
			"C",
		],
		"project_images": [],
	},
	{
		"project_title": "StoryTelling Media",
		"category_short": "local",
		"client_name": null,
		"company_name": "Freelance",
		"project_date": "2021",
		"project_url": null,
		"project_description": "StoryTelling Media is a company that provides development and social media services to their clients. This website is a UX/UI design ",
		"project_main_image": "assets/stm/landing.png",
		"technologies_used": [
			"HTML", "CSS (Bootstrap)", "JavaScript",
		],
		"project_images": [
			"assets/stm/landing_1.png",
			"assets/stm/landing_2.png",
			"assets/stm/landing_3.png",
			"assets/stm/landing_4.png",
		],
	},
	{
		"project_title": "Launch Your Wealth",
		"category_short": "local",
		"client_name": null,
		"company_name": "Freelance",
		"project_date": "2020",
		"project_url": null,
		"project_description": "LYW is a one-page website that showcases the company's missions, visions, dedications and information. They dedicate their work in helping other businesses and individuals and provide tools and knowledge necessary to thrive in the world of entrepreneurship, business development, and wealth building.",
		"project_main_image": "assets/lyw/landing.png",
		"technologies_used": [
			"PHP (Laravel Framework)", "CSS (Bootstrap)", "JavaScript (Native, jQuery Library)", "MySQL"
		],
		"project_images": [
			"assets/lyw/about.png",
			"assets/lyw/coaching.png",
			"assets/lyw/podcast.png",
		],
	},
	{
		"project_title": "IMS / IPS Medical Software",
		"category_short": "local",
		"client_name": null,
		"company_name": "Medspecialized, Inc.",
		"project_date": "2020 - 2021",
		"project_url": null,
		"project_description": "IMS is a medical software that are mainly used by doctors in hospitals while IPS is mainly used by pharmacies. My contributions to these softwares are mostly new features and bug fixing.",
		"project_main_image": "assets/medspec/logo.webp",
		"technologies_used": [
			"PowerBuilder", "SAP Crystal Reports", "Flash Plugins"
		],
		"project_images": [],
	},
	{
		"project_title": "Solyu",
		"category_short": "local",
		"client_name": null,
		"company_name": null,
		"project_date": "2019",
		"project_url": null,
		"project_description": "An ERP System that consists of Accounting system, Inventory system, HR & Payroll system, School Information system, Reservation system, and Stocks system. A system that links all systems together, like Payroll that automates disbursed company money to employees, enrollment payments of students directly linked to accounting, reservation charges directly linked to accounting, inventory sales/purchases directly linked to accounting and so on.",
		"project_main_image": "assets/solyu/landing.png",
		"technologies_used": [
			"PHP (Laravel Framework)", "CSS (Bootstrap)", "JavaScript (Native, jQuery Library, DataTables.js, Chart.js)", "PostgreSQL"
		],
		"project_images": [
			"assets/solyu/1_landing.png",
			"assets/solyu/2_landing.png",
			"assets/solyu/3_landing.png",
			"assets/solyu/4_landing.png",
			"assets/solyu/5_landing.png",
			"assets/solyu/6_landing.png",
			"assets/solyu/landing_1.png",
			"assets/solyu/landing_2.png",
			"assets/solyu/landing_3.png",
			"assets/solyu/landing_4.png",
			"assets/solyu/landing_5.png",
			"assets/solyu/landing_6.png",
			"assets/solyu/landing_7.png",
			"assets/solyu/landing_8.png",
			"assets/solyu/landing_9.png",
			"assets/solyu/landing_10.png",
			"assets/solyu/landing_11.png",
			"assets/solyu/landing_12.png",
			"assets/solyu/landing_13.png",
		],
	},
	{
		"project_title": "RightApps Guihulngan System",
		"category_short": "local",
		"client_name": "Guihulngan LGU",
		"company_name": "RightApps Solutions and Services",
		"project_date": "2019",
		"project_url": null,
		"project_description": "This system is a centralized, local website which consists of Accounting, Inventory, Budget and HRIS system. My contributions to this system is I was a part of the first team that developed this system and I was also one of the team members that met with our client to discuss with the changes made, customizations, and implementation.",
		"project_main_image": "assets/rightapps/ra_logo_1.png",
		"technologies_used": [
			"PHP (Laravel Framework)", "CSS (Bootstrap)", "JavaScript (Native, jQuery Library, DataTables.js, etc...)", "MySQL"
		],
		"project_images": [],
	},
	{
		"academic_project": true,
		"project_title": "RightApps Accounting System",
		"category_short": "local",
		"client_name": "Aquamarine Seawalker Ventures",
		"company_name": "RightApps Solutions and Services",
		"project_date": "2018",
		"project_url": null,
		"project_description": "My contributions to this system is on customizing the accounting system to our client's needs. It also allows our customer to also record reservations booked by their customers and walk-ins.",
		"additional_description": [
			"An accounting management system customized to meet the specific operational needs of clients, including financial record management and business process automation.",
			"The system also provides reservation management features, allowing customers to record and track bookings made by clients and walk-in customers.",
			"Contributions include system customization, implementing client-requested enhancements, and improving functionalities to support more efficient business operations.",
		],
		"project_main_image": "assets/rightapps/ra_logo_1.png",
		"technologies_used": [
			"C#", "PostgreSQL"
		],
		"project_images": [],
	},
	{
		"academic_project": true,
		"project_title": "DOHOLRS (Online Licensing and Regulatory System)",
		"category_short": "local",
		"client_name": "Department of Health (DOH)",
		"company_name": "RightApps Solutions and Services",
		"project_date": "2018 - 2019",
		"project_url": null,
		"project_description": "DOHOLRS is an online licensing and registration system for facilities and establishments in the Philippines. My contributions of this system is I was a part of the first team that developed this system.",
		"additional_description": [
			"An online licensing and regulatory management system designed to streamline the registration, application, and monitoring processes for facilities and establishments in the Philippines.",
			"The system enables organizations to efficiently manage licensing requirements, regulatory submissions, and compliance-related records through a centralized online platform.",
			"Contributed as a member of the initial development team, helping establish the foundation and core functionalities of the system.",
		],
		"project_main_image": "assets/rightapps/ra_logo_1.png",
		"technologies_used": [
			"PHP (Laravel Framework)", "CSS (Bootstrap)", "JavaScript (Native, jQuery Library, DataTables.js, etc...)", "MySQL"
		],
		"project_images": [],
	},
	{
		"academic_project": true,
		"project_title": "RightApps Accounting and Inventory System",
		"category_short": "local",
		"client_name": "Eastland Hotel and Residences",
		"company_name": "RightApps Solutions and Services",
		"project_date": "2018 - 2019",
		"project_url": null,
		"project_description": "Accounting software is a computer program that maintains account books on computers, including recording transactions and account balances. Inventory system is a software system for tracking inventory levels, orders, sales and deliveries. My contributions on these systems are mostly on reports, fixing issues with unbalanced records, incorrect queries and sub-queries, newly added reports and new features requested by the client.",
		"additional_description": [
			"An integrated accounting and inventory management system designed to record financial transactions, maintain account balances, and monitor inventory levels, orders, sales, and deliveries.",
			"The system improves business operations by providing accurate financial and inventory records, automated reports, and efficient data tracking.",
			"Contributions include developing and enhancing reports, resolving record inconsistencies, optimizing queries and sub-queries, and implementing new features based on client requirements.",
		],
		"project_main_image": "assets/rightapps/ra_logo_1.png",
		"technologies_used": [
			"C#", "PostgreSQL"
		],
		"project_images": [],
	},
	{
		"academic_project": true,
		"project_title": "Attendance Monitoring System",
		"category_short": "local",
		"client_name": null,
		"company_name": null,
		"project_date": "2018",
		"project_url": null,
		"project_description": "On the first company I've worked with, we manually record our daily logs and every 15 days we would make a report and send it to our HR for our payroll. I created this system to record my daily logs and generate my reports in an automated manner.",
		"additional_description": [
			"An attendance monitoring system designed to digitize and automate the recording of employees’ daily time logs and attendance records.",
			"The system generates automated attendance reports, reducing manual documentation and simplifying the submission process for payroll and HR management.",
			"It improves workplace efficiency by providing accurate attendance tracking, faster report generation, and better record management.",
		],
		"project_main_image": "assets/rightapps_monitoring/login.jpeg",
		"technologies_used": [
			"PHP", "CSS (Bootstrap)", "JavaScript", "MySQL"
		],
		"project_images": [
			"assets/rightapps_monitoring/dashboard.jpeg",
			"assets/rightapps_monitoring/announcements.jpeg",
		],
	},
	{
		"academic_project": true,
		"project_title": "eScheduling System",
		"category_short": "local",
		"client_name": null,
		"company_name": null,
		"project_date": "2017 - 2018",
		"project_url": null,
		"project_description": "This system helps students, teachers and schools organize their scheduling. This helps the school on enrollment stage, where it automatically determines if in that time of the day the teacher or the room is occupied. This also helps students monitor any changes made on their schedules.",
		"additional_description": [
			"A school scheduling management system designed to organize and manage class schedules for students, teachers, and school administrators.",
			"The system automates schedule creation during enrollment by checking teacher availability, classroom occupancy, and possible scheduling conflicts.",
			"It allows students and school personnel to monitor schedule updates, ensuring accurate and efficient management of academic timetables.",
		],
		"project_main_image": null,
		"technologies_used": [
			"PHP", "CSS (Bootstrap)", "JavaScript (Native, jQuery Library and DataTables.js)", "MySQL"
		],
		"project_images": [],
	},
	{
		"academic_project": true,
		"project_title": "Pizza Ordering System",
		"category_short": "local",
		"client_name": null,
		"company_name": null,
		"project_date": "2016 - 2017",
		"project_url": null,
		"project_description": "A web-based pizza ordering system developed to allow customers to browse available pizza products, add items to their cart, and complete their orders through a convenient online ordering process. The system supports cash-on-delivery transactions, providing customers with a simple and accessible way to place orders without requiring online payment methods.",
		"additional_description": [
			"A pizza ordering system developed to streamline the online ordering process by allowing customers to select products, manage their shopping carts, and submit orders conveniently.",
			"The system includes cart management and checkout functionalities, with cash-on-delivery as the available payment option for completed orders.",
			"Developed during the early adoption period of e-commerce shopping carts (2017–2018), the project demonstrates the implementation of online ordering workflows, customer transactions, and order management features.",
		],
		"project_main_image": null,
		"technologies_used": [
			"PHP", "CSS (Bootstrap)", "JavaScript (Native, jQuery Library)", "MySQL"
		],
		"project_images": [],
	},
	{
		"academic_project": true,
		"project_title": "Computer Ordering System",
		"category_short": "local",
		"client_name": null,
		"company_name": null,
		"project_date": "2016",
		"project_url": null,
		"project_description": "A computer ordering system developed using pure HTML and CSS to showcase web design and front-end development skills. The system displays available computer products in an organized layout, allowing users to view product information and explore a simple online ordering interface.",
		"additional_description": [
			"A static computer ordering website developed using HTML and CSS to present available computer products and their details in a visually organized format.",
			"The system focuses on improving web design skills through the implementation of layouts, styling, product displays, and user interface elements.",
			"It demonstrates fundamental front-end development concepts, including webpage structure, visual design, and responsive presentation of product information.",
		],
		"project_main_image": null,
		"technologies_used": [
			"HTML", "JavaScript", "CSS"
		],
		"project_images": [],
	},
	{
		"academic_project": true,
		"project_title": "Calculator",
		"category_short": "local",
		"client_name": null,
		"company_name": null,
		"project_date": "2016",
		"project_url": null,
		"project_description": "A Java-based calculator system designed to perform basic arithmetic operations and simple scientific calculations, providing users with an efficient tool for solving mathematical problems. The system incorporates various calculation functions through an interactive interface, allowing users to perform accurate computations with ease.",
		"additional_description": [
			"A Java-based calculator application developed to handle basic arithmetic operations and simple scientific calculations, including advanced mathematical functions.",
			"The system provides an interactive and user-friendly interface that allows users to input values and perform various calculations efficiently.",
			"It showcases the application of Java programming concepts, including interface design, input processing, mathematical logic, and function implementation.",
		],
		"project_main_image": null,
		"technologies_used": [
			"Java"
		],
		"project_images": [],
	},
	{
		"academic_project": true,
		"project_title": "Library System",
		"category_short": "local",
		"client_name": null,
		"company_name": "Freelance",
		"project_date": "2016",
		"project_url": null,
		"project_description": "A system that records all books and monitors people who borrow the books. This helps librarians to easily track the book's status, location of the borrower, and on which shelf it can be found.",
		"additional_description": [
			"A library management system designed to organize and maintain records of available books, including their details, availability, and shelf locations.",
			"The system tracks borrowed books and borrower information, allowing librarians to monitor book status, due dates, and borrower records efficiently.",
			"It improves library operations by simplifying book searches, inventory management, and the overall borrowing and returning process.",
		],
		"project_main_image": null,
		"technologies_used": [
			"Visual Basic", "ADODB (MSAccess)"
		],
		"project_images": [],
	},
	{
		"academic_project": true,
		"project_title": "Catering System",
		"category_short": "local",
		"client_name": null,
		"company_name": null,
		"project_date": "2015 - 2016",
		"project_url": null,
		"project_description": "A system that records all types of foods and services that the catering company is offering. It also handles applications that applied for their services, which meals to serve, how many utensils will be used, and so on.",
		"additional_description": [
			"A catering management system designed to organize and maintain records of the company’s available food products, catering packages, and offered services.",
			"The system manages customer applications and event requests, including meal selections, service requirements, utensil quantities, and other catering-related details.",
			"It streamlines catering operations by improving data management, service preparation, and coordination between the company and its clients.",
		],
		"project_main_image": null,
		"technologies_used": [
			"Visual Basic", "ADODB (MSAccess)"
		],
		"project_images": [],
	},
];

var myExperiences = [
	{
		"year": "2021 -  Present",
		"role": "Software / Web Developer",
		"company": "Freelance",
		"location_1": null,
		"location_2": null,
		"description": "Worked as a freelance software developer, delivering custom software solutions for diverse client requirements.",
		"additional_description": [
			"Worked as a freelance software developer, delivering custom software solutions for diverse client requirements.",
			"Developed, maintained, and enhanced applications using programming languages and technologies best suited to each project's technical needs.",
			"Collaborated with clients to gather requirements, implement features, and resolve technical issues while ensuring timely project delivery.",
		],
	},
	{
		"year": "2019 -  Present",
		"role": "Software / Web Developer",
		"company": "ALAS Electronics Engineering Services",
		"location_1": "Villa Leyson, Bacayan",
		"location_2": "Cebu City, PH",
		"description": "ALAS Electronics Engineering Services is a business owned by my father when I was still in college. Worked on software and web applications under this company, product installations and assisted in building the products as well.",
		"additional_description": [
			"Contributed to software and web application development for a family-owned electronics engineering services company.",
			"Developed and maintained internal and client-facing applications to support business operations and product functionality.",
			"Assisted with product assembly, installation, testing, and deployment, providing both technical software support and hands-on hardware integration.",
		],
	},
	{
		"year": "2022 -  2026",
		"role": "Software / Web Developer",
		"company": "PhotoAndVideoEdits",
		"location_1": null,
		"location_2": "Mandaue City, PH",
		"description": "Worked on a Real Estate Photo Editing Company. Added new features to the website and fixed bugs encountered by users.",
		"additional_description": [
			"Enhanced and maintained the company's web application for a real estate photo editing service.",
			"Developed new features based on business and user requirements while identifying, troubleshooting, and resolving software defects.",
			"Collaborated with the development team to improve application functionality, user experience, and overall system stability.",
		],
	},
	{
		"year": "2021 -  2022",
		"role": "Web Developer",
		"company": "MET Philippines",
		"location_1": "2Quad Bldg, Cardinal Rosales Ave",
		"location_2": "Cebu City, PH",
		"description": "Worked on various web applications using PHP (Native, Laravel framework), WordPress, and MySQL.",
		"additional_description": [
			"Developed and maintained web applications using native PHP, the Laravel framework, WordPress, and MySQL.",
			"Designed, implemented, and optimized application features while ensuring code quality, database performance, and system reliability.",
			"Collaborated on the development, testing, debugging, and deployment of web-based solutions tailored to client and business requirements.",
		],
	},
	{
		"year": "2019 -  2021",
		"role": "Software Developer",
		"company": "MedSpecialized, Inc.",
		"location_1": "2Quad Bldg, Cardinal Rosales Ave",
		"location_2": "Cebu City, PH",
		"description": "Worked on a Medical Software using PowerBuilder and other tools.",
		"additional_description": [
			"Contributed to the development and maintenance of a medical software application using PowerBuilder and supporting development tools.",
			"Implemented new features, resolved software defects, and performed application enhancements to improve system functionality and reliability.",
			"Collaborated with team members to test, debug, and maintain enterprise healthcare software solutions.",
		],
	},
	{
		"year": "2018 -  2019",
		"role": "Software / Web Developer",
		"company": "RightApps Solutions and Services",
		"location_1": "211 Natalio B. Bacalso Ave",
		"location_2": "Cebu City, PH",
		"description": "Worked on Reservation System, Accounting System, HR & Payroll System, Inventory System. Used C#, PHP (Laravel and CodeIgniter Framework), JavaScript (with libraries), and SQL (NoSQL, MySQL and PostgreSQL).",
		"additional_description": [
			"Developed and maintained enterprise business applications, including Reservation, Accounting, Human Resources & Payroll, and Inventory Management Systems.",
			"Implemented new features, enhanced existing functionality, and resolved software defects across multiple applications to improve performance, reliability, and user experience.",
			"Utilized C#, PHP (Laravel and CodeIgniter), JavaScript and its associated libraries, along with SQL and NoSQL databases, including MySQL and PostgreSQL, to build and support scalable business solutions.",
		],
	}
];

var myEducation = [
	{
		"year": "2015 - 2019",
		"university": "Cebu Technological University",
		"location": "Cebu City, PH",
		"degree": "Bachelor's",
		"background": "BS ICT",
		"background_long": "Bachelor of Science in Information and Communication Technology",
		// "description": "<strong>Bachelor of Science in Information and Communication Technology</strong>. My college journey was a whirlwind of discovery, from late-night study sessions to spontaneous adventures with friends, shaping me into who I am today. College was a rollercoaster ride of highs and lows, where I found my passions, forged lifelong bonds, and learned as much outside the classroom as within it.",
		"description": `<strong>Bachelor of Science in Information and Communication Technology</strong>. My college years provided a strong foundation in both technical knowledge and professional growth. Through academic projects, collaborative coursework, and hands-on software development, I strengthened my problem-solving abilities, adaptability, and passion for building reliable technology solutions. The experience challenged me to think critically, communicate effectively, and apply classroom concepts to real-world scenarios, preparing me for a career in software engineering.`,
		"additional_description": ``,
	},
	// {
	// 	"year": "2011 - 2015",
	// 	"university": "Talamban National High School",
	// 	"location": "Cebu City, PH",
	// 	"degree": null,
	// 	"background": null,
	// 	"description": null,
	// },
];

var mySkills = [
	"Web Development", "Software Development", "User Interface Design", "Full-stack Development"
];

// Raw list
var myLanguagesRaw = [
	{
		"name": "SQL",
		"long_name": "SQL (MySQL, PostgreSQL, SQLite, ElephantSQL, ADODB)",
		"backend": true,
	},
	{
		"name": "PHP",
		"long_name": "PHP (Native and Frameworks)",
		"backend": true,
		"backend_use": [
			"Laravel",
			"CodeIgniter",
			"CakePHP",
			"Symfony",
		],
	},
	{
		"name": "JavaScript",
		"long_name": "JavaScript (Native, Libraries and Frameworks)",
		"backend": true,
		"frontend": true,
		"frontend_use": [
			"Vanilla JS (Native)",
			"DataTables.js",
			"Chart.js",
			"jQuery",
			"htmx",
		],
		"backend_use": [
			"Express.js",
			"NextJS",
		],
	},
	{
		"name": "HTML",
		"long_name": "HTML",
		"frontend": true,
	},
	{
		"name": "CSS",
		"long_name": "CSS (Native and Frameworks)",
		"frontend": true,
	},
	{
		"name": "Python",
		"long_name": "Python (Jinja, Flask, SQLAlchemy, Selenium, and other modules...)",
		"backend": true,
	},
	{
		"name": "PowerBuilder",
		"long_name": "PowerBuilder",
		"desktop": true,
	},
	{
		"name": "C#",
		"long_name": "C# Programming Language",
		"desktop": true,
	},
	{
		"name": "VisualBasic",
		"long_name": "VisualBasic",
		"desktop": true,
	},
	{
		"name": "Java",
		"long_name": "Java",
		"desktop": true,
	},
	{
		"name": "C",
		"long_name": "C",
		"desktop": true,
	},
	{
		"name": "C++",
		"long_name": "C++",
		"desktop": true,
	},
];

var myLanguages = myLanguagesRaw.map(function(language) { return language["long_name"]; }),
	// get filters only, if want name only then `.map(function(language) { return language["name"]; })`
	myFrontends = myLanguagesRaw.filter(function(language) { return (language["frontend"]??false === true) }),
	myBackends = myLanguagesRaw.filter(function(language) { return (language["backend"]??false === true) }),
	myDesktops = myLanguagesRaw.filter(function(language) { return (language["desktop"]??false === true) }),
	myIndexUrls = myUrlsRaw.filter(function(url) { return (url["index"]??false === true); });

var myTools = ["Docker", "Git, Github", "Figma", "Canva"];

var myAPIs = ["REST API", "Webhook", "JSON Data Mapping", "Postman"];

var myMethodologies = ["Agile", "Scrum", "SDLC"];

var myBirtday = new Date("1999-02-20"),
	currentDate = new Date(),
	myAge = currentDate.getYear() - myBirtday.getYear();

var loadContents = {
	"experience": myExperiences,
	"education": myEducation,
	"skills": mySkills,
	"languages": myLanguages,
	"projects": myProjects,
	"frontends": myFrontends,
	"backends": myBackends,
	"desktops": myDesktops,
	"tools": myTools,
	"apis": myAPIs,
	"methodologies": myMethodologies,
	"urls": myIndexUrls,
	"allurls": myUrlsRaw,
};