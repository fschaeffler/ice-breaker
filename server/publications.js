Meteor.publish('tags', function () {
    if (this.userId) {
        return Tags.find();
    }
    else {
        console.log('user not-authorized');
        throw new Meteor.Error('not-authorized');
    }
});