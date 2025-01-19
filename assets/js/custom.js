(function($) {
  var toggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("menu");
  var close = document.getElementById("menu-close");
  /*Para Slider */
  let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  /*FIN Para Slider */

  /*INICIO PARA SLIDER */
    // Muestra la imagen en el índice actual
  function showSlide(index) {
    // Asegúrate de que el índice esté dentro de los límites
    if (index >= totalSlides) {
        currentIndex = 0; // Volver al inicio si estamos al final
    } else if (index < 0) {
        currentIndex = totalSlides - 1; // Volver al final si estamos al principio
    } else {
        currentIndex = index;
    }

    // Cambia la posición del slider para mostrar la imagen correspondiente
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`; // Desplaza las imágenes horizontalmente
  }

  // Cambia la imagen cuando se hace clic en los botones
  function changeSlide(direction) {
    showSlide(currentIndex + direction); // Aumenta o disminuye el índice
  }

  // Inicializa el slider mostrando la primera imagen
  document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex); // Muestra la primera imagen al cargar
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
