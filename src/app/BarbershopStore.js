import { makeAutoObservable, flow } from 'mobx';

import { barbershopApi } from '~/src/app/api/barbershopApi';

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

  get isLoading() {
    return this.state === LOADING;
  }

  fetchBarbers = flow(function* fetchBarbers() {
    if (this.barbers.length) {
      return;
    }

    this.startLoading();

    try {
      this.barbers = yield barbershopApi.fetchBarbers();
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
      this.services = yield barbershopApi.fetchServices();
    } catch (e) {
      console.error(e);
    }

    this.finishLoading();
  });
};

const barbershopStore = new BarbershopStore();

export { barbershopStore };
