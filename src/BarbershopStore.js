import { makeAutoObservable, flow } from 'mobx';

const IDLE = 'idle';
const LOADING = 'loading';

const BarbershopStore = class {
  barbers = [];
  services = [];
  state = IDLE;

  constructor() {
    makeAutoObservable(this);
  }

  startLoading() {
    this.state = LOADING;
  }

  finishLoading() {
    this.state = IDLE;
  }

  fetchBarbers = flow(function* fetchBarbers() {
    if (this.barbers.length) {
      return;
    }

    this.startLoading();

    try {
      const response = yield fetch('/api/barbers/');
      const barbers = yield response.json();

      this.barbers = barbers;
    } catch (e) {
      console.error(e);
    }

    this.finishLoading();
  });

  fetchServices = flow(function* fetchServices() {
    if (this.services.length) {
      return;
    }

    this.startLoading();

    try {
      const response = yield fetch('/api/services/');
      const services = yield response.json();

      this.services = services;
    } catch (e) {
      console.error(e);
    }

    this.finishLoading();
  });
};

const barbershopStore = new BarbershopStore();

export { barbershopStore };
