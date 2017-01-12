const express = require('express')
const router = express.Router();

const Post = require('../models/post');



// get all posts
router.get("/", function(req, res) {
   console.log("articles request");
  Post.find({})
   
   .exec(function(error, doc) {
    // Log any errors
    if (error) {
      console.log(error);
      res.send(error);
    }
    // Or send the doc to the browser as a json object
    else {
      console.log(doc);
      res.json(doc);
    }
  });
});



// Add a post
router.post("/", function(req, res) {
  console.log("post request");
  console.log("body",req.body);
  // Create a new note and pass the req.body to the entry
     
     var entry = new Post(req.body.post);

               // Now, save that entry to the db
                entry.save(function(err, doc) {
                    // Log any errors
                    if (err) {
                      console.log(err);
                      res.send(err);
                    }else { // Or log the doc
                    console.log(doc);
                    res.send(doc);
                    }
                });
    
 });


// Add comment to a post
router.post("/:id", function(req, res) {
  console.log(req.body);
  // Create a new note and pass the req.body to the entry
     
     // Associate the note with the article
      Post.findOneAndUpdate({
          "_id": req.params.id
        }, {
          $push: {
            "comments": req.body.comment
          }
        })
      .exec(function(err, doc1) {
        // Log any errors
        if (err) {
          console.log(err);
          res.send(err);
        }else {
          res.json(doc1);
        }
      });
    
 });



module.exports = router;

