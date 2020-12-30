import { Args, Int, Resolver, Query } from '@nestjs/graphql';
import { User } from './user.model';
import { UserService } from './user.service';

// @Resolver(of => User)
@Resolver()
export class UserResolver {
    // constructor(
    //     private userService: UserService,
    // ) {}

    // @Query(returns => User, { name: 'user' })
    // async getUser(@Args('id', { type: () => Int }) id: number) {
    //     return this.userService.findOneById(id);
    // }

    @Query(returns => String)
    async hello() {
        return 'world';
    }
}
