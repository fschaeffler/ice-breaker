import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

// Template.hello.onCreated(function helloOnCreated () {
//   // counter starts at 0
//   startLocationTracking();
// });

// Template.hello.helpers({
//   counter () {
//     return Template.instance().counter.get();
//   },
// });

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
  },
});
