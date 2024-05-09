let bobRossImages = [
    "https://bit.ly/3Ck6DTU",
    "https://bit.ly/3ozQCVK",
    "https://bit.ly/3omYDN6",
    "https://bit.ly/3osrfoi",
    "https://bit.ly/3CkRXE6"
];

const imgs = document.getElementsByTagName("img");

for(let img of imgs) {
    const idx = Math.floor(Math.random() * bobRossImages.length);
    img.src = bobRossImages[idx];
}