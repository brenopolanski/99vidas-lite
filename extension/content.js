(() => {
  const rootUrl = 'http://99vidas.com.br/';
  const $ = document.querySelector.bind(document);
  const scrollToY = y => window.scrollTo(0, y);

  function registerShortcuts() {
    // Go to search
    Mousetrap.bind('/', (event, key) => {
      $('div#search-toggle').click();

      return false;
    });

    // More casts ...
    Mousetrap.bind('space', () => {
      $('a.load-more-link').click();
    });

    // Toggle player Play / Pause
    Mousetrap.bind('p', () => {
      $('div.mejs-playpause-button > button').click();
    });

    // Toggle player Mudo / Desativar Mudo
    Mousetrap.bind('m', () => {
      $('div.mejs-volume-button > button').click();
    });

    // Go to Home
    Mousetrap.bind('g h', () => {
      window.location = rootUrl;
    });

    // Go to 2-pak
    Mousetrap.bind('g 2', () => {
      window.location = `${rootUrl}tag/2-pak/`;
    });

    // Go to 4x4
    Mousetrap.bind('g 4', () => {
      window.location = `${rootUrl}tag/4x4/`;
    });

    // Go to estilo 99vidas
    Mousetrap.bind('g 9', () => {
      window.location = `${rootUrl}tag/estilo-99vidas/`;
    });

    // Go to História dos Videogames
    Mousetrap.bind('g v', () => {
      window.location = `${rootUrl}tag/historia-dos-videogames/`;
    });

    // Go to Pancadão
    Mousetrap.bind('g p', () => {
      window.location = `${rootUrl}tag/pancadao/`;
    });

    // Scroll to top:
    Mousetrap.bind('g g', () => {
      scrollToY(0);
    });

    // Scroll to bottom
    Mousetrap.bind('G', () => {
      scrollToY(document.body.scrollHeight);
    });

    Mousetrap.bind({
      'shift+2+2+8': () => { window.location = `${rootUrl}99vidas-228-dance-anos-90/` }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Hide switch button (mobile | desktop)
    $('div#switch').style.display = 'none';
    registerShortcuts();
  });
})();
