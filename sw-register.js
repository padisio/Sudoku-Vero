
(function(){
  if (!('serviceWorker' in navigator)) { console.log('[SW] Not supported'); return; }
  function reg(url){
    return navigator.serviceWorker.register(url).then(function(reg){
      console.log('[SW] Registered:', url, reg);
      return reg;
    });
  }
  window.addEventListener('load', function(){
    reg('/service-worker.js').catch(function(err1){
      console.warn('[SW] /service-worker.js failed', err1);
      return reg('./service-worker.js');
    }).catch(function(err2){
      console.error('[SW] Registration failed both paths', err2);
    });
  });
})();
