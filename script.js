// Caption Button Logic
document.getElementById('caption-button').addEventListener('click', () => {
    const captionInput = document.getElementById('caption-input');
    const caption = captionInput.value;
    document.getElementById('meme-caption').textContent = caption;
});

// Upload Button Logic
document.getElementById('upload-button').addEventListener('click', () => {
    document.getElementById('upload-input').click();
});

// Change Caption Color
document.getElementById('color-input').addEventListener('input', (e) => {
    const color = e.target.value;
    document.getElementById('meme-caption').style.color = color;
});

// Handle File Upload
document.getElementById('upload-input').addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
        document.getElementById('meme-image').src = event.target.result;
    };
    reader.readAsDataURL(file);
});

// Save Meme
document.getElementById('save-button').addEventListener('click', () => {
    const memeContainer = document.getElementById('meme-container');
    html2canvas(memeContainer).then(canvas => {
        const link = document.createElement('a');
        link.download = 'spongebob-meme.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
});

// Generate Share Link
document.getElementById('generate-link-button').addEventListener('click', () => {
    const memeContainer = document.getElementById('meme-container');
    html2canvas(memeContainer).then(canvas => {
        canvas.toBlob(blob => {
            const file = new File([blob], 'spongebob-meme.png', { type: 'image/png' });
            const shareableUrl = URL.createObjectURL(file);
            document.getElementById('share-link').value = shareableUrl;
            document.getElementById('share-link-container').style.display = 'block';
        });
    });
});

// Copy Share Link
function copyShareLink() {
    const shareLinkInput = document.getElementById('share-link');
    shareLinkInput.select();
    document.execCommand('copy');
    alert('Share link copied to clipboard!');
}

// Switch Between Tabs
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
            description = 'Generate hilarious SpongeBob memes. Add your own caption and share the fun!';
            imageSrc = 'spongebob-mocking.jpg';
            break;
    }
    document.getElementById('main-title').textContent = title;
    document.getElementById('description').textContent = description;
    document.getElementById('meme-image').src = imageSrc;
    document.getElementById('caption-input').value = '';
    document.getElementById('meme-caption').textContent = '';
}

