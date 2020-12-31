import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Recipe {
  @Field((type) => Int)
  @ObjectIdColumn()
  id: ObjectID;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  description: string;
}
