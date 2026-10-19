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
    { icon: SVG.note, title: "Revamp Nota Billing", desc: "Mode Nota Billing bertampilan struk dengan tepi atas dan bawah bergaya kertas disobek yang bentuknya acak tiap dibuka. Garis emas sobekan menyambung rapi ke border samping, dan hasilnya tetap tajam saat disimpan jadi gambar." }
  ]
},
  {
    version: "Aegea 1.3",
    tag: null,
    date: "19 Oktober 2026",
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
    date: "10 September 2026",
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
    date: "25 Agustus 2026",
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
