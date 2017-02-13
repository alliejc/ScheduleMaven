import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const UserBoardData = new Mongo.Collection('userboarddata');

const UserBoardDataSchema = new SimpleSchema({

    title: {
        optional: true,
        type: String,
    },
    url: {
        optional: true,
        type: String,
    },
    id: {
        optional: true,
        type: Number,
    }

});

UserBoardData.attachSchema(UserBoardDataSchema);
export {UserBoardData as default};
