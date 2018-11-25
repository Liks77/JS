'use strict'

const galleryItems = [
    { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
    { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
    { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
    { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
    { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
    { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
  ];

const fullview = document.createElement("div");
fullview.classList.add("fullview");

const fullviewImg = document.createElement("img");
fullviewImg.setAttribute("src", "img/fullview-1.jpeg");
fullviewImg.setAttribute("alt", "alt text 1");

const preview = document.createElement("ul");
preview.classList.add("preview");

const array_preview = galleryItems.map(item => {
  const previewItem = document.createElement("li");
  const previewImg = document.createElement("img");
  previewImg.setAttribute("src", item.preview);
  previewImg.setAttribute("data-fullview", item.fullview);
  previewImg.setAttribute("alt", item.alt);

  fullview.append(fullviewImg);
  previewItem.append(previewImg);
  preview.append(previewItem);
  fullview.append(preview);
});

const imageGallery = document.querySelector(".js-image-gallery");
imageGallery.append(fullview, preview);

preview.addEventListener("click", previewClick);

function previewClick(event) {
  event.preventDefault();

  const target = event.target;
  if (target.nodeName !== "IMG") return;
  setActiveLink(target);
};

  function setActiveLink(ActiveLink) {
    const srcFullview = document.querySelector(".fullview img");
    srcFullview.setAttribute("src", ActiveLink.dataset.fullview);
    srcFullview.setAttribute("alt", ActiveLink.alt);
};