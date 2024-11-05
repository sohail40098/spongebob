document.addEventListener('DOMContentLoaded', function() {
    const captionButton = document.getElementById('caption-button');
    const uploadButton = document.getElementById('upload-button');
    const captionInput = document.getElementById('caption-input');
    const uploadInput = document.getElementById('upload-input');
    const memeCaption = document.getElementById('meme-caption');
    const memeImage = document.getElementById('meme-image');
    const colorInput = document.getElementById('color-input');
    const saveButton = document.getElementById('save-button');
    const shareButton = document.getElementById('share-button');
    const mainTitle = document.getElementById('main-title');
    const description = document.getElementById('description');

    const memeData = {
        prehistoric: {
            title: 'Prehistoric SpongeBob Meme Generator',
            image: 'spongebob-prehistoric.jpg',
            description: 'Generate your own prehistoric SpongeBob meme and share the ancient laughs!'
        },
        exhausted: {
            title: 'Exhausted SpongeBob Meme Generator',
            image: 'spongebob-exhausted.jpg',
            description: 'Generate your own exhausted SpongeBob meme and share the tired laughs!'
        },
        stupid: {
            title: 'Stupid SpongeBob Meme Generator',
            image: 'spongebob-stupid.jpg',
            description: 'Generate your own stupid SpongeBob meme and share the silly laughs!'
        }
    };

    function switchTab(tab) {
        mainTitle.textContent = memeData[tab].title;
        memeImage.src = memeData[tab].image;
        description.textContent = memeData[tab].description;
    }

    captionButton.addEventListener('click', function() {
        captionInput.style.display = 'block';
        const captionText = captionInput.value;
        memeCaption.textContent = captionText;
    });

    captionInput.addEventListener('input', function() {
        memeCaption.textContent = captionInput.value;
    });

    uploadButton.addEventListener('click', function() {
        uploadInput.click();
    });

    uploadInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            memeImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    });

    colorInput.addEventListener('input', function() {
        memeCaption.style.color = colorInput.value;
    });

    saveButton.addEventListener('click', function() {
        const link = document.createElement('a');
        link.download = 'meme.png';
        link.href = memeImage.src;
        link.click();
    });

    shareButton.addEventListener('click', function() {
        if (navigator.share) {
            navigator.share({
                title: 'Check out my meme!',
                text: 'I made a funny meme using the SpongeBob Meme Generator.',
                url: memeImage.src
            }).catch(console.error);
        } else {
            alert('Your browser does not support the Web Share API.');
        }
    });
});