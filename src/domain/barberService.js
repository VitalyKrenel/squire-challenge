const findBarbersWithService = (barbers, service) => barbers.filter((barber) => (
  barber.services.find((s) => s.id === service.id)
));

const barberService = {
  findBarbersWithService,
};

export { barberService };
