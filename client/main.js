import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Session.setDefault('SessionSearchResults', []);

Template.searchButton.helpers({
	'SessionSearchResults': function () {
		return Session.get('SessionSearchResults');
	}
});

Template.searchButton.events({
  'click #searchButton' (event, instance) {
    Meteor.call('search', 'fghjk', function (error, response) {
      console.log(response);
      Session.set('SessionSearchResults', response);
    });
  },
});

Template.settings.events({
  'submit .settings-form' (event) {
    event.preventDefault();

    Meteor.call('updateDisplayName', $('#displayName').val(), function (error, response) {
      console.log(response);
    });

    console.log($('#settingsTags').find('span'));
  },
});

Template.searchResults.helpers({
    'searchResults': function () {
      Meteor.call('search', 'fghjk', function (error, response) {
      	// console.log(response);
        //
        // var test = Session.get('SearchResults');
        // console.log(test);
      });
    },
	'SessionSearchResults': function () {
		return Session.get('SessionSearchResults');
	}
});

// Template.settingsTags.onRendered(function () {
//   var tags = Tags.find({ }).fetch();
//   console.log(tags);

//   // TODO: use tags from tags list
//   $('#settingsTags').tagsinput({
//     typeaheadjs: {
//     name: 'tagnames',
//     displayKey: 'name',
//     valueKey: '_id',
//     source: tags
//     }
//   });
// });