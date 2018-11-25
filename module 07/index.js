'use strict'

const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-1.com'
    },
    {
      img: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-2.com'
    },
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-3.com'
    }
  ];

  function createPostCard({img, title, text, link}) {
    const div = document.createElement('div');
    div.classList.add('post');

    const image = document.createElement('img');
    image.classList.add('post__image');
    image.setAttribute('src', img);
    image.setAttribute('alt', 'post image');

    const postTitle = document.createElement('h2');
    postTitle.classList.add('post__title');
    postTitle.textContent = title;
  
    const postText = document.createElement('p');
    postText.classList.add('post__text');
    postText.textContent = text;

    const postLink = document.createElement('a');
    postLink.classList.add('button');
    postLink.textContent = link;
    postLink.setAttribute('href', '#');
  
    div.append(image, postTitle, postText, postLink);
    
    return div;
  }
  
  const createPostCards = (posts) => {
    const element = posts.map(post => createPostCard(post))

    return element;
};

const root = document.querySelector('#root');

const cards = createPostCards(posts);

root.append(...cards);