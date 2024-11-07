export default class Theme {
    constructor() {
      // Mengambil elemen tombol toggle dari HTML
      this.toggleButton = document.getElementById("toggleButton");
    }
  
    initialize() {
      // Mengambil tema yang disimpan di localStorage (jika ada)
      const savedTheme = localStorage.getItem("theme");
  
      // Menentukan tema berdasarkan preferensi sistem pengguna (dark atau light)
      const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const theme = savedTheme || (prefersDarkScheme ? "dark" : "light");
  
      // Menambahkan kelas tema ke body
      document.body.classList.add(theme);
      this.updateButtonText(theme);
    }
  
    toggleMode() {
      // Menentukan apakah tema saat ini dark atau light
      const currentTheme = document.body.classList.contains("dark")
        ? "dark"
        : "light";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
  
      // Mengganti kelas tema pada body
      document.body.classList.replace(currentTheme, newTheme);
  
      // Menyimpan tema baru di localStorage
      localStorage.setItem("theme", newTheme);
  
      // Memperbarui tombol sesuai tema baru
      this.updateButtonText(newTheme);
    }
  
    updateButtonText(theme) {
      // Mengubah isi emoji pada tombol toggle berdasarkan tema
      this.toggleButton.textContent = theme === "dark" ? "☀️" : "🌙";
    }
  }