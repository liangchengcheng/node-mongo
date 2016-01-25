/**
 * Created by lcc on 16/1/25.
 */
var mongoose=require('mongoose');
require('./moudle');

var Book=mongoose.model('Book');

var cond={
    $or:[
        {author:'jame'},
        {author:'jake'}
    ]
};
Book.find(cond,function(err,doc){
    if(err){
        console.log(err);
    }
    console.log(doc);
});