import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const BoardPinData = new Mongo.Collection('boardpindata');

const BoardPinDataSchema = new SimpleSchema({
    title: {
        optional: true,
        type: String,
    },
    note: {
        optional: true,
        type: String,
    },
    image: {
        optional: true,
        type: String,
    },
    originalUrl: {
        optional: true,
        type: String,
    },
    pinLink: {
        optional: true,
        type: String,
    },
    id: {
        optional: true,
        type: Number,
    },
    width: {
        optional: true,
        type: Number,
    },
    height: {
        optional: true,
        type: Number,
    }
});

BoardPinData.attachSchema(BoardPinDataSchema);
export {BoardPinData as default};