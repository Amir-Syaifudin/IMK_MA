Prinsip Dasar Sebelum Mulai
Prototype kamu harus high-fidelity — artinya sudah pakai warna asli, font yang proper, dan terlihat seperti website sungguhan, bukan sketsa. Tujuannya supaya responden UEQ bisa merasakan pengalaman yang realistis saat testing.
Yang perlu kamu prototype adalah halaman-halaman yang berkaitan langsung dengan masalah yang kamu temukan — jangan prototype semua halaman MA, cukup yang kamu redesign.

Halaman yang Wajib Dibuat (4 halaman utama)

1. Beranda (Homepage)
Ini halaman paling penting karena Masalah 1 dan 2 ada di sini.
Yang harus ada di beranda redesign-mu:
Hero section — bagian paling atas yang langsung menampilkan 3 tombol aksi utama secara besar dan jelas: Cari Putusan, Cek Status Perkara, Hubungi Pengadilan. Ini yang tidak ada di website MA sekarang — pengunjung baru tidak tahu harus mulai dari mana.
Search bar global — letakkan di bawah hero, satu kotak pencarian yang bisa mencari semuanya (putusan, berita, kebijakan). Berbeda dengan sekarang yang pencariannya terpisah-pisah.
Layanan Utama — tampilkan 4–6 layanan dalam bentuk kartu ikon yang bersih, bukan daftar teks panjang. Contoh: Direktori Putusan, Jadwal Sidang, Kepaniteraan, Pengumuman.
Berita terbaru — cukup 3 kartu berita, bukan 10+ item seperti sekarang.
Footer — tautan cepat, kontak, dan sosial media.
Yang dihilangkan dari beranda lama: widget sosial media yang besar, galeri foto, majalah elektronik, agenda pimpinan — semua itu dipindah ke halaman masing-masing, tidak perlu ada di beranda.

2. Halaman Pencarian Putusan / Perkara
Ini menjawab Masalah 4 (pencarian lemah) dan Masalah 3 (terminologi teknis).
Strukturnya:
Header halaman — judul yang jelas "Cari Putusan & Perkara" bukan istilah teknis.
Form pencarian dengan filter yang mudah dipahami awam:

Kolom kata kunci
Filter Jenis Perkara — dropdown dengan pilihan yang ditulis dalam bahasa biasa, bukan kode (misalnya "Perdata", "Pidana", "Tata Usaha Negara") disertai tooltip singkat yang menjelaskan apa artinya
Filter Tahun
Tombol Cari yang besar dan jelas
Tombol Reset filter

Hasil pencarian — tampilkan dalam bentuk kartu, tiap kartu berisi: nomor perkara, jenis perkara, tanggal, status, dan tombol "Lihat Detail". Jangan tampilkan sebagai tabel data mentah seperti sekarang.
Empty state — jika hasil pencarian kosong, tampilkan pesan yang membantu: "Tidak ditemukan hasil untuk '...'. Coba ubah kata kunci atau filter." Ini yang menjawab Masalah 4 soal error handling.

3. Halaman FAQ & Panduan Pengguna
Ini menjawab Masalah 3 secara langsung (terminologi + tidak ada panduan).
Strukturnya:
Search FAQ — kotak pencarian di bagian atas khusus untuk mencari pertanyaan.
Kategori FAQ — tampilkan dalam bentuk tab atau tombol filter:

Tentang Mahkamah Agung
Cara Mencari Putusan
Prosedur Sidang & Perkara
Layanan Kepaniteraan
Kontak & Lokasi

Daftar pertanyaan — format accordion (klik pertanyaan, jawaban muncul ke bawah). Isi pertanyaannya yang relevan, misalnya: "Apa itu kasasi?", "Bagaimana cara mengecek status perkara saya?", "Apa perbedaan banding dan kasasi?".
Glosarium singkat — bagian di bawah FAQ berisi daftar istilah hukum + penjelasan singkat dalam bahasa sehari-hari. Ini pembeda utama dari website MA sekarang dan langsung menjawab pelanggaran H2 dan H6.

4. Halaman Error / Halaman Kosong
Ini halaman kecil tapi penting untuk menjawab Masalah 4.
Cukup buat satu halaman 404 yang:

Menampilkan pesan yang ramah, bukan teks error teknis
Memberikan 2–3 saran langkah: "Kembali ke Beranda", "Coba Pencarian", "Hubungi Kami"
Desainnya tetap konsisten dengan halaman lain


Alur Interaksi yang Harus Bisa Diklik (Prototyping di Figma)
Supaya bisa dipakai untuk usability testing UEQ, prototype-mu harus punya minimal 2 alur yang bisa dijalankan:
Alur 1 — Mencari Putusan:
Beranda → klik "Cari Putusan" → Halaman Pencarian → isi kata kunci → lihat hasil → klik salah satu hasil → halaman detail
Alur 2 — Mencari Bantuan:
Beranda → klik "FAQ" di navigasi → Halaman FAQ → klik kategori → klik salah satu pertanyaan → jawaban terbuka
Kedua alur ini yang nanti diminta dikerjakan responden sebelum mengisi kuesioner UEQ.

Panduan Visual / Desain
Warna — pakai palet resmi MA: merah maroon (#8B0000 atau serupa) dan putih sebagai warna utama, dengan abu-abu terang sebagai warna latar. Jangan ganti total karena identitas kelembagaan harus tetap terasa.
Font — pakai font yang sudah tersedia di Figma: untuk judul pakai yang sedikit bold (bisa Poppins atau Plus Jakarta Sans), untuk body text pakai ukuran minimal 14px supaya mudah dibaca.
Spacing — ini yang paling membedakan dengan website lama. Beri whitespace yang cukup antara elemen. Aturan sederhana: kalau terasa sesak, tambah jarak.
Konsistensi — pastikan warna tombol, ukuran font, dan style kartu sama di semua halaman. Ini langsung menjawab pelanggaran H4 Consistency.

Yang Tidak Perlu Dibuat
Jangan buang waktu membuat halaman-halaman ini karena tidak berkaitan dengan masalah yang kamu temukan: halaman profil pimpinan, halaman agenda, halaman galeri foto, halaman kepegawaian internal. Fokus pada 4 halaman utama di atas.

Urutan Pengerjaan yang Disarankan

Mulai dari komponen dulu di Figma — buat tombol, kartu, navbar, dan footer sebagai komponen yang bisa dipakai ulang di semua halaman
Buat beranda karena ini referensi visual untuk halaman lain
Lanjut ke halaman pencarian
Lanjut ke halaman FAQ
Buat halaman error terakhir karena paling sederhana
Baru sambungkan semua halaman dengan prototype links untuk kedua alur interaksi