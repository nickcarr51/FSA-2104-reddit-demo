import { createEl } from '../createElement';

export const navBar = (links) => {
  const nav = createEl('nav', [], {});

  const img = createEl('img', [], { src: './assets/reddit-logo.png', id: 'reddit-logo' })
  const linkContainer = createEl('div', ['link-container'], {});

  const home = createEl('a', [], { href: '#', innerText: 'Home' })
  linkContainer.appendChild(home);

  links.forEach(l => {
    const _link = createEl('a', [], { href: `#${l}`, innerText: l })
    linkContainer.appendChild(_link);
  })
  
  nav.appendChild(img);
  nav.appendChild(linkContainer);
  return nav;
}