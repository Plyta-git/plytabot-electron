import tmi from 'tmi.js';

const client = new tmi.Client({
    options: { debug: true },
    connection: {
        secure: true,
        reconnect: true
    },
    channels: [ 'channel-to-join' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
    console.log(`${tags['display-name']}: ${message}`);
    // Teraz, zamiast wysyłać dane do IPC, wysyłamy je do głównego procesu za pomocą `process.send`.
    if (process.send) {
        process.send(`${tags['display-name']}: ${message}`);
    }
});
