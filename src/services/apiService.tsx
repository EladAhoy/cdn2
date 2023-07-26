import { FixMeLater } from "../types/general";

const BASE_URL = "http://localhost:3001/api/"; // Replace with your API base URL
const API_TOKEN = "c2f2b2f2-8b5a-4b5a-9b5a-5b5a6b5a7b5a"; // Replace with your actual API token

async function fetchApi({ endpoint='', options = {} }: FixMeLater) {
  const headers = {
    Authorization: `Bearer ${API_TOKEN}`,
    "Content-Type": "application/json"
  };

  const requestOptions = {
    ...options,
    headers: {
      ...headers,
      ...(options.headers || {}),
    },
  };

  const url = `${BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export const ApiService = {
  get: ({ endpoint }: FixMeLater) =>
    fetchApi({ endpoint, options: { method: "GET" } }),
  post: ({ endpoint, data }: FixMeLater) =>
    fetchApi({
      endpoint,
      options: { method: "POST", body: JSON.stringify(data) },
    }),
};
