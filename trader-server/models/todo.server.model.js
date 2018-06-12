import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  symbol: String,
  name: String,
  updatedOn: { type: Date, default: Date.now },
  data:[{
    DATE: Date,
    OPEN: Number,
    CLOSE: Number,
    HIGH: Number,
    LOW: Number,
    VOLUME: Number
  }]
}); 

export default mongoose.model('EntityData', Schema);
