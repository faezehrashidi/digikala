const fetchFooter = async () => {
  try {
    let data = await fetch("https://faezehrashidi.github.io/digikala-db/db.json");
    let res = await data.json();
    let footerItem = res["footer.desktop"].brands.map((elem) => {
      return `
        <a href="${elem.link}">
          <img src="${elem.src}" alt="${elem.name}">
        </a>
      `;
    });

    document
      .querySelector(".brands")
      .insertAdjacentHTML("afterbegin", footerItem.join(""));

  } catch (err) {
    console.log(err.message);
  }
};

export default fetchFooter;