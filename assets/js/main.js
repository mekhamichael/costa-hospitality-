/**
* Template Name: Delicious
* Template URL: https://bootstrapmade.com/delicious-free-restaurant-bootstrap-theme/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  // ==================== Scroll Behavior ====================
/**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  // ==================== Mobile Navigation ====================
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

  // ==================== Mobile Navigation: Link Close ====================
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

  // ==================== Mobile Navigation: Dropdowns ====================
/**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });
// ==================== Scroll Top ====================
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

  // ==================== AOS Animation ====================
/**
   * Animation on scroll function and init
   */
  function clearAosAttributes() {
    document.querySelectorAll('[data-aos]').forEach((el) => {
      el.removeAttribute('data-aos');
      el.removeAttribute('data-aos-delay');
      el.removeAttribute('data-aos-duration');
      el.removeAttribute('data-aos-easing');
      el.removeAttribute('data-aos-offset');
      el.removeAttribute('data-aos-anchor-placement');
      el.removeAttribute('data-aos-once');
      el.removeAttribute('data-aos-mirror');
    });
  }

  function setAos(el, animation, delay = 0, duration = 700, easing = 'ease-out-cubic') {
    if (!el) {
      return;
    }

    el.setAttribute('data-aos', animation);
    el.setAttribute('data-aos-duration', `${duration}`);
    el.setAttribute('data-aos-easing', easing);

    if (delay) {
      el.setAttribute('data-aos-delay', `${delay}`);
    } else {
      el.removeAttribute('data-aos-delay');
    }
  }

  function applyStagger(selector, animation, options = {}) {
    const baseDelay = options.baseDelay ?? 0;
    const step = options.step ?? 80;
    const maxDelay = options.maxDelay ?? 240;
    const duration = options.duration ?? 700;
    const easing = options.easing ?? 'ease-out-cubic';

    document.querySelectorAll(selector).forEach((el, index) => {
      const delay = Math.min(baseDelay + index * step, maxDelay);
      setAos(el, animation, delay, duration, easing);
    });
  }

  function applyRestaurantItems(selector) {
    document.querySelectorAll(selector).forEach((item, index) => {
      const isReverse = item.classList.contains('is-reverse');
      const text = item.querySelector('.restaurant-text');
      const media = item.querySelector('.restaurant-media');
      const delay = Math.min(index * 120, 240);

      setAos(text, isReverse ? 'fade-left' : 'fade-right', delay);
      setAos(media, isReverse ? 'fade-right' : 'fade-left', delay);
    });
  }

  function applyAosAttributes() {
    clearAosAttributes();

    document.querySelectorAll('section').forEach((section) => {
      if (section.id === 'hero' || section.classList.contains('hero') || section.classList.contains('restaurants-hero')) {
        return;
      }
      setAos(section, 'fade', 0, 600);
    });

    applyStagger('.section-title', 'fade-up', { step: 60, maxDelay: 180 });

    setAos(document.querySelector('#the_heart .the-heart'), 'fade-up', 0, 800);
    setAos(document.querySelector('#the_heart .pra-sec1'), 'fade-up', 120, 800);

    setAos(document.querySelector('#our_story .card-item'), 'fade-up', 0, 750);
    applyStagger('#our_TIMELINE .timeline-col', 'fade-up', { step: 120, maxDelay: 360 });
    applyStagger('#stats-counter .stats-item', 'fade-up', { step: 120, maxDelay: 240 });

    setAos(document.querySelector('.founder-section img'), 'fade-right', 0, 800);
    setAos(document.querySelector('.founder-section .founder-text'), 'fade-left', 80, 800);

    setAos(document.querySelector('#ACCOLADES h3'), 'fade-up', 0, 700);
    setAos(document.querySelector('#ACCOLADES p'), 'fade-up', 120, 700);
    setAos(document.querySelector('#ACCOLADES .logos-container'), 'fade-up', 220, 700);

    setAos(document.querySelector('#future .future-header'), 'fade-up', 0, 750);
    applyStagger('#future .future-card', 'fade-up', { step: 140, maxDelay: 280 });

    setAos(document.querySelector('.gift-content'), 'fade-up', 0, 800);
    const giftStripInner = document.querySelector('.gift-strip-inner');
    setAos(giftStripInner, 'fade-up', 120, 700);
    if (giftStripInner) {
      giftStripInner.setAttribute('data-aos-offset', '0');
      giftStripInner.setAttribute('data-aos-anchor-placement', 'bottom-bottom');
    }

    setAos(document.querySelector('#restaurants-hero .restaurants-hero__inner'), 'fade-up', 0, 800);
    setAos(document.querySelector('#getintouch-hero .restaurants-hero__inner'), 'fade-up', 0, 800);

    setAos(document.querySelector('#our-concepts .concepts-heading'), 'fade-up', 0, 800);
    setAos(document.querySelector('#our-concepts .concepts-logos'), 'fade-up', 120, 800);

    applyStagger('.restaurants-showcase .showcase-header', 'fade-up', { step: 0, maxDelay: 0, duration: 800 });
    applyRestaurantItems('#restaurants-showcase .restaurant-item');
    applyRestaurantItems('#bar-showcase .restaurant-item');
    applyRestaurantItems('#BEACHES-showcase .restaurant-item');

    setAos(document.querySelector('#team-contact .team-contact__content'), 'fade-right', 0, 800);
    setAos(document.querySelector('#team-contact .team-contact__collage'), 'fade-left', 120, 800);
    setAos(document.querySelector('#private-events .private-events__media'), 'fade-right', 0, 800);
    setAos(document.querySelector('#private-events .private-events__content'), 'fade-left', 120, 800);
    setAos(document.querySelector('#newsletter .newsletter__title'), 'fade-up', 0, 700);
    setAos(document.querySelector('#newsletter .newsletter__form'), 'fade-up', 120, 700);

    // Footer content is handled via gift content / strip animations.
  }

  function aosInit() {
    if (typeof AOS === 'undefined') {
      return;
    }

    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      mirror: false,
      offset: 120,
      anchorPlacement: 'top-bottom'
    });
  }

  function initAos() {
    applyAosAttributes();
    aosInit();
  }

  document.addEventListener('DOMContentLoaded', initAos);
  window.addEventListener('load', () => {
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
    }
  });

  // ==================== Carousel Indicators ====================
