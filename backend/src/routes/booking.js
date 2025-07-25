const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

// Create
router.post('/', async (req, res, next) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    next(err);
  }
});

// Read all
router.get('/', async (req, res, next) => {
  try {
    const bookings = await Booking.find().populate('deceased').populate('services').populate('staff', 'name email');
    res.json(bookings);
  } catch (err) {
    next(err);
  }
});

// Read one
router.get('/:id', async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id).populate('deceased').populate('services').populate('staff', 'name email');
    if (!booking) return res.status(404).json({ error: 'Not found' });
    res.json(booking);
  } catch (err) {
    next(err);
  }
});

// Update
router.put('/:id', async (req, res, next) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!booking) return res.status(404).json({ error: 'Not found' });
    res.json(booking);
  } catch (err) {
    next(err);
  }
});

// Delete
router.delete('/:id', async (req, res, next) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;