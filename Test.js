describe("Decenas", function() {


  it("Uno", function() {
  	 var romanParser = new RomanParser();
    expect(romanParser.Parse(1)).toBe("I");
  });
it("Dos", function() {
  	 var romanParser = new RomanParser();
    expect(romanParser.Parse(2)).toBe("II");
  });

it("Tres", function() {
  	 var romanParser = new RomanParser();
    expect(romanParser.Parse(3)).toBe("III");
  });

it("Cuatro", function() {
  	 var romanParser = new RomanParser();
    expect(romanParser.Parse(4)).toBe("IV");
  });
it("Cinco", function() {
  	 var romanParser = new RomanParser();
    expect(romanParser.Parse(5)).toBe("V");
  });


});