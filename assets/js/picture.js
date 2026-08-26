const fetchPicture = async () => {
  try {
    let data = await fetch("https://faezehrashidi.github.io/digikala-db/db.json");
    let res = await data.json();
    let pictureItem = res.picture.map((elem) => {
      return `
        <img src="${elem.src}" alt="${elem.alt}">
      `;
    });
    document
      .querySelector("section.picture")
      .insertAdjacentHTML("beforeend", pictureItem.join(""));
  } catch (error) { }
};

export default fetchPicture;
