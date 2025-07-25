const express = require('express');
const Invoice = require('../models/Invoice');
const router = express.Router();

// Create
router.post('/', async (req, res, next) => {
  try {
    const invoice = new Invoice(req.body);
    await invoice.save();
    res.status(201).json(invoice);
  } catch (err) {
    next(err);
  }
});

// Read all
router.get('/', async (req, res, next) => {
  try {
    const invoices = await Invoice.find().populate('booking');
    res.json(invoices);
  } catch (err) {
    next(err);
  }
});

// Read one
router.get('/:id', async (req, res, next) => {
  try {
    const invoice = await Invoice.findById(req.params.id).populate('booking');
    if (!invoice) return res.status(404).json({ error: 'Not found' });
    res.json(invoice);
  } catch (err) {
    next(err);
  }
});

// Update
router.put('/:id', async (req, res, next) => {
  try {
    const invoice = await Invoice.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!invoice) return res.status(404).json({ error: 'Not found' });
    res.json(invoice);
  } catch (err) {
    next(err);
  }
});

// Delete
router.delete('/:id', async (req, res, next) => {
  try {
    const invoice = await Invoice.findByIdAndDelete(req.params.id);
    if (!invoice) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;