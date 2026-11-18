import { IsString, IsNumber, IsBoolean } from 'class-validator';

// kollar så att datan har rätt datatyper
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