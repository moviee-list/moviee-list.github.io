// Mendefinisikan URL tempat JSON disimpan
const jsonUrl = '../json/proposal.json'; // Ganti dengan URL tempat JSON disimpan

// Mengambil data JSON menggunakan fetch() API
fetch(jsonUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Mengubah response menjadi objek JSON
  })
  .then(data => {
    // Manipulasi dan tampilkan data di dalam dokumen HTML
    const judulProposal = data.proposal.judul;
    const deskripsiProposal = data.proposal.deskripsi;
    const penulisNama = data.proposal.penulis.nama;
    const proyekDurasi = data.proposal.proyek.durasi;

    // Menampilkan data di dalam elemen HTML dengan id tertentu
    document.getElementById('judul').textContent = judulProposal;
    document.getElementById('deskripsi').textContent = deskripsiProposal;
    document.getElementById('penulis').textContent = `Penulis: ${penulisNama}`;
    document.getElementById('durasi').textContent = `Durasi Proyek: ${proyekDurasi}`;
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });


 // Import data JSON menggunakan fetch API
fetch('../json/team.json')
  .then(response => response.json())
  .then(data => {
    // Panggil fungsi untuk menampilkan data ke dalam HTML
    tampilkanData(data.tim);
  })
  .catch(error => console.error('Error:', error));

// Fungsi untuk menampilkan data ke dalam HTML
function tampilkanData(tim) {
  const container = document.getElementById('tim-container');

  tim.forEach(anggota => {
    const anggotaDiv = document.createElement('div');
    anggotaDiv.classList.add('anggota');
    anggotaDiv.innerHTML = `
      <img src="${anggota.foto}" alt="${anggota.nama}">
      <h2>${anggota.nama}</h2>
      <p>${anggota.peran}</p>
      <p>${anggota.deskripsi}</p>
    `;
    container.appendChild(anggotaDiv);
  });
}


