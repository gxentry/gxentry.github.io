document.addEventListener("DOMContentLoaded", () => {

  const loader = document.getElementById("loader");
  const content = document.getElementById("content");
  const title = document.getElementById("title");
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

  gallery.addEventListener("wheel", (e) => {
    e.preventDefault();
    gallery.scrollLeft += e.deltaY;
  });

  leftBtn.addEventListener("click", () => {
    gallery.scrollBy({ left: -300, behavior: "smooth" });
  });

  rightBtn.addEventListener("click", () => {
    gallery.scrollBy({ left: 300, behavior: "smooth" });
  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  setTimeout(() => {
    loader.style.display = "none";
    content.classList.remove("hidden");


    setTimeout(() => {
      title.classList.add("show");
      typeText(aboutTextEl, ABOUT_TEXT, 25);
      setTimeout(() => {
        if (socials) {
          socials.style.opacity = 1;
        }
      }, 1000);

    }, 300);

  }, 800);
});

const ABOUT_TEXT = `
I am an experienced Roblox builder and environmental designer with over three years of building experience on Roblox. I specialize in creating detailed and optimized environments and can adapt to almost any style or theme needed for a project. I work fast and efficiently and always aim to deliver quality results on time. I take pride in clear communication and making sure clients get exactly what they are looking for. Feel free to DM me anytime if you have questions ideas or want to discuss a project.
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
