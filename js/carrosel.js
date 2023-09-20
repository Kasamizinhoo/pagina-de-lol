$(document).ready(function () {
    // Captura o carrossel
    var carousel = $('#carouselExampleCaptions');

    // Atualiza o fundo quando o carrossel desliza (slide)
    carousel.on('slid.bs.carousel', function () {
        var activeItem = carousel.find('.carousel-item.active');
        var backgroundUrl = activeItem.find('img').attr('src');
        $('#carousel-background').css('background-image', 'url(' + backgroundUrl + ')');
    });

    // Inicializa o carrossel
    carousel.carousel();

    // Define a imagem de fundo inicialmente
    var initialBackgroundUrl = carousel.find('.carousel-item.active img').attr('src');
    $('#carousel-background').css('background-image', 'url(' + initialBackgroundUrl + ')');

    // Adiciona funcionalidade aos botões de controle do carrossel
    $('.carousel-control-prev').on('click', function () {
        carousel.carousel('prev');
    });

    $('.carousel-control-next').on('click', function () {
        carousel.carousel('next');
    });
});