/**
   * Auto generate the carousel indicators
   */
  document.querySelectorAll('.carousel-indicators').forEach((carouselIndicator) => {
    carouselIndicator.closest('.carousel').querySelectorAll('.carousel-item').forEach((carouselItem, index) => {
      if (index === 0) {
        carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest('.carousel').id}" data-bs-slide-to="${index}" class="active"></li>`;
      } else {
        carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest('.carousel').id}" data-bs-slide-to="${index}"></li>`;
      }
    });
  });

  // ==================== Glightbox ====================
/**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

    // ==================== Swiper Sliders ====================
/**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  // ==================== Hash Scroll Fix ====================
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

  // ==================== Navmenu Scrollspy ====================
/**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }

      // ==================== Timeline Controls ====================
/**
   * Timeline controls + auto scroll every 5 seconds
   */
  function initTimelineControls() {
    const timelineRow = document.querySelector('#timeline-row');
    if (!timelineRow) return;

    const btnPrev = document.querySelector('#timeline-prev');
    const btnNext = document.querySelector('#timeline-next');

    const getStep = () => {
      const card = timelineRow.querySelector('.timeline-col');
      return card ? card.getBoundingClientRect().width + 20 : timelineRow.clientWidth * 0.8;
    };

    const scrollLeftOne = () => {
      timelineRow.scrollBy({
        left: -getStep(),
        behavior: 'smooth'
      });
    };

    const scrollRightOne = () => {
      timelineRow.scrollBy({
        left: getStep(),
        behavior: 'smooth'
      });
    };

    if (btnPrev) {
      btnPrev.addEventListener('click', scrollLeftOne);
    }

    if (btnNext) {
      btnNext.addEventListener('click', scrollRightOne);
    }

    let autoScrollTimer;

    function stopAutoScroll() {
      if (autoScrollTimer) {
        clearInterval(autoScrollTimer);
      }
    }

    function startAutoScroll() {
      stopAutoScroll();
      autoScrollTimer = setInterval(() => {
        const atEnd = timelineRow.scrollLeft + timelineRow.clientWidth >= timelineRow.scrollWidth - 4;
        if (atEnd) {
          timelineRow.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRightOne();
        }
      }, 5000);
    }

    timelineRow.addEventListener('mouseenter', stopAutoScroll);
    timelineRow.addEventListener('mouseleave', startAutoScroll);
    timelineRow.addEventListener('touchstart', stopAutoScroll, { passive: true });
    timelineRow.addEventListener('touchend', startAutoScroll);

    startAutoScroll();
  }
  window.addEventListener('load', initTimelineControls);
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();











