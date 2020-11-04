import { makeAutoObservable } from 'mobx';

import { barbers } from '~/api/barbers';

const STEP_CHOOSE_BARBER = 'choose-barber-step';
const STEP_CHOOSE_SERVICE = 'choose-service-step';

const BookingStore = class {
  currentStep = STEP_CHOOSE_SERVICE;
  barber = barbers[0];
  service = barbers[0].services[0];

  constructor() {
    makeAutoObservable(this);
  }

  setStep(stepName) {
    this.currentStep = stepName;
  }

  setBarber(barber) {
    this.barber = barber;
  }

  setService(service) {
    this.service = service;
  }

  toServiceStep() {
    this.setStep(STEP_CHOOSE_SERVICE);
  }
};

const bookingStore = new BookingStore();

export { bookingStore, STEP_CHOOSE_BARBER, STEP_CHOOSE_SERVICE };
