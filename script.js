// // Função para adicionar efeito de destaque e desfoque nas imagens
// function setupImageHighlight() {
//     const photos = document.querySelectorAll('.galeria img');

//     photos.forEach(photo => {
//         photo.addEventListener('click', () => {
//             // Remove a classe "blur" de todas as imagens
//             photos.forEach(p => p.classList.remove('blur'));
//             // Adicione a classe "blur" a todas as imagens, exceto à imagem clicada
//             photos.forEach(p => {
//                 if (p !== photo) {
//                     p.classList.add('blur');
//                 }
//             });
//             photo.classList.remove('blur');
//         });
//     });
// }

// Função para adicionar efeito de destaque e exibir em dimensões originais com limite máximo
function setupImageHighlight() {
    const photos = document.querySelectorAll('.galeria img');

    photos.forEach(photo => {
        photo.addEventListener('click', () => {
            // Remove a classe "blur" de todas as imagens
            photos.forEach(p => p.classList.remove('blur'));
            // Adicione a classe "blur" a todas as imagens, exceto à imagem clicada
            photos.forEach(p => {
                if (p !== photo) {
                    p.classList.add('blur');
                }
            });
            photo.classList.remove('blur');

            // Armazene as dimensões originais da imagem
            const originalWidth = photo.naturalWidth;
            const originalHeight = photo.naturalHeight;

            // Defina a largura com um limite máximo de 80% do contêiner pai
            const maxWidthPercentage = '40%';
            photo.style.width = maxWidthPercentage;
            photo.style.height = 'auto'; // Isso permite que a altura seja ajustada automaticamente com base na largura
        });
    });
}

// Aguarde o carregamento do documento antes de executar o código
document.addEventListener('DOMContentLoaded', setupImageHighlight);
