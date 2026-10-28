const fetchIcon = async () => {
  try {
    let data = await fetch("https://faezehrashidi.github.io/digikala/db.json");
    let res = await data.json();
    let iconItem = res.icon.map((elem) => {
      return `
    <div class = "swiper-slide">
       <img src ="${elem.src}" alt="${elem.alt}">
       <span>${elem.title}</span>
    </div>
    `;
    });
    document
      .querySelector(".icon-swiper .swiper-wrapper")
      .insertAdjacentHTML("afterbegin", iconItem.join(""))
    var swiper = new Swiper(".icon-swiper", {
      spaceBetween: 30,
      breakpoints: {
        300: { slidesPerView: 5 },
        550: { slidesPerView: 7 },
        900: { slidesPerView: 7 },
        1120: { slidesPerView: 9 },
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};

export default fetchIcon;
