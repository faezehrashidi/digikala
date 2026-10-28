const fetchPopular = async () => {
  try {
    let data = await fetch("https://faezehrashidi.github.io/digikala/db.json");
    let res = await data.json();
    let popularItem = res["popular-brand"].map((elem) => {
      return `
           <div class="swiper-slide">
              <img src="${elem.src}" alt="${elem.alt}">
              <span>${elem.title}</span>
            </div>
    `;
    });
    document
      .querySelector(".popular-brand-swiper .swiper-wrapper")
      .insertAdjacentHTML("afterbegin", popularItem.join(""))
    var headerswiper = new Swiper(".popular-brand-swiper", {
      spaceBetween: 8,
      breakpoints: {
        300: { slidesPerView: 4.5 },
        500: { slidesPerView: 6.5 },
        900: { slidesPerView: 9 },
        1120: { slidesPerView: 12.5 },
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};

export default fetchPopular;
