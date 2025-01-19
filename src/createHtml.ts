import { getPodcasts } from './api';

const podCastContainer = document.querySelector('.section_podlist_pods');

export async function createHtml() {

  const podCasts = await getPodcasts();

  type Podcasttype = {
    programurl: string;
    socialimage: string;
    description: string;
    name: string;
  };

  podCasts.programs.forEach((podcast: Podcasttype) => {
    const podcastsHtml = `
        <article class="section_article_innerarticle">
        <img src="${podcast.socialimage}" width="100" height="100" alt="podcast omslag">
          <div class="section_article_div">
            <h2>${podcast.name}</h2>
            <p>${podcast.description}</p>
            <a href="${podcast.programurl}">Lyssna här</a>
          </div>
        </article>
      
      `;

    podCastContainer!.innerHTML += podcastsHtml;
  });
}

export default createHtml;
