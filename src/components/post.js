import { createEl } from '../createElement';

const arrows = (upvotes) => {
  const arrowContainer = createEl('div', ['arrow-container'], {});

  const upvote = createEl('img', ['vote-icon'], { src: './assets/upvote.png' });
  const downvote = createEl('img', ['vote-icon'], { src: './assets/downvote.png' });

  const _upvotes = createEl('span', ['upvote'], { innerText: upvotes})

  arrowContainer.appendChild(upvote)
  arrowContainer.appendChild(_upvotes);
  arrowContainer.appendChild(downvote);
  return arrowContainer;
}


export const post = (post) => {
  const postContainer = createEl('div', ['post-container'], {});

  postContainer.appendChild(arrows(post.ups))

  if (post.thumbnail) {
    const imageContainer = createEl('div', ['thumb-container'], {});
    const thumb = createEl('img', ['thumb-nail'], { src: post.thumbnail });
    imageContainer.appendChild(thumb)
    postContainer.appendChild(imageContainer);
  }

  const link = createEl('a', ['reddit-link'], { innerText: post.title, href: `https://reddit.com${post.permalink}` });
  postContainer.appendChild(link);
  return postContainer
}