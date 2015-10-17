
$.doShop.addEventListener('click', function(e) {
	var doShopView = Alloy.createController('doShop').getView();
	doShopView.open();
});

$.makeShop.addEventListener('click', function(e) {
	var makeShopView = Alloy.createController('makeShop').getView();
	makeShopView.open();
});

$.whereShop.addEventListener('click', function(e) {
	var whereShopView = Alloy.createController('whereShop').getView();
	whereShopView.open();
});

$.index.open();
