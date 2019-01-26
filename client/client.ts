import { Client } from 'colyseus.js';

const client = new Client('ws:localhost:2567');

client.onError.add(console.error);
client.onMessage.add(console.log);
client.onOpen.add(console.log);

client.getAvailableRooms('main', (rooms, err) => {
  if (err) {
    console.error(err);
  }
  console.log({ rooms });
  rooms.forEach((room) => {
    console.log(room.roomId);
    console.log(room.clients);
    console.log(room.maxClients);
    console.log(room.metadata);
  });
});

const room = client.join('main');
