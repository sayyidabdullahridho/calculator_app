import { updateDisplay } from "./Display.js"; // Impor fungsi updateDisplay jika dibutuhkan

// Variabel untuk menyimpan nilai sementara dan operator
let currentInput = "0";
let previousInput = "";
let operator = "";

// Menangani klik tombol angka dan operator
const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonValue = e.target.getAttribute("data-value");

    if (buttonValue === "AC") {
      // Reset kalkulator
      currentInput = "0";
      previousInput = "";
      operator = "";
    } else if (buttonValue === "+/-") {
      // Membalikkan tanda angka
      currentInput = (parseFloat(currentInput) * -1).toString();
    } else if (buttonValue === "%") {
      // Menghitung persentase
      currentInput = (parseFloat(currentInput) / 100).toString();
    } else if (buttonValue === "=") {
      // Menjalankan operasi perhitungan
      if (operator && previousInput) {
        currentInput = operate(previousInput, currentInput, operator);
        operator = "";
        previousInput = "";
      }
    } else if (["+", "-", "*", "/"].includes(buttonValue)) {
      // Menyimpan operator dan nilai sebelumnya
      if (previousInput && operator) {
        currentInput = operate(previousInput, currentInput, operator);
      }
      operator = buttonValue;
      previousInput = currentInput;
      currentInput = "0";
    } else if (buttonValue === "x³") {
      // Menangani tombol x³
      currentInput = Math.pow(parseFloat(currentInput), 3).toString();
    } else if (buttonValue === "π") {
      // Menangani tombol π
      currentInput = Math.PI.toString();
    } else if (buttonValue === "e") {
      // Menangani tombol e
      currentInput = Math.E.toString();
    } else if (buttonValue === ".") {
      // Menambahkan titik desimal
      if (!currentInput.includes(".")) {
        currentInput += ".";
      }
    } else {
      // Tombol angka
      if (currentInput === "0") {
        currentInput = buttonValue;
      } else {
        currentInput += buttonValue;
      }
    }

    // Perbarui tampilan setelah klik tombol
    updateDisplay(currentInput);
  });
});

// Menunggu sampai seluruh dokumen HTML selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
  // Ambil elemen toggleButton dan tambahkan event listener
  const themeButton = document.getElementById("toggleButton");
  themeButton.addEventListener("click", () => {
    // Toggle kelas 'dark' dan 'light' pada body dan calculator
    document.body.classList.toggle("dark");
    document.body.classList.toggle("Light");
    document.querySelector(".calculator").classList.toggle("dark");
    document.querySelector(".calculator").classList.toggle("Light");
  });
});

// Fungsi untuk menghitung operasi matematika
function operate(previous, current, operator) {
  previous = parseFloat(previous);
  current = parseFloat(current);

  switch (operator) {
    case "+":
      return (previous + current).toString();
    case "-":
      return (previous - current).toString();
    case "*":
      return (previous * current).toString();
    case "/":
      if (current !== 0) {
        return (previous / current).toString();
      } else {
        return "Error"; // Tangani pembagian dengan 0
      }
    default:
      return current;
  }
}