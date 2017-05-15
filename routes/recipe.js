/**
 * Created by Sandeep on 01/06/14.
 */

var recipe=require('../models/recipe');
var express=require('express');

//configure routes

var router=express.Router();

router.route('/recipe')
    .get(function(req,res){
       Recipe.find(function(err,recipe){
           if(err)
                res.send(err);
           res.json(recipe);
       });
    })

    .post(function(req,res){
        var recipe=new Recipe(req.body);
        recipe.save(function(err){
            if(err)
                res.send(err);
            res.send({message:'recipe Added'});
        });
    });

router.route('/recipe/:id')
    .put(function(req,res){
        Recipe.findOne({_id:req.params.id},function(err,recipe){

            if(err)
                res.send(err);

           for(prop in req.body){
                recipe[prop]=req.body[prop];
           }

            // save the recipe
            recipe.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Recipe updated!' });
            });

        });
    })

    .get(function(req,res){
        Movie.findOne({_id:req.params.id},function(err,recipe) {
            if(err)
                res.send(err);

            res.json(recipe);
        });
    })

    .delete(function(req,res){
        Recipe.remove({
            _id: req.params.id
        }, function(err, movie) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports=router;
