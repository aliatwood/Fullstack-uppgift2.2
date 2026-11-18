import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// Representerar en plats i databasen
@Entity()
export class PlaceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  realm: string;

  @Column()
  population: number;

  @Column()
  safe: boolean;
}