function hitung() {
    // Ambil nilai panjang sisi dari input
    var sideA = parseFloat(document.getElementById('sideA').value);
    var sideB = parseFloat(document.getElementById('sideB').value);
    var sideC = parseFloat(document.getElementById('sideC').value);

    // Validasi input
    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
      alert("Mohon masukkan nilai yang valid untuk setiap sisi.");
      return;
    }

    // Hitung keliling
    var keliling = sideA + sideB + sideC;

    // Tampilkan hasil keliling
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = "Keliling: " + keliling.toFixed(2);
  }

  function hitungLuas() {
    // Ambil nilai alas dan tinggi dari input
    var alas = parseFloat(document.getElementById('alas').value);
    var tinggi = parseFloat(document.getElementById('tinggi').value);

    // Validasi input
    if (isNaN(alas) || isNaN(tinggi)) {
      alert("Mohon masukkan nilai yang valid untuk alas dan tinggi.");
      return;
    }

    // Hitung luas
    var luas = (alas * tinggi) / 2;

    // Tampilkan hasil luas
    var luasResultElement = document.getElementById('luasResult');
    luasResultElement.innerHTML = "Luas: " + luas.toFixed(2);
  }

  function resetForm() {
    // Fungsi untuk mereset formulir
    document.getElementById('sideA').value = '';
    document.getElementById('sideB').value = '';
    document.getElementById('sideC').value = '';
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('luasResult').innerHTML = '';
  }