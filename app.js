  (function(){
    if(location.protocol!="https:"){
      location.protocol="https:";
    }
      function $(selector) {
        return document.querySelector(selector);
      }

       //Events
      $(".btn").addEventListener("click", function(event) {
        $('#discount').value = "";
        $('#afterDiscount').value = "";
        let discount = 0;
        let amount = $('#amount').value;
        let percentage = $('#percentage').value;
        if(amount && percentage){
            discount = (amount * percentage) / 100;
            $('#discount').value = discount;
            $('#afterDiscount').value = amount - discount;
        } 
      });
 
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

    })();
