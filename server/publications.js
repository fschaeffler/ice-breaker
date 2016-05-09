Meteor.publish('tags', function () {
    if (this.userId) {
        return Tags.find();
    }
    else {
        console.log('user not-authorized');
        throw new Meteor.Error('not-authorized');
    }
});

Meteor.publish('requests', function () {
    if (this.userId) {
        return Requests.find({ receiverUserId: this.userId});
    }
    else {
        console.log('user not-authorized');
        throw new Meteor.Error('not-authorized');
    }
});

Meteor.publish('chats', function () {
    // if (this.userId) {
    //     return Requests.find($or: [
    //         { receiverUserId: this.userId },
    //     	{ senderUserId: this.userId }
    // 	]);
    // }
    // else {
    //     console.log('user not-authorized');
    //     throw new Meteor.Error('not-authorized');
    // }
});