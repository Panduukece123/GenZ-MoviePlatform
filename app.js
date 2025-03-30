// MOVIE LIST SCROLL
const arrows = document.querySelectorAll(".arrow"); // Mengambil semua elemen dengan kelas "arrow" (panah untuk scroll)
const movieLists = document.querySelectorAll(".movie-list"); // Mengambil semua elemen dengan kelas "movie-list" (daftar film)

// Untuk setiap panah (arrow) yang ditemukan
arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length; // Menyimpan jumlah gambar dalam daftar film saat ini
  let clickCounter = 0; // Variabel untuk menghitung jumlah klik panah

  // Menambahkan event listener untuk klik pada panah
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270); // Menghitung rasio berdasarkan lebar layar dan lebar gambar
    clickCounter++; // Menambah hitungan klik

    // Menghitung klik maksimum yang masih dapat dilakukan berdasarkan jumlah item dalam daftar film
    const maxClicks = itemNumber - (4 + clickCounter) + (4 - ratio);

    if (maxClicks >= 0) {
      // Mengambil posisi transformasi X saat ini dari daftar film
      const currentTransform = parseInt(
        window.getComputedStyle(movieLists[i]).getPropertyValue("transform").split(",")[4] || 0
      );
      // Memindahkan daftar film ke kiri dengan mengubah properti transform
      movieLists[i].style.transform = `translateX(${currentTransform - 300}px)`;
    } else {
      // Reset posisi daftar film ke awal jika klik melebihi batas
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0; // Mengatur ulang hitungan klik
    }
  });
});

// THEME TOGGLE
const ball = document.querySelector(".toggle-ball"); // Mengambil elemen bola toggle (untuk mengubah tema)
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
); // Mengambil semua elemen yang akan dipengaruhi oleh perubahan tema

// Menambahkan event listener untuk klik pada bola toggle
ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active"); // Mengaktifkan atau menonaktifkan kelas "active" pada setiap elemen
  });
  ball.classList.toggle("active"); // Mengaktifkan atau menonaktifkan kelas "active" pada bola toggle
});

// DROPDOWN MENU
const dropdownToggle = document.getElementById("dropdown-toggle"); // Mengambil elemen untuk membuka dropdown
const dropdownMenu = document.getElementById("dropdown-menu"); // Mengambil elemen dropdown menu

// Menambahkan event listener untuk klik pada elemen pembuka dropdown
dropdownToggle.addEventListener("click", (event) => {
  event.stopPropagation(); // Mencegah event klik menyebar ke elemen lain
  // Mengubah tampilan dropdown menu, jika sudah terlihat, disembunyikan, jika tidak terlihat, ditampilkan
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
});

// Menambahkan event listener untuk klik di luar dropdown untuk menutup menu dropdown
document.addEventListener("click", (event) => {
  if (!dropdownToggle.contains(event.target)) {
    dropdownMenu.style.display = "none"; // Menutup dropdown jika klik terjadi di luar dropdown
  }
});
