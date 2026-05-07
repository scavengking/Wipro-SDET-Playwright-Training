// ─── Question 3: Movie Stream Analytics ─────────────────────────────

const rawMovies = [
  "Inception|Sci-Fi|12000",
  "The Lion King|Animation|8000",
  "Mad Max|Action|invalid",
  "The Matrix|Sci-Fi|15000",
  "Gladiator|Action|4500",
];

function analyzeMovies(movies) {
  // 1. Parse each string into a structured object
  const parsed = movies.map((entry) => {
    if (!entry || typeof entry !== "string") {
      return { name: "", genre: "", views: 0 };
    }

    const [name = "", genre = "", rawViews] = entry.split("|");

    // 2. Coerce views to Number; default to 0 if invalid
    const views = Number(rawViews);
    return {
      name:  name.trim(),
      genre: genre.trim(),
      views: isNaN(views) ? 0 : views,
    };
  });

  // 3. Filter: Action or Sci-Fi with more than 5,000 views
  const filtered = parsed.filter(({ genre, views }) =>
    (genre === "Action" || genre === "Sci-Fi") && views > 5000
  );

  // 4. Sort by views descending (highest first)
  const sorted = [...filtered].sort((a, b) => b.views - a.views);

  // 5. Return as JSON string
  return JSON.stringify(sorted, null, 2);
}

const result = analyzeMovies(rawMovies);
console.log(result);


// Synopsis:

// I wrote an analyzeMovies function that processes the raw strings through the same pipeline pattern as Question 1, but adapted for movies.
// I split each string on "|" instead of ":" and destructured all three parts — name, genre, and rawViews — in one go. I used Number() with an isNaN() fallback to coerce views safely, so corrupted entries like "invalid" default to 0 instead of breaking the pipeline.
// For filtering, I used a combined condition — genre === "Action" || genre === "Sci-Fi" alongside views > 5000 — so both checks happen in a single .filter() pass. The sort is descending this time, so I flipped the comparator to b.views - a.views instead of a - b. I spread into a new array before sorting to keep the filtered array untouched.