import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
export class Rol{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  isDeleted: boolean;
}