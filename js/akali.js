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
        skin1: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_1.jpg',
        skin2: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_2.jpg',
        skin3: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_3.jpg',
        skin4: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_4.jpg',
        skin5: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_5.jpg',
        skin6: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_6.jpg',
        skin7: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_7.jpg',
        skin8: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_8.jpg',
        skin9: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_9.jpg',
        skin10: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_13.jpg',
        skin11: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_14.jpg',
        skin12: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_15.jpg',
        skin13: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_32.jpg',
        skin14: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_50.jpg',
        skin15: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_61.jpg', 
        skin16: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_68.jpg',
        // Adicione mais skins conforme necessário
    };

    if (skins[skin]) {
        // Atualize a imagem de fundo com a imagem da skin selecionada
        background.src = skins[skin];
    }
}

