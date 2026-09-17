let again = "y";

while (again === "y" || again === "Y") {
    
    // 1. Input jam dan menit awal
    let startHour;
    do {
        startHour = parseInt(prompt("Masukkan Jam Mulai (0-23):"));
        if (startHour < 0 || startHour > 23 || isNaN(startHour)) {
            alert("Input salah! Jam harus antara 0-23.");
        }
    } while (startHour < 0 || startHour > 23 || isNaN(startHour));
    let startMinute;
    do {
        startMinute = parseInt(prompt("Masukkan Menit Mulai (0-59):"));
        if (startMinute < 0 || startMinute > 59 || isNaN(startMinute)) {
            alert("Input salah! Menit harus antara 0-59");
        }
    } while (startMinute < 0 || startMinute > 59 || isNaN(startMinute));
    // 2. Input jam dan menit akhir
    let endHour;
    do {
        endHour = parseInt(prompt("Masukkan Jam Mulai (0-23):"));
        if (endHour < 0 || endHour > 23 || isNaN(endHour)) {
            alert("Input salah! Jam harus antara 0-23.");
        }
    } while (endHour < 0 || endHour > 23 || isNaN(endHour));
    let endMinute;
    do {
        endMinute = parseInt(prompt("Masukkan Menit Mulai (0-59):"));
        if (endMinute < 0 || endMinute > 59 || isNaN(endMinute)) {
            alert("Input salah! Menit harus antara 0-59");
        }
    } while (endMinute < 0 || endMinute > 59 || isNaN(endMinute));

    // 3. Konversi seluruh waktu ke menit
    let startTotal = (startHour * 60) + startMinute;
    let endTotal = (endHour * 60) + endMinute;

    // 4. Penanganan lintas hari (melewati tengah malam)
    if (endTotal < startTotal) {
        endTotal = endTotal + 1440;
    }

    // 5. Hitung durasi total dalam menit
    let duration = endTotal - startTotal;

    // 6. Hitung jam dan menit
    let durationMinute = duration % 60;
    let durationHour = (duration - durationMinute) / 60;

    // 7. Tampilkan hasil
    alert("Durasi: " + durationHour + " jam " + durationMinute + " menit");

    // 8. Tanya ulang
    again = prompt("Apakah ingin menghitung lagi? (y/n):");
}

alert("Program selesai. Terima kasih!");