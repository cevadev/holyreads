import { Controller, Get, Param } from '@nestjs/common';

@Controller('genres')
export class GenresController {
  @Get()
  getGenres() {
    return 'Genres List';
  }

  @Get(':name')
  getGenre(@Param('name') genreName: string) {
    return `Genre ${genreName}`;
  }
}
