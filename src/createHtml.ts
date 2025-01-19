import { getPodcasts } from './api';

const podCastContainer = document.querySelector('.section_podlist_pods'); // main innehåll container


export async function createHtml() {  // skriver ut innehållet i main 
  const podCasts = await getPodcasts();  // Hämtar podcasts från api 

  // -------För varje podcast kommer "den här koden" att köras------/
  podCasts.programs.forEach((podcast: { programurl: string; socialimage: string; description: string; name: string; }) => {
    
    const innerArticle = createInnerArticle(); //Skriver ut hela artikeln för varje podcast

    createImg();

    const textDiv = createTextDiv(); // skriver ut text beskrivningen för podcasten

    createHeader();
    createP();
    createLink();

    function createInnerArticle() { 
      const innerArticle = document.createElement('article');
      innerArticle.setAttribute('class', 'section_article_innerarticle');
      podCastContainer!.appendChild(innerArticle);
      return innerArticle;
    }

    function createTextDiv() {
      const textDiv = document.createElement('div');
      textDiv.setAttribute('class', 'section_article_div');
      innerArticle.appendChild(textDiv);
      return textDiv;
    }

    function createLink() {
      const linkPlacement = document.createElement('a');
      const linkText = document.createTextNode('Lyssna här');
      linkPlacement.setAttribute('href', podcast.programurl);
      linkPlacement.appendChild(linkText);
      textDiv.appendChild(linkPlacement);
    }
    function createImg() {
      const imgPlacement = document.createElement('IMG');
      imgPlacement.setAttribute('src', podcast.socialimage);
      imgPlacement.setAttribute('width', '100');
      imgPlacement.setAttribute('height', '100');
      innerArticle.appendChild(imgPlacement);
    }

    function createP() {
      const descPlacement = document.createElement('p');
      const desc = document.createTextNode(podcast.description);
      descPlacement.appendChild(desc);
      textDiv.appendChild(descPlacement);
    }

    function createHeader() {
      const headerPlacement = document.createElement('h2');
      const programName = document.createTextNode(podcast.name);
      headerPlacement.appendChild(programName);
      textDiv.appendChild(headerPlacement);
    }
  });
  
}

export default createHtml;
