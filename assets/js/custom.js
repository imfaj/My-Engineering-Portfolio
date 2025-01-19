(function($) {
  var toggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("menu");
  var close = document.getElementById("menu-close");

  /*Para Slider */
  function initializeSlider(sliderElement) {
    const slides = sliderElement.querySelectorAll('.slide');
    const prevBtn = sliderElement.querySelector('.prev');
    const nextBtn = sliderElement.querySelector('.next');
    let currentIndex = 0;
    let autoSlide;
  /*FIN Para Slider */

  /*INICIO PARA SLIDER */
      // Mostrar la imagen actual
      function showSlide(index) {
        slides.forEach((slide, i) => {
          slide.classList.remove('active');
          if (i === index) {
            slide.classList.add('active');
          }
        });
      }

      // Avanzar al siguiente slide
      function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length; // Ciclo continuo
        showSlide(currentIndex);
      }

      // Retroceder al slide anterior
      function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
      }

      // Configurar el auto-slide
      function startAutoSlide() {
        autoSlide = setInterval(nextSlide, 5000); // Cambia cada 5 segundos
      }

      // Detener el auto-slide
      function stopAutoSlide() {
        clearInterval(autoSlide);
      }

      // Eventos de los botones
      nextBtn.addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
      });

      prevBtn.addEventListener('click', () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
      });

      // Iniciar el slider
      showSlide(currentIndex);
      startAutoSlide();
    }

    // Inicializar todos los sliders
    document.querySelectorAll('.slider').forEach(slider => {
      initializeSlider(slider);
    });
  /*FINAL Para Slider */


  toggle.addEventListener("click", function(e) {
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
    } else {
      menu.classList.add("open");
    }
  });

  close.addEventListener("click", function(e) {
    menu.classList.remove("open");
  });

  // Close menu after click on smaller screens
  $(window).on("resize", function() {
    if ($(window).width() < 846) {
      $(".main-menu a").on("click", function() {
        menu.classList.remove("open");
      });
    }
  });

  $(".owl-carousel").owlCarousel({
    items: 4,
    lazyLoad: true,
    loop: true,
    dots: true,
    margin: 30,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  $(".hover").mouseleave(function() {
    $(this).removeClass("hover");
  });

  $(".isotope-wrapper").each(function() {
    var $isotope = $(".isotope-box", this);
    var $filterCheckboxes = $('input[type="radio"]', this);

    var filter = function() {
      var type = $filterCheckboxes.filter(":checked").data("type") || "*";
      if (type !== "*") {
        type = '[data-type="' + type + '"]';
      }
      $isotope.isotope({ filter: type });
    };

    $isotope.isotope({
      itemSelector: ".isotope-item",
      layoutMode: "masonry"
    });

    $(this).on("change", filter);
    filter();
  });

  lightbox.option({
    resizeDuration: 200,
    wrapAround: true
  });
})(jQuery);
