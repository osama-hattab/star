document.addEventListener('DOMContentLoaded', function() {
    const langSwitcher = document.getElementById('langSwitcher');
    let currentLang = localStorage.getItem('lang') || 'en';

    function applyLanguage(lang) {
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
        
        langSwitcher.textContent = lang === 'en' ? 'AR' : 'EN';
        
        document.querySelectorAll('[data-en], [data-ar]').forEach(el => {
            el.textContent = el.getAttribute(`data-${lang}`);
        });
        
        document.querySelectorAll('[data-alt-en], [data-alt-ar]').forEach(img => {
            img.alt = img.getAttribute(`data-alt-${lang}`);
        });
        
        document.querySelectorAll('.footer-link').forEach(link => {
            link.textContent = link.getAttribute(`data-${lang}`);
        });
    }

    applyLanguage(currentLang);

    langSwitcher.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        localStorage.setItem('lang', currentLang);
        applyLanguage(currentLang);
    });
});












document.addEventListener("DOMContentLoaded", () => {
    
    const textElements = document.querySelectorAll("h1, h2, h3, h4, h5, p,#HB,.A7");
  
    function animateTexts() {
      textElements.forEach(el => {
        const rect = el.getBoundingClientRect();

        if (rect.top <= window.innerHeight - 125 && rect.bottom >= 125) {
          el.classList.add("animate__animated", "animate__fadeInDown");
          el.classList.remove("animate__fadeOutUp");
        } else {
          el.classList.remove("animate__fadeInDown");
          el.classList.add("animate__animated", "animate__fadeOutUp");
        }
      });
    }
    
    window.addEventListener("scroll", animateTexts);
    animateTexts();
  });

  


const s= document.getElementById("date");
s.textContent=`© ${new Date().getFullYear()} Star Company. All rights reserved.`;