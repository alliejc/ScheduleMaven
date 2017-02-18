import request from 'superagent-bluebird-promise';

Meteor.methods({
    getBoards: () => {
        return request.get('https://api.pinterest.com/v1/me/boards/')
            .query({ access_token: Meteor.user().services.pinterest.accessToken})
            .then((result) => result.body.data);
    },

    getBoardPins: (boardSpec) => {
        console.log("boardSpec Called");

        return request.get(`https://api.pinterest.com/v1/boards${boardSpec}pins/`)
            .query({ access_token: Meteor.user().services.pinterest.accessToken, fields: 'id,image,note,original_link'})
            .then((result) => result.body.data);
    }


});


