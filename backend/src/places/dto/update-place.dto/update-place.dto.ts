import { PartialType } from '@nestjs/mapped-types';
import { CreatePlaceDto } from '../create-place.dto/create-place.dto';

export class UpdatePlaceDto extends PartialType(CreatePlaceDto) {}