const fetchPhotos = async () => {
  try {
    let data = await fetch("https://faezehrashidi.github.io/digikala/db.json");
    let res = await data.json();
    let photos = res.photos.map((elem) => {
      return `
        <div class="image">
          <img src="${elem.src}" alt="${elem.alt}">
        </div>
      `;
    });

    document
      .querySelector("section.photos")
      .insertAdjacentHTML("afterbegin", photos.join(""));

  } catch (err) {
    console.log(err.message);
  }
};

export default fetchPhotos;