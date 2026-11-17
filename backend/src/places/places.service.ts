import { Injectable } from '@nestjs/common';
import { Place } from './place/place';

@Injectable()
export class PlacesService {
    private places: Place[] = [];
    getAllPlaces(): Place[] {
        return this.places;
}
}
