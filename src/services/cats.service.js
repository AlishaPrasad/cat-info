const BASE_URL = "https://api.thecatapi.com/v1/images/";
const API_KEY = "live_vUGgn0z9rP4gwzGap9BoanavCaOe0HzWhOXC8HzdjrlRQxJeGfLIBuR3rhpKlQTB"

export const getCatBreeds = async () => {
    const response = await fetch(`${BASE_URL}search?limit=15&has_breeds=1&api_key=${API_KEY}`);
    const data = await response.json();
    return data;
}

export const getBreedDetails = async (id) => {
    const response = await fetch(`${BASE_URL}${id}`);
    const data = await response.json();
    return data;
}