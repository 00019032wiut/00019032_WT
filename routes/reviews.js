const express = require("express");
const router = express.Router();
const reviewsController = require("../controllers/reviewsController");

// List all reviews
router.get("/", reviewsController.listReviews);

// Display form to create a new review
router.get("/new", reviewsController.newReviewForm);

// Handle creation of a new review
router.post("/new", reviewsController.createReview);

// Display review details
router.get("/:id", reviewsController.reviewDetail);

// Display form to edit a review
router.get("/:id/edit", reviewsController.editReviewForm);

// Handle update of a review
router.post("/:id/edit", reviewsController.updateReview);

// Handle deletion of a review
router.post("/:id/delete", reviewsController.deleteReview);

module.exports = router;
