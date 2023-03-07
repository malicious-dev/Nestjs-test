/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {
  public books: Book[] = [];

  addBookService(book: Book): string {
    book.id = uuidv4();
    this.books.push(book);
    return "Book added successfully";
  }

  getBooksService(): Book[] {
    return this.books;
  }

  getBookService(bookID: string): Book {
    return this.books.find((book) => book.id === bookID);
  }

  updateBookService(bookID: string, book: Book): string {
    const index = this.books.findIndex((book) => book.id === bookID);
    this.books[index] = book;
    return "Book updated successfully";
  }

  deleteBookService(bookID: string): string {
    const index = this.books.findIndex((book) => book.id === bookID);
    this.books.splice(index, 1);
    return "Book deleted successfully";
  }

  getBookByAuthorService(author: string): Book[] {
    return this.books.filter((book) => book.author === author);
  }

  getBookByTitleService(title: string): Book[] {
    return this.books.filter((book) => book.title === title);
  }


}