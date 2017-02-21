import { Meteor } from 'meteor/meteor';
import '../imports/collections/CardData';
import { ServiceConfiguration } from 'meteor/service-configuration';
import httpProxy from 'http-proxy';
import '../imports/api/pinterest-api';

Meteor.startup(function() {
console.log("startup");
    httpProxy.createServer({
        target: {
            host: 'localhost',
            port: 3000
        },
        ws: true,
        ssl: {
            key: Assets.getText("server.key"),
            cert: Assets.getText("server.crt"),
            ca: Assets.getText("server.csr")
        }
    }).listen(3001);

    ServiceConfiguration.configurations.upsert({
        service: 'pinterest'
    }, {
        service: 'pinterest',
        scope: 'read_public, read_relationships, write_public, write_relationships',
        clientId: Meteor.settings.clientId,
        secret: Meteor.settings.secret
    });

    SyncedCron.add({
        name: 'Check for scheduled pin events',
        schedule: parser => parser.text('every 20 seconds'),
        job: () => Meteor.call('postPin'),
    });
    SyncedCron.start();
});

