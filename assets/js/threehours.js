const fetchThreehours = async () => {
  try {
    let data = await fetch("https://faezehrashidi.github.io/digikala-db/db.json");
    let res = await data.json();
    let threehoursItem = res.threehours.map((elem) => {
      return `
         <div class="swiper-slide">
          <div class="card">
            <div class="image">
              <img src="${elem.src}" alt="${elem.alt}">
            </div>
            <div class="body">
              <h3>${elem.title}</h3>
              <div class="price">
                <div class="top-side">
                  ${elem.discountPrice
          ? `<span class="discount-price">${elem.discountPrice}</span>`
          : ""
        }
                  ${elem.discountPercent
          ? `<span class="off">${elem.discountPercent}</span>`
          : ""
        }
                </div>
                <div class="bottom-side">
                  <p class="real-price">${elem.realPrice}</p>
                  <span>${elem.currency}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    `;
    });
    document
      .querySelector(".threehours-swiper .swiper-wrapper")
      .insertAdjacentHTML("afterbegin", threehoursItem.join(""));
    var swiper = new Swiper(".threehours-swiper", {
      spaceBetween: 5,
      freeMode: true,
      clickable: true,
      breakpoints: {
        300: { slidesPerView: 3.5 },
        500: { slidesPerView: 4.5 },
        700: { slidesPerView: 6 },
        900: { slidesPerView: 7 },
        1120: { slidesPerView: 7.5 },
      },
    });
  } catch (error) {
    console.log(err.message);
  }
};


export default fetchThreehours;
