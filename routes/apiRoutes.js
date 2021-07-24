const Workout = require("../models/workout");
const app = require("express").Router();

// module.exports = function (app) {
app.get("/api/workouts", function (req, res) {
  console.log("get");
  Workout.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post("/api/workouts", function (req, res) {
  console.log("post");
  Workout.create({})
    .then((data) => res.json(data))
    .catch((err) => {
      res.json(err);
    });
});

app.get("/api/workouts/range", function (req, res) {
  console.log("get range");
  Workout.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post("/api/workouts/range", function (req, res) {
  console.log("post range");
  Workout.create({})
    .then((data) => res.json(data))
    .catch((err) => {
      res.json(err);
    });
});

app.put("/api/workouts/:id", ({ body, params }, res) => {
  console.log("put id");
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then((data) => res.json(data))
    .catch((err) => {
      res.json(err);
    });
});
module.exports = app;
// };
