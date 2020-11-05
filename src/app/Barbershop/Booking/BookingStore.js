import { makeAutoObservable } from 'mobx';

// TODO: Replace hardcoded (and potentially circular) dependency on barbershopStore
import { barbershopStore } from '~/src/app/Barbershop/BarbershopStore';
import { barberService } from '~/src/domain/barberService';

const STEP_CHOOSE_BARBER = 'choose-barber-step';
const STEP_CHOOSE_SERVICE = 'choose-service-step';

const BookingStore = class {
  currentStep = null;
  barber = null;
  service = null;
  barbershopStore = barbershopStore;

  constructor() {
    makeAutoObservable(this);
  }

  get hasBarber() {
    return this.barber !== null;
  }

  get hasService() {
    return this.service !== null;
  }

  get availableBarbers() {
    const { barbers } = this.barbershopStore;

    return this.hasService
      ? barberService.findBarbersWithService(barbers, this.service)
      : barbers;
  }

  get availableServices() {
    const { services } = barbershopStore;
    return this.hasBarber ? this.barber.services : services;
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
    if (this.service !== null) {
      return;
    }

    this.setStep(STEP_CHOOSE_SERVICE);
  }

  toBarberStep() {
    if (this.barber !== null) {
      return;
    }

    this.setStep(STEP_CHOOSE_BARBER);
  }
};

const bookingStore = new BookingStore();

export { bookingStore, STEP_CHOOSE_BARBER, STEP_CHOOSE_SERVICE };
