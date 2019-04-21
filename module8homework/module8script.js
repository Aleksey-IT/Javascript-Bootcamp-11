'use strict';
// Реализуйте функционал:
//       - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
//       - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
//         создается динамически при загрузке страницы.
//       - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
//         он содержит ссылку на большое изображение. preview и его элементы, также создаются 
//         динамически, при загрузке страницы.
//       - При клике в элемент preview, необходимо подменить src тега img внутри fullview
//         на url из data-атрибута выбраного элемента.
//       - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
//       - Изображений может быть произвольное количество.
//       - Используйте делегирование для элементов preview.
//       - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
//       - CSS-оформление и имена классов на свой вкус.

const galleryItems = [{
        preview: 'img/preview-1.jpeg',
        fullview: 'img/fullview-1.jpeg',
        alt: "alt text 1"
    },
    {
        preview: 'img/preview-2.jpeg',
        fullview: 'img/fullview-2.jpeg',
        alt: "alt text 2"
    },
    {
        preview: 'img/preview-3.jpeg',
        fullview: 'img/fullview-3.jpeg',
        alt: "alt text 3"
    },
    {
        preview: 'img/preview-4.jpeg',
        fullview: 'img/fullview-4.jpeg',
        alt: "alt text 4"
    },
    {
        preview: 'img/preview-5.jpeg',
        fullview: 'img/fullview-5.jpeg',
        alt: "alt text 5"
    },
    {
        preview: 'img/preview-6.jpeg',
        fullview: 'img/fullview-6.jpeg',
        alt: "alt text 6"
    },
];

const display = document.querySelector('.js-image-gallery');
console.log(display);
window.addEventListener("DOMContentLoaded", imageView);

function imageView() {
    const fullDisplay = document.createElement('div');
    fullDisplay.classList.add('fullview');

    let fullImage = `<img class='large' style= 'width:100%' src=${galleryItems[0].preview} data-fullview = ${galleryItems[0].fullview} alt=${galleryItems[0].alt}>`;
    console.log(fullImage);
    
    fullDisplay.innerHTML = fullImage;
    display.appendChild(fullDisplay);
    fullDisplay.style.textAlign = "center";

    const previewImage = document.createElement('ul');
    previewImage.classList.add('preview');
    previewImage.style.display = 'flex';
    previewImage.style.listStyle = 'none';
    display.style.width = "700px";
    display.style.margin = "auto";

    let previewList = galleryItems.reduce((acc, i) => acc + `<li><img style= 'width:100% height = 100px 'src=${i.preview} data-fullview = ${i.fullview} alt=${i.alt}> </li>`, "");
    console.log(previewList);

    previewImage.innerHTML = previewList;
    display.appendChild(previewImage);

    const largeImg = document.querySelector('.large');

    display.addEventListener('click', function (el) {
        if (el.target.nodeName !== "IMG") return;
        largeImg.src = el.target.dataset.fullview;
    });
}