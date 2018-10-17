
const calculateStylePoints = (styleNotes) => {
  var sum = 0;
  const min = Math.min(...styleNotes);
  const max = Math.max(...styleNotes);
  for (let i=0; i < styleNotes.length; i++) {
    var result = (sum += styleNotes[i]);
    }
  return result - min - max;
};

module.exports = calculateStylePoints;
