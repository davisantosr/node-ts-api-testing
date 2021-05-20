import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Exclude } from 'class-transformer';

export enum Ethnicity {
  CAUCASIAN = 'caucasian',
  AFRO = 'afro',
  INDIGENOUS = 'indigenous',
  OTHER = 'other',
}

@Entity('users')
class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column('int')
  age: number;

  @Column('decimal')
  weight: number;

  @Column({
    type: 'enum',
    enum: Ethnicity,
    default: Ethnicity.OTHER,
  })
  ethnicity: Ethnicity;

  @Column()
  @Exclude()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
