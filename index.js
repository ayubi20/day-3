// Import Axios library
const axios = require('axios');

// URL endpoint yang ingin kita minta data
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Mengirim permintaan GET menggunakan Axios
axios.get(apiUrl)
  .then(response => {
    // Menampilkan data yang diterima dari respons
    console.log('Data diterima:', response.data);
  })
  .catch(error => {
    // Menangani kesalahan jika ada
    console.error('Terjadi kesalahan:', error);
  });