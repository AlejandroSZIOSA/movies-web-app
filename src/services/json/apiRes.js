import PRODUCTS_JSON from "./products.json";

export default function simulatePromiseWithJson(success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(PRODUCTS_JSON);
      } else {
        reject(new Error("Failed to fetch JSON data"));
      }
    }, 5000); // Simulate a 2-second delay
  });
}
