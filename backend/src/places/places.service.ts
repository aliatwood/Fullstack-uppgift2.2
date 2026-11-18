import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PlaceEntity } from './place.entity/place.entity';

@Injectable()
export class PlacesService {
    constructor(
        @InjectRepository(PlaceEntity)
        private placesRepository: Repository<PlaceEntity>,
    ) {}

    async getAllPlaces(): Promise<PlaceEntity[]> {
        return this.placesRepository.find();
    }

    async getPlaceById(id: number): Promise<PlaceEntity> {
        const place = await this.placesRepository.findOneBy({ id });

        if (!place) {
            throw new NotFoundException(`Place with ID ${id} not found`);
        }

        return place;
    }

    async createPlace(place: Omit<PlaceEntity, 'id'>): Promise<PlaceEntity> {
        const newPlace = this.placesRepository.create(place);
        return this.placesRepository.save(newPlace);
    }

    async updatePlace(
        id: number,
        updatedPlace: Partial<PlaceEntity>,
    ): Promise<PlaceEntity> {
        const place = await this.getPlaceById(id);

        Object.assign(place, updatedPlace);
        place.id = id;

        return this.placesRepository.save(place);
    }

    async deletePlace(id: number): Promise<PlaceEntity> {
        const place = await this.getPlaceById(id);

        await this.placesRepository.remove(place);

        return place;
    }
}
