const { PeerServer } = require('peer');

const port = process.env.PORT || 9000;

const peerServer = PeerServer({
  port: port,
  path: '/pda-mesh',
  allow_discovery: true
});

console.log(`Servidor P2P activo en el puerto ${port}`);
