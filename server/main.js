import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	Meteor.call('importTagnames', function (error, result) { });
});
