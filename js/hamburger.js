// Ambil elemen tombol dan menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Tambahkan event listener 'click' ke tombol
menuBtn.addEventListener('click', () => {
    // Toggle (tambah/hapus) kelas 'hidden' pada mobile menu
    mobileMenu.classList.toggle('hidden');
});