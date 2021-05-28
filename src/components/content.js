import { createEl } from '../createElement';
import { post } from './post';

export const content = (posts) => {
  const postsContainer = createEl('div', ['content'], {});

  posts.forEach(p => {
    postsContainer.appendChild(post(p))
  })
  return postsContainer;
}