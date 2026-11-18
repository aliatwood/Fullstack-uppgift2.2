import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PlacesService } from './places.service';
import { CreatePlaceDto } from './dto/create-place.dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto/update-place.dto';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Get()
  getAllPlaces() {
    return this.placesService.getAllPlaces();
  }

  @Get(':id')
  getPlaceById(@Param('id') id: string) {
    return this.placesService.getPlaceById(Number(id));
  }

  @Post()
  createPlace(@Body() place: CreatePlaceDto) {
    return this.placesService.createPlace(place);
  }

  @Put(':id')
  updatePlace(
    @Param('id') id: string,
    @Body() updatedPlace: UpdatePlaceDto,
  ) {
    return this.placesService.updatePlace(Number(id), updatedPlace);
  }

  @Delete(':id')
  deletePlace(@Param('id') id: string) {
    return this.placesService.deletePlace(Number(id));
  }
}
