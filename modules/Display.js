class Display {
    constructor(displayElement) {
      this.displayElement = displayElement;
    }
  
    updateDisplay(value) {
      this.displayElement.textContent = value;
    }
  
    showResult(result) {
      this.displayElement.textContent = result;
    }
  
    clearDisplay() {
      this.displayElement.textContent = "0";
    }
  }
  
  export function updateDisplay(value) {
    const display = document.getElementById("display");
    display.textContent = value;
  }
  
  export default Display;