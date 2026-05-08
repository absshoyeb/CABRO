$(function () {
  // Footer year
  $("#year").text(new Date().getFullYear());

  // =========================
  // CLIENTS CAROUSEL
  // =========================
  $(".client_section .owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 2000,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });

  // =========================
  // DRIVERS CAROUSEL
  // =========================
  $(".driver-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // =========================
  // BOOTSTRAP HERO SLIDER
  // =========================
  const mainSlider = document.querySelector("#carouselExampleIndicators");

  if (mainSlider) {
    new bootstrap.Carousel(mainSlider, {
      interval: 2000,
      pause: false,
      wrap: true,
      keyboard: true,
    });
  }

  // =========================
  // INSTANT SCROLL
  // =========================
  $('a[href^="#"]').on("click", function (e) {
    const target = $($(this).attr("href"));

    if (target.length) {
      e.preventDefault();

      const offset = $(window).width() < 576 ? 70 : 80;

      window.scrollTo({
        top: target.offset().top - offset,
        behavior: "auto",
      });

      // Close mobile menu
      const navbarCollapse = document.querySelector(".navbar-collapse");

      if (navbarCollapse) {
        const collapseInstance =
          bootstrap.Collapse.getInstance(navbarCollapse) ||
          new bootstrap.Collapse(navbarCollapse, {
            toggle: false,
          });

        collapseInstance.hide();
      }
    }
  });

  // =========================
  // ACTIVE NAV LINK
  // =========================
  const sections = $("section, .hero_area");

  $(window).on("scroll", function () {
    const scrollPos = $(this).scrollTop();

    sections.each(function () {
      const id = $(this).attr("id");

      if (
        id &&
        scrollPos >= $(this).offset().top - 120 &&
        scrollPos < $(this).offset().top + $(this).outerHeight()
      ) {
        $(".navbar-nav .nav-item").removeClass("active");

        $('.navbar-nav a[href="#' + id + '"]')
          .parent()
          .addClass("active");
      }
    });
  });

  // =========================
  // FORM VALIDATION
  // =========================
  function validateForm($form) {
    let valid = true;

    $form.find("input").each(function () {
      const input = $(this);

      if (input.val().trim() === "") {
        valid = false;
        input.css("border", "2px solid red");
      } else {
        input.css("border", "");
      }
    });

    return valid;
  }

  // =========================
  // BOOKING FORM
  // =========================
  $(".slider_form form").on("submit", function (e) {
    e.preventDefault();

    if (!validateForm($(this))) {
      alert("Please fill all booking fields.");
      return;
    }

    alert("Taxi booked successfully!");
    this.reset();
  });

  // =========================
  // CONTACT FORM
  // =========================
  $(".contact_form form").on("submit", function (e) {
    e.preventDefault();

    if (!validateForm($(this))) {
      alert("Please fill all contact fields.");
      return;
    }

    alert("Message sent!");
    this.reset();
  });

  // =========================
  // LOGIN FORM
  // =========================
  $(".login-form-box form").on("submit", function (e) {
    e.preventDefault();

    const login = $("#login-email").val().trim();
    const password = $("#login-password").val().trim();

    if (login === "" || password === "") {
      alert("Enter login details.");
      return;
    }

    alert("Login successful!");
    this.reset();
  });

  // =========================
  // NEWSLETTER FORM
  // =========================
  $(".info_form form").on("submit", function (e) {
    e.preventDefault();

    const input = $(this).find("input");

    if (input.val().trim() === "") {
      alert("Enter your email.");
      return;
    }

    alert("Subscribed!");
    this.reset();
  });
});
