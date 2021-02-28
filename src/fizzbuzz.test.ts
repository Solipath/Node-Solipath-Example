import { FizzBuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
    it("given 3 return fizz", () => {
        expect(new FizzBuzz().execute(3)).toEqual("Fizz");
    });

    it("given 5 return buzz", () => {
        expect(new FizzBuzz().execute(5)).toEqual("Buzz");
    });

    it("given 6 return fizz", () => {
        expect(new FizzBuzz().execute(6)).toEqual("Fizz");
    });

    it("given 1 return fizz", () => {
        expect(new FizzBuzz().execute(1)).toEqual("1");
    });

    it("given 10 return buzz", () => {
        expect(new FizzBuzz().execute(10)).toEqual("Buzz");
    });
    it("given 15 return fizzbuzz", () => {
        expect(new FizzBuzz().execute(15)).toEqual("FizzBuzz");
    });
    it("given 30 return fizzbuzz", () => {
        expect(new FizzBuzz().execute(30)).toEqual("FizzBuzz");
    });
});