import {Arg, Args, FieldResolver, Query, Resolver, Root} from "type-graphql";

import {Book }from "../Schemas/Books";
import {SearchParams} from "../utility/SearchParams";

@Resolver(() => Book)
export default class {
    @Query(() => Book, { nullable: true })
    // book(@Args() {take,title,skip}: SearchParams): Book | undefined {
    book(@Arg('searchParams') searchParams: SearchParams): Book | undefined{
        console.log('Getting ',searchParams)
        return {id:"2",name:"Vipul",author:{id:"2",name:"Samurai"}}
    }

    // @FieldResolver()
    // tasks(@Root() projectData: ProjectData) {
    //     return tasks.filter(task => {
    //         return task.projectId === projectData.id;
    //     });
    // }
}
