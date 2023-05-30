import * as tmi from 'tmi.js';

const client = new tmi.Client({
	channels: [ 'jaskol95' ]
});



client.connect();

client.on('message', (channel, tags, message, _self) => {
    if (process.send) {
        process.send({ channel, tags, message });
    }
});
