Meteor.methods({
    importTagnames: function () {
    	_importTagnames();
    }
});

var _importTagnames = function () {
	console.log('importing assets: tagnames');
	var tagnames = ['Coffee', 'Rock', 'Tennis', 'Developer', 'Designer', 'Translator', 'Math'];

	tagnames.forEach(function (tagname) {
		var existingTag = Tags.find({ name: tagname }).fetch();
		if (existingTag.length === 0) {
			console.log('importing tagname: ' + tagname);
			Tags.insert({name: tagname});
		}
	});
};