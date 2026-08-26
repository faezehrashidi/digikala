const fetchImage = async () => {
  try {
    let data = await fetch("https://faezehrashidi.github.io/digikala-db/db.json");
    let res = await data.json();
    let imageItem = res.image.map((elem) => {
      return `
        <img src="${elem.src}" alt="${elem.alt}">
      `;
    });
    document
      .querySelector("section.image")
      .insertAdjacentHTML("beforeend", imageItem.join(""));
  } catch (err) {
    console.log(err.message);
  }
};

export default fetchImage;