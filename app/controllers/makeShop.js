// LISTES DES PRODUITS
// On set la liste des produits
var listProducts = [
	{
		checked: {
			myID : 0,
			value : false
		},
		product: {
			text : "Carotte"
		}
	},
	{
		checked: {
			myID : 1,
			value : false
		},
		product: {
			text : "Poulet"
		}
	},
	{
		checked: {
			myID : 2,
			value : false
		},
		product: {
			text : "Oeuf"
		}
	},
	{
		checked: {
			myID : 3,
			value : false
		},
		product: {
			text : "Bière"
		}
	},
	{
		checked: {
			myID : 4,
			value : false
		},
		product: {
			text : "Brocoli"
		}
	},
	{
		checked: {
			myID : 5,
			value : false
		},
		product: {
			text : "saucisson"
		}
	}
];


//var allProducts = Ti.App.Properties.setObject('allProducts', listProducts);
var allProducts = Ti.App.Properties.getObject('allProducts');
console.log(allProducts);
if (allProducts == null) {
	allProducts = Ti.App.Properties.setObject('allProducts', listProducts);
};
$.elementsList.sections[0].setItems(allProducts);

function doSwitchMe(e) {
    console.log(e);
}


/* B O U T O N */
$.validateProducts.addEventListener('click', function(e) {
	// TODO : On sauvegarde les produits sélectionnés

	var indexView = Alloy.createController('index').getView();
	indexView.open();
});

$.createProduct.addEventListener('click', function(e) {
	var createProductView = Alloy.createController('createProduct').getView();
	createProductView.open();
});

$.makeShop.open();