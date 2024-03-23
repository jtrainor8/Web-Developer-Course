const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')
    .then(() => {
        console.log("mongo connections open");
    })
    .catch( err => {
        console.log("oh no mongo connection error");
        console.log(err);
    })

const userSchema = new mongoose.Schema({
    figrst: String,
    last: String,
    addresses: [
        {
            _id: {_id: false},
            street: String,
            city: String, 
            state: String,
            country: String
        }
    ]
})

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User ({
        first: 'Harry',
        last: 'Potter',
    })
    u.addresses.push({
        street: '123 Sesame St.',
        city: 'New York',
        state: 'NY',
        contry: 'USA',
    })
    const res = await u.save()
    console.log(res)
}

const addAddress = async(id) => {
    const user = await User.findById(id);
    user.addresses.push({
        street: '99 third St.',
        city: 'New York',
        state: 'NY',
        contry: 'USA',
    })
    const res = await user.save()
    console.log(res);
}

addAddress('65bc0dba37d8bd6bd69de7df');
makeUser();
