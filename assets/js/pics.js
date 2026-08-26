const fetchPics = async () => {
  try {
    let data = await fetch("https://faezehrashidi.github.io/digikala-db/db.json");
    let res = await data.json();
    let picsItem = res.pics.map((elem) => {
      return `
        <div class="image">
          <img src="${elem.src}" alt="${elem.alt}">
        </div>
      `;
    });
    document
      .querySelector(".pics")
      .insertAdjacentHTML("afterbegin", picsItem.join(""));
  } catch (err) {
    console.log(err.message);
  }
};

export default fetchPics;
