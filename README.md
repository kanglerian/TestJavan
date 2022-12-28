# Aplikasi Test Javan

Ini adalah aplikasi yang dibuat dalam proses rekrutmen Javan "Soal Test NodeJS".

Cara menjalankan aplikasi:
- git clone repository ini
- lakukan `sudo npm install`
- buatlah terlebih dahulu database dengan nama `javan_db`
- atur username, password dan nama database di folder `config` dengan nama file `config.json`
- lakukan `sequelize db:migrate` untuk generate table. Atau bisa import `javan_db.sql` di folder sql