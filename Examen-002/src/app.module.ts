import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FarmsModule } from './farms/farms.module';
import { AnimalsModule } from './animals/animals.module';
import { Farm } from './farms/entities/farm.entity';
import { Animal } from './animals/entities/animal.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Farm, Animal],
      synchronize: true,
    }),
    FarmsModule,
    AnimalsModule,
  ],
})
export class AppModule { }
