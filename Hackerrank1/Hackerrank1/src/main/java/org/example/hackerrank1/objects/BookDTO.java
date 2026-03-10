package org.example.hackerrank1.objects;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor
public class BookDTO {
     String title;
     String author;
     String genre;
     int pages;
     int publishedYear;
}
