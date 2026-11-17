import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreatePlaceDto {
  @IsString()
  name: string;

  @IsString()
  realm: string;

  @IsNumber()
  population: number;

  @IsBoolean()
  safe: boolean;
}