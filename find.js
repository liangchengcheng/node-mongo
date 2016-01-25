/**
 * Created by lcc on 16/1/25.
 */
var mongoose=require('mongoose');
require('./moudle');

var Book=mongoose.model('Book');

Book.find({},function(err,docs){
    if(err){
        console.log('err');
        return;
    }
});