// Caption Button Logic
document.getElementById('caption-button').addEventListener('click', () => {
    const captionInput = document.getElementById('caption-input');
    captionInput.style.display = 'block';
});

// Upload Button Logic
document.getElementById('upload-button').addEventListener('click', () => {
    document.getElementById('upload-input').click();
});

// Update Meme Caption
document.getElementById('caption-input').addEventListener('input', (e) => {
    const caption = e.target.value;
    document.getElementById('meme-caption').textContent = caption;
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

// Share Meme
document.getElementById('share-button').addEventListener('click', () => {
    const memeContainer = document.getElementById('meme-container');
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

// Switch Between Tabs
function switchTab(tab) {
    let title, description, imageSrc;
    switch (tab) {
        case '
