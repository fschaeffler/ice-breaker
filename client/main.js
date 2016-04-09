import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.testButton.events({
  'click #test' (event, instance) {
    Meteor.call('search', 'fghjk', function (error, response) {
      console.log(response);
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

Template.settingsTags.onRendered(function () {
  var tags = Tags.find({ }).fetch();
  console.log(tags);

  // TODO: use tags from tags list
  $('#settingsTags').tagsinput({
    typeaheadjs: {
    name: 'tagnames',
    displayKey: 'name',
    valueKey: '_id',
    source: tags
    }
  });
});