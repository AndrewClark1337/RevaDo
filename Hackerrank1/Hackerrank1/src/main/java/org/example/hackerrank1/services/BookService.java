package org.example.hackerrank1.services;

import org.example.hackerrank1.objects.Book;
import org.example.hackerrank1.objects.BookDTO;
import org.example.hackerrank1.objects.SearchDTO;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.example.hackerrank1.repositories.BookRepository;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Service
public class BookService {

    public BookService(BookRepository  bookRepository,  ModelMapper modelMapper)
    {
        this.bookRepository = bookRepository;
        this.modelMapper = modelMapper;
    }
    @Autowired
    private BookRepository bookRepository;

    private ModelMapper modelMapper;

    public void insertBook(BookDTO bookDTO)
    {
            Book book = dtoToBook(bookDTO);
            System.out.println("Inserting book: "+book);
            bookRepository.saveAndFlush(book);



    }

    public List<Book> findAllBooks( String author, String genre)
    {
        if (genre.isEmpty() && author.isEmpty())
        {
            return this.bookRepository.findAll();
        }
        else if (genre.isEmpty())
        {
            return this.bookRepository.findAllByAuthor(author);
        }
        else if (author.isEmpty())
        {
            return this.bookRepository.findAllByGenre(genre);
        }
        else
        {
            return bookRepository.findAllByAuthorAndGenre(author, genre);
        }

    }
    Book dtoToBook(BookDTO bookDTO)
    {
        Book book = modelMapper.map(bookDTO, Book.class);
        return book;
    }


    public Book findBook(long id)
    {
        return bookRepository.findById(id);
    }
}
