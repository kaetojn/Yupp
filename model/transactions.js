const mongoose = require('mongoose');
const Schema = mongoose.Schema

//Transaction Schema
const transactionSchema = new Schema({
	vendor: {type: String, required: true},
	amount: {type: String, required: true},
	date: {type: Date, required: true}
})

module.exports = Result = mongoose.model('transactions', transactionSchema);