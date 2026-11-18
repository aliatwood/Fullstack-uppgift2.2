import { PartialType } from '@nestjs/mapped-types';
import { CreatePlaceDto } from '../create-place.dto/create-place.dto';

// Gör alla fält valfria vid uppdatering
export class UpdatePlaceDto extends PartialType(CreatePlaceDto) {}