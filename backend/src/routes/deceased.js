const express = require('express');
const Deceased = require('../models/Deceased');
const router = express.Router();

// Create
router.post('/', async (req, res, next) => {
  try {
    const deceased = new Deceased({ ...req.body, createdBy: req.user.id });
    await deceased.save();
    res.status(201).json(deceased);
  } catch (err) {
    next(err);
  }
});

// Read all
router.get('/', async (req, res, next) => {
  try {
    const deceased = await Deceased.find().populate('createdBy', 'name email');
    res.json(deceased);
  } catch (err) {
    next(err);
  }
});

// Read one
router.get('/:id', async (req, res, next) => {
  try {
    const deceased = await Deceased.findById(req.params.id).populate('createdBy', 'name email');
    if (!deceased) return res.status(404).json({ error: 'Not found' });
    res.json(deceased);
  } catch (err) {
    next(err);
  }
});

// Update
router.put('/:id', async (req, res, next) => {
  try {
    const deceased = await Deceased.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!deceased) return res.status(404).json({ error: 'Not found' });
    res.json(deceased);
  } catch (err) {
    next(err);
  }
});

// Delete
router.delete('/:id', async (req, res, next) => {
  try {
    const deceased = await Deceased.findByIdAndDelete(req.params.id);
    if (!deceased) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;