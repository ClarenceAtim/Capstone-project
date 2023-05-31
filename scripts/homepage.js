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
    Image: 'Images/artiest 6.jpg',
  },
  {
    name: 'mr.kah',
    title: '3th Artist',
    description: 'Trap Rapper/Songwriter from Bamenda, Cameroon. Currently signed to B.D.A GANG MUSIC TRAP STAR! VOICE OF THE STREETS! CAMEROON!',
    Image: 'Images/artiest 5.jpg',
  },
  {
    name: 'city boy',
    title: '2nd Artist',
    description: 'Rapper city Boy Releases a conscious new ballad titled – A Di Call. The versatile rapper raps about the challenges he faces as an artist and the efforts he is putting in to realize his dreams..',
    Image: 'Images/artiest 4.jpg',
  },
  {
    name: 'dance crew',
    title: '1st artist',
    description: 'there are going to dance a variety of mix tap tonight ranging from gosple, makossa bikossi etc.',
    Image: 'Images/artiest 3.jpg',
  },
  {
    name: 'clarence peters',
    title: 'Main Dj',
    description: 'Retrouvez les meilleurs HITS Camerounais de 2018 à 2020 dans un Mashup comme vous les aimez.',
    Image: 'Images/artiest 2.jpg',
  },
  {
    name: 'clarence ',
    title: 'MC',
    description: 'Meet the best master of ceremoni in cameroon he is among the main gee froe tonight',
    Image: 'Images/artiest 1.jpg',
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