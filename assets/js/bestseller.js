const fetchBestseller = async () => {
  try {
    let data = await fetch("https://faezehrashidi.github.io/digikala-db/db.json");
    let res = await data.json();
    let bestsellerItem = res.bestseller.map((elem) => {
      return `
    <div class="swiper-slide">
      <div class="bestsellercards">
        <div class="head-card">
          <img src="${elem.src}" alt="${elem.alt}">
        </div>
        <div class="card-body">
          <span>${elem.number}</span>
          <p>${elem.title}</p>
        </div>
      </div>
    </div>
  `;
    });
    document
      .querySelector(".bestseller-swiper .swiper-wrapper")
      .insertAdjacentHTML("afterbegin", bestsellerItem.join(""))
    var swiper = new Swiper(".bestseller-swiper", {
      spaceBetween: 5,
      breakpoints: {
        300: {
          slidesPerView: 1.5,
          grid: {
            rows: 3,
          },
        },
        550: {
          slidesPerView: 1.5,
          grid: {
            rows: 3,
          },
        },
        900: {
          slidesPerView: 3,
          grid: {
            rows: 3,
          },
        },
        1120: {
          slidesPerView: 3.5,
          grid: {
            rows: 3,
          },
        },
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};

export default fetchBestseller;
