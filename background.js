browser.contextMenus.create(
  {
    id: 'lookup-selection',
    title: 'Lookup selection in Cambridge Dictionary',
    contexts: ['selection'],
    icons: {
      "16": "icons/cam-16.png",
      "32": "icons/cam-32.png"
    }
  },
  () => {
    console.log('created');
  }
);

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === 'lookup-selection') {
    console.log(info.selectionText);
    browser.tabs
      .query({ active: true, currentWindow: true })
      .then(sendShowDictionary)
      .catch(reportError);
  }
});

sendShowDictionary = tabs => {
  browser.tabs.sendMessage(tabs[0].id, {
    command: 'show',
    html: '<p>bullshit crap hooray</p>'
  });
};
