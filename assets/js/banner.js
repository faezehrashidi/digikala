const fetchBanner = async () => {
  try {
    let data = await fetch("https://faezehrashidi.github.io/digikala/db.json");
    let res = await data.json();
    let bannerItem = res.banner.map((elem) => {
      return `
        <div class="swiper-slide">
          <img src="${elem.src}" alt="${elem.alt}">
        </div>
      `;
    });
    document
      .querySelector(".banner-swiper .swiper-wrapper")
      .insertAdjacentHTML("afterbegin", bannerItem.join(""));
    const swiper = new Swiper(".banner-swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};

export default fetchBanner;
