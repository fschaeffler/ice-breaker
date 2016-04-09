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
    search: function (query) {
        var result = [];

        Meteor.users.find({ }).fetch().forEach(function (user) {
            result.push({_id: user._id, name: user.displayName});
        });

        return result;
    }
});