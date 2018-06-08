// ./express-server/controllers/todo.server.controller.js
//import mongoose from 'mongoose';
import {OPTIONS} from './nifty-50.const';
var https = require('https');

//import models
import Todo from '../models/todo.server.model';

const googleServer = 'https://www.google.com/finance/getprices';
export const getTodos = (req,res) => {
  console.log('CALLED.....');
  https.get(OPTIONS, (response)=> {
    response.setEncoding('utf8');
    console.log('result came');
    response.on('data', (data) => {
      console.log('BODY:', data);
    })
    response.on('end', function() {
      res.send('ok');
    })
    response.on('error', (e) => {
      console.error(`problem with request: ${e.message}`);
    });
  });
}

export const addTodo = (req,res) => {
  console.log(req.body);
  const newTodo = new Todo(req.body);
  newTodo.save((err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':'Todo added successfully',todo});
  })
}

export const updateTodo = (req,res) => {
  Todo.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error','error':err});
    }
    console.log(todo);
    return res.json({'success':true,'message':'Todo Updated Successfully',todo});
  })
}

export const getTodo = (req,res) => {
  Todo.find({_id:req.params.id}).exec((err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(todo.length){
      return res.json({'success':true,'message':'Todo fetched by id successfully',todo});
    }
    else{
      return res.json({'success':false,'message':'Todo with the given id not found'});
    }
  })
}

export const deleteTodo = (req,res) => {
  Todo.findByIdAndRemove(req.params.id, (err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':'Todo Deleted Successfully',todo});
  })
}
