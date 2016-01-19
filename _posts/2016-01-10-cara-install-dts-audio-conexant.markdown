---
layout: post
title:  "Cara install DTS Studio Sound untuk semua soundcard Conexant"
date:   2016-01-10 01:00:00 +0700
categories: software
tags:
- tweak
- windows
- audio

---




Sekarang gua mau ngeshare gimana cara install DTS Studio Sound di Conexant apapun.&nbsp;

Menurut analisa gua, ini DTS lumayan mantep audionya dibanding bawaan. Laptop gua <a title="ASUS">SNSV</a> X450LC, dengan driver MaxxAudio, tapi yah mungkin telinga gak cocok sama itu Maxx, jadi pasang yang DTS.
[[MORE]]

Penampakannya kaya gini nih<br>
![image](https://36.media.tumblr.com/26ee42e9ced58bbc40640d700cc939a0/tumblr_inline_nxx2h9q9Vp1tyjkfb_540.png)![image](https://41.media.tumblr.com/25ff6520c0026c954730d560d3b91035/tumblr_inline_nxx2pqCPOF1tyjkfb_540.png)

Nah ini gua embat driver punya <a title="hp">dy</a>&nbsp;, ada bacaanya kan tuh merek.

Sebelumnya default drivernya ya punya Maxx tapi di install dengan DTS ini, untuk selain Maxx juga bisa kok atau laptop lain lah, yang penting drivernya Conexant. Bukan Realtek, bukan IDT, tapi Conexant &nbsp;XD

Sedot-sedot:

[8.65.121.0 (10/27/2015) from Microsoft Update Catalog  for Hewlett-Packard [HP] - WHQL for Win10 x64 only](http://download.windowsupdate.com/c/msdownload/update/driver/drvs/2015/11/20798116_53d6a79ed8315eb0a90a4fc7b4751075b0362dd4.cab)

NB: INI BUAT WINDOWS 10

Ok, kita ke step-step nya

- Restart as disable driver signature -

Restart dulu PC biar masuk **Startup Settings**

**

Dengan cara klik>Restart** dibarengi dengan tombol **Shift**

![image](https://41.media.tumblr.com/c3e4e96d8c1b1b266a9e46721e8ca7e1/tumblr_inline_nxx3kdgOHw1tyjkfb_540.png)

Nah ntar nongol yang kaya gini nih, trus klik aja **Troubleshoot**&nbsp;

![image](https://40.media.tumblr.com/88a641b9bd9cb00cb7e8610f5a19d3be/tumblr_inline_nxx3pcqISa1tyjkfb_540.png)

Selanjutnya klik **Advanced options

**

![image](https://41.media.tumblr.com/3f992c4f33862d0ac08f5081ee275b50/tumblr_inline_nxx3ylZGUl1tyjkfb_540.png)

Klik **Startup Settings**<br>
![image](https://41.media.tumblr.com/643f232be0fa3f1a19f4f311d4153f6e/tumblr_inline_nxx449l0071tyjkfb_540.png)

Klik **Restart**

Nah ntar ngerestart pc nya, pas udah restart bakal nongol lagi Startup Settings

Pencet aja angka 7 (di keyobard bukan di touchnya wkwk)

- TAHAP NGOPREK SAMA INSTALASINYA -

Kita udah ke desktop nih, waktunya mulai ngocok
Ekstrak dulu hasil sedot yang tadi. Terserah simpan dimana aja. Kalo digambar gua simpan di desktop

![image](https://40.media.tumblr.com/4aa43cfed1e08017775bd73959c59c90/tumblr_inline_nxx4p1yW2e1tyjkfb_540.png)

Buka file **chdrt.inf** kaya gini

![image](https://41.media.tumblr.com/9027400b41e568d2539fe3e9356741a8/tumblr_inline_nxx4uwxRCe1tyjkfb_540.png)

Sebelum ngeedit, kita mesti tau dulu **Hardware Id**

Contoh hardware Id
HDAUDIO\FUNC_01&amp;VEN_14F1&amp;
DEV_510F&amp;SUBSYS_104311BF

Nah diatas itu Hardware Id Soundcard buat laptop ASUS gua

Gimana cara dapetin itu Hardware Id?

Buka **Sounds** dengan klik kanan **Icon Volume**

Klik kanan pada bagian **Speakers &gt; Properties**<br>
![image](https://41.media.tumblr.com/472d6845d98b615dc49b5666f49105cf/tumblr_inline_nxx52hgW171tyjkfb_540.png)

Trus klik lagi **Properties**. ntar nongol dah Conexant SmartAudio HD Properties

Arahkan ke tab **Details**, lalu ubah **Property **menjadi **Hardware Ids**

Nongol dah tuh **Hardware Ids**&nbsp;nya. Kan valuenya ada 2 tuh, pilih aja yang kedua

Klik kanan **copy&nbsp;**<br>
![image](https://40.media.tumblr.com/591a3c14a60d6d29fc71b400ae94fc73/tumblr_inline_nxx5a0p99n1tyjkfb_540.png)

Jeng-jeng, udah dapet dah Hardware Idnya

Selanjutnya buka file **chdrt.inf** yang tadi.

Lalu arahkan aja kesini.<br>
![image](https://41.media.tumblr.com/a7e163d7402ad2f1b68a440d37ad1bf9/tumblr_inline_nxx5eikaGB1tyjkfb_540.png)

Chotto matte kudasai, berhubung laptop gua driver pake mic 1DMIC jadi gw pake itu. Kalo buat laptop yang lain bisa dicek di driver Conexant bawaan laptopnya.

Dengan cara hampir sama seperti mengecek Hardware Id, tetapi untuk Property kita arahkan ke **Inf Section** kaya gini.
![image](https://36.media.tumblr.com/1722e66a5ebd70ba43b6511174c11095/tumblr_inline_nxx5sv5VEY1tyjkfb_540.png)

Buat ngemasukin hardware id kita cocokin aja misal ada 1DMICnya<br>
![image](https://40.media.tumblr.com/66f82d1143d658dedccdd882e067cb21/tumblr_inline_nxx5x6dUIF1tyjkfb_540.png)

Memasukannya seperti ini

**%HdAudioFunctionDriver.CNXTCodec.
DeviceDesc% = HdAud2072x4.1DMic, 
HDAUDIO\FUNC_01&amp;VEN_14F1&amp;
DEV_50F4&amp;SUBSYS_103C80F2 ; Palazzo**

Belakangnya dari HDAUDIO kita ganti tuh sama Hardware Id yang kita copy tadi.

Jadinya

**%HdAudioFunctionDriver.CNXTCodec.
DeviceDesc% = HdAud2072x4.1DMic, 
**HDAUDIO\FUNC_01&amp;VEN_14F1&amp;
DEV_510F&amp;SUBSYS_104311BF **; Palazzo**

![image](https://41.media.tumblr.com/68b1a5e731a38cea83f81077ddd48de1/tumblr_inline_nxx62wL2Vy1tyjkfb_540.png)

Trus disave

Udah kesimpen kan, sekarang tahap instalasinya

Buka yang tadi **Conexant SmartAudio HD Properties**, klik tab General, habis itu klik **Change Settings**

Masuk ke tab **Driver**, klik **Update Driver**<br>
![image](https://40.media.tumblr.com/01bc97f48499412426fa6e00a0e34dc5/tumblr_inline_nxx67h5CFg1tyjkfb_540.png)

Klik Browse my computer for driver software<br>
![image](https://41.media.tumblr.com/badbc3112a468bcb86e19514e850ad9b/tumblr_inline_nxx68yEDuf1tyjkfb_540.png)

Terus klik **Let me pick** from blablabla.....

Lalu klik **Have Disk**

Arahkan ke folder tadi dan cari **chdrt.inf **&gt; klik **Open **&gt; **Ok**
![image](https://40.media.tumblr.com/6fad6d1f72523cf9a47864f2a3fc44ad/tumblr_inline_nxx6cwRSus1tyjkfb_540.png)

Klik **Next**<br>
![image](https://36.media.tumblr.com/6e065ecfa8e64f223027665db942cb96/tumblr_inline_nxx6e36gjt1tyjkfb_540.png)

Pas lagi install ntar muncul kaya gini, klik aja **Install this driver software anyway**
![image](https://41.media.tumblr.com/d0e47997bd51669001222f97bc7fd0ae/tumblr_inline_nxx6fnavSr1tyjkfb_540.png)

Tunggu instalasi sampai selesai wkwk

NB: Jangan lupa berdoa lagi install, bisa aja BSOD. Tapi kalo diikutin dengan teliti pasti berhasil (y)

Lagi ngeinstall ntar muncul ini logo DTSnya
![image](https://40.media.tumblr.com/c8204b54e72e6721291dcffc52748042/tumblr_inline_nxx6k8okRT1tyjkfb_540.png)

Kalau dah kelar instalnya, coba” dulu DTSnya apa berfungsi apa kagak.
Semuanya terlaksana dengan baik berarti

Selamat DTS nya udah kepasang *cheers tinggal dengerin dah pake Headphone trus utak-atik EQ nya, mantap.

Sekian tutorial pertama dari gua, dan sekarang ngatuk banget mau tidur dulu wkwk


