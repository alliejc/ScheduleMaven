import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const CardData = new Mongo.Collection('carddata');

const CardDataSchema = new SimpleSchema({
    hours: {
        type: Number,
        optional: true,
    },
    minutes: {
        type: Number,
        optional: true,
    },
    ampm: {
        type: String,
        optional: true,
    },
    day: {
        type: Number,
        optional: true,
    },
    month: {
        type: Number,
        optional: true,
    },
    year: {
        type: Number,
        optional: true,
    },
    momentDateTime: {
      type: String,
        optional: true,
    },
    processed: {
        type: Boolean,
        optional: true,
    },
    destinationBoardLink: {
        type: String,
        optional: true,
    },
    destinationBoardTitle: {
        type: String,
        optional: true,
    },
    pinnedFromBoardSpec: {
        type: String,
        optional: true,
    },
    board: {
        type: String,
        optional: true,
    },
    note: {
        type: String,
        optional: true,
    },
    image_url: {
        type: String,
        optional: true,
    },
    link: {
        type: String,
        optional: true,
    }
});

CardData.attachSchema(CardDataSchema);
export {CardData as default};