const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  booking: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true },
  amount: { type: Number, required: true },
  paid: { type: Boolean, default: false },
  issuedAt: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Invoice', invoiceSchema);