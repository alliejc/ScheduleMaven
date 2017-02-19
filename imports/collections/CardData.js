import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const CardData = new Mongo.Collection('carddata');

const CardDataSchema = new SimpleSchema({
    hour: {
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
    pinToBoardSpec: {
        type: String,
        optional: true,
    },
    note: {
        type: String,
        optional: true,
    },
    image: {
        type: String,
        optional: true,
    },
    originalLink: {
        type: String,
        optional: true,
    }
});

CardData.attachSchema(CardDataSchema);
export {CardData as default};