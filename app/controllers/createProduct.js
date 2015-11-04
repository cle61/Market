
$.addProduct.addEventListener('click', function(e) {

	if ($.textField.value != null) {
		// On enregistre dans la Properties AllProduct
		var allProducts = Ti.App.Properties.getObject('allProducts');
		allProducts.push({
			checked: {
				myID : allProducts.length,
				value : true
			},
			product: {
				text : $.textField.value
			}
		});
		Ti.App.Properties.setObject('allProducts', allProducts);

		// On enregistre dans la Properties doShopList
		var doShopList = Ti.App.Properties.getObject('doShopList');
		doShopList.push({
			cart: {
				myID : allProducts.length,
				value : false
			},
			product: {
				text : $.textField.value
			}
		});
		Ti.App.Properties.setObject('doShopList', doShopList);

		// On redirige vers la liste des produits
		var makeShopView = Alloy.createController('makeShop').getView();
		makeShopView.open();
	};
	
});