import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RecipeInput {
  @Field()
  readonly name: string;

  @Field()
  readonly description: string;
}
