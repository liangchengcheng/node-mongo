/**
 * Created by lcc on 16/1/25.
 */
var mongoose=require('mongoose');
require('./moudle');

var Book=mongoose.model('Book');

var book=new Book({
    name:"老王",
    author:"lcc",
    publishTime:new Date()
});

book.author='Jim';
book.save(function(err){
    console.log(err);
});