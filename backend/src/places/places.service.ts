import { Injectable } from '@nestjs/common';
import { Place } from './place/place';

@Injectable()
export class PlacesService {
    private places: Place[] = [];

    getAllPlaces(): Place[] {
        return this.places;
    }

    getPlaceById(id: number): Place | undefined {
        return this.places.find(place => place.id === id);
    }

    createPlace(place: Place): Place {
        place.id = this.places.length + 1;
        this.places.push(place);
        return place;
    }
}
