import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';
import httpProxy from 'http-proxy';
import '../imports/collections/CardData';
import '../imports/api/pinterest-api';

Meteor.startup(() => {
  console.log('startup');
  httpProxy.createServer({
    target: {
      host: 'localhost',
      port: 3000,
    },
    ws: true,
    ssl: {
      key: Assets.getText('server.key'),
      cert: Assets.getText('server.crt'),
      ca: Assets.getText('server.csr'),
    },
  }).listen(3001);

  const pinterestConfig = Meteor.settings.pinterest;
  ServiceConfiguration.configurations.upsert({
    service: 'pinterest',
  }, {
    $set: {
      service: 'pinterest',
      scope: 'read_public, read_relationships, write_public, write_relationships',
      clientId: pinterestConfig.clientId,
      secret: pinterestConfig.secret,
    },
  });


    // SyncedCron.add({
    //     name: 'Check for scheduled pin events',
    //     schedule: parser => parser.text('every 5 minutes'),
    //     job: () => Meteor.call('postPin'),
    // });
    // SyncedCron.start();
});

