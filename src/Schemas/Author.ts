import {Field, ID, ObjectType} from "type-graphql";

@ObjectType()
class Author{
    @Field(type=>ID!)
    id: string;

    @Field(type=>String)
    name: string

}
export {Author}
