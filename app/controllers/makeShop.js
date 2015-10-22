// LISTES DES PRODUITS
// On set la liste des produits
var listProducts = [
	{
		id : "switch_product",
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
//console.log(allProducts);
if (allProducts == null) {
	allProducts = Ti.App.Properties.setObject('allProducts', listProducts);
};
$.elementsList.sections[0].setItems(allProducts);

function doSwitchMe(e) {
    for (var key in allProducts) {
		if (key == e['itemIndex']) {
			if (allProducts[key].checked.value == true) {
				allProducts[key].checked.value = false;
			} else {
				allProducts[key].checked.value = true;
			};
			console.log(allProducts[key].checked.value);
			allProducts = Ti.App.Properties.setObject('allProducts', allProducts);
		};
	}
}

$.elementsList.addEventListener('itemclick', function(e) {
	// TODO ecouter e, vérifier que l'élement cliquer est un ti.ui.switch puis enregistrer la valeur
	console.log('test');
	console.log(e);
	console.log(new Date());
});

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