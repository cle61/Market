
$.addProduct.addEventListener('click', function(e) {
	// TODO : On ajoute le produit

	if ($.textField.value != null) {
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
		console.log(allProducts);
		allProducts = Ti.App.Properties.setObject('allProducts', allProducts);
		console.log(allProducts);

		// On redirige vers la liste des produits
		var makeShopView = Alloy.createController('makeShop').getView();
		makeShopView.open();
	};
	
});

$.createProduct.open();