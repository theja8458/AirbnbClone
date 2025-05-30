const express = require("express");
const router  = express.Router({mergeParams: true});
const Review = require("../models/review.js"); 
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js"); 
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

//Reviews
// post
router.post("",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));

//Delete Review rote
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview));

module.exports = router;
