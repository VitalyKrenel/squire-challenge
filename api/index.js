import { Server } from 'miragejs';

import barbers from './barbers';
import services from './services';

new Server({
  routes() {
    this.namespace = 'api';

    this.get('/barbers/', () => barbers);
    this.get('/services/', () => services);
  }
});
