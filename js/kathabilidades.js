document.getElementById('habilidade1').addEventListener('click', function () {
    atualizarVideo('https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0055/ability_0055_P1.webm');
});

document.getElementById('habilidade2').addEventListener('click', function () {
    atualizarVideo('https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0055/ability_0055_P1.webm');
});

document.getElementById('habilidade3').addEventListener('click', function () {
    atualizarVideo('https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0055/ability_0055_P1.webm');
});

function atualizarVideo(urlVideo) {
    const video = document.getElementById('video');
    video.src = `${urlVideo}?autoplay=1&mute=1&controls=0&modestbranding=1`;
}

function trocarVideo(videoURL) {
    const video = document.getElementById('video');
    video.src = `${videoURL}?autoplay=1&mute=1&controls=0&modestbranding=1`;
}

    const videoContainer = document.getElementById('video-container');
    if (videos[habilidade]) {
        // Atualize o conteúdo do vídeo na coluna da direita
        videoContainer.innerHTML = `
            <iframe width="100%" height="315" src="${videos[habilidade]}" frameborder="0" allowfullscreen></iframe>
        `;
    }


document.getElementById('habilidade1').addEventListener('click', function () {
    playVideo('URL_do_Video_Habilidade1');
});

document.getElementById('habilidade2').addEventListener('click', function () {
    playVideo('URL_do_Video_Habilidade2');
});

document.getElementById('habilidade3').addEventListener('click', function () {
    playVideo('URL_do_Video_Habilidade3');
});

function playVideo(videoURL) {
    const video = document.getElementById('video');
    video.src = `${videoURL}?autoplay=1&mute=1&controls=0&modestbranding=1`;
}

function trocarFundo(skin) {
    const background = document.querySelector('.background-image img');
    
    // Mapeie as skins para os caminhos das imagens correspondentes
    const skins = {
        skin1: '../imgs/katskins/Katarina_1.jpg',
        skin2: '../imgs/katskins/Katarina_2.jpg',
        skin3: '../imgs/katskins/Katarina_3.jpg',
        skin4: '../imgs/katskins/Katarina_4.jpg',
        skin5: '../imgs/katskins/Katarina_5.jpg',
        skin6: '../imgs/katskins/Katarina_6.jpg',
        skin7: '../imgs/katskins/Katarina_7.jpg',
        skin8: '../imgs/katskins/Katarina_8.jpg',
        skin9: '../imgs/katskins/Katarina_9.jpg',
        skin10: '../imgs/katskins/Katarina_10.jpg',
        skin11: '../imgs/katskins/Katarina_12.jpg',
        skin12: '../imgs/katskins/Katarina_21.jpg',
        skin13: '../imgs/katskins/Katarina_29.jpg',
        skin14: '../imgs/katskins/Katarina_37.jpg',
        skin15: '../imgs/katskins/Katarina_47.jpg',
        skin16: '../imgs/katskins/Katarina_48.jpg',
        // Adicione mais skins conforme necessário
    };

    if (skins[skin]) {
        // Atualize a imagem de fundo com a imagem da skin selecionada
        background.src = skins[skin];
    }
}

