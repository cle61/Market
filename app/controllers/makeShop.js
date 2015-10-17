// LISTES DES PRODUITS
// On set la liste des produits
var listProducts = [
	{
		product: {
			text : "Carotte"
		},
		checked: {
			value : false
		}
	},
	{
		product: {
			text : "Poulet"
		},
		checked: {
			value : false
		}
	},
	{
		product: {
			text : "Oeuf"
		},
		checked: {
			value : false
		}
	},
	{
		product: {
			text : "Bière"
		},
		checked: {
			value : false
		}
	},
	{
		product: {
			text : "Brocoli"
		},
		checked: {
			value : false
		}
	},
	{
		product: {
			text : "saucisson"
		},
		checked: {
			value : false
		}
	}
];


//var allProducts = Ti.App.Properties.setObject('allProducts', listProducts);
var allProducts = Ti.App.Properties.getObject('allProducts');
console.log(allProducts);
$.elementsList.sections[0].setItems(allProducts);


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