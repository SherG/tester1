// JS Goes here - ES6 supported
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

const observer = lozad(); // lazy loads elements with default selector as ".lozad"
observer.observe();
// Initialize library
lozad('.lozad', {
    load: function(el) {
        el.src = el.dataset.src;
        el.onload = function() 
        
    }
}).observe()
