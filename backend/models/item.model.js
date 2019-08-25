const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    customername:   {type: String, required: true},
    description:    {type: String, required: true},
    rno:            {type: String, required: true},
    status:         {type: String, required: true},
    date:           {type: Date, requred:true}
}, {
    timestamps:true,
});


const Item = mongoose.model('Item', customerSchema);
module.exports = Item;