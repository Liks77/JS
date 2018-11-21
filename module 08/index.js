'use strict'

const galleryItems = [
    { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
    { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
    { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
    { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
    { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
    { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
  ];
  class Gallery {
    constructor({items, parentNode, defaultActiveItem}) {
      this._items = items;
      this._parentNode = parentNode;
      this._defaultActiveItem = defaultActiveItem;
      this._listPreview;
      this._listPreviewItems;
      this._fullviewWrap;
      this._fullviewImg;
      this.createEl();
    }
  
    createEl() {
      this.createPreview();
      this.createFullview();
      this.changeFullview();
      this._parentNode.classList.add('image-gallery');
      this._parentNode.append(this._fullviewWrap, this._listPreview);
    }
  
    createFullview() {
      this._fullviewWrap = document.createElement('div');
      this._fullviewWrap.classList.add('fullpreview');
      this._fullviewImg = document.createElement('img');
      this._fullviewWrap.append(this._fullviewImg);
  
      const { fullview, alt } = this._items[this._defaultActiveItem];
      this._fullviewImg.src = fullview;
      this._fullviewImg.alt = alt;
    }
  
    createPreview() {
      this._listPreview = document.createElement('ul');
      this._listPreview.classList.add('preview');
  
      this._items.forEach(item => {
        this._listPreviewItems = document.createElement('li');
        const previewImg = document.createElement('img');
        previewImg.src = item.preview;
        previewImg.alt = item.alt;
        previewImg.dataset.fullview = item.fullview;
        this._listPreviewItems.append(previewImg);
        this._listPreview.append(this._listPreviewItems);
      });
    }
  
    changeFullview() {
      this._parentNode.addEventListener('click', (event) => {
        const nodeName = event.target.nodeName;
  
        this._fullviewImg.src = event.target.dataset.fullview;
        this._fullviewImg.alt = event.target.alt;
  
        if (nodeName !== 'IMG') return;
      });
    }
  };
  const mainGallery = new Gallery({
    items: galleryItems,
    parentNode: document.querySelector('.js-image-gallery'),
    defaultActiveItem: 1
  });