(function() {
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  const modal = document.createRange().createContextualFragment(`
  <div class="modal-fixer hidden" id="ch-modal-fixer">
    <div class="modal">
      <div class="modal-content" id="ch-modal-content">
        <p>U BITCH</p>
      </div>
    </div>
  </div>
  `);
  document.body.appendChild(modal);

  browser.runtime.onMessage.addListener(message => {
    if (message.command === 'show') {
      console.log('yo');
      show(message.html);
    }
  });

  const show = html => {
    console.log(html);
    document.getElementById('ch-modal-content').innerHTML = `<span>${html}</span>`;
    const fixer = document.getElementById('ch-modal-fixer');
    fixer.classList.remove('hidden');
    fixer.addEventListener('click', () => {fixer.classList.add('hidden')});
  };

  console && console.log('loaded');
})();
