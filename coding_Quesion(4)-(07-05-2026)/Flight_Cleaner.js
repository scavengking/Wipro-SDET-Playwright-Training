// ─── Question 1: Flight Booking Data Cleaner ────────────────────────

const rawFlights = [
  "London-Paris:150",
  "New York-Tokyo:invalid",
  "Dubai-Mumbai:450",
  "Berlin-Rome:95",
];

function cleanFlightData(flights) {
  // 1. Parse each string into an object
  const parsed = flights.map((entry) => {
    if (!entry || typeof entry !== "string") {
      return { from: "", to: "", price: 0 };
    }

    const [route, rawPrice] = entry.split(":");
    const [from = "", to = ""] = (route ?? "").split("-");

    // 2. Coerce price to Number; default to 0 if invalid
    const price = Number(rawPrice);
    return { from: from.trim(), to: to.trim(), price: isNaN(price) ? 0 : price };
  });

  // 3. Filter: keep only flights priced $100–$500 (inclusive)
  const filtered = parsed.filter(({ price }) => price >= 100 && price <= 500);

  // 4. Sort by price ascending (cheapest first)
  const sorted = [...filtered].sort((a, b) => a.price - b.price);

  // 5. Return as JSON string
  return JSON.stringify(sorted, null, 2);
}

const result = cleanFlightData(rawFlights);
console.log(result);



// Synopsis:
// I wrote a cleanFlightData function that takes the raw flight strings and processes them through a clean pipeline.
// First, I used .map() to parse each string by splitting on ":" to separate the route from the price, then splitting the route again on "-" to get the from and to cities. I used destructuring with default values so missing segments don't cause crashes.
// For price coercion, I chose Number() over parseInt deliberately — parseInt("invalid") can silently return partial results, while Number() correctly returns NaN for anything invalid. I then used isNaN() to catch that and default to 0.
// After parsing, I used .filter() to keep only flights where price falls between $100 and $500 inclusive. I then spread into a new array before sorting — [...filtered].sort() — because Array.prototype.sort mutates in place, and I didn't want to modify the filtered array.
// Finally, I returned the result as a JSON string using JSON.stringify.