// Synopsis:
// I wrote a cleanFlightData function that takes the raw flight strings and processes them through a clean pipeline.
// First, I used .map() to parse each string by splitting on ":" to separate the route from the price, then splitting the route again on "-" to get the from and to cities. I used destructuring with default values so missing segments don't cause crashes.
// For price coercion, I chose Number() over parseInt deliberately — parseInt("invalid") can silently return partial results, while Number() correctly returns NaN for anything invalid. I then used isNaN() to catch that and default to 0.
// After parsing, I used .filter() to keep only flights where price falls between $100 and $500 inclusive. I then spread into a new array before sorting — [...filtered].sort() — because Array.prototype.sort mutates in place, and I didn't want to modify the filtered array.
// Finally, I returned the result as a JSON string using JSON.stringify.