import { Server } from 'colyseus';
import { createServer } from 'http';

const port = parseInt(process.env.PORT!) || 3000;

const gameServer = new Server({
  server: createServer(),
}).listen(port);

console.log(`server listening on localhost:${port}`);
