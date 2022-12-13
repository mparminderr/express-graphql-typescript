import { Min, Max } from "class-validator";
import { Field, InputType, Int} from "type-graphql";

// @ArgsType()
@InputType()
class SearchParams{
    @Field(type => Int, { defaultValue: 0 })

    skip: number;

    @Field(type => Int)
    @Min(1)
    @Max(50)
    take = 25;

    @Field({ nullable: true })
    title?: string;

    // helpers - index calculations

}
export {SearchParams}
