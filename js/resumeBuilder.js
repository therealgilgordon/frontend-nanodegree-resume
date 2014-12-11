//My Data
var bio = {
	"name" 			: "Gil Gordon",
	"role" 			: "Product Manager",
	"contacts" 		: {
		"mobile number"    	: "408-836-8147",
		"email"			: "gil.gordon@gmail.com",
		"github"		: "therealgilgordon",
		"twitter"		: "@gilgordon",
		"location"		: "San Mateo, CA"
	},
	"bioPic"	: "images/me.jpg",
	"welcomeMessage": "Welcome To my page. Why are you here?",
	"skills"		: [
		"All the things", 
		"I am aware of all Internet traditions",
		"HTML5",
		"Product Management",
		"Program Management"
	]
};

var work = {
	"jobs" : [
	{
		"employer" : "Sencha Inc.",
		"title": "Senior Product Manager - Tools",
		"location": "Redwood City, CA",
		"dates worked": "2012-2014",
		"description": "Managed product development of suite of HTML5 developer tools"
	},
		{
		"employer" : "Microsoft",
		"title": "Program Manager",
		"location": "Mountain View, CA",
		"dates worked": "1997-2007",
		"description": "Entered as QA contractor for Mac IE/OE. Then PM Lead for Mac Entourage. Then PM Lead on Hotmail Front End."
	}
	]
};

var projects = {
	"projects" : [
		{

			"title" : "Intro to Html and CSS",
			"dates worked" : "November 2014",
			"description" : "A little bit of Bootstrap",
			"images" :
			[
				"images/mug.png"
			]
		},
		{
			"title" : "JavaScript Basics",
			"dates worked" : "December 2014",
			"description" : "A little review",
			"images" :
			[
				"images/me.jpg",
				"images/me.jpg"
			]
		}
	]
};


var education = {
	"schools" : [
	{
		"name" : "UCLA",
		"city" : "Los Angeles, CA, US",
		"degree" : "BS",
		"majors"  : ["Cognitive Science"],
		"dates attended" : "1991-1995",
		"url" : "http://www.ucla.edu"
	}
	],
	"onlineCourses" : [
	{
		"school" : "uDacity",
		"city" : "online",
		"dates attended" : "2014-present",
		"title"  : "Front End Web Devloper NanoDegree"
	}
	]	
};

// define encapsulated display functions for each section
projects.display = function(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project]["dates worked"]);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description)
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0){
			for (image in projects.projects[project].images){
				var formattedImg = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImg);
			}
		}
	}
}

//display each section
projects.display();
