particlesJS.load("particles-js", "js/particlesjs-config.json", function () {});
// -------------------

const projects = [
  {
    id: "",
    title: `Страница для организаторов проекта "Пакгаузы"`,
    desc: "Адаптивный лендинг с формой обратной связи и интерактивной схемой-описанием каждой секции пакгаузов",
    img: "img/10.png",
    link: "https://peregrinusss.github.io/packhouses/",
  },
  {
    id: "",
    title: "Личный кабинет на благотворительном портале",
    desc: "Лк с публичной частью и админкой. Из интересного при создании частного сбора реализован кроп картинки под определнные пропорции",
    img: "img/9.png",
    link: "https://peregrinusss.github.io/charity/",
  },
  {
    id: "",
    title: "Благотворительный портал",
    desc: "Разработка верстки благотворительного портала с личным кабинетом.",
    img: "img/1.png",
    link: "https://peregrinusss.github.io/good-deeds/",
  },
  {
    id: "",
    title: `Сайт ЖК "ВолгаИнвест"`,
    desc: "Сайт для жилого комплекса. Можно ознакомиться с планировкой квартир и сделать выбор. На сайте присутствует интерактивный план квартир.",
    img: "img/8.png",
    link: "https://peregrinusss.github.io/volgainvest/",
  },
  {
    id: "",
    title: `Сайт с личным кабинетом "Волонтёры"`,
    desc: "Сайт с личным кабинетом для регистрации волонтёров и админкой для редактирования волонтёров. Также на сайте присутсвует тест с ограничением по времени.",
    img: "img/6.png",
    link: "https://peregrinusss.github.io/volunteers/",
  },
  {
    id: "",
    title: "Корпоративный сайт веб-студии",
    desc: "Корпоративный ознакомительный сайт. Можно посмотреть примеры работ и оставить заявку на сотрудничество.",
    img: "img/5.png",
    link: "https://peregrinusss.github.io/omni/",
  },
  {
    id: "",
    title: `Адаптивный интернет-магазин "Снаряжение"`,
    desc: "Сайт снаряжения по типу спортмастера. Можно ознакомиться с продукцией и купить товар",
    img: "img/4.png",
    link: "https://peregrinusss.github.io/equipment_project/",
  },
  {
    id: "",
    title: `Адаптивный сайт "Володарский мукомольный комбинат"`,
    desc: "Корпоративный сайт - инетрнет-магазин мукомольного комбината. На сайте можно ознакомиться с продукцией и также оставить заявку на покупку.",
    img: "img/3.png",
    link: "https://peregrinusss.github.io/flour_mill/",
  },
  {
    id: "",
    title: "Приложение для тренировки точности",
    desc: "Данное приложение предназначено для наработки точности (aim). Рекомендуется использовать мышку.",
    img: "img/2.png",
    link: "https://peregrinusss.github.io/Aim-trainer/",
  },
];

//  -------------------- Card  --------------------
const cardsWrap = document.querySelector(".portfolio__body");

projects.forEach((project) => {
  // Создаем элементы и добавляем им классы
  var cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  cardDiv.classList.add("js-scroll");

  var cardBody = document.createElement("div");
  cardBody.classList.add("card__body");

  var titleH2 = document.createElement("h2");
  titleH2.classList.add("card__title");
  titleH2.textContent = project.title;

  var descSpan = document.createElement("span");
  descSpan.classList.add("card__desc");
  descSpan.textContent = project.desc;

  var linkA = document.createElement("a");
  linkA.classList.add("card__link");
  linkA.href = project.link;
  linkA.target = "_blank";
  linkA.textContent = "Ссылка на проект";

  var iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  iconSvg.classList.add("card__icon");
  var useElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "use"
  );
  useElement.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "xlink:href",
    "img/sprite.svg#github-icon"
  );
  iconSvg.appendChild(useElement);
  linkA.appendChild(iconSvg);

  var img = document.createElement("img");
  img.src = project.img;
  img.alt = "Превью проекта";
  img.classList.add("card__img");

  // Добавляем элементы внутрь карточки
  cardBody.appendChild(titleH2);
  cardBody.appendChild(descSpan);
  cardBody.appendChild(linkA);
  cardBody.appendChild(img);

  // Добавляем карточку в документ
  cardDiv.appendChild(cardBody);
  cardsWrap.appendChild(cardDiv);
});
//  -------------------- /Card --------------------

// ----------------- Sroll effect ------------------
const card = document.querySelector('.card')
card.classList.remove('js-scroll')

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el, index) => {
    let lastIndex = scrollElements.length - 1;

    if (index === lastIndex) {
      const clue = document.querySelector('.clue')
      const clueText = clue.querySelector('span')
      const clueArrow = clue.querySelector('svg')

      if (el.classList.contains('scrolled')) {
        clueText.innerHTML = 'Scroll up';
        clueArrow.style.transform = 'rotateX(180deg)';
      } else {
        clueText.innerHTML = 'Scroll down';
        clueArrow.style.transform = 'rotateX(0)';
      }
    }

    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});
// ----------------- /Sroll effect ------------------
