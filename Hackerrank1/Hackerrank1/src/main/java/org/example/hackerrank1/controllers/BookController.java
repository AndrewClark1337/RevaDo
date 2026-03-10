package org.example.hackerrank1.controllers;

import org.example.hackerrank1.objects.Book;
import org.example.hackerrank1.objects.BookDTO;
import org.example.hackerrank1.objects.SearchDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.example.hackerrank1.services.BookService;

import java.util.List;

@RestController
public class BookController {

    private final BookService bookService;
    public BookController(BookService bookService) {this.bookService = bookService;}

    @PostMapping("/books")
    public  ResponseEntity<String> createBook(@RequestBody BookDTO bookDTO)
    {


        try {
            System.out.println(bookDTO.toString());
            this.bookService.insertBook(bookDTO);

            return new ResponseEntity<>(HttpStatus.CREATED);
        }
        catch(Exception e)
        {
            System.out.println(e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
    @GetMapping("/books")
    public ResponseEntity<List<Book>> getAllBooks(@RequestParam String genre, @RequestParam String author)
    {
        System.out.println("author: "+ author+" genre: "+ genre);
        try{
            List<Book> books= this.bookService.findAllBooks(author, genre);
            return new ResponseEntity<List<Book>>(books, HttpStatus.OK);
        }
        catch(Exception e)
        {
            System.out.println(e.getMessage());
            return new ResponseEntity<List<Book>>( HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/books/{id}")
    public ResponseEntity<Book> getBook(@PathVariable Long id)
    {
        try{
            Book book = this.bookService.findBook(id);
            return new ResponseEntity<Book>(book, HttpStatus.OK);

        }
        catch(Exception e)
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/books/{id}")
    @PutMapping("/books/{id}")
    @PatchMapping("/books/{id}")
    public ResponseEntity<String> notAllowed(@PathVariable Long id)
    {
        return new ResponseEntity<>(HttpStatus.METHOD_NOT_ALLOWED);
    }

}
