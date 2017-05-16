import { createServer } from 'http';
import server from './server';

if (module.hot) {
  module.hot.accept('./server');
}


const port = process.env.PORT || 3000;

createServer(server)
.listen(port, () => console.log(`Server running on port ${port}`));
