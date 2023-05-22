const mongoose = require('mongoose');
const mongoURI = "mongodb://0.0.0.0:27017/inotebook?directConnection=true&readPreference=primary&tls=false"
const connectToMongo = () =>{
    mongoose.connect(mongoURI, {useNewUrlParser: true,
        useUnifiedTopology: true});
}
module.exports = connectToMongo;