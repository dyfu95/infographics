import replaceHash from './replace-hash';
const scrollIntoComic = (id) => {
  if (id === 'nightmare' || id === 'holic') {
    const comicId = document.querySelector(`.anchor-${id}`);
    comicId.scrollIntoView({ behavior: 'smooth', block: 'center' });
    replaceHash(id);
  } else {
    window.open('https://www.google.com/');
  }
};

export default scrollIntoComic;
