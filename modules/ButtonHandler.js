class ButtonHandler {
    constructor(calculator) {
      this.calculator = calculator;
    }
  
    // Mengelola tombol yang diklik
    handleButton(value) {
      if (value === "AC") {
        this.calculator.clear();
      } else if (value === "=") {
        this.calculator.calculate();
      } else if (["+", "-", "*", "/", "%"].includes(value)) {
        this.calculator.addOperation(value);
      } else if (["x³", "π", "e", "+/-"].includes(value)) {
        this.calculator.addOperation(value);
      } else {
        this.calculator.addInput(value);
      }
    }
  }
  
  export default ButtonHandler;