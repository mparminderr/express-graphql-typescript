import express from 'express';
import {createYoga} from 'graphql-yoga';
import {buildSchema} from 'type-graphql';
import "reflect-metadata"
import Book from './Resolvers/Book'
const app = express();
(async ()=>{
    const schema = await buildSchema({resolvers:[Book],emitSchemaFile:true});
    const yoga = createYoga({schema})
    app.use('/graphql',yoga)
    app.listen(3000,()=>console.log('Listening server again'))
})()
