// import express
const express = require('express')

// create router for express app using Router object
const router =  new express.Router()

const Book = require("../model/Book")
const booksController = require("../controllers/books-controller")

router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBook);
router.get("/:id",booksController.getById);
router.put("/:id",booksController.updateBook);
router.delete("/:id",booksController.deleteBook);

module.exports = router;