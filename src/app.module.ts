import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './controllers/books.controller';
import { GenresController } from './controllers/genres.controller';
import { AuthorsController } from './controllers/authors.controller';
import { CartController } from './controllers/cart.controller';
import { UsersController } from './controllers/users.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    BooksController,
    GenresController,
    AuthorsController,
    CartController,
    UsersController,
  ],
  providers: [AppService],
})
export class AppModule {}
