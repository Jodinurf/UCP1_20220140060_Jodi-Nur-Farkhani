$(document).ready(function () {
    $(".carousel").carousel(); // Aktifkan Carousel
});

$('.carousel').on('click', '.carousel-control-next', function() {
    $(this).closest('.carousel').carousel('next');
});

$('.carousel').on('click', '.carousel-control-prev', function() {
    $(this).closest('.carousel').carousel('prev');
});

function showAlert() {
    var nama = prompt("Lemme know ur name:", "Agus");
    if (nama != null) 
    {
        alert("Hii " + nama + " Welcome!.");
        alert("This is my exam project for Pengembangan Desain Web")
        if (confirm("Did u enjoy my exam project?")){
            alert("THANKS!")
        }else{
            alert("AH OKAY :')")
        } 
    }
    else 
    {
        confirm("okay then, it's up to u")
    };
}