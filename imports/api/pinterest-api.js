import request from 'superagent-bluebird-promise';
import CardData from '/imports/collections/CardData';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';

BigCalendar.momentLocalizer(moment);

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

    postPin: () => {
        let currentTime = moment().format("MM-DD-YYYY HH:mm"); // ex. 02-20-2017, 13:44
        // let currentTime = new Date().toLocaleString(); //ex. "09/08/2014, 2:35:56 AM"
        console.log(currentTime);

        let scheduleDate = CardData.find({}).fetch();
        console.log(scheduleDate);

        // let cardList = CardData.find( { processed: { $exists: false } } ).fetch();
        // let cardList = CardData.find({$and: [ { date: { $lte: currentTime } }, { processed: { $exists: false }} ] } ).fetch();
        // console.log(cardList);
        // // console.log(CardData.find({}).fetch());
        // let promiseList = cardList.map(item => ({ _id: item._id, board: item.board, note: item.note, link: item.link, image_url: item.image_url}));
        // Promise.combine(promiseList);
        // return request.post('https://api.pinterest.com/v1/pins/')
        //     .query({
        //         access_token: Meteor.user().services.pinterest.accessToken})
        //     .send({board: board, note: note, link: link, image_url: image_url})
        // CardData.update(_id: whatever, processed:true);
    },


});








