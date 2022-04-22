window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

const canvas = document.getElementsByTagName('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;