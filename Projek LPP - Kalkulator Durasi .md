# Testing
### Test Case 1: Rentang Waktu di Hari yang Sama
**Input:**
startHour = 22
startMinute =45
endHour =23
endMinute =59
**Expected Output:**
"Durasi: 1 jam 14 menit"
**Actual Output:**
"Durasi: 1 jam 14 menit"
**Status:** PASS

### Test Case 2: Rentang Waktu Lewat Tengah Malam 
**Input:**
startHour = 22
startMinute =45
endHour =3
endMinute =34
**Expected Output:**
"Durasi: 4 jam 49 menit"
**Actual Output:**
"Durasi: 4 jam 49 menit"
**Status:** PASS

### Test Case 3: Input Waktu di Luar Rentang
**Input:**
startHour: 25
**Expected Output:**
"Input salah! Jam harus antara 0-23." lalu input diminta ulang. 
**Actual Output:**
"Input salah! Jam harus antara 0-23." lalu input diminta ulang.
**Status:** PASS

