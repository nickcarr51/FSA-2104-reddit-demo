import { navBar } from './components/nav';
import { content } from './components/content';
import axios from 'axios';

const app = document.querySelector('#app');

const state = {
  navLinks: ['eyebleach', 'wallstreetbets', 'mma', 'videos', 'funny'],
  posts: []
}

const fetchData = async (hash) => {
  let data;
  if (hash) {
    data = (await axios.get(`/api/reddit?subreddit=${hash}`)).data;
  } else {
    data = (await axios.get('/api/reddit')).data;
  }
  state.posts = data.map(p => p.data);
}

window.addEventListener('hashchange', () => {
  render();
})

const render = async () => {
  app.innerHTML = '';
  app.appendChild(navBar(state.navLinks));
  await fetchData(window.location.hash.slice(1));
  app.appendChild(content(state.posts));
}

render();