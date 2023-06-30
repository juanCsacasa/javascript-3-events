
function formatDate(date) {
  const options = { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  const formattedDate = new Date(date).toLocaleString('en-US', options);
  return formattedDate;
}

function formatLocation(location) {
  return `${location.address} • ${location.city}, ${location.state}`;
}

function formatPrice(price) {
  if (price === 0) {
    return 'Free';
  } else {
    return '$' + price.toFixed(2);
  }
}

export {formatDate, formatLocation,formatPrice}