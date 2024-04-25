/**
* Template Name: Append
* Updated: Sep 18 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/append-bootstrap-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  const selectBody = document.querySelector('body');
  const selectHeader = document.querySelector('#header');

  function toggleScrolled() {
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Scroll up sticky header to headers with .scroll-up-sticky class
   */
  let lastScrollTop = 0;
  window.addEventListener('scroll', function() {
    if (!selectHeader.classList.contains('scroll-up-sticky')) return;

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > selectHeader.offsetHeight) {
      selectHeader.style.setProperty('position', 'sticky', 'important');
      selectHeader.style.top = `-${header.offsetHeight + 50}px`;
    } else if (scrollTop > selectHeader.offsetHeight) {
      selectHeader.style.setProperty('position', 'sticky', 'important');
      selectHeader.style.top = "0";
    } else {
      selectHeader.style.removeProperty('top');
      selectHeader.style.removeProperty('position');
    }
    lastScrollTop = scrollTop;
  });

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .has-dropdown i').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      if (document.querySelector('.mobile-nav-active')) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      }
    });
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init isotope layout and filters
   */
  function initIsotopeLayout() {
    document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
      let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
      let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
      let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

      let initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });

      isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
        filters.addEventListener('click', function() {
          isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          initIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          if (typeof aosInit === 'function') {
            aosInit();
          }
        }, false);
      });

    });
  }
  window.addEventListener('load', initIsotopeLayout);

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll('.swiper').forEach(function(swiper) {
      let config = JSON.parse(swiper.querySelector('.swiper-config').innerHTML.trim());
      new Swiper(swiper, config);
    });
  }
  window.addEventListener('load', initSwiper);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

});

document.addEventListener("DOMContentLoaded", function () {
  const inputText = document.getElementById("inputText");
  const countButton = document.getElementById("countButton");
  const result = document.getElementById("result");

  countButton.addEventListener("click", function () {
    const text = inputText.value;
    const wordOccurrences = countWordOccurrences(text);

    // Limpe o resultado anterior
    result.innerHTML = "";

    // Exiba o resultado na página
    for (const [word, count] of wordOccurrences) {
      const p = document.createElement("p");
      p.textContent = `"${word}": ${count} vezes`;
      result.appendChild(p);
    }
  });

  function countWordOccurrences(str) {
    const words = str.split(" ");
    const wordMap = new Map();

    for (const word of words) {
      const cleanedWord = word.toLowerCase().replace(/[.,!?]/g, "");
      if (wordMap.has(cleanedWord)) {
        wordMap.set(cleanedWord, wordMap.get(cleanedWord) + 1);
      } else {
        wordMap.set(cleanedWord, 1);
      }
    }

    const wordOccurrences = Array.from(wordMap.entries());
    return wordOccurrences;
  }
});

function invertCapitalization(str) {
  var result = '';
  for (var i = 0; i < str.length; i++) {
      var char = str.charAt(i);
      if (char === char.toUpperCase()) {
          result += char.toLowerCase();
      } else {
          result += char.toUpperCase();
      }
  }
  return result;
}

document.getElementById('invertButton').addEventListener('click', function () {
  var inputText = document.getElementById('inputText').value;
  var invertedText = invertCapitalization(inputText);
  document.getElementById('result').innerHTML = invertedText;
});

// Função para gerar o acrônimo

function generateAcronym(str) {
  const words = str.split(" ");
  let acronym = "";

  for (const word of words) {
    if (word.length > 0) {
      acronym += word[0].toUpperCase();
    }
  }

  return acronym;
}

function generateAcronymT() {
  let frase = document.getElementById('text_textarea').value;
  let dado = generateAcronym(frase);
  document.getElementById('mostrar_pego').innerHTML = "Acrônimo gerado: " + dado;
}

function areAnagrams() {
  let str1 = document.getElementById('teste-01').value;
  let str2 = document.getElementById('teste-02').value;
  let strings = areAnagrams(str1, str2)
  let anagrama = document.getElementById('anagrama')
  if (strings){
      anagrama.innerHTML = `São Anagramas: (${strings})`;
  }
  else {
      anagrama.innerHTML = `Não são Anagramas: (${strings})`;
  }
}

function areAnagrams(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}
