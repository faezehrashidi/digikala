const fetchHeader = async () => {
  try {
    let data = await fetch("https://faezehrashidi.github.io/digikala/db.json");
    let res = await data.json();
    let headerItem = res["header.tt"].map((elem) => {
      return `
        <div class = "swiper-slide">
          <img src ="${elem.src}" alt="${elem.alt}">
          <span>${elem.title}</span>
    </div>
    `;
    });
    document
      .querySelector(".header-swiper .swiper-wrapper")
      .insertAdjacentHTML("afterbegin", headerItem.join(""))
  } catch (err) {
    console.log(err.message)
  }
};

var headerswiper = new Swiper(".header-swiper", {
  spaceBetween: 8,
  breakpoints: {
    300: { slidesPerView: 4.5 },
    550: { slidesPerView: 7 },
    900: { slidesPerView: 9 },
    1120: { slidesPerView: 9 },
  },
});
export default fetchHeader;
