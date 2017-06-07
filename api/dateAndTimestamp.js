const getDateAndTimestamp = (input) => {
  const date = new Date(input);
  let unixTime = 0;
  let naturalDate = '';

  // match if input only contains numbers
  if (input.match(/^[0-9]/g)) {
    unixTime = parseInt(input);
    const dateStr = new Date(unixTime * 1000);
    naturalDate = formatDate(dateStr);
  } else if (isNaN(date)){
    return null;
  } else {
    unixTime = date.getTime() / 1000;
    naturalDate = formatDate(date);
  }

  const results = {
    naturalDate,
    unixTime
  };
  return results;
};

const formatDate = (dateStr) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December'];
  const year = dateStr.getFullYear();
  const month = months[dateStr.getMonth()];
  const date = dateStr.getDate();
  return `${month} ${date}, ${year}`;
};

module.exports.getDateAndTimestamp = getDateAndTimestamp;
