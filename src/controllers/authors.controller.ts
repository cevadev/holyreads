import { Controller, Get, Param } from '@nestjs/common';

@Controller('authors')
export class AuthorsController {
  @Get()
  getAuthors() {
    return 'Authors list';
  }

  @Get(':id')
  getAuthor(@Param('id') authorId: number) {
    return `Author ${authorId}`;
  }
}
