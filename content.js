(function() {
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  function insertBeast(beastURL) {
    removeExistingBeasts();
    let beastImage = document.createElement('img');
    beastImage.setAttribute('src', beastURL);
    beastImage.style.height = '100vh';
    beastImage.className = 'beastify-image';
    document.body.appendChild(beastImage);
  }

  browser.runtime.onMessage.addListener(message => {
    if (message.command === 'show') {
      console.log('yo');
      show(message.html);
    }
  });

  show = (html) => {
    alert(html);
  };

  console && console.log('loaded');
})();
