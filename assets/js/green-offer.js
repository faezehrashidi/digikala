const fetchGreen = async () => {
  try {
    let data = await fetch("https://faezehrashidi.github.io/digikala-db/db.jsonr");
    let res = await data.json();
    let greenItem = res.green - offer.map((elem) => {
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
      .querySelector(".green-offer-swiper .swiper-wrapper")
      .insertAdjacentHTML("afterbegin", greenItem.join(""));
    var swiper = new Swiper(".green-offer-swiper", {
      spaceBetween: 2,
      freeMode: true,
      clickable: true,
      breakpoints: {
        300: { slidesPerView: 3.5 },
        500: { slidesPerView: 4.5 },
        700: { slidesPerView: 6 },
        900: { slidesPerView: 7 },
        1120: { slidesPerView: 8 },
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};
export default fetchGreen;
