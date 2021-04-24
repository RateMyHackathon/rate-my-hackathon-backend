// routes/api/reviews.js

const express = require('express');
const router = express.Router();

// Load Review model
const Review = require('../../models/Review');

// @route GET api/reviews/test
// @description tests reviews route
// @access Public
router.get('/test', (req, res) => res.send('Review route testing!'));

// @route GET api/reviews
// @description Get all reviews
// @access Public
router.get('/', (req, res) => {
  Review.find()
    .then(reviews => res.json(reviews))
    .catch(err => res.status(404).json({ noreviewsfound: 'No Reviews found' }));
});

// @route GET api/reviews/:id
// @description Get single review by id
// @access Public
router.get('/:id', (req, res) => {
  Review.findById(req.params.id)
    .then(review => res.json(review))
    .catch(err => res.status(404).json({ noreviewfound: 'No Review found' }));
});

// @route GET api/reviews
// @description add/save review
// @access Public
router.post('/', (req, res) => {
  Review.create(req.body)
    .then(review => res.json({ msg: 'Review added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this review' }));
});

// @route GET api/reviews/:id
// @description Update review
// @access Public
router.put('/:id', (req, res) => {
  Review.findByIdAndUpdate(req.params.id, req.body)
    .then(review => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/reviews/:id
// @description Delete review by id
// @access Public
router.delete('/:id', (req, res) => {
  Review.findByIdAndRemove(req.params.id, req.body)
    .then(review => res.json({ mgs: 'Review entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a review' }));
});

module.exports = router;