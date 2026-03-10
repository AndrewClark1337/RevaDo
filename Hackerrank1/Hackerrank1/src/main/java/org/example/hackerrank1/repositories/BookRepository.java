package org.example.hackerrank1.repositories;

import org.example.hackerrank1.objects.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    <S extends Book> S saveAndFlush(S book);

    List<Book> findAll();
    Book findById(long id);
    List<Book> findAllByAuthorAndGenre(String author, String genre);
    List<Book> findAllByGenre(String genre);
    List<Book> findAllByAuthor(String author);

}
