const router = require('express').Router();
let Customer = require('../models/customer.model');

router.route('/').get((req,res) => {
    Customer.find()
        .then(customers => res.json(customers))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const customername = req.body.customername;
    const newCustomer = new Customer({customername});

    newCustomer.save()
        .then(() => res.json('New customer added!'))
        .catch(err => res.status(400).json('Error: ', + err));
});

module.exports = router;