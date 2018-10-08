const calculateDistancePoints = (distance, hillSize, kPoint) => {
  const hs = hillSize
  if (hs >= 1 && hs <= 109) {
      return (distance - kPoint)*2 + 60;
    }
    else if (hs >= 110 && hs <= 184) {
      return (distance - kPoint)*1.8 + 60;
    }
    else if (hs >= 185 && hs <= 240 ) {
      return (distance - kPoint)*1.2 + 120;
    }
    else return 'Please enter real hill size'
};

module.exports = calculateDistancePoints;
