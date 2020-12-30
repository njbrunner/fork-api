import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { RecipeInput } from './recipe.dto';
import { Recipe } from './recipe.entity';
import { RecipeService } from './recipe.service';

@Resolver()
export class RecipeResolver {

    constructor(
        private recipeService: RecipeService
    ) {}

    @Query(returns => [Recipe])
    async getRecipes(): Promise<Recipe[]>{
        return this.recipeService.findAll()
    }

    @Mutation(returns => Recipe)
    async createRecipe(@Args('input') input: RecipeInput): Promise<Recipe> {
        return await this.recipeService.create(input);
    }
}
