import Display from "./Display.js";

class ScientificCalculator {
  constructor(display) {
    this.display = display;
    this.currentInput = ""; // Menyimpan input yang sedang dimasukkan
    this.previousInput = ""; // Menyimpan angka sebelumnya untuk operasi
    this.operation = ""; // Menyimpan operasi yang dipilih
    this.isCalculated = false; // Menandai apakah hasil telah dihitung
  }

  // Menambahkan input ke layar kalkulator
  addInput(value) {
    // Jika sebelumnya sudah dihitung dan tombol angka diklik, reset kalkulator
    if (this.isCalculated && !isNaN(value)) {
      this.clear();
    }

    // Jika tombol angka yang ditekan
    if (!isNaN(value) || value === ".") {
      this.currentInput += value; // Tambahkan angka ke input
      this.display.updateDisplay(this.currentInput);
    }
  }

  // Menambahkan operasi ke kalkulator
  addOperation(value) {
    // Jika ada input sebelumnya, lakukan perhitungan
    if (this.previousInput !== "" && this.currentInput !== "") {
      this.calculate();
    }

    // Menangani operasi standar (+, -, *, /, %)
    if (["+", "-", "*", "/", "%"].includes(value)) {
      this.operation = value;
      this.previousInput = this.currentInput;
      this.currentInput = "";
    }

    // Menangani operasi khusus (x³, π, e, etc.)
    if (value === "x³") {
      this.currentInput = Math.pow(parseFloat(this.currentInput), 3).toString();
      this.display.updateDisplay(this.currentInput);
    } else if (value === "π") {
      this.currentInput = Math.PI.toString();
      this.display.updateDisplay(this.currentInput);
    } else if (value === "e") {
      this.currentInput = Math.E.toString();
      this.display.updateDisplay(this.currentInput);
    } else if (value === "+/-") {
      this.currentInput = (parseFloat(this.currentInput) * -1).toString();
      this.display.updateDisplay(this.currentInput);
    }
  }

  // Menghitung hasil perhitungan
  calculate() {
    if (this.previousInput !== "" && this.currentInput !== "") {
      let result;
      switch (this.operation) {
        case "+":
          result =
            parseFloat(this.previousInput) + parseFloat(this.currentInput);
          break;
        case "-":
          result =
            parseFloat(this.previousInput) - parseFloat(this.currentInput);
          break;
        case "*":
          result =
            parseFloat(this.previousInput) * parseFloat(this.currentInput);
          break;
        case "/":
          result =
            parseFloat(this.previousInput) / parseFloat(this.currentInput);
          break;
        case "%":
          result =
            (parseFloat(this.currentInput) / 100) *
            parseFloat(this.previousInput);
          break;
        default:
          return;
      }

      // Tampilkan hasil
      this.display.showResult(result);
      this.isCalculated = true; // Tandai bahwa perhitungan telah selesai
      this.previousInput = result.toString(); // Simpan hasil sebagai angka sebelumnya
      this.currentInput = ""; // Reset input untuk input berikutnya
    }
  }

  // Menghapus input dan reset kalkulator
  clear() {
    this.currentInput = "";
    this.previousInput = "";
    this.operation = "";
    this.isCalculated = false;
    this.display.clearDisplay();
  }
}

export default ScientificCalculator;