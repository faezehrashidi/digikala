const fetchOffer = async () => {
  try {
    let data = await fetch("https://faezehrashidi.github.io/digikala-db/db.json");
    let res = await data.json();
    let offerItem = res.offer.map((elem) => {
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
    const viewAllCard = `
    <div class= "swiper-slide div.last">
    <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#1f1f1f"
              >
                <path
                  d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"
                />
              </svg>
              <span>مشاهده همه</span>
    </div> 
    `
    offerItem.push(viewAllCard)
    document
      .querySelector(".offer-swiper .swiper-wrapper")
      .insertAdjacentHTML("beforeend", offerItem.join(""));
    var swiper = new Swiper(".offer-swiper", {
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

export default fetchOffer;
