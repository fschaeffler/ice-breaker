var _updateGpsLocation = function () {
	console.log('updating gps location ...');

	if (Meteor.user()) {
		var location = Geolocation.latLng();

		if (location && location.lat && location.lng) {
			Meteor.call(
				'updatePosition',
				location.lat,
				location.lng,
				function (error, response) {
					if (error) {
						console.log(error);
					}
				}
			);
		}
		else {
			console.log("can't get any gps position");
		}
	}
	else {
		console.log('user not logged in');
	}
};

setInterval(_updateGpsLocation, 10000);