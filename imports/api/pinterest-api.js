import request from 'superagent-bluebird-promise';

Meteor.methods({
    getBoards: () => {
        return request.get('https://api.pinterest.com/v1/me/boards/')
            .query({
                access_token: Meteor.user().services.pinterest.accessToken})
            .then((result) => result.body.data);
    },

    getBoardPins: (boardSpec) => {
        return request.get(`https://api.pinterest.com/v1/boards${boardSpec}pins/`)
            .query({
                access_token: Meteor.user().services.pinterest.accessToken,
                fields: 'id,image,metadata,original_link,note'
            })
            .then((result) => result.body.data);
    },

    postPin: (board, note, linkTo, image) => {
        return request.post('https://api.pinterest.com/v1/pins/')
            .query({
                access_token: Meteor.user().services.pinterest.accessToken})
            .send({board: 'board', note: 'note', link: 'linkTo', image_url: 'image'})
    },


});


