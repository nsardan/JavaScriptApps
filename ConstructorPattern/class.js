'use strict'

class Task {
  constructor(name){
    this.name = name;
    this.completed = false;
  }

  complete(){
    console.log('Completing task: '+ this.name);
    this.completed = true;
  }

  save(){
    console.log('Saving task: '+ this.name);
  }

}

var task1 = new Task('demo 1');
var task2 = new Task('demo 2');
var task3 = new Task('demo 3');
var task4 = new Task('demo 4');

task1.complete();
task2.save();
task3.save();
task4.save();
