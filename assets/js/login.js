function checkLogin() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // periksa apakah username dan password cocok
  if (username == "admin" && password == "rahasia123") {
    // jika autentikasi berhasil, arahkan pengguna ke halaman dashboard
    window.location.href = "homepage.html";
  } else {
    // jika autentikasi gagal, tampilkan pesan error
    alert("Username atau password salah.");
  }
}