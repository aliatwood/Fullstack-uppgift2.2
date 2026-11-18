import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PlacesService } from './places.service';
import { CreatePlaceDto } from './dto/create-place.dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto/update-place.dto';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  // Hämtar alla platser
  @Get()
  getAllPlaces() {
    return this.placesService.getAllPlaces();
  }

  // Hämtar en plats med hjälp av ID
  @Get(':id')
  getPlaceById(@Param('id') id: string) {
    return this.placesService.getPlaceById(Number(id));
  }

  // Skapar en ny plats
  @Post()
  createPlace(@Body() place: CreatePlaceDto) {
    return this.placesService.createPlace(place);
  }

  // Uppdaterar en befintlig plats
  @Put(':id')
  updatePlace(
    @Param('id') id: string,
    @Body() updatedPlace: UpdatePlaceDto,
  ) {
    return this.placesService.updatePlace(Number(id), updatedPlace);
  }

  // Raderar en plats
  @Delete(':id')
  deletePlace(@Param('id') id: string) {
    return this.placesService.deletePlace(Number(id));
  }
}
