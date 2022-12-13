"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const graphql_yoga_1 = require("graphql-yoga");
const type_graphql_1 = require("type-graphql");
require("reflect-metadata");
const Book_1 = __importDefault(require("./Resolvers/Book"));
const app = (0, express_1.default)();
(() => __awaiter(void 0, void 0, void 0, function* () {
    const schema = yield (0, type_graphql_1.buildSchema)({ resolvers: [Book_1.default], emitSchemaFile: true });
    const yoga = (0, graphql_yoga_1.createYoga)({ schema });
    app.use('/graphql', yoga);
    app.listen(3000, () => console.log('Listening server again'));
}))();
