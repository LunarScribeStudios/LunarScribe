function showPage(pageId) {
    var pages = document.querySelectorAll('.container');
    pages.forEach(page => page.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
    toggleMenu();
}

window.onload = function () {
    showPage('beranda'); // Tampilkan halaman Beranda saat pertama kali dimuat
}

function pesanProduk(namaProduk) {
    var nomorWA = "6285389311795";
    var teks = "Saya ingin memesan produk *" + namaProduk + "*, apakah masih ada? ";
    var url = "https://wa.me/" + nomorWA + "?text=" + encodeURIComponent(teks);
    window.location.href = url;
}

// Fungsi untuk membuka detail-container saat tombol "Lihat Detail" ditekan
function openDetail(button) {
    var card = button.closest(".card"); // Cari elemen card terdekat
    var detail = card.querySelector(".detail-container");
    var overlay = document.querySelector(".overlay");

    // Tutup semua detail sebelum membuka yang baru
    document.querySelectorAll(".detail-container").forEach(d => d.style.display = "none");

    // Tampilkan detail yang sesuai
    detail.style.display = "flex";
    overlay.style.display = "block";
}

// Fungsi untuk menutup detail-container
function closeDetail() {
    document.querySelectorAll(".detail-container").forEach(d => d.style.display = "none");
    document.querySelector(".overlay").style.display = "none";
}

// Pastikan event listener dipasang setelah DOM siap
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".detail-container").forEach(d => d.style.display = "none");
    document.querySelector(".overlay").style.display = "none";

    // Tambahkan event listener untuk menutup saat overlay diklik
    document.querySelector(".overlay").addEventListener("click", closeDetail);
});

// Fungsi untuk menampilkan halaman baca
function showBaca(id) {
    // Tutup semua halaman baca sebelum membuka yang baru
    document.querySelectorAll(".baca-container").forEach(container => {
        container.style.display = "none"; // Sembunyikan semua halaman
    });

    // Tampilkan halaman baca yang dipilih
    document.getElementById(id).style.display = "block";
}

// Fungsi untuk menutup halaman baca
function closeBaca() {
    // Sembunyikan semua halaman baca
    document.querySelectorAll(".baca-container").forEach(container => {
        container.style.display = "none";
    });
}

function toggleDropdown(event, element) {
    event.stopPropagation(); // Mencegah event dari menyebar
    let dropdown = element.nextElementSibling;
    let isActive = dropdown.style.display === "block";

    // Tutup semua dropdown terlebih dahulu
    document.querySelectorAll('.dropdown-content').forEach(content => {
        content.style.display = "none";
        content.style.opacity = "0";
        content.style.transform = "translateY(-10px)";
    });

    // Buka dropdown yang diklik
    if (!isActive) {
        dropdown.style.display = "block";
        setTimeout(() => {
            dropdown.style.opacity = "1";
            dropdown.style.transform = "translateY(0)";
        }, 10);
    }
}

document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-content').forEach(content => {
        content.style.opacity = "0";
        content.style.transform = "translateY(-10px)";
        setTimeout(() => {
            content.style.display = "none";
        }, 300);
    });
});

function openModal(image, title, author, date, text) {
    document.getElementById('modal-image').src = image;
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-author').innerText = author;
    document.getElementById('modal-date').innerText = date;
    document.getElementById('modal-text').innerText = text;
    document.getElementById('modal').style.display = 'flex';
}
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function filterContent() {
    var genre = document.getElementById("genre").value;
    var status = document.getElementById("status").value;
    var tipe = document.getElementById("tipe").value;

    document.querySelectorAll(".itembacanomik").forEach(function (itembacanomik) {
        var genres = itembacanomik.dataset.genre.split(',');
        var statuses = itembacanomik.dataset.status.split(',');
        var types = itembacanomik.dataset.tipe.split(',');

        var matchGenre = !genre || genres.includes(genre);
        var matchStatus = !status || statuses.includes(status);
        var matchTipe = !tipe || types.includes(tipe);

        if (matchGenre && matchStatus && matchTipe) {
            itembacanomik.style.display = "block";
        } else {
            itembacanomik.style.display = "none";
        }
    });
}

function searchNovel() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var items = document.querySelectorAll(".itembacanomik");

    if (input === "") return; // Tidak mengubah tampilan jika input kosong

    items.forEach(function (itembacanomik) {
        var titlebacanomik = itembacanomik.querySelector(".titlebacanomik").innerText.toLowerCase();
        if (titlebacanomik.includes(input)) {
            itembacanomik.style.display = "block";
        } else {
            itembacanomik.style.display = "none";
        }
    });
}

function showDetails(eventnovel) {
    document.getElementById('modalevent-title').innerText = eventnovel.querySelector('h2').innerText;
    document.getElementById('modalevent-date').innerText = eventnovel.querySelector('.date').innerText;
    document.getElementById('modalevent-location').innerText = eventnovel.querySelector('.location').innerText;
    document.getElementById('modalevent-description').innerText = eventnovel.querySelector('.description').innerText;
    document.getElementById('eventnovel-modal').style.display = 'flex';
}

function closemodalevent() {
    document.getElementById('eventnovel-modal').style.display = 'none';
}

function countdown() {
    const eventnovelDate = new Date('april 21, 2025 19:00:00').getTime();
    setInterval(() => {
        let now = new Date().getTime();
        let distance = eventnovelDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (distance < 0) {
            document.getElementById('countdown').innerText = "eventnovel has started!";
        } else {
            document.getElementById('countdown').innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }, 1000);
}
countdown();

function share(platform) {
    const url = encodeURIComponent("https://lunarscribestudios.github.io/LunarScribe/");
    let shareUrl = "";
    
    if (platform === 'x') {
        shareUrl = `https://twitter.com/intent/tweet?url=${url}`;
    } else if (platform === 'ig') {
        shareUrl = `https://www.instagram.com/direct/new/?text=${url}`;
    } else if (platform === 'tt') {
        shareUrl = `https://www.tiktok.com/share?url=${url}`;
    }
    
    window.open(shareUrl, '_blank');
}