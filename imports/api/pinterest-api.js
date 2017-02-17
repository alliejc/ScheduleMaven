import request from 'superagent-bluebird-promise';

Meteor.methods({
    getBoards: () => {
        console.log(Meteor.user());

        // return "testing";
        return request.get('https://api.pinterest.com/v1/me/boards/')
            .query(`access_token=${Meteor.user().services.pinterest.accessToken}`)
            .then((result) => result.body.data);

    }
});


