const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log("connections open");
    })
    .catch( err => {
        console.log("oh no error");
        console.log(err);
    })

    const productSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            maxlength: 20,
        },
        price: {
            type: Number,
            required: true,
            min: [0, 'price has to be positive dumbass']
        },
        onSale: { 
            type: Boolean,
            default: false
        },
        categories: [String],
        qty: {
            online: {
                type: Number,
                default: 0
            },
            inStore: {
                type: Number,
                default: 0
            }
        },
        size: {
            type: String,
            enum: ['S', 'M', 'L']
        }
            

    })

productSchema.methods.greet = function() {
    console.log('hello hi howdy.');
    console.log(`-- from ${this.name}.`)
}

productSchema.methods.toggleOnSale = function() {
    this.onSale = !this.onSale;
    return this.save;
}
productSchema.methods.addCategory = function(newCat) {
    this.categories.push(newCat);
    return this.save();
}


productSchema.statics.fireSale = function() {
    return this.updateMany({}, {onSale: true, price: 0})
}

const Product = mongoose.model('Product', productSchema);



//dummy method so we dont have to use the CLI 
const findProduct = async () => {
    const foundProduct = await Product.findOne({name: 'Mountain Bike'});
    console.log(foundProduct)
    await foundProduct.toggleOnSale();
    console.log(foundProduct);
    await foundProduct.addCategory('outdoors')
    console.log(foundProduct);

}
// findProduct();

Product.fireSale().then(res => console.log(res))



// const bike = new Product({name: 'bike shirt', price: 30.50, categories: ['cycling'], size: 'XS'});
// bike.save()
//     .then(data => {
//         console.log('it worked')
//         console.log(data);
//     })
//     .catch( err => {
//         console.log('error')
//         console.log(err)
//     })


// Product.findOneAndUpdate({name:'Tire Pump'}, {price: -10.99}, {new: true, runValidators: true})
//         .then(data => {
//             console.log('it worked')
//             console.log(data);
//         })
//         .catch( err => {
//             console.log('error')
//             console.log(err)
//         })