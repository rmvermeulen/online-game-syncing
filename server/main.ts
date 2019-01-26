import { Client, Room, Server } from 'colyseus';
import { createServer } from 'http';

import { MainRoom } from './main-room';

const port = parseInt(process.env.PORT!) || 2567;

const gameServer = new Server({
  server: createServer(),
});
gameServer.listen(port);
console.log(`server listening on localhost:${port}`);

(async () => {
  const handler = await gameServer.register('main', MainRoom);
  handler
    .on('create', (room: Room) => console.log('room created:', room.roomId))
    .on('dispose', (room: Room) => console.log('room disposed:', room.roomId))
    .on('join', (room: Room, client: Client) =>
      console.log(client.id, 'joined', room.roomId),
    )
    .on('leave', (room: Room, client: Client) =>
      console.log(client.id, 'left', room.roomId),
    );
})().catch(console.error);

setInterval(
  () =>
    gameServer.matchMaker
      .getAllRooms('main')
      .then((rooms) => console.log(`all 'main' rooms:`, rooms)),
  10e3,
);
