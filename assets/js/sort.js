const fetchSort = async () => {
  try {
    let data = await fetch("https://faezehrashidi.github.io/digikala-db/db.json");
    let res = await data.json();
    let sortItem = res.sort.map((elem) => {
      return `
       <div class="swiper-slide">
              <img src="${elem.src}" alt="${elem.alt}">
              <span>${elem.title}</span>
            </div>
    `;
    });
    document
      .querySelector(".sort-swiper .swiper-wrapper")
      .insertAdjacentHTML("afterbegin", sortItem.join(""))
    var swiper = new Swiper(".sort-swiper", {
      spaceBetween: 10,
      breakpoints: {
        300: {
          slidesPerView: 6,
          grid: {
            rows: 2,
          },
        },
        500: {
          slidesPerView: 7,
          grid: {
            rows: 2,
          },
        },
        900: {
          slidesPerView: 9,
          grid: {
            rows: 2,
          },
        },
        1120: {
          slidesPerView: 9,
          grid: {
            rows: 2,
          },
          spaceBetween: 2,
        },
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};


export default fetchSort;
