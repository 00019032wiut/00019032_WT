const fs = require("fs");
const path = require("path");

// Path to the JSON file that stores reviews
const dataFile = path.join(__dirname, "../data/reviews.json");

// Utility function to get reviews
function getReviews() {
  try {
    if (!fs.existsSync(dataFile)) {
      fs.writeFileSync(dataFile, JSON.stringify([]));
    }
    const data = fs.readFileSync(dataFile);
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    return [];
  }
}

// Utility function to save reviews
function saveReviews(reviews) {
  fs.writeFileSync(dataFile, JSON.stringify(reviews, null, 2));
}

// Generate a unique ID for each review
function generateId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

exports.listReviews = (req, res) => {
  const reviews = getReviews();
  // Render home page with list of reviews
  res.render("home", { reviews });
};

exports.newReviewForm = (req, res) => {
  res.render("newReview");
};

exports.createReview = (req, res) => {
  const { title, author, genre, reviewText } = req.body;
  if (!title || !author || !reviewText) {
    return res.render("newReview", {
      error: "Title, Author, and Review Text are required.",
    });
  }
  const reviews = getReviews();
  const newReview = {
    id: generateId(),
    title,
    author,
    genre: genre || "",
    reviewText,
  };
  reviews.push(newReview);
  saveReviews(reviews);
  res.redirect("/reviews");
};

exports.reviewDetail = (req, res) => {
  const reviews = getReviews();
  const review = reviews.find((r) => r.id === req.params.id);
  if (!review) {
    return res.status(404).send("Review not found");
  }
  res.render("reviewDetail", { review });
};

exports.editReviewForm = (req, res) => {
  const reviews = getReviews();
  const review = reviews.find((r) => r.id === req.params.id);
  if (!review) {
    return res.status(404).send("Review not found");
  }
  res.render("editReview", { review });
};

exports.updateReview = (req, res) => {
  const reviews = getReviews();
  const reviewIndex = reviews.findIndex((r) => r.id === req.params.id);
  if (reviewIndex === -1) {
    return res.status(404).send("Review not found");
  }
  const { title, author, genre, reviewText } = req.body;
  if (!title || !author || !reviewText) {
    return res.render("editReview", {
      review: reviews[reviewIndex],
      error: "Title, Author, and Review Text are required.",
    });
  }
  reviews[reviewIndex] = {
    id: req.params.id,
    title,
    author,
    genre: genre || "",
    reviewText,
  };
  saveReviews(reviews);
  res.redirect(`/reviews/${req.params.id}`);
};

exports.deleteReview = (req, res) => {
  let reviews = getReviews();
  reviews = reviews.filter((r) => r.id !== req.params.id);
  saveReviews(reviews);
  res.redirect("/reviews");
};
