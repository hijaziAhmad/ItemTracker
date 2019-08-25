const router = require('express').Router();
let Item = require('../models/item.model');

router.route('/').get((req,res) => {
    Item.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json('Error: ' + err));
});

//add new item
router.route('/add').post((req,res) => {
    const customername   = req.body.customername;
    const description   = req.body.description;
    const rno           = req.body.rno;
    const status        = req.body.status;
    const date          = Date.parse(req.body.date);

    const newItem = new Item({
        customername,
        description,
        rno,
        status,
        date,
    });

    newItem.save()
        .then(() => res.json('New item list added!'))
        .catch(err => res.status(400).json('Error: ', + err));
});

//seach by unique id
router.route('/:id').get((req, res) => {
    Item.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(400).json('Error: '+ err));
});

//delete by id
router.route('/:id').delete((req,res) => {
    Item.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Item deleted'))
    .catch(err => res.status(400).json('Error: '+ err));
});

//update by id
router.route('/update/:id').post((req, res) => {
    Item.findById(req.params.id)
    .then(item => {
        item.customername   = req.body.customername;
        item.description    = req.body.description;
        item.rno            = req.body.rno;
        item.status         = req.body.status;
        item.date           = Date.parse(req.body.date);

        item.save()
            .then(() => res.json('Item updated!'))
            .catch(err => res.status(400).json('Error: '+ err));
    })
    .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;