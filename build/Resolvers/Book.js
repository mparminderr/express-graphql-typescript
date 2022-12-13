"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const Books_1 = require("../Schemas/Books");
const SearchParams_1 = require("../utility/SearchParams");
let default_1 = class default_1 {
    // book(@Args() {take,title,skip}: SearchParams): Book | undefined {
    book(searchParams) {
        console.log('Getting ', searchParams);
        return { id: "2", name: "Vipul", author: { id: "2", name: "Samurai" } };
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => Books_1.Book, { nullable: true })
    // book(@Args() {take,title,skip}: SearchParams): Book | undefined {
    ,
    __param(0, (0, type_graphql_1.Arg)('searchParams')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SearchParams_1.SearchParams]),
    __metadata("design:returntype", Object)
], default_1.prototype, "book", null);
default_1 = __decorate([
    (0, type_graphql_1.Resolver)(() => Books_1.Book)
], default_1);
exports.default = default_1;
