/**
 * Created by lcc on 16/1/23.
 */
var express= require('express');
var router=express.Router();

router.all('/list',function(req,res){
    res.send('lljafuskfjklsdj');
});

router.get('/fb',function(req,res){
   res.status(403).send('---error---');
});

router.get('/tt',function(req,res){
    res.contentType('application/javascript');
    res.sendFile('/ok.js',{root:__dirname+'/../public'});

});

router.get('/mm',function(req,res){
    res.json({a:1,b:[true,'ok']});
});

module.exports=router;