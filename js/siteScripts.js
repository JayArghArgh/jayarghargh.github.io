"use strict";
const CONTACT = '?contact'

function loadAlways(){
	$("header").load("./html/header.html");
	$("footer").load("./html/footer.html");
	$(".portfolio").load("./html/portfolio.html");
}

function defaultAction(){
	$(".elevator").load("./html/elevator.html");
	$(".about").load("./html/about.html");
}

function loadContent() {
	let urlSearch;
	urlSearch = window.location.search;

	// Check where the uer is trying to go and send them there if it exists.
	if (urlSearch) {
		let workingDiv;
		urlSearch = urlSearch.split("=");
		workingDiv = $('.article');

		// Display a specific recipe.
		switch(urlSearch[0]) {
			case CONTACT:
				workingDiv.empty();
				$(workingDiv).load("./html/contact.html");
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