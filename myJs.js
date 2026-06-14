

var audio = document.querySelector('#bgAudio');
var tombolAudio = document.querySelector('#audioBtn');
var ikonAudio = document.querySelector('#audioIcon');

var sedangBermain = false;

tombolAudio.addEventListener('click', function() {
    if (sedangBermain == true) {
        audio.pause();
        ikonAudio.textContent = '♪';
        sedangBermain = false;
    } else {
        audio.play();
        ikonAudio.textContent = '■';
        sedangBermain = true;
    }
});



function flipCard(kartu) {
    if (kartu.classList.contains('terbalik')) {
        kartu.classList.remove('terbalik');
    } else {
        kartu.classList.add('terbalik');
    }
}

var kartuGloria = document.querySelector('#kartuGloria');
var kartuPetra = document.querySelector('#kartuPetra');
var kartuISTTS = document.querySelector('#kartuISTTS');

kartuGloria.addEventListener('click', function() {
    flipCard(kartuGloria);
});

kartuPetra.addEventListener('click', function() {
    flipCard(kartuPetra);
});

kartuISTTS.addEventListener('click', function() {
    flipCard(kartuISTTS);
});


var btnSemua = document.querySelector('#btnSemua');
var btnPemrograman = document.querySelector('#btnPemrograman');
var btnLainnya = document.querySelector('#btnLainnya');

btnSemua.addEventListener('click', function() {
    filterKeahlian('semua', btnSemua);
});

btnPemrograman.addEventListener('click', function() {
    filterKeahlian('pemrograman', btnPemrograman);
});

btnLainnya.addEventListener('click', function() {
    filterKeahlian('lainnya', btnLainnya);
});


function filterKeahlian(kategori, tombol) {
    var semuaTombol = document.querySelectorAll('.button');

    for (var i = 0; i < semuaTombol.length; i++) {
        semuaTombol[i].classList.remove('aktif');
    }

    tombol.classList.add('aktif');

    var semuaKartu = document.querySelectorAll('.skill-card');

    for (var j = 0; j < semuaKartu.length; j++) {
        var kartu = semuaKartu[j];

        if (kategori == 'semua') {
            kartu.classList.remove('tersembunyi');
        } else if (kartu.classList.contains(kategori)) {
            kartu.classList.remove('tersembunyi');
        } else {
            kartu.classList.add('tersembunyi');
        }
    }
}

var buttonvidio1 = document.querySelector('#buttonvidiosekolah1');
var buttonvidio2 = document.querySelector('#buttonvidiosekolah2');
var buttonvidio3 = document.querySelector('#buttonvidiosekolah3');

var vidioGloria = document.querySelector('#vidioGloria');
var vidioPetra = document.querySelector('#vidioPetra');
var vidioISTTS = document.querySelector('#vidioISTTS');
buttonvidio1.addEventListener('click', function(){
    vidioGloria.classList.remove('tersembunyi');
    vidioPetra.classList.add('tersembunyi');
    vidioISTTS.classList.add('tersembunyi');
});

buttonvidio2.addEventListener('click', function(){
    vidioGloria.classList.add('tersembunyi');
    vidioPetra.classList.remove('tersembunyi');
    vidioISTTS.classList.add('tersembunyi');
});

buttonvidio3.addEventListener('click', function(){
    vidioGloria.classList.add('tersembunyi');
    vidioPetra.classList.add('tersembunyi');
    vidioISTTS.classList.remove('tersembunyi');
});

var navHP = document.querySelector('.navHP');
var isinavHP = document.querySelector('.isinavHP');
var navbar = 0;

navHP.addEventListener('click', function(){
    if(navbar===0){
        isinavHP.classList.remove('tersembunyi');
        navbar =1;
    }else{
        isinavHP.classList.add('tersembunyi');
        navbar=0;
    }
});