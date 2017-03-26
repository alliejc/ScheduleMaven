import { Meteor } from 'meteor/meteor';
import request from 'superagent-bluebird-promise';
import CardData from '../collections/carddata';

Meteor.methods({
  getBoards: () => {
    const user = Meteor.user();
    return request.get('https://api.pinterest.com/v1/me/boards/')
            .query({
              access_token: user.services.pinterest.accessToken })
            .then(result => result.body.data);
  },

  getBoardPins: (boardSpec) => {
    check(boardSpec, String);
    const user = Meteor.user();
    return request.get(`https://api.pinterest.com/v1/boards${boardSpec}pins/`)
            .query({
              access_token: user.services.pinterest.accessToken,
              fields: 'id,image,metadata,original_link,note',
            })
            .then(result => result.body.data);
  },

  postPin: () => {
    const currentTime = new Date();
    const cardList = CardData.find({ $and: [{ date: { $lte: currentTime } }, { processed: { $ne: true } }] }).fetch();
    const pinList = cardList.map(item => ({ _id: item._id, userId: item.userId, pin: { board: item.board, note: item.note, link: item.link, image_url: item.image_url } }));

    pinList.forEach((pin) => {
      const user = Meteor.users.findOne({ _id: pin.userId });
      return request.post('https://api.pinterest.com/v1/pins/')
                .query(`access_token=${user.services.pinterest.accessToken}`)
                .send(pin.pin)
                .then(Meteor.bindEnvironment(() => CardData.update(pin._id, { $set: { processed: true } })));
    });
  },
});

