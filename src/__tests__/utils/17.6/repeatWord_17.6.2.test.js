import { repeatWord } from "../../../utils/17.6/repeatWord_17.6.2.js";

describe("tests for repeatWord function", () => {
  it("should repeat word (or number) the number of times entered in argument or say about error", 
    () => {
      expect(repeatWord("word", 3)).toBe("word word word");
      expect(repeatWord(7, 5)).toBe("7 7 7 7 7");
      expect(repeatWord("", 4)).toBe("word is not entered");
    })
});
