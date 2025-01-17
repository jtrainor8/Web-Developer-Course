const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log("connections open");
    })
    .catch( err => {
        console.log("oh no error");
        console.log(err);
    })


    const personSchema = new mongoose.Schema({
        first: String,
        last: String,
    })

    personSchema.virtual('fullName').get(function () {
        return `${this.first} ${this.last}`
    })

    personSchema.pre('save', async function() {
        this.first = 'yo';
        this.last = 'mama';
        console.log('about to save')
    })
    personSchema.post('save', async function() {
        console.log('done with save')
    })

    const Person = mongoose.model('Person', personSchema);

