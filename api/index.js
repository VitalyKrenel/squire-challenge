// eslint-disable-next-line import/no-extraneous-dependencies
import { Server } from 'miragejs';

import { barbers } from './barbers';
import { services } from './services';

// eslint-disable-next-line no-new
new Server({
  routes() {
    this.namespace = 'api';

    this.get('/barbers/', () => barbers);
    this.get('/services/', () => services);
  },
});
