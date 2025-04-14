const API_URL = "https://skyscannerapi.com/flights?query=";

export const fetchFlights = async (criteria) => {
  try {
    const response = await fetch(`${API_URL}${criteria}`);
    if (!response.ok) {
      throw new Error("Failed to fetch flights");
    }
    const data = await response.json();
    return data.flights; // Adjust this based on actual API response
  } catch (error) {
    console.error("Error fetching flights:", error);
    return [];
  }
};
