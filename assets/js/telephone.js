const fetchTelephone = async () => {
  try {
    let data = await fetch("https://faezehrashidi.github.io/digikala-db/db.json");
    let res = await data.json();
    let telephoneItem = res.telephone.map((elem) => {
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
      .querySelector(".telephone-swiper .swiper-wrapper")
      .insertAdjacentHTML("afterbegin", telephoneItem.join(""));
    var swiper = new Swiper(".telephone-swiper", {
      spaceBetween: 10,
      freeMode: true,
      clickable: true,
      breakpoints: {
        300: { slidesPerView: 3.5 },
        450: { slidesPerView: 3.5 },
        550: { slidesPerView: 4.5 },
        700: { slidesPerView: 5.5 },
        900: { slidesPerView: 6 },
        1120: { slidesPerView: 7 },
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};

export default fetchTelephone;
