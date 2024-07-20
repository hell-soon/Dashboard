async function getCityByCoordinates(lat: number, lon: number) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data && data.address) {
      const city = data.address.city
      console.log('City:', data);
      return city
    } else {
      console.log('City not found');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export default getCityByCoordinates
