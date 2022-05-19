const height = (elem) => {
  return elem.getBoundingClientRect().height;
};

const distance = (elemA, elemB, prop) => {
  const sizeA = elemA.getBoundingClientRect()[prop];
  const sizeB = elemB.getBoundingClientRect()[prop];
  return sizeB - sizeA;
};

const factor = (elemA, elemB, prop) => {
  const sizeA = elemA.getBoundingClientRect()[prop];
  const sizeB = elemB.getBoundingClientRect()[prop];
  return sizeB / sizeA;
};

document.querySelectorAll(".card").forEach((elem) => {
  const head = elem.querySelector(".card-head"),
    image = elem.querySelector(".card-image"),
    author = elem.querySelector(".card-author"),
    body = elem.querySelector(".card-body"),
    foot = elem.querySelector(".card-foot");

  elem.onmouseenter = () => {
    elem.classList.add("hover");

    const imageScale = 1 + factor(head, body, "height");
    image.style.transform = `scale(${imageScale})`;

    const bodyDistance = height(foot) * -1;
    body.style.transform = `translateY(${bodyDistance}px)`;

    const authorDistance = distance(head, author, "height");
    author.style.transform = `translateY(${authorDistance}px)`;
  };

  elem.onmouseleave = () => {
    elem.classList.remove("hover");
    image.style.transform = `none`;
    body.style.transform = `none`;
    author.style.transform = `none`;
  };
});
