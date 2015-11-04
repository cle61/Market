var doShopList = Ti.App.Properties.getObject('doShopList');
if (doShopList == null) {
	var makeShopView = Alloy.createController('makeShop').getView();
	makeShopView.open();
};

$.elementsList.sections[0].setItems(doShopList);

$.elementsList.addEventListener('itemclick', function(e) {
	//console.log(e);

	if (e.source.apiName === 'Ti.UI.Switch') {
		for (var key in doShopList) {
			if (key == e.itemIndex) {
				if (doShopList[key].cart.value == true) {
					doShopList[key].cart.value = false;
				} else {
					doShopList[key].cart.value = true;
				};
				console.log(doShopList[key].cart.value);
				Ti.App.Properties.setObject('doShopList', doShopList);
				break;
			};
		}
	};
});

/* B O U T O N */
$.backMain.addEventListener('click', function(e) {
	var indexView = Alloy.createController('index').getView();
	indexView.open();
});