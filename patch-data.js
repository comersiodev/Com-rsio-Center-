// Database Patch Notes Comersio Center
const PATCH_NOTES_DATA = [
  {
    version: "Aegea 1.4",
    tag: "TERBARU",
    date: "20 Oktober 2026",
    isLatest: true,
    features: [
      { icon: SVG.star, title: "Opsi Pembayaran SuperBank", desc: "Penambahan rekening SuperBank (000045742939) lengkap dengan penarikan otomatis logo resmi dari internet." },
      { icon: SVG.bookmark, title: "Grid Payment Layout (E-Wallet & M-Banking)", desc: "Penyusunan ulang tampilan pilihan metode pembayaran tagihan menjadi 2 kolom rapi yang terpisah per kategori." },
      { icon: SVG.rocket, title: "Popup Modal Amortisasi Modern", desc: "Penggantian prompt browser lama untuk cicilan amortisasi dengan popup modal UI modern lengkap dengan preview sisa tagihan." },
      { icon: SVG.note, title: "Revamp Nota Billing (Zigzag Kertas)", desc: "Mode Nota Billing dirombak dengan efek kertas disobek (zigzag acak) di atas & bawah. Garis emasnya menyambung sempurna ke border samping dan anti-pecah saat disimpan jadi gambar." },
      { icon: SVG.chart, title: "Fix Sinkronisasi Dashboard & Arsip", desc: "Perombakan total kalkulasi halaman Home. Saldo, Pemasukan, Modal, dan Keuntungan sekarang tetap aman dan akurat walaupun transaksi sudah dipindahkan ke menu Arsip." },
      { icon: SVG.currency, title: "Merge Charge & Fitur Diskon Nota", desc: "Halaman pembayaran kini mendukung pemotongan Diskon. Nominal Charge (jika ada) otomatis digabung langsung ke dalam Total Hutang dan Sisa Tagihan agar struk lebih ringkas." },
      { icon: SVG.rocket, title: "Smart Archive System (debt.html)", desc: "Transaksi yang lunas otomatis dipindah ke Arsip, tidak menumpuk di tagihan aktif. Ditambah fitur un-archive untuk mengembalikan transaksi jika salah masuk." },
      { icon: SVG.user, title: "Customer Page: Spending & Charge", desc: "Halaman Customer kini menampilkan total Spending di samping jumlah transaksi. Fitur Charge Over-Limit (default AKTIF) juga dipasang di tiap card." },
      { icon: SVG.save, title: "Perbaikan Sistem Backup (Save/Load)", desc: "Validasi file JSON diperketat. Sistem bisa mendeteksi dan memuat backup dari berbagai versi (format flat lama maupun baru) tanpa takut data corrupt." },
      { icon: SVG.pin, title: "Wallet System (Pengganti Midtrans)", desc: "Fitur Wallet baru menggantikan tombol Midtrans. Mendukung 16 metode pembayaran (QRIS, BCA, BRI, BNI, Bank INA, SeaBank, Krom, Bank Jago, SuperBank, Mandiri, OVO, GoPay, DANA, ShopeePay, Speedcash, OctoPay) dengan pengaturan nama & nomor rekening custom per user." },
      { icon: SVG.inbox, title: "Upload QRIS dengan Auto-Crop 1:1", desc: "Khusus metode QRIS, pengguna bisa upload foto QR Code sendiri. Sistem otomatis memotong ke rasio 1:1 (persegi sempurna) sebelum disimpan agar tampil rapi di struk." },
      { icon: SVG.currency, title: "Metode Pembayaran Cash (Tunai)", desc: "Opsi baru Tunai/Cash yang selalu tersedia secara default di konfirmasi pembayaran, terpisah dari E-Wallet dan Bank. Cocok untuk pembayaran langsung ke kasir." },
      { icon: SVG.bookmark, title: "Integrasi Wallet ke Debt & Payment", desc: "Halaman konfirmasi pembayaran (debt.html) dan halaman struk (payment.html) kini otomatis sinkron dengan pengaturan Wallet. Hanya metode yang sudah di-setup user yang muncul sebagai opsi." },
      { icon: SVG.note, title: "Tombol Salin (Copy) Nomor Rekening", desc: "Setiap nomor rekening atau nomor e-wallet di halaman pembayaran dilengkapi tombol salin dengan animasi feedback hijau dan teks 'Tersalin' sebagai konfirmasi visual." },
      { icon: SVG.star, title: "Fix Icon Bank & E-Wallet Anti-Blank", desc: "Sistem logo 3 lapis: PNG lokal (prioritas) → URL online (Wikimedia/Google Favicon) → fallback SVG inisial warna brand. Tidak ada lagi icon kosong atau broken image." },
      { icon: SVG.save, title: "Backup Wallet & QRIS ke File JSON", desc: "Seluruh data Wallet termasuk gambar QRIS yang di-upload (Base64) ikut tersimpan di file backup JSON. Saat load data, semua setting pembayaran otomatis pulih seperti semula." }
    ]
  },
  {
    version: "Aegea 1.3",
    tag: null,
    date: "10 September 2026",
    isLatest: false,
    features: [
      { icon: SVG.star, title: "Rekap Total & Bulanan Revamp", desc: "Penyempurnaan perhitungan margin keuntungan, pemisahan status Lunas & Belum Lunas secara presisi, serta urutan transaksi kronologis." },
      { icon: SVG.chart, title: "Grafik & Ekspor PDF", desc: "Peningkatan performa grafik indikator progres keuangan serta cetak laporan PDF profesional langsung dari halaman rekap." },
      { icon: SVG.bookmark, title: "Sistem Manajemen Utang & Customer", desc: "Optimasi pelacakan sisa utang customer dengan antarmuka m-banking interaktif dan arsip otomatis." },
      { icon: SVG.user, title: "Profil & Bubble Menu", desc: "Penyederhanaan navigasi atas dengan bubble menu e-wallet modern untuk akses pengaturan, saldo dasar, dan patch notes." }
    ]
  },
  {
    version: "Aegea 1.2",
    tag: null,
    date: "25 Agustus 2026",
    isLatest: false,
    features: [
      { icon: SVG.currency, title: "Money Converter & Kurs Aset Real-Time", desc: "Konversi mata uang asing ke IDR otomatis dengan kurs live, plus monitor harga Bitcoin, Ethereum, Emas, dan Nikel." },
      { icon: SVG.inbox, title: "Media Downloader Board", desc: "Shortcut cepat ke SnapTik, FastDL, InstaDP, dan LoveThreads untuk download video dan profil medsos." },
      { icon: SVG.note, title: "Catatan Utama + Kirim WA", desc: "Board catatan cepat dengan fitur simpan otomatis dan kirim langsung ke WhatsApp tanpa copy-paste manual." }
    ]
  },
  {
    version: "Aegea 1.1",
    tag: null,
    date: "15 Juli 2026",
    isLatest: false,
    features: [
      { icon: SVG.star, title: "Perbaikan Bug & Stabilisasi Sistem", desc: "Pembersihan bug pada kalkulasi sisa utang, optimasi penyimpanan localStorage, dan peningkatan respon UI." },
      { icon: SVG.bookmark, title: "Penyempurnaan Tampilan UI", desc: "Penyesuaian warna indikator transaksi dan integrasi awal ikon SVG agar antarmuka lebih konsisten." }
    ]
  },
  {
    version: "Aegea 1.0",
    tag: "AWAL",
    date: "01 Juli 2026",
    isLatest: false,
    features: [
      { icon: SVG.bug, title: "Rilis Perdana Comersio Center", desc: "Fondasi aplikasi m-banking mini: dashboard saldo, manajemen customer, produk, utang, rekap, dan pembukuan bulanan." },
      { icon: SVG.save, title: "Save & Load Data (.json)", desc: "Backup dan restore seluruh data aplikasi dalam satu file JSON berformat .json." }
    ]
  }
];