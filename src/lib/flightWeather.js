export const precipitationData = {
  Hanoi: {
    Jan: 1.9, Feb: 2.2, Mar: 4.6, Apr: 6.7, May: 12.2, Jun: 14.4, Jul: 16.3, Aug: 17.2, Sep: 12.6, Oct: 8.0, Nov: 4.2, Dec: 2.0,
  },
  "Ho Chi Minh City": {
    Jan: 0.9, Feb: 0.6, Mar: 1.6, Apr: 4.3, May: 11.7, Jun: 15.9, Jul: 16.7, Aug: 15.7, Sep: 16.6, Oct: 16.5, Nov: 8.4, Dec: 2.9,
  },
  "Da Nang": {
    Jan: 4.5, Feb: 1.8, Mar: 2.0, Apr: 3.2, May: 7.2, Jun: 7.2, Jul: 7.1, Aug: 10.8, Sep: 15.5, Oct: 18.3, Nov: 13.8, Dec: 9.7,
  },
  "Phu Quoc": {
    Jan: 2.0, Feb: 2.3, Mar: 5.2, Apr: 9.7, May: 15.8, Jun: 19.6, Jul: 21.3, Aug: 21.6, Sep: 20.6, Oct: 19.4, Nov: 11.0, Dec: 3.9,
  },
};

export const getRainColor = (probability) => {
  if (probability < 25)
    return "rgba(46, 204, 113, 0.7)";
  if (probability > 50)
    return "rgba(231, 76, 60, 0.7)";
  return "rgba(52, 152, 219, 0.7)";
};

export const getAllWeatherDestinationOptions = () =>
  Object.keys(precipitationData).map(key => ({
    value: key,
    label: key + ', Vietnam',
    country: 'Vietnam'
  })); 