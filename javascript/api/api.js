async function fetchData(category) {
  const url = `https://knassbani2.execute-api.us-east-2.amazonaws.com/events/${category}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export {fetchData}