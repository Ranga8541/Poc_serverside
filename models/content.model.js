const mongoose= require('mongoose');
const Schema = mongoose.Schema;
const contentSchema = new Schema({
    title:{type: String, required: true, unique: true},
    description: {type: String, required: true}, 
    duration: {type: Number, required:true},
    date:{type:Date, required:true},
    cast:{type: String},
    producedBy:{type: String},
    director:{type: String},
    music:{type: String},
    language:{type: String}
},{
timestamps: true,
});

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;