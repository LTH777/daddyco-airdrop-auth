function openInNewTab(url) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

function setupSocialButtons() {
  const mapping = {
    website: 'https://www.cobratate.com/',
    telegram: 'https://t.me/DADDYTATECTO',
    x: 'https://x.com/i/communities/1855296591726604541',
    dexscreener: 'https://dexscreener.com/solana/zcdAw3jpcqEY8JYVxNVMqs2cU35cyDdy4ot7V8edNhz'
  };
  document.querySelectorAll('.icon-btn').forEach(function(btn) {
    var key = btn.getAttribute('data-social');
    if (key && mapping[key]) {
      btn.addEventListener('click', function() { openInNewTab(mapping[key]); });
    }
  });
}



document.addEventListener('DOMContentLoaded', function() {
  setupSocialButtons();
});


