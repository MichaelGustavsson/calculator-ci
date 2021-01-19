describe("calculator.js", () => {

  beforeEach(() => {

  })
  describe("App should have a title", () => {

    it("should have the title Calculator", () => {      
      const elem = document.querySelector('#title');

      if(elem){
        expect(elem.textContent).toBe("Calculator");
      }

      //expect(document.title).toBe("Calculator");
    });
  });

  describe("Calculator", () => {
    it("should be instantiated", () => {
      const calculator = new Calculator();
      expect(calculator).toBeTruthy();
    });
    
    it("the operation add should be defined", () => {
      const calculator = new Calculator();
      expect(calculator.add).toBeDefined();
    });

    it("the operation subtract should be defined", () => {
      const calculator = new Calculator();

      expect(calculator.subtract).toBeDefined();
    });

    it("the operation multiply should be defined", () => {
      const calculator = new Calculator();

      expect(calculator.multiply).toBeDefined();
    });

    it("the operation divide should be defined", () => {
      const calculator = new Calculator();

      expect(calculator.divide).toBeDefined();
    });

    it("should be able to add two numbers", () => {
      const calculator = new Calculator();
      let result = calculator.add(5, 5);
      expect(result).toBe(10);
    });

    it("should be able to subtract two numbers", () => {
      const calculator = new Calculator();
      let result = calculator.subtract(10, 2);
      expect(result).toBe(8);
    });

    it("should be able to multiply two numbers", () => {
      const calculator = new Calculator();
      let result = calculator.multiply(10, 2);
      expect(result).toBe(20);
    });

    it("should be able to divide two numbers", () => {
      const calculator = new Calculator();
      let result = calculator.divide(10, 2);
      expect(result).toBe(5);
    });

    // it("should be able to divide a rational number", () => {
    //   jasmine.addMatchers(calculatorMatchers);
    //   const calculator = new Calculator();
    //   expect(calculator.divide(1, 3)).toBeBetween(0.3, 0.4);
    // });
  });
});
