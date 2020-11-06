const IntlFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
});

const asDollars = (amountInCents) => IntlFormatter.format(amountInCents / 100);

export { asDollars };
