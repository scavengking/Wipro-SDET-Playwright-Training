// ─── Question 2: E-Commerce Discount Applicator ─────────────────────

const cart = [
  { name: "Smartphone",  price: 800, category: "Electronics" },
  { name: "Toaster",      price: 50,  category: "Home"        },
  { name: "Headphones",   price: 250, category: "Electronics" },
  { name: "Monitor",      price: 150, category: "Electronics" },
];

// Callback: eligible if Electronics AND price > $200
const isEligible = (product) =>
  product?.category === "Electronics" && product?.price > 200;

function applyPromo(cart, promoCallback) {
  if (!Array.isArray(cart) || typeof promoCallback !== "function") {
    console.warn("Invalid arguments passed to applyPromo.");
    return [];
  }

  let discountedCount = 0;
  let totalSaving     = 0;

  const updatedCart = cart.map((item) => {
    if (!item || typeof item !== "object") return item;

    const eligible = promoCallback(item);

    if (eligible) {
      const saving    = item.price * 0.10;       // 10% off
      totalSaving    += saving;
      discountedCount++;
      return { ...item, price: item.price - saving, isDiscounted: true };
    }

    return { ...item, isDiscounted: false };
  });

  // Template literal summary log
  console.log(
    `Promotion applied! ${discountedCount} items were discounted for a total saving of $${totalSaving.toFixed(2)}.`
  );

  // Delayed return simulating server latency
  return new Promise((resolve) => {
    setTimeout(() => resolve(updatedCart), 1000);
  });
}

applyPromo(cart, isEligible).then((updated) => console.log(updated));


// Synopsis:
// I kept the isEligible callback separate from applyPromo so it stays independently testable and clean. The callback checks two conditions using optional chaining — product?.category === "Electronics" and product?.price > 200 — so it handles null or undefined items without throwing.
// Inside applyPromo, I used .map() to process every item. For eligible items, I used the spread operator to return a new object with the discounted price and isDiscounted: true, rather than mutating the original. For ineligible items, I still spread and added isDiscounted: false so every item in the final array has that property consistently.
// I tracked discountedCount and totalSaving as I mapped, then logged the summary using a template literal immediately after processing.
// For the delayed return, I wrapped setTimeout inside a Promise so the caller can properly await the result or chain .then() — a plain setTimeout without a Promise isn't awaitable and would be incorrect in modern JavaScript.
// I also added a guard at the top of applyPromo to validate that the arguments are an array and a function, so the function fails early with a clear warning rather than crashing inside the map.