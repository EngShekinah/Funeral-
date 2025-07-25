const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  deceased: { type: mongoose.Schema.Types.ObjectId, ref: 'Deceased', required: true },
  serviceDate: { type: Date, required: true },
  services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }],
  staff: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  status: { type: String, enum: ['pending', 'confirmed', 'completed', 'cancelled'], default: 'pending' },
  notes: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);