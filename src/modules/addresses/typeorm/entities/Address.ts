import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('addresses')
class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column('int')
  number: number;

  @Column()
  complement: string;

  @Column()
  cep: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Address;
