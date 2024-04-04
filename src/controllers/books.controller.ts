import { Controller, Get, Query } from '@nestjs/common';

@Controller('books')
export class BooksController {
  @Get()
  getBooks(
    @Query('limit') limit = 10,
    @Query('offset') offset = 0,
    @Query('author') author: string,
  ) {
    return `books limit=> ${limit} offset=> ${offset} author= ${author}`;
  }

  @Get(':id')
  getBookById() {
    return '';
  }
}
