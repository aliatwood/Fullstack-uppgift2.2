import { PlacesService } from './places.service';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { Place } from './place/place';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Get()
  getAllPlaces() {
    return this.placesService.getAllPlaces();
  }

  @Post()
    createPlace(@Body() place: Place) {
        return this.placesService.createPlace(place);
    }
}