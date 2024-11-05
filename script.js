document.getElementById('caption-button').addEventListener('click', () => {
    document.getElementById('caption-input').style.display = 'block';
});

document.getElementById('upload-button').addEventListener('click', () => {
    document.getElementById('upload-input').click();
});

document.getElementById('caption-input').addEventListener('input', (e) => {
    const caption = e.target.value;
    document.getElementById('meme-caption').textContent = caption;
});

document.getElementById('color-input').addEventListener('input', (e) => {
    const color = e.target.value;
    document.getElementById('meme-caption').style.color = color;
});

document.getElementById('upload-input').addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
        document.getElementById('meme-image').src = event.target.result;
    };
    reader.readAsDataURL(file);
});

document.getElementById('save-button').addEventListener('click', () => {
    const memeContainer = document.querySelector('.meme-container');
    html2canvas(memeContainer).then(canvas => {
        const link = document.createElement('a');
        link.download = 'spongebob-meme.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
});

document.getElementById('share-button').addEventListener('click', () => {
    const memeContainer = document.querySelector('.meme-container');
    html2canvas(memeContainer).then(canvas => {
        canvas.toBlob(blob => {
            const file = new File([blob], 'spongebob-meme.png', { type: 'image/png' });
            if (navigator.share) {
                navigator.share({
                    files: [file],
                    title: 'SpongeBob Meme',
                    text: 'Check out this meme I created!',
                }).then(() => {
                    console.log('Share successful');
                }).catch(error => {
                    console.error('Share failed:', error);
                });
            } else {
                alert('Sharing is not supported in this browser.');
            }
        });
    });
});

function switchTab(tab) {
    let title, description, imageSrc;
    switch (tab) {
        case 'prehistoric':
            title = 'Prehistoric SpongeBob Meme Generator';
            description = 'Create hilarious prehistoric SpongeBob memes and share them with your friends!';
            imageSrc = 'spongebob-prehistoric.jpg';
            break;
        case 'exhausted':
            title = 'Exhausted SpongeBob Meme Generator';
            description = 'Make your own exhausted SpongeBob memes to express your feelings!';
            imageSrc = 'spongebob-exhausted.jpg';
            break;
        case 'stupid':
            title = 'Stupid SpongeBob Meme Generator';
            description = 'Generate funny stupid SpongeBob memes to lighten the mood!';
            imageSrc = 'spongebob-stupid.jpg';
            break;
        case 'mocking':
        default:
            title = 'Mocking SpongeBob Meme Generator';
            description = 'Generate your own mocking SpongeBob meme and share the laughs!';
            imageSrc = 'spongebob-mocking.jpg';
            break;
    }
    document.getElementById('main-title').textContent = title;
    document.getElementById('description').textContent = description;
    document.getElementById('meme-image').src = imageSrc;
}