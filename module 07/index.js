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

  function createPostCard(post) {
//     <!-- <div class="post">
//     <img class="post__image" src="http://via.placeholder.com/400x150" alt="post image">
//     <h2 class="post__title">Lorem ipsum dolor</h2>
//     <p class="post__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!</p>
//     <a class="button" href="#">Read more</a>
// </div> -->
    let div = document.createElement('div');
    div.classList.add('post');

    const image = document.createElement('img');
    image.classList.add('post__image');
    image.setAttribute('src', post.img);
    image.setAttribute('alt', 'post image');
  
    const postTitle = document.createElement('h2');
    postTitle.classList.add('post__title');
    postTitle.textContent = post.title;
  
    const postText = document.createElement('p');
    postText.classList.add('post__text');
    postText.textContent = post.text;

    const postLink = document.createElement('a');
    postLink.classList.add('button');
    postLink.textContent = post.link;
    postLink.setAttribute('href', '#');
  
    div.append(image);
    div.append(postTitle);
    div.append(postText);
    div.append(postLink);
  
    return div;
  }
  
  
  const root = document.querySelector('#root');
  root.append(createPostCard(posts));
  