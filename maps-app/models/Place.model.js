const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema(
  {
    name: {
      type: String
    },
    type: {
      type: String,
      enum: ["coffee shop", "bookstore"]
    },

    location: {
      type: {
        type: String
      },
      coordinates: [Number]
    }
  },
  {
    timestamps: true
  }
)

// place.index({ location: '2dsphere' })


module.exports = mongoose.model('Place', placeSchema)