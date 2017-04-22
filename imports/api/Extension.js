import { Meteor } from 'meteor/meteor';
import ExternalCardData from '../collections/ExternalCardData';

Meteor.methods({

  storeExternalPinItem: (info) => {
    check(info, Array);
    console.log('storeExternal - Meteor Method Server');
    return ExternalCardData.insert({ image_url: info.imageUrl, link: info.linkUrl, note: info.originalLink });
  },

});
