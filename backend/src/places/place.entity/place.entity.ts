import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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