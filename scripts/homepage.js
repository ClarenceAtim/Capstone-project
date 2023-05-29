const seeMore = document.querySelector('.seemore');
const seeArtist = document.querySelector('.artist-section');
const artsitSection = document.querySelector('.artist-container');

seeMore.addEventListener(('click'), () => {
  seeArtist.classList.toggle('setoff');
});

const artistContainer = [
  {
    name: 'ELLA',
    title: 'Main artist',
    description: 'Answering the call of nostalgia and in a bid to bridge the gap between the new-school gospledance and socia dance.',
    Image: 'Images/main artiest .png',
  },
  {
    name: 'mr.kah',
    title: '3th Artist',
    description: 'Trap Rapper/Songwriter from Bamenda, Cameroon. Currently signed to B.D.A GANG MUSIC TRAP STAR! VOICE OF THE STREETS! CAMEROON!',
    Image: 'Images/mr kah.png',
  },
  {
    name: 'city boy',
    title: '2nd Artist',
    description: 'Rapper Skidi Boy Releases a conscious new ballad titled – A Di Call. The versatile rapper raps about the challenges he faces as an artist and the efforts he is putting in to realize his dreams..',
    Image: 'Images/cityboy.png',
  },
  {
    name: 'dance crew',
    title: '1st artist',
    description: 'there are going to dance a variety of mix tap tonight ranging from gosple, makossa bikossi etc.',
    Image: 'Images/dance crew.png',
  },
  {
    name: 'clarence peters',
    title: 'Main Dj',
    description: 'Retrouvez les meilleurs HITS Camerounais de 2018 à 2020 dans un Mashup comme vous les aimez.',
    Image: 'Images/peter.png',
  },
];

artistContainer.forEach((cardArtist) => {
  const content = ` 
    <div class="artist">
    <div>
     <img class="image-artist" src="${cardArtist.Image}" alt="Artist-image">
    </div>
    <div class="cards">
     <h2>${cardArtist.name}</h2>
        <h3>${cardArtist.title}</h3>

        <p class="demo-text">${cardArtist.description}</p>
    </div>
            </div>
    `;
  artsitSection.innerHTML += content;
});