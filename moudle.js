/**
 * Created by lcc on 16/1/25.
 */
var mongoose=require('mongoose');
var uri='mongodb://username:password@hostname:port/databasename';
mongoose.connect(uri);

var BookSchema=new mongoose.Schema({
    name:String,
    author:String,
    publishTime:Date
});

mongoose.mobile('Book',BookSchema);
