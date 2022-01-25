import { Server } from 'boardgame.io/server';
import { TicTacToe } from './tictactoe';

const PORT = process.env.PORT || 8000;
const server = Server({
  games: [TicTacToe],
});

server.router.get('/custom', (ctx, next) => {
  ctx.body = 'Hello World!';
});

server.run(PORT, () => {
  console.log(`Serving at: http://localhost:${PORT}`);
});