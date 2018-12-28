var Task = require('./task');
var Repo = require('./taskRepository');

var task1 = new Task(Repo.get(1));
var task2 = new Task({name:'demo 2'});
var task3 = new Task({name:'demo 3'});
var task4 = new Task({name:'demo 4'});

task1.complete();
task2.save();
task3.save();
task4.save();
