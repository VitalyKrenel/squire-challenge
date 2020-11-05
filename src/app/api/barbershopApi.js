import { createFetcher } from '~/src/infra/createFetcher';

const API_NAMESPACE = '/api';
const fetcher = createFetcher(API_NAMESPACE);

const fetchBarbers = async () => fetcher.get('/barbers/');
const fetchServices = async () => fetcher.get('/services/');

const barbershopApi = {
  fetchBarbers,
  fetchServices,
};

export { barbershopApi };
