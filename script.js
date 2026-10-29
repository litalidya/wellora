
        /* ------------------------------------------------------------------
           1. FITUR WATER TRACKER (PENGHITUNG AIR MINUM)
           Konsep: Variabel State, Operator Aritmatika, Manipulasi DOM (.innerText & .style.width)
           ------------------------------------------------------------------ */

        /* ------------------------------------------------------------------
           2. FITUR KALKULATOR BMI (BODY MASS INDEX)
           Konsep: Mengambil Nilai Input (.value), Percabangan (if-else), Manipulasi Style
           ------------------------------------------------------------------ */
        function hitungBMI() {
            const tinggiInput = document.getElementById('bmiTinggi').value;
            const beratInput = document.getElementById('bmiBerat').value;

            // Validasi jika input kosong atau tidak valid
            if (!tinggiInput || !beratInput || tinggiInput <= 0 || beratInput <= 0) {
                alert('Harap masukkan angka tinggi badan dan berat badan yang valid!');
                return;
            }

            // Rumus BMI: Berat (kg) / (Tinggi (m) * Tinggi (m))
            const tinggiMeter = parseFloat(tinggiInput) / 100;
            const beratKg = parseFloat(beratInput);
            const scoreBMI = (beratKg / (tinggiMeter * tinggiMeter)).toFixed(1);

            const scoreEl = document.getElementById('bmiScoreText');
            const badgeEl = document.getElementById('bmiStatusBadge');
            const adviceEl = document.getElementById('bmiAdviceText');

            // Tampilkan angka skor BMI
            scoreEl.innerText = scoreBMI;

            // Klasifikasi kategori berat badan
            if (scoreBMI < 18.5) {
                badgeEl.innerText = 'Berat Badan Kurang (Underweight)';
                badgeEl.style.backgroundColor = '#EBF4FF';
                badgeEl.style.color = '#2563EB';
                adviceEl.innerText = 'Tingkatkan asupan nutrisi padat gizi, konsumsi protein seimbang, dan lakukan latihan kekuatan untuk membangun massa otot.';
            } else if (scoreBMI >= 18.5 && scoreBMI <= 24.9) {
                badgeEl.innerText = 'Berat Badan Ideal (Normal)';
                badgeEl.style.backgroundColor = '#E7F7EE';
                badgeEl.style.color = '#2EAD70';
                adviceEl.innerText = 'Selamat! Berat badan Anda berada dalam kategori ideal yang sehat. Pertahankan pola makan bernutrisi dan olahraga teratur.';
            } else if (scoreBMI >= 25.0 && scoreBMI <= 29.9) {
                badgeEl.innerText = 'Kelebihan Berat Badan (Overweight)';
                badgeEl.style.backgroundColor = '#FEF3C7';
                badgeEl.style.color = '#D97706';
                adviceEl.innerText = 'Perhatikan porsi kalori harian, perbanyak konsumsi serat sayur-buah, dan tingkatkan aktivitas fisik harian Anda.';
            } else {
                badgeEl.innerText = 'Kategori Obesitas (Obese)';
                badgeEl.style.backgroundColor = '#FEE2E2';
                badgeEl.style.color = '#DC2626';
                adviceEl.innerText = 'Disarankan berkonsultasi dengan dokter atau ahli gizi untuk merancang program penurunan berat badan yang aman.';
            }
        }

        function resetBMI() {
            document.getElementById('bmiTinggi').value = '';
            document.getElementById('bmiBerat').value = '';
            document.getElementById('bmiScoreText').innerText = '--.-';
            const badgeEl = document.getElementById('bmiStatusBadge');
            badgeEl.innerText = 'Menunggu Input Data';
            badgeEl.style.backgroundColor = '#F3F4F6';
            badgeEl.style.color = '#6B7280';
            document.getElementById('bmiAdviceText').innerText = 'Masukkan tinggi dan berat badan Anda pada formulir di sebelah kiri, lalu klik tombol Hitung BMI.';
        }


        /* ------------------------------------------------------------------
           4. FITUR VALIDASI & NOTIFIKASI FORMULIR KONTAK
           Konsep: event.preventDefault(), Validasi Form, innerHTML, Timer setTimeout
           ------------------------------------------------------------------ */
        function kirimPesan(event) {
            event.preventDefault(); // Mencegah reload halaman secara default

            const nama = document.getElementById('nama').value.trim();
            const email = document.getElementById('email').value.trim();
            const subjek = document.getElementById('subjek').value.trim();
            const pesan = document.getElementById('pesan').value.trim();
            const alertBox = document.getElementById('formAlertBox');

            // Validasi: jika ada salah satu kolom yang kosong
            if (!nama || !email || !subjek || !pesan) {
                // Tampilkan banner merah di atas form
                alertBox.className = 'form-alert-error';
                alertBox.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> <strong>Perhatian:</strong> Harap isi seluruh kolom formulir kontak!';
                alertBox.style.display = 'block';

                // Tampilkan alert pop-up JavaScript
                // alert('Harap isi seluruh kolom formulir kontak!');
                return;
            }

            // Jika semua kolom sudah terisi: tampilkan banner hijau sukses
            alertBox.className = 'form-alert-success';
            alertBox.innerHTML = `<i class="fa-solid fa-circle-check"></i> Terima kasih, <strong>${nama}</strong>! Pesan Anda telah berhasil dikirim ke tim Wellora. Kami akan segera membalas ke <strong>${email}</strong>.`;
            alertBox.style.display = 'block';

            // Bersihkan isi formulir
            document.getElementById('contactForm').reset();

            // Sembunyikan otomatis kotak notifikasi setelah 6 detik
            setTimeout(() => {
                alertBox.style.display = 'none';
            }, 6000);
        }


        /* ------------------------------------------------------------------
           5. FITUR TOMBOL BACK TO TOP (SCROLL KE ATAS)
           Konsep: Window Scroll Event, Pengkondisian scrollY, window.scrollTo
           ------------------------------------------------------------------ */
        window.addEventListener('scroll', function () {
            const btnTop = document.getElementById('btnBackToTop');
            // Jika halaman di-scroll ke bawah lebih dari 300px, tampilkan tombol
            if (window.scrollY > 300) {
                btnTop.style.display = 'flex';
            } else {
                btnTop.style.display = 'none';
            }
        });

        function keAtasHalaman() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Bergulir halus ke bagian paling atas
            });
        }

          // 1. Ambil nomor id dari URL (contoh: detail-berita.html?id=1)
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id') || '0';

        // 2. Tampilkan hanya artikel yang dipilih
        const artikelTerpilih = document.getElementById('artikel-' + id);
        if (artikelTerpilih) {
            artikelTerpilih.style.display = 'block';
        } else {
            document.getElementById('artikel-0').style.display = 'block';
        }

