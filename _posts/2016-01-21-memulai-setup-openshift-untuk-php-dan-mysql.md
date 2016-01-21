---
layout: post
title: "Memulai setup OpenShift untuk PHP dan MySQL"
date: 2016-01-21 19:02:21 +700
summary: -Your Summary Here-
category: 
tags: 
- web
- cloud
- tutorial
image: /images/default-thumb.png
---


OpenShift adalah layanan Cloud Computing dengan model Platform As a Service (PAaS) yang dikelola oleh RedHat.
Saat ini saya akan menjelaskan cara setup OpenShift untuk aplikasi PHP dan MySQL

Openshift memberikan layanan gratis dengan 1 GB space dan unmetered bandwidth
Dan juga cloud servernya, menggunakan Amazon EC2

<b>Memasang Aplikasi PHP dan MySQL</b>

1. Daftar dulu di http://www.openshift.com

2. Setelah mendaftar dan konfirmasi, kamu akan diarahkan ke sini

<a href="https://pherrykun.files.wordpress.com/2014/10/1.png"><img class=" wp-image-13" src="http://pherrykun.files.wordpress.com/2014/10/1.png?w=300" alt="1" width="300" height="155" /></a>

3. Klik Create your first application now

4. Pilih PHP yang digunakan, dibawah ini saya menggunakan PHP 5.4

<a href="https://pherrykun.files.wordpress.com/2014/10/capture.png"><img class="alignnone size-medium wp-image-18" src="http://pherrykun.files.wordpress.com/2014/10/capture.png?w=300" alt="Capture" width="300" height="149" /></a>

&nbsp;

5. Masukkan public domain, ini akan dijadikan sebagai akses kita terhadap aplikasi tersebut

6.Klik Create Application

7. Setelah selesai lanjutkan dengan mengklik "Not now, continue"

8. Cartridge berhasil dibuat sekarang tinggal menambahkan MySQL dan phpMyAdmin :D

<a href="https://pherrykun.files.wordpress.com/2014/10/capture1.png"><img class="alignnone size-medium wp-image-19" src="http://pherrykun.files.wordpress.com/2014/10/capture1.png?w=300" alt="Capture" width="300" height="150" /></a>

9. Selanjutnya untuk database, kita klik "Add MySQL 5.5", kemudian Add Cartrdige

10. Untuk bagian PMA, kita klik "Add phpMyAdmin 4.0", lalu Add Cartridge

<a href="https://pherrykun.files.wordpress.com/2014/10/capture2.png"><img class="alignnone size-medium wp-image-20" src="http://pherrykun.files.wordpress.com/2014/10/capture2.png?w=300" alt="Capture" width="300" height="143" /></a>

&nbsp;

Setelah selesai, akan ditampilkan juga jumlah storage, user pass db untuk MySQL.

Ingat: Untuk space PHP, MySQL, PMA, itu digabung dalam penggunaan sampai 1GB (karena ini akun free)

&nbsp;

Kita lanjut lagi ke bagian berikutnya :D :D

&nbsp;

<b>Membuat SSH Keys untuk mengakses aplikasi kita</b>

Alat tempur:
<ul>
	<li>Putty (<a href="http://the.earth.li/~sgtatham/putty/latest/x86/putty-0.63-installer.exe">Download</a>)</li>
	<li>Ruby (<a href="https://www.ruby-lang.org/id/downloads/">Download</a>)</li>
	<li>Git (<a href="http://git-scm.com/">Download</a>)</li>
</ul>
&nbsp;

Kita mulai senpai :)

1. Install Putty

2. Kemudian setelah selesai install Putty, Install Ruby

3. Ketika dalam instalasi ruby centang "Add Ruby executables to your PATH" Ini akan digunakan agar dapat mengakses ruby melalui Command Prompt (CMD). Klik Next

4. Selanjutnya install Git

5. Ketika dalam instalasi Git, untuk Adjust your PATH Environment klik "Use Git from the Windows Command Prompt" dan next" saja :v

6. Reboot

7. Setelah siap, masuk ke Command Prompt (CMD)

8. Selanjutnya ketik
<blockquote>gem install rhc</blockquote>
9. Sip!! rhc sudah terinstall, langkah berikutnya untuk login ke server Openshift  dengan mengetik
<blockquote>rhc setup</blockquote>
10. "Enter the server hostname: |openshift.redhat.com|" klik enter

11. Masukkan email sama password openshift

12. Kamu akan ditanyakan "Generate a token now" ketik yes kemudian klik enter

13 "Upload now?" ketik yes kemudian enter

<a href="https://pherrykun.files.wordpress.com/2014/10/capture3.png"><img class="alignnone size-medium wp-image-21" src="http://pherrykun.files.wordpress.com/2014/10/capture3.png?w=300" alt="Capture" width="300" height="151" /></a>

14. "Provide a name for this key:" Masukkan nama untuk key

Selanjutnya kita membuat private key

14. Buka PuttyGen (All Programs/Putty)

15. Conversions &gt; Import key

16. Load key yang sudah dibuat

<a href="https://pherrykun.files.wordpress.com/2014/10/capture4.png"><img class="alignnone size-medium wp-image-22" src="http://pherrykun.files.wordpress.com/2014/10/capture4.png?w=300" alt="Capture" width="300" height="209" /></a>

&nbsp;

17. Kemudian kita klik "Save as Private Key" ini akan digunakan sebagai password untuk login SSH dan juga SFTP

Key sudah dibuat, kita lanjut login putty

&nbsp;

<strong>Login SSH</strong>

1. Buka Putty

2. Klik Auth, lalu upload private key tadi yang sudah kita generate dengan PuttyGen :)

3. Kembali lagi ke Session

4. Untuk Hostnya ada di bagian kanan aplikasi OpenShift kamu :)

<a href="https://pherrykun.files.wordpress.com/2014/10/capture5.png"><img class="alignnone size-medium wp-image-23" src="http://pherrykun.files.wordpress.com/2014/10/capture5.png?w=300" alt="Capture" width="300" height="66" /></a>

5. Salin, kemudian tempel di host Putty menjadi seperti ini

542e40914382ec60220030c6@php-wwwmado.rhcloud.com

6. Klik Open, selesai dah &gt;.&lt;

&nbsp;

Dengan SSH key yang sudah generate, bisa digunakan juga untuk mengaksesnya dengan FTP Client


NB:

- Untuk phpmyadmin, login di http://.rhcloud.com/phpmyadmin :)

- Direktori root ada di app-root/repo, dimana tempat untuk data website

&nbsp;
