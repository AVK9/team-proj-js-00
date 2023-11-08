import"./modulepreload-polyfill-ec808ebb.js";/* empty css               */const a={catList:document.querySelector(".categoriesList"),catListItem:document.querySelector(".categoriesList"),catPage:document.querySelector(".categoryPage"),bookPage:document.querySelector(".bookInfoBox"),bestSellersPartName:document.querySelector(".bestSellersPartName"),partCardsPage:document.querySelector(".partCardsList"),btnSeeMore:document.querySelector(".btnBestSellersSeeMore"),cardsBookSmall:document.querySelector(".photo-card"),shoppingList:document.querySelector(".shoppingList"),btnAddtoShList:document.querySelector(".btnAddtoCard"),btnRemoveShList:document.querySelector(".btnRemoveCard"),btnCloseInfoBook:document.querySelector(".btnCloseInfoBook")};async function k(){return await fetch("https://books-backend.p.goit.global/books/category-list").then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json()})}k().then(t=>{m(t)}).catch(t=>console.log(t));function m(t){const o=t.map(({list_name:n})=>`
       <li class="categoryItem">${n}</li>
       `).join("");a.catList.innerHTML=o}let c;a.catListItem.addEventListener("click",h);function h(t){c=t.target.textContent,d(c)}async function d(t){const o="https://books-backend.p.goit.global/books/category",n=new URLSearchParams({category:t});return await fetch(`${o}?${n}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).then(e=>{p(e)}).catch(e=>console.log(e))}function p(t){const o=t.map(({author:e,book_image:s,description:l,amazon_product_url:b,title:i,list_name:u,_id:r})=>`
       <div class="photo-card" id="${r}">
             <img class="images" src="${s}"
              alt="${i}" loading="lazy" />
                <div class="info">
                   <p class="info-item"><b>${i}</b></p>                
                   <p class="info-item"><b>${e}</b></p>
                </div>
       </div>
       `).join(""),n=`<h1>${c}</h1>`;a.catPage.innerHTML=n+o}async function f(t){return await fetch(`https://books-backend.p.goit.global/books/${t}`).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json()}).then(o=>{y([o])}).catch(o=>console.log(o))}function y(t){const o=t[0].buy_links.map(({name:e,url:s})=>`
     <div class="boxMarketPlace">
     <a href="${s}" class="infoMarketPlace" target="_blank"><b>${e}</b></a>
     </div>
       `).join(""),n=t.map(({author:e,book_image:s,description:l,buy_links:[{name:b,url:i}],buy_links:u,title:r,list_name:C,_id:g})=>`
       <div class="photo-card" id="${g}">
       <button class="btnCloseInfoBook">X</button>
             <img class="images" src="${s}"
              alt="${r}" loading="lazy" />
                <div class="info">
                   <p class="info-title"><b>${r}</b></p>
                   <p class="info-author"><b>${e}</b></p>
                   <p class="info-buy_links"><b>${o}</b></p>
                   <p class="info-description">${l}</p>
                   <button class="btnAddtoCard">Add to shopping list</button>
                   <button class="btnRemoveCard hidden">Remove from the shopping list</button>
                </div>
       </div>
       `).join("");a.bookPage.classList.remove("hidden"),a.bookPage.innerHTML=n}a.catPage.addEventListener("click",S);function S(t){const o=t.target.closest(".photo-card"),n=t.target.closest(".btnBestSellersSeeMore");if(o){let e=o.id;f(e)}n&&(c=n.getAttribute("category"),d(c))}a.bookPage.addEventListener("click",L);function L(t){const o=t.target.closest(".btnAddtoCard"),n=t.target.closest(".btnRemoveCard"),e=t.target.closest(".btnCloseInfoBook");o&&(console.log("btnAddtoCard"),console.log(a.btnRemoveShList)),n&&console.log("btnRemoveCard"),e&&a.bookPage.classList.add("hidden")}
//# sourceMappingURL=page-4-a50f26fd.js.map
