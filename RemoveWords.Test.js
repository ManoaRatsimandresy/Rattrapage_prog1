import { expect } from "chai";
import { describe } from "mocha";
import {removeWords} from "./removeWords.js";

 describe ("removeWords",function () {
    it(" Hello, ceci est un test ", function() {
        expect(removeWords(" Hello ceci est un test ",['ceci' , 'un'])).to.eq("Hello est test")
    });
 })
 describe ("removeWords",function () {
    it(" Hello Java ", function() {
        expect(removeWords(" Hello Java",[ 'java'])).to.eq("Hello Java")
    });
 })