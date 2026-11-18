import { Module } from '@nestjs/common';
import { PlacesController } from './places.controller';
import { PlacesService } from './places.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaceEntity } from './place.entity/place.entity';

@Module({
  // Kopplar PlaceEntity till databasen
  imports: [TypeOrmModule.forFeature([PlaceEntity])],

  // Hanterar kommande anrop
  controllers: [PlacesController],

  // Innehåller logiken för platser
  providers: [PlacesService],
})
export class PlacesModule {}