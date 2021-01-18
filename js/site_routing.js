"use strict";

// Set some global constants so the page isn't littered with garbage.
// URL Location(s)
const LOC_CONTACT = '?contact'

// Main div we're adjusting the content in.
const WORKING_DIV = $('.article');

// Sections.
const SECTION_ELEVATOR = '<section id=elevator>';
const SECTION_ABOUT = '<section id=about>';
const SECTION_CONTACT = '<section id=contact>';
const SECTION_PORTFOLIO = '.portfolio';

// Pages containing content we'll be loading.
const PAGE_CONTACT = "./html/contact.html";
const PAGE_HEADER = "./html/header.html";
const PAGE_FOOTER = "./html/footer.html";
const PAGE_PORTFOLIO = "./html/portfolio.html";
const PAGE_ELEVATOR = "./html/elevator.html";
const PAGE_ABOUT = "./html/about.html";

// Functions
const loadAlways = function (){
	// Always load these.
	let portfolio = $(SECTION_PORTFOLIO);
	$("header").load(PAGE_HEADER);
	$("footer").load(PAGE_FOOTER);
	$(portfolio).load(PAGE_PORTFOLIO);
}

const defaultAction = function (){
	WORKING_DIV.empty();
	let elevator = $(SECTION_ELEVATOR);
	let aboutMe = $(SECTION_ABOUT);
	$(elevator).load(PAGE_ELEVATOR);
	$(aboutMe).load(PAGE_ABOUT);
	$(WORKING_DIV).append(elevator, aboutMe);
}

const loadContent = function () {
	let urlSearch;
	urlSearch = window.location.search;

	// Check where the uer is trying to go and send them there if it exists.
	if (urlSearch) {
		urlSearch = urlSearch.split("=");

		// Display a specific recipe.
		switch(urlSearch[0]) {
			case LOC_CONTACT:
				WORKING_DIV.empty();
				let contact = $(SECTION_CONTACT);
				$(contact).load(PAGE_CONTACT);
				$(WORKING_DIV).append(contact);
				break;
			default:
				// TODO add in a notifier to the user their match cold not be found.
				defaultAction();
		}

	} else {
		// Default to the main page - simply shows a couple of random images.
		defaultAction();
	}
}

loadAlways();
loadContent();