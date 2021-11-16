var mongoose  = require('mongoose');
var db = requie('../models'); 

mongoose.connect('mongoose://localhost/workout', {
    userNewUrlParser: true, 
    useFindAndModify:false,
})

db.Workouts.deleteMany({}).then(() => console.log('test'))