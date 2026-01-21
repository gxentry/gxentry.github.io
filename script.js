document.addEventListener("DOMContentLoaded", () => {

  const loader = document.getElementById("loader");
  const content = document.getElementById("content");
  const title = document.getElementById("title");
  const about = document.getElementById("about");
  const aboutTextEl = document.getElementById("about-text");
  const gallery = document.querySelector(".gallery");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const leftBtn = document.querySelector(".scroll-btn.left");
  const rightBtn = document.querySelector(".scroll-btn.right");
  const socials = document.getElementById("socials");

  const IMAGES = [
    "work1.png",
    "work2.png",
    "work3.png",
    "work4.png",
    "work5.png",
    "work6.png"
  ];

  IMAGES.forEach(file => {
    const img = document.createElement("img");
    img.src = `images/${file}`;
    img.alt = file;

    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.style.display = "flex";
    });

    gallery.appendChild(img);
  });

  let isScrolling;
  gallery.addEventListener("wheel", e => {
  e.preventDefault();
  gallery.scrollBy({ left: e.deltaY, behavior: "smooth" });
  clearTimeout(isScrolling);
  isScrolling = setTimeout(() => {
    snapToNearest();
  }, 150);
});


  function snapToNearest() {
    const images = Array.from(gallery.querySelectorAll("img"));
    const center = gallery.scrollLeft + gallery.offsetWidth / 2;

    let closest = images[0];
    let minDist = Math.abs(closest.offsetLeft + closest.offsetWidth / 2 - center);

    images.forEach(img => {
      const imgCenter = img.offsetLeft + img.offsetWidth / 2;
      const dist = Math.abs(imgCenter - center);
      if (dist < minDist) {
        closest = img;
        minDist = dist;
      }
    });

    gallery.scrollTo({
      left: closest.offsetLeft - (gallery.offsetWidth - closest.offsetWidth) / 2,
      behavior: "smooth"
    });
  }

  leftBtn.addEventListener("click", () => {
    snapToNext(-1);
  });

  rightBtn.addEventListener("click", () => {
    snapToNext(1);
  });

  function snapToNext(direction) {
    const images = Array.from(gallery.querySelectorAll("img"));
    const center = gallery.scrollLeft + gallery.offsetWidth / 2;

    let closestIndex = 0;
    let minDist = Math.abs(images[0].offsetLeft + images[0].offsetWidth / 2 - center);

    images.forEach((img, index) => {
      const imgCenter = img.offsetLeft + img.offsetWidth / 2;
      const dist = Math.abs(imgCenter - center);
      if (dist < minDist) {
        closestIndex = index;
        minDist = dist;
      }
    });

    let newIndex = closestIndex + direction;
    newIndex = Math.max(0, Math.min(images.length - 1, newIndex));

    const target = images[newIndex];
    gallery.scrollTo({
      left: target.offsetLeft - (gallery.offsetWidth - target.offsetWidth) / 2,
      behavior: "smooth"
    });
  }

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") lightbox.style.display = "none";
  });

  setTimeout(() => {
    loader.style.display = "none";
    content.classList.remove("hidden");

    setTimeout(() => {
      title.classList.add("show");
      about.classList.add("show");
      typeText(aboutTextEl, ABOUT_TEXT, 20);

      setTimeout(() => {
        socials.style.opacity = 1;
      }, 800);

    }, 300);

  }, 800);

  const ABOUT_TEXT = `
I am an experienced Roblox builder and environmental designer with over three years of building experience on Roblox. I specialize in creating detailed and optimized environments and can adapt to almost any style or theme needed for a project. I work fast and efficiently and always aim to deliver quality results on time. I take pride in clear communication and making sure clients get exactly what they are looking for. Feel free to DM me anytime if you have questions, ideas, or want to discuss a project.
`;

  function typeText(el, text, speed) {
    let i = 0;
    el.textContent = "";

    const interval = setInterval(() => {
      el.textContent += text[i];
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
  }
  
/* ---------- Particles.js Background ---------- (u can ask chatgpt how to edit this cuz its kinda confusing if u dont understand vincent garreau's library for it)*/
particlesJS("particles-js", {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 500
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 1,
      random: true
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 140,
      color: "#ffffff",
      opacity: 0.5,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: false
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 0.3
        }
      }
    }
  },
  retina_detect: true
});
});
