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
img1.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}

let img2 = document.getElementById("image_2");
img2.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}

let img3 = document.getElementById("image_3");
img3.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}

let img4 = document.getElementById("image_4");
img4.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}