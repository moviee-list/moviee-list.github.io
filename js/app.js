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
    // Menampilkan data di dalam elemen HTML dengan id tertentu
    document.getElementById('judul').textContent = data.judul;
    document.getElementById('latar-belakang').textContent = data.latarBelakang;
    document.getElementById('deskripsi').textContent = data.deskripsi;
    document.getElementById('tujuan').textContent = data.tujuan;
    document.getElementById('waktu-pengerjaan').textContent = data.waktuPengerjaan;
    document.getElementById('kesimpulan').textContent = data.kesimpulan;
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });


 // Import data JSON menggunakan fetch API
fetch('../json/team.json')
  .then(response => response.json())
  .then(data => {
    // Menampilkan data JSON di dalam HTML
    const timContainer = document.getElementById('tim-container');
    data.tim.forEach(anggota => {
      const anggotaDiv = document.createElement('div');
      anggotaDiv.classList.add('anggota');

      const foto = document.createElement('img');
      foto.src = anggota.foto;
      foto.alt = anggota.nama;
      anggotaDiv.appendChild(foto);

      const nama = document.createElement('h2');
      nama.textContent = anggota.nama;
      anggotaDiv.appendChild(nama);

      const peran = document.createElement('p');
      peran.textContent = anggota.peran;
      anggotaDiv.appendChild(peran);

      const deskripsi = document.createElement('p');
      deskripsi.textContent = anggota.deskripsi;
      anggotaDiv.appendChild(deskripsi);

      timContainer.appendChild(anggotaDiv);
    });
  })
  .catch(error => console.error('Error:', error));


  // Mengambil data dari JSON menggunakan fetch() API
fetch('../json/contact.json')
  .then(response => response.json())
  .then(data => {
    // Mendapatkan data pengembang front end dan back end
    const frontEnd = data.frontEnd;
    const backEnd = data.backEnd;

    // Mendapatkan elemen div tempat data kontak akan ditampilkan
    const kontakContainer = document.getElementById('kontak-container');

    // Menampilkan data kontak front end dalam elemen div
    const frontEndDiv = document.createElement('div');
    frontEndDiv.classList.add('kontak');
    frontEndDiv.innerHTML = `
      <h2>Front End Developer</h2>
      <p><strong>Nama:</strong> ${frontEnd.nama}</p>
      <p><strong>Email:</strong> ${frontEnd.email}</p>
      <p><strong>Telepon:</strong> ${frontEnd.telepon}</p>
    `;

    // Menampilkan data kontak back end dalam elemen div
    const backEndDiv = document.createElement('div');
    backEndDiv.classList.add('kontak');
    backEndDiv.innerHTML = `
      <h2>Back End Developer</h2>
      <p><strong>Nama:</strong> ${backEnd.nama}</p>
      <p><strong>Email:</strong> ${backEnd.email}</p>
      <p><strong>Telepon:</strong> ${backEnd.telepon}</p>
    `;

    // Menambahkan elemen div kontak ke dalam div kontak-container
    kontakContainer.appendChild(frontEndDiv);
    kontakContainer.appendChild(backEndDiv);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
