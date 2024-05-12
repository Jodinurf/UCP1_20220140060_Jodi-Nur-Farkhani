document.getElementById('musicCon1').addEventListener('click', function() {
    var audio = document.getElementById('music1');
    var image = this.querySelector('img'); // Pilih elemen gambar dalam div
    if (audio.paused) {
        audio.play();
        image.src = "https://i.pinimg.com/736x/06/35/70/063570e19bad1e81bc7ea079f391fa93.jpg"; // Ganti gambar menjadi ikon pause
    } else {
        audio.pause();
        image.src = "https://i.pinimg.com/736x/06/35/70/063570e19bad1e81bc7ea079f391fa93.jpg"; // Ganti gambar menjadi ikon play
    }
});

document.getElementById('musicCon2').addEventListener('click', function() {
    var audio = document.getElementById('music2');
    var image = this.querySelector('img');
    if (audio.paused) {
        audio.play();
        image.src = "https://i.pinimg.com/564x/4a/d2/66/4ad266e916499ec9d19a64335c9a1b29.jpg";
    } else {
        audio.pause();
        image.src = "https://i.pinimg.com/564x/4a/d2/66/4ad266e916499ec9d19a64335c9a1b29.jpg";
    }
});

document.getElementById('musicCon3').addEventListener('click', function() {
    var audio = document.getElementById('music3');
    var image = this.querySelector('img');
    if (audio.paused) {
        audio.play();
        image.src = "https://i.pinimg.com/564x/3e/d2/cb/3ed2cba3e10164ce70695ed3f9603425.jpg";
    } else {
        audio.pause();
        image.src = "https://i.pinimg.com/564x/3e/d2/cb/3ed2cba3e10164ce70695ed3f9603425.jpg";
    }
});

document.getElementById('musicCon4').addEventListener('click', function() {
    var audio = document.getElementById('music4');
    var image = this.querySelector('img');
    if (audio.paused) {
        audio.play();
        image.src = "https://i.pinimg.com/564x/42/1f/09/421f09b157195f9d87663811c9d112d2.jpg";
    } else {
        audio.pause();
        image.src = "https://i.pinimg.com/564x/42/1f/09/421f09b157195f9d87663811c9d112d2.jpg";
    }
});
