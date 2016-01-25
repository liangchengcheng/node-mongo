/**
 * Created by lcc on 16/1/25.
 */
var mongoose=require('mongoose');
require('./moudle');

var Book=mongoose.model('Book');

Book.findOne({author:"老王"},function(err,doc){
    if(err){
        console.log(err);
        return;
    }
   if(doc){
       doc.remove();
   }
});