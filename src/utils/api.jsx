
// import axios from "axios";

// const api = axios.create({
//   baseURL: "/api/v1",
// });

// export default api;
import axios from "axios";

const api = axios.create({
  baseURL: "/api/v1",
});

export function unwrapData(response) {
  let data = response?.data;

  while (
    data &&
    typeof data === "object" &&
    !Array.isArray(data) &&
    Object.prototype.hasOwnProperty.call(data, "data")
  ) {
    data = data.data;
  }

  return data;
}

export function toArray(value) {
  if (Array.isArray(value)) return value;
  if (Array.isArray(value?.data)) return value.data;
  if (Array.isArray(value?.items)) return value.items;
  if (Array.isArray(value?.results)) return value.results;
  return [];
}

export default api;