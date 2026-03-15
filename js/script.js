// // START NAVBAR SCROLL INTERACTION //
// Fungsi untuk menambah class 'navbar-scrolled' saat halaman digeser ke bawah
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("mainNavbar");
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});
// // END NAVBAR SCROLL INTERACTION //

// Fungsi untuk menjalankan Counter
const counters = document.querySelectorAll(".counter");
const speed = 200; // Semakin besar angka, semakin lambat animasinya

const startCounter = () => {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;

      // Hitung kecepatan penambahan
      const inc = target / speed;

      if (count < target) {
        // Tambahkan angka dan bulatkan ke atas
        counter.innerText = Math.ceil(count + inc);
        // Ulangi setiap 1 milidetik
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
};

// Intersection Observer (Biar jalan pas di-scroll ke area Stats)
const statsSection = document.querySelector("#stats");
const observer = new IntersectionObserver(
  (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      startCounter();
      // Berhenti mengamati setelah animasi jalan sekali
      observer.unobserve(statsSection);
    }
  },
  { threshold: 0.5 },
); // Jalan jika 50% section sudah terlihat

observer.observe(statsSection);


