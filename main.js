if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/serviceworker.js')
  .then(registration => console.log('service worker registered', registration))
  .catch(error => console.error('error registering service worker', error));
}