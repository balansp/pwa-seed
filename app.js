
 
  window.addEventListener('load', async e => {
    if ('serviceWorker' in navigator) { 
        try {
            navigator.serviceWorker.register('./sw.js'); 
            console.log("Service Worker register")
        } catch (e) {
          alert('ServiceWorker registration failed. Sorry about that.'); 
        }
      }  

  });
