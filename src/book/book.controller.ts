/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/book.dto";

@Controller()
export class BookController {

  constructor(private bookService: BookService) {

  }

  @Get("/books")
  getBooks(): Book[] {
    return this.bookService.getBooksService();
  }

  @Get("/books/:id")
  getBook(bookID: string): Book {
    return this.bookService.getBookService(bookID);
  }

  @Get("/books/author/:author")
  getBookByAuthor(author: string): Book[] {
    return this.bookService.getBookByAuthorService(author);
  }

  @Get("/books/title/:title")
  getBookByTitle(title: string): Book[] {
    return this.bookService.getBookByTitleService(title);
  }

  @Put("/books")
  addBook(@Body() book: Book): string {
    return this.bookService.addBookService(book);
  }

  @Delete("/books/:id")
  deleteBook(@Param("id") bookID: string): string {
    return this.bookService.deleteBookService(bookID);
  }

  @Post("/addBook")
  addBookPost(@Body() book: Book): string {
    return this.bookService.addBookService(book);
  }
};
