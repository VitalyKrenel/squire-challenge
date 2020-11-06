import formatDuration from 'date-fns/formatDuration';
import addMinutes from 'date-fns/addMinutes';
import intervalToDuration from 'date-fns/intervalToDuration';

const asHoursAndMinutes = (durationInMinutes) => {
  const now = Date.now();

  const duration = intervalToDuration({
    start: now,
    end: addMinutes(now, durationInMinutes),
  });

  const durationAsHrsAndMins = formatDuration(duration, {
    format: ['hours', 'minutes'],
  })
    .replace('hour', 'hr')
    .replace('minute', 'min');

  return durationAsHrsAndMins;
};

export { asHoursAndMinutes };
