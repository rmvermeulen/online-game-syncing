import { Client } from 'colyseus.js';

const client = new Client('ws:localhost:2567');

// colyseus logs to stderr by default
// client.onError.add((error) => console.error(error));
client.onMessage.add((msg) => console.log({ msg }));
client.onOpen.add(() => {
  console.log('open!');
  client.getAvailableRooms('main', (rooms, error: any) => {
    if (error) {
      console.log('server error:', error.message);
      return;
    }
    console.log('got', rooms.length, 'rooms');
    rooms.forEach(({ roomId, clients, maxClients, metadata }) => {
      console.log({ roomId, clients, maxClients, metadata });
    });
  });
});

client.onClose.add(() => {
  console.log('disconnected...');
});

const room = client.join('main');
