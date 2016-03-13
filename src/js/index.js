// Javascript Entry Point
import etsyData from './items';
import $ from 'jquery';



var productArray = etsyData.results;


// productArray.forEach(function(product) {
function paintings(product) {

	// Grab the img url
	var image = product.Images[0].url_170x135;
	// console.log(image);

	//Grab the price
	var price = product.price;
	// console.log(price);

	// Grab the seller
	var seller =product.Shop.shop_name;
	// console.log(seller);

	// Grab the title
	var titleOfProduct = product.title;
	// console.log(titleOfProduct);

	// Build my template

	return `
	<div class="productArray">
		<div class="box">
			<div class="product.Images">
				<img src="${image}" alt="${product.description}">
			</div>
			<div class="textbox">
				<div class="titleOfProduct">${product.title}></div>
				<div class="seller">${product.Shop.shop_name}</div>
				<div class="price">$${product.price} USD</div>
			</div>
			
			
		</div>
	</div>`;
}

productArray.forEach(function(product){
	$('.main').append(paintings(product));

	//Want to remove 25th item from array
	// $('.main').filter(<=23);
});

//when hover over box, display title



// var image = images.map(function(){
// 	return 
// })
//  function image(){
// 	var pic = document.Images[0].url_170x135;
// 	document.getElementbyId()
// }
// var painting = items.pic(){

// }

// var titles = results.title;
// var cost = results.price;
// var seller = name.Shop;


// function painting(pic) {
// 	var painting = pic.Images[0].url_170x135;
// 	// return firstPainting;
// }

// console.log(painting);