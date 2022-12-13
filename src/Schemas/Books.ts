import {Field, ID, ObjectType} from "type-graphql";
import {Author} from "./Author";

@ObjectType()
class Book{
    @Field(type=>ID!)
    id: String;

    @Field(type=>String)
    name: string

    @Field(type=> Author)
    author: Author
}
export {Book}
