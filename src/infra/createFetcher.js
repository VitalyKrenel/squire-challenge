const createFetcher = (prefix = '') => ({
  get: async (path) => {
    const response = await fetch(prefix.concat(path));

    if (!response.ok) {
      throw new Error('Response status code was beyond 200-299 range');
    }

    const data = response.json();

    return data;
  },
});

export { createFetcher };
