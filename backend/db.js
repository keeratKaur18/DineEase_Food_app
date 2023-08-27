const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://keeratjassal2002:desj6JR3AaxqnUXR@cluster0.t7btzsw.mongodb.net/food_category?retryWrites=true&w=majority'
const mongoDB = async () => {

    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("---", err)
        else {
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("sample2_item");
            fetched_data.find({}).toArray(async function (err, data) {
                const foodCategory = await mongoose.connection.db.collection("sample");
                foodCategory.find({}).toArray(function (err, catData) {
                    if (err) console.log(err);
                    else {
                        global.food_items = data;
                        global.foodCategory = catData;

                    }
                })

                // if(err) console.log(err);
                // else{
                //     global.food_items = data;

                // } 
            })
        }
    });
}
module.exports = mongoDB;