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

    updatePlace(id: number, updatedPlace: Partial<Place>): Place | undefined {
        const place = this.getPlaceById(id);

        if (!place) {
            return undefined;
        }

        Object.assign(place, updatedPlace);
        place.id = id;
        return place;
    }
}
