const refs = {
    form: document.querySelector('#search-form'),
    dataInput: document.querySelector('.search-input'),
    gallery: document.querySelector('.gallery'),
    loadmoreBtn: document.querySelector('.load-more'),
    messageFinish: document.querySelector('.message-finish'),
    guard: document.querySelector('.js-guard'),
}


const { searchQuery } = refs.form.elements;
let inputDataUser;
const perPage = 40;
let page = 1

refs.form.addEventListener('submit', onSearchQuery)
 function onSearchQuery(e) {
  e.preventDefault();
  refs.gallery.innerHTML = '';
  refs.messageFinish.classList.add('hidden')
  refs.loadmoreBtn.classList.add('hidden');
  inputDataUser = searchQuery.value.trim();

  if (!inputDataUser) {
    return console.log('Pleasure Input Search images...');
    // return Notiflix.Notify.failure(`Pleasure Input Search images...`);
  };
  pixabay(inputDataUser, page)
  .then((data) => {
    console.log(data.hits);
      creatMarkup(data.hits);
      refs.guard.classList.remove('hidden')
  })
        .catch((err) => console.log(err));
};
//////////////////////////////////////////////////////////////
async function pixabay(inputDataUser, page) {
    const BASE_URL = 'https://pixabay.com/api/';
    const params = new URLSearchParams({
        key: "40254095-fb7e3bf791467f50a6328bb1e",
        q: inputDataUser,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
        per_page: 10,
        page,
    });
    return await fetch(`${BASE_URL}?${params}`)
       .then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}
//////////////////////////////////////////////////////////////
function creatMarkup(respArr) {
   const markupGel = respArr.map((
      {
         webformatURL,
         largeImageURL,
         tags,
         likes,
         views,
         comments,
         downloads,
      }
   ) => `
       <div class="photo-card">
          <a class="gallery__link" href="${largeImageURL}">
             <img class="images" src="${webformatURL}"
              alt="${tags}" loading="lazy" />
                <div class="info">
                   <p class="info-item"><b>Likes</b> <br>${likes}</p>
                   <p class="info-item"><b>Views</b> <br>${views}</p>
                   <p class="info-item"><b>Comments</b> <br>${comments}</p>
                   <p class="info-item"><b>Downloads</b> <br>${downloads}</p>
                </div>
          </a>
       </div>
       `).join("");
   // refs.gallery.innerHTML = markupGel;
   refs.gallery.insertAdjacentHTML('beforeend', markupGel);
    // let lightbox = new SimpleLightbox('.gallery a');
    // lightbox.refresh();
}
//////////////////////////////////////////////////////////////
const options = {
  root: null,
  rootMargin: "200px",
//   threshold: 1.0,
};
const observer =  new IntersectionObserver(loadMoreScrol, options);
let target = document.querySelector(".js-guard");
observer.observe(refs.guard);
 function loadMoreScrol (entries, observer) {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          page += 1;
 pixabay(inputDataUser, page)
  .then((data) => {
    // console.log(data.hits);
    creatMarkup(data.hits);
    if (data.page < data.total_pages) {
      observer.observe(elements.guard);
    }
  })
  .catch((err) => console.log(err));
      }
  });
};

//////////////////////////////////////


const goTopBtn = document.querySelector(".go-top");

window.addEventListener("scroll", trackScroll);

goTopBtn.addEventListener("click", goTop);

function trackScroll() {

  const scrolled = window.pageYOffset;

  const coords = document.documentElement.clientHeight;

  if (scrolled > coords) {

    goTopBtn.classList.add("go-top--show");
  } else {

    goTopBtn.classList.remove("go-top--show");
  }
}

function goTop() {

  if (window.pageYOffset > 0) {
  
    window.scrollBy(0, -25);
    setTimeout(goTop, 0); 
  }
}

////////////////////////////////