var express = require('express');
var app = express();
var mongoose = require('mongoose');

//connect to the bookAPI database 
var db = mongoose.connect('mongodb://localhost/bookAPI');

var bodyParser = require('body-parser');

app.use(express.static('public'));

//Book is the Mongoose model we'll use for our data
var Book = require('./models/bookModel');

app.get('/books', function(request, response){
	 //find is a mongoose method that returns all records
	Book.find(function(error, books){
		if(error){
			response.status(500).send(error);
		}else{
			response.json(books);
		}
	});
})

app.get('/books/:bookId',function(request, response){
	//findById is another method provided by Mongoose
	Book.findById(request.params.bookId, function(error, book){
		if(error){
			response.status(500).send(error);
		}else{
			response.json(book);
		}
	});
	
});