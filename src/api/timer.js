var express = require('express')
var router = express.Router()
import Timer from '../models/todo';

// middleware that is specific to this router
// router.get('/', (req, res) => {
//     Timer.find(function(err, todo) {
//         res.send(todo);
//     }).lean().populate('user')
// });

//Get Timers by id
router.get('/:id', (req, res) => {
    Timer.findById(req.params.id, function(err, todo) {
        if(err) {
            res.status(422).json({errors: "" + err});
        } else {
            res.send(todo);
        }
    })
});

//Create Timers
router.post("", (req, res) => {
    let todo = new Timer(req.body);
    todo.save()
        .then(item => {
            res.status(200).json("item saved to database");
        })
        .catch(err => {
            res.status(422).json({errors: "" + err});
        });
});

//Batch Create Timers
router.post("/batch", (req, res) => {
    Timer.insertMany(req.body)
      .then(function (docs) {
          res.json(docs);
      })
      .catch(function (err) {
          res.status(500).send(err);
      });
});

//Update Timers
router.put('/:id', (req, res) => {
    Timer.findByIdAndUpdate(req.params.id, req.body, null, function(err) {
        if(err) {
            res.status(422).json({errors: "" + err});
        } else {
            res.json('Updated Successfully');
        }
    })
});

//Delete Timers
router.delete('/:id', (req, res) => {
    Timer.findByIdAndDelete(req.params.id, function(err) {
        if(err) {
            res.status(422).json({errors: "" + err});
        } else {
            res.json('Deleted Successfully');
        }
    })
});

//Batch Delete Timers
// router.post("/batch-delete", (req, res) => {
//     Timer.deleteMany({_id: { $in: req.body}})
//       .then(function (docs) {
//           res.json(docs);
//       })
//       .catch(function (err) {
//           res.status(500).send(err);
//       });
// });

module.exports = router
