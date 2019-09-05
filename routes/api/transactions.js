const express = require('express');
const router = express.Router();


//Transaction model
const Transaction = require('../../model/transactions')

//GET Main page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Yupp' });
});


//Show All Transactions
router.get('/trans', function(req, res) {

	Transaction.find()
		.then(result => res.json(result))
});


//Create New Transaction
router.post('/add', function(req, res) {
	const newTransaction = new Transaction({
		vendor: req.body.vendor,
		amount: req.body.amount,
		date: req.body.date
	});
	newTransaction.save().then(res.render('index', { title: 'Yupp' }));
});

//Delete transaction
router.post('/delete/:id', function(req, res) {
  Transaction.deleteOne({_id: req.params.id}, function(err, user) {
    if (err) {
      return res.send(err);
    }
    res.render('index', { title: 'Yupp' });
  });
});

module.exports = router 