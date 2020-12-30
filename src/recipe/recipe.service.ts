import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { RecipeInput } from './recipe.dto';
import { Recipe } from './recipe.entity';

@Injectable()
export class RecipeService {
    constructor(
        @InjectRepository(Recipe)
        private readonly recipeRepository: MongoRepository<Recipe>
    ){}

    async findAll(): Promise<Recipe[]> {
        return this.recipeRepository.find();
    }

    async create(input: RecipeInput): Promise<Recipe> {
        const recipe = new Recipe();
        recipe.name = input.name;
        recipe.description = input.description;
        return this.recipeRepository.save(recipe);
    }
}
