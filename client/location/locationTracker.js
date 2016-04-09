var _updateGpsLocation = function () {
	console.log('updating gps location ...');

	var location = Geolocation.latLng();
	if (this.userId && location && location.lat && location.lng) {
		Meteor.call(
			'updatePosition',
			location.lat,
			location.lng
		);
	}
};

setInterval(_updateGpsLocation, 10000);