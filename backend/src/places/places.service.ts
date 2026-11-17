import { Injectable, NotFoundException } from '@nestjs/common';
import { Place } from './place/place';

@Injectable()
export class PlacesService {
    private places: Place[] = [];

    getAllPlaces(): Place[] {
        return this.places;
    }

    getPlaceById(id: number): Place {
        const place = this.places.find(place => place.id === id);

        if (!place) {
            throw new NotFoundException(`Place with ID ${id} not found`);
        }

        return place;
    }

    createPlace(place: Omit<Place, 'id'>): Place {
        const newPlace: Place = {
            id: this.places.length + 1, ...place,
        };

        this.places.push(newPlace);
        return newPlace;
    }

    updatePlace(id: number, updatedPlace: Partial<Place>): Place{
        const place = this.getPlaceById(id);

        Object.assign(place, updatedPlace);
        place.id = id;
        return place;
    }

    deletePlace(id: number): Place {
        
        const index = this.places.findIndex(place => place.id === id);

        if (index === -1) {
            throw new NotFoundException(`Place with ID ${id} not found`);
        }

        const deletedPlace = this.places.splice(index, 1);

        return deletedPlace[0];
    }
}
