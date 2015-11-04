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


var doShopListArray = [];
/*
	{
		cart: {
			myID : 5,
			value : false
		},
		product: {
			text : "Carotte"
		}
	}
*/

/***** 
	PROPERTIES FOR DOSHOP
					******/
//var doShopList = Ti.App.Properties.setObject('doShopList', doShopListArray);
var doShopList = Ti.App.Properties.getObject('doShopList');
console.log(doShopList);
if (doShopList == null) {
	doShopList = Ti.App.Properties.setObject('doShopList', doShopListArray);
};


/***** 
	PROPERTIES FOR MAKESHOP
					******/

//var allProducts = Ti.App.Properties.setObject('allProducts', listProducts);
var allProducts = Ti.App.Properties.getObject('allProducts');
if (allProducts == null) {
	allProducts = Ti.App.Properties.setObject('allProducts', listProducts);
};
$.elementsList.sections[0].setItems(allProducts);

$.elementsList.addEventListener('itemclick', function(e) {
	//console.log(e);

	if (e.source.apiName === 'Ti.UI.Switch') {
		for (var key in allProducts) {
			if (key == e.itemIndex) {
				if (allProducts[key].checked.value == true) {
					allProducts[key].checked.value = false;
					for (var i in doShopList) {
						if (doShopList[i].cart.myID === allProducts[key].checked.myID) {
							doShopList.splice(i, 1);
						};
					}
				} else {
					allProducts[key].checked.value = true;
					doShopList.push({
						cart: {
							myID : allProducts[key].checked.myID,
							value : false
						},
						product: {
							text : allProducts[key].product.text
						}
					});
				};
				Ti.App.Properties.setObject('allProducts', allProducts);
				Ti.App.Properties.setObject('doShopList', doShopList);
				break;
			};
		}
	};
});

/* B O U T O N */
$.validateProducts.addEventListener('click', function(e) {
	var indexView = Alloy.createController('index').getView();
	indexView.open();
});

$.createProduct.addEventListener('click', function(e) {
	var createProductView = Alloy.createController('createProduct').getView();
	createProductView.open();
});
