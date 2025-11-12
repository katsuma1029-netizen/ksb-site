
(function(){
  const DEFAULT_LANG = localStorage.getItem('ksb_lang') || 'ja';
  let dict = {};
  function setActive(lang){
    document.querySelectorAll('.lang-toggle button').forEach(b=>b.classList.toggle('active', b.dataset.setlang===lang));
  }
  async function loadLang(lang){
    try{
      const res = await fetch(`assets/lang/${lang}.json`);
      dict = await res.json();
    }catch(e){ dict = {}; }
    document.documentElement.lang = lang;
    localStorage.setItem('ksb_lang', lang);
    setActive(lang);
    translate();
  }
  function i18n(key){
    return key.split('.').reduce((o,k)=>o&&o[k], dict) || key;
  }
  window.i18n = i18n;
  function translate(){
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      const val = i18n(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'BUTTON'){
        if (el.tagName === 'BUTTON') el.textContent = val;
      } else {
        el.textContent = val;
      }
    });
    document.title = i18n('site.title');
    // active nav
    const path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('active', a.getAttribute('href')===path));
  }
  document.addEventListener('click', (e)=>{
    const b = e.target.closest('[data-setlang]');
    if (!b) return;
    e.preventDefault();
    loadLang(b.getAttribute('data-setlang'));
  });
  window.addEventListener('DOMContentLoaded', ()=>loadLang(DEFAULT_LANG));
})();
