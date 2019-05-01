const API = "http://127.0.0.1:5263";

export async function getCities() {
  const url = `${API}/api/city-list`;
  const config = {
    methods: "GET",
    headers: {
      Authorization: "Bearer ba721f9895d5cebe18697546d08580b3bd7faee8"
    }
  };
  try {
    const response = await fetch(url, config);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getCity(cityId) {
  const url = `${API}/api/weather/${cityId}`;
  const config = {
    methods: "GET",
    headers: {
      Authorization: "Bearer ba721f9895d5cebe18697546d08580b3bd7faee8"
    }
  };
  try {
    const response = await fetch(url, config);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}
