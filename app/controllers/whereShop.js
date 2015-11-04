var longitude;
var latitude;

Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
Titanium.Geolocation.distanceFilter = 10;
Titanium.Geolocation.getCurrentPosition(function(e)
{
    if (!e.success || e.error)
    {
        alert('error ' + JSON.stringify(e.error));
        return;
    }
    longitude = e.coords.longitude;
    latitude = e.coords.latitude;
    var altitude = e.coords.altitude;
    var heading = e.coords.heading;
    var accuracy = e.coords.accuracy;
    var speed = e.coords.speed;
    var timestamp = e.coords.timestamp;
    var altitudeAccuracy = e.coords.altitudeAccuracy;
});

var locationCallback = function(e)
{
    if (!e.success || e.error)
    {
        return;
    }

    var longitude = e.coords.longitude;
    var latitude = e.coords.latitude;
    var altitude = e.coords.altitude;
    var heading = e.coords.heading;
    var accuracy = e.coords.accuracy;
    var speed = e.coords.speed;
    var timestamp = e.coords.timestamp;
    var altitudeAccuracy = e.coords.altitudeAccuracy;

    setTimeout(function()
    {

    },100);

    // reverse geo
    Titanium.Geolocation.reverseGeocoder(latitude,longitude,function(evt)
    {
        if (evt.success) {
            var places = evt.places;
            if (places && places.length) {
                //reverseGeo.text = places[0].address;
                var place = places[0].address;
                alert("Current location "+place);
            } else {
                //reverseGeo.text = "No address found";
                alert("No address found");
            }
            //Ti.API.debug("reverse geolocation result = "+JSON.stringify(evt));
        }
        else {                
        }
    });

};
Titanium.Geolocation.addEventListener('location', locationCallback);

if (longitude == null && latitude == null) {
	var locale = {lat: 48.8534100, lng: 2.3488000};
} else {
	var locale = {lat: latitude, lng: longitude};
}


Ti.App.addEventListener('location', function(locale) 
{
    // Pass data to the webView
    webView.evalJS(locale);
});