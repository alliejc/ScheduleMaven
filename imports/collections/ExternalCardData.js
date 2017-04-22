import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const ExternalCardData = new Mongo.Collection('externalcarddata');

const ExternalCardDataSchema = new SimpleSchema({
  hours: {
    type: Number,
    optional: true,
  },
  minutes: {
    type: Number,
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
  userId: {
    type: String,
    optional: true,
  },
  date: {
    type: Date,
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
  },
});

ExternalCardData.attachSchema(ExternalCardDataSchema);
export { ExternalCardData as default };
