// On set la liste des produits
/*
var items = [
	{properties : {title: "Hydrogen"} },
	{properties : {title: "Helium"} },
	{properties : {title: "Lithium"} },
	{properties : {title: "Beryllium"} },
	{properties : {title: "Boron"}	},
	{properties : {title: "Carbon"} },
	{properties : {title: "Nitrogen"}}
];
$.elementsList.sections[0].setItems(items);
*/

function doSwitchMe(e) {
    
}


/* B O U T O N */

$.validateProducts.addEventListener('click', function(e) {
	// TODO : On sauvegarde les produits sélectionnés

	var validateProductsView = Alloy.createController('validateProducts').getView();
	validateProductsView.open();
});

$.createProduct.addEventListener('click', function(e) {
	var createProductView = Alloy.createController('createProduct').getView();
	createProductView.open();
});

$.makeShop.open();