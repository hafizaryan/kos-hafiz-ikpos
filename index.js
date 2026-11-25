document.documentElement.classList.add("js");

(function () {
  "use strict";

  // Menu mobile
  var burger = document.getElementById("burger");
  var nav = document.getElementById("siteNav");
  if (burger && nav) {
    function closeMenu() {
      nav.classList.remove("open");
      burger.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
      burger.setAttribute("aria-label", "Buka menu");
    }
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        closeMenu();
      });
    });
    document.addEventListener("click", function (event) {
      if (nav.classList.contains("open") && !nav.contains(event.target) && !burger.contains(event.target)) closeMenu();
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) closeMenu();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("open")) {
        closeMenu();
        burger.focus();
      }
    });
  }

  // Reveal halus saat scroll
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  // FAQ accordion
  document.querySelectorAll(".faq-q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".faq");
      var wasOpen = item.classList.contains("open");
      document.querySelectorAll(".faq.open").forEach(function (o) {
        o.classList.remove("open");
        o.querySelector(".faq-q").setAttribute("aria-expanded", "false");
      });
      if (!wasOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  // Galeri Lightbox
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxCaption = document.getElementById("lightboxCaption");
  var lightboxClose = document.getElementById("lightboxClose");
  var lightboxPrev = document.getElementById("lightboxPrev");
  var lightboxNext = document.getElementById("lightboxNext");
  var lightboxBackdrop = document.getElementById("lightboxBackdrop");
  var galItems = Array.prototype.slice.call(document.querySelectorAll(".gal-item"));
  var currentImgIdx = 0;

  function showLightboxImg(idx) {
    if (!galItems.length) return;
    if (idx < 0) idx = galItems.length - 1;
    if (idx >= galItems.length) idx = 0;
    currentImgIdx = idx;
    var target = galItems[currentImgIdx];
    var src = target.getAttribute("data-src") || "";
    var alt = target.getAttribute("data-alt") || "";
    if (lightboxImg) {
      lightboxImg.src = src;
      lightboxImg.alt = alt;
    }
    if (lightboxCaption) {
      lightboxCaption.textContent = alt;
    }
  }

  function openLightbox(idx) {
    if (!lightbox) return;
    showLightboxImg(idx);
    lightbox.removeAttribute("hidden");
    document.body.style.overflow = "hidden";
    if (lightboxClose) lightboxClose.focus();
  }

  function closeLightbox() {
    if (!lightbox || lightbox.hasAttribute("hidden")) return;
    lightbox.setAttribute("hidden", "");
    document.body.style.overflow = "";
    if (galItems[currentImgIdx]) {
      galItems[currentImgIdx].focus();
    }
  }

  galItems.forEach(function (item, idx) {
    item.addEventListener("click", function () { openLightbox(idx); });
    item.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(idx);
      }
    });
  });

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener("click", closeLightbox);
  if (lightboxPrev) {
    lightboxPrev.addEventListener("click", function () {
      showLightboxImg(currentImgIdx - 1);
    });
  }
  if (lightboxNext) {
    lightboxNext.addEventListener("click", function () {
      showLightboxImg(currentImgIdx + 1);
    });
  }

  document.addEventListener("keydown", function (e) {
    if (!lightbox || lightbox.hasAttribute("hidden")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showLightboxImg(currentImgIdx - 1);
    if (e.key === "ArrowRight") showLightboxImg(currentImgIdx + 1);
  });

  // Salin nomor telepon
  var copyBtn = document.getElementById("btnCopyPhone");
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var textToCopy = copyBtn.getAttribute("data-copy") || "";
      var textSpan = copyBtn.querySelector(".copy-text");
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(textToCopy).then(onCopied, fallbackCopy);
      } else {
        fallbackCopy();
      }
      function onCopied() {
        copyBtn.classList.add("copied");
        if (textSpan) textSpan.textContent = "Tersalin!";
        setTimeout(function () {
          copyBtn.classList.remove("copied");
          if (textSpan) textSpan.textContent = "Salin";
        }, 2200);
      }
      function fallbackCopy() {
        var tempInput = document.createElement("input");
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        try {
          document.execCommand("copy");
          onCopied();
        } catch (err) {}
        document.body.removeChild(tempInput);
      }
    });
  }

  // Scrollspy menu navigasi
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  var navLinks = document.querySelectorAll(".site-nav a");
  if (sections.length && navLinks.length) {
    var ticking = false;
    function updateActiveNav() {
      ticking = false;
      var activeId = sections[0].id;
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        activeId = sections[sections.length - 1].id;
      } else {
        for (var i = 0; i < sections.length; i++) {
          if (sections[i].getBoundingClientRect().top <= 140) {
            activeId = sections[i].id;
          }
        }
      }
      navLinks.forEach(function (link) {
        link.classList.toggle("active", link.getAttribute("href") === "#" + activeId);
      });
    }
    window.addEventListener("scroll", function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateActiveNav);
      }
    }, { passive: true });
    window.addEventListener("hashchange", updateActiveNav);
    updateActiveNav();
  }

  // Tahun footer
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/sw.js").catch(function () {
      // Situs tetap dapat digunakan ketika cache offline tidak tersedia.
    });
  });
}
