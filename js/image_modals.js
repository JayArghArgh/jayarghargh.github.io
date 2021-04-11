// Get the modal
const modal = document.getElementById("portfolio-modal");
const modal_images = ['image_1', 'image_2', 'image_3', 'image_4'];

// modal_images.forEach(function (value) {
// 	let img = $(`#${value}`);
// 	let modalImage = $('#modal_image');
// 	let captionText = $('#caption');
// 	img.click(function () {
// 		modal.style.display = "block";
// 		modalImage.src = img.attr('src');
// 		captionText.innerHTML = img.attr('alt');
// 	});
//
// });
let captionText = document.getElementById("caption");
let modalImg = document.getElementById("modal_image");

// Get the image and insert it inside the modal - use its "alt" text as a caption
// TODO This doesn't adhere to DRY (ran out of time!)
let img1 = document.getElementById("image_1");
const img1_text = "<h3>Emplectory!</h3><p>Search your employees, pat em down Ralph!</p>" +
  "<p>A React.js built website deployed on GitHub pages. Retrieves employees from API using Axios. Allows filtering and sorting.</p>";
img1.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = img1_text;
}


// let img1 = document.getElementById("image_1");
// const img1_text = "<h3>Hangry!</h3><p>A website created to pair foodies with food!</p>" +
//   "<p>Hangry was built using mobile first principles, and is powered by the Edamam.com API, JavaSCript, HTML, and jQuery.</p>";
// img1.onclick = function(){
// 	modal.style.display = "block";
// 	modalImg.src = this.src;
// 	captionText.innerHTML = img1_text;
// }

let img2 = document.getElementById("image_2");
const img2_text = "<h3><a href='http://www.bettibet.com' target='_blank' title='Betti!'>Betti!</a></h3><p>A website that lets you bet directly against a friend!</p>" +
  "<p>As part of a team I contributed to the ideation, design, frontend, and backend of this webapp. It is an ongoing development for which we are still excited about.</p>";
img2.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = img2_text;
}

let img3 = document.getElementById("image_3");
const img3_text = "<h3>Weather Dashboard</h3><p>Using the Google places and the OpenWeather API's," +
  " this dashboard shows weather forecasts for users desired locations.</p>" +
  "<p>The last ten searched locations are stored using local storage for easy revision of searches." +
  " The website can be switched between Celcius and Farenheit at the click of a button!</p>";
img3.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = img3_text;
}

let img4 = document.getElementById("image_4");
const img4_text = "<h3>Eat Da Burger!</h3><p>A full stack solution to a hungry persons problem... the Burger Bucket list :P</p>" +
  "<p>Using MySQL, an Object Relational Mapper, Express, Handlebars, HTML5, CSS, and Javascript - some might call this overkill, I call it perfection!" +
  " A \"Mobile First\" website to keep track of what you want to eat, and when you've eaten it.</p>"
img4.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = img4_text;
}
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}