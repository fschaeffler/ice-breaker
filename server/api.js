Meteor.methods({
    updatePosition: function (latitude, longitude) {
        if (this.userId) {
            Meteor.users.update(
                { _id: this.userId },
                { $set :
                    {
                        'positionLat': latitude,
                        'positionLng': longitude,
                        'positionUpdatedAt': Date.now()
                    }
                }
            );

            var logMessage = sprintf(
                'user %s updated its position to lat: %f lng: %f',
                getUserEmail,
                latitude,
                longitude
            );

            console.log(logMessage);
        }
        else {
            console.log('user not-authorized');
            throw new Meteor.Error('not-authorized');
        }
    },
    updateDisplayName: function (displayName) {
        if (this.userId) {
            Meteor.users.update(
                { _id: this.userId },
                { $set :
                    { 'displayName': displayName }
                }
            );

            var logMessage = sprintf(
                'user %s updated its display name to %s',
                getUserEmail,
                displayName
            );

            console.log(logMessage);
        }
        else {
            console.log('user not-authorized');
            throw new Meteor.Error('not-authorized');
        }
    },
    updateHaves: function (haves) {
        if (this.userId) {
            Meteor.users.update(
                { _id: this.userId },
                { $set :
                    { 'haves': haves }
                }
            );

            var logMessage = sprintf(
                'user %s updated its haves to %s',
                getUserEmail,
                displayName
            );

            console.log(logMessage);
        }
        else {
            console.log('user not-authorized');
            throw new Meteor.Error('not-authorized');
        }
    },
    search: function (wants) {
        var result = [];

        Meteor.users.find({ }).fetch().forEach(function (user) {
            result.push({_id: user._id, displayName: user.displayName});
        });

        return result;
    },
    requestConversation: function (recieverUserId) {
        Requests.insert({sender: this.userId, receiver: recieverUserId});

        var logMessage = sprintf('User ID %s sent a conversation request to %s', this.userId, recieverUserId);
        console.log(logMessage);
    },
    sendMessage: function (recieverUserId, message) {
        Chats.insert({sender: this.userId, receiver: recieverUserId, message: message});

        var logMessage = sprintf('User ID %s sent the message %s to %s', this.userId, message, recieverUserId);
        console.log(logMessage);
    }
});