import { makeAutoObservable } from 'mobx';

const STEP_CHOOSE_BARBER = 'choose-barber-step';
const STEP_CHOOSE_SERVICE = 'choose-service-step';

const BookingStore = class {
  currentStep = STEP_CHOOSE_BARBER;
  barber = null;
  service = null;

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
