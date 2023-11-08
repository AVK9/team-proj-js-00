import"./modulepreload-polyfill-ec808ebb.js";var a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},h=typeof a=="object"&&a&&a.Object===Object&&a,y=typeof self=="object"&&self&&self.Object===Object&&self;h||y||Function("return this")();const n={form:document.querySelector("#search-form"),dataInput:document.querySelector(".search-input"),gallery:document.querySelector(".gallery"),loadmoreBtn:document.querySelector(".load-more"),messageFinish:document.querySelector(".message-finish"),guard:document.querySelector(".js-guard")},{searchQuery:w}=n.form.elements;let l,c=1;n.form.addEventListener("submit",v);function v(o){if(o.preventDefault(),n.gallery.innerHTML="",n.messageFinish.classList.add("hidden"),n.loadmoreBtn.classList.add("hidden"),l=w.value.trim(),!l)return console.log("Pleasure Input Search images...");d(l,c).then(e=>{console.log(e.hits),u(e.hits),n.guard.classList.remove("hidden")}).catch(e=>console.log(e))}async function d(o,e){const s="https://pixabay.com/api/",t=new URLSearchParams({key:"40254095-fb7e3bf791467f50a6328bb1e",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:10,page:e});return await fetch(`${s}?${t}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function u(o){const e=o.map(({webformatURL:s,largeImageURL:t,tags:r,likes:m,views:p,comments:g,downloads:b})=>`
       <div class="photo-card">
          <a class="gallery__link" href="${t}">
             <img class="images" src="${s}"
              alt="${r}" loading="lazy" />
                <div class="info">
                   <p class="info-item"><b>Likes</b> <br>${m}</p>
                   <p class="info-item"><b>Views</b> <br>${p}</p>
                   <p class="info-item"><b>Comments</b> <br>${g}</p>
                   <p class="info-item"><b>Downloads</b> <br>${b}</p>
                </div>
          </a>
       </div>
       `).join("");n.gallery.insertAdjacentHTML("beforeend",e)}const S={root:null,rootMargin:"200px"},L=new IntersectionObserver(j,S);document.querySelector(".js-guard");L.observe(n.guard);function j(o,e){o.forEach(s=>{s.isIntersecting&&(c+=1,d(l,c).then(t=>{u(t.hits),t.page<t.total_pages&&e.observe(elements.guard)}).catch(t=>console.log(t)))})}const i=document.querySelector(".go-top");window.addEventListener("scroll",q);function q(){const o=window.scrollY,e=document.documentElement.clientHeight;o>e?i.classList.add("go-top--show"):i.classList.remove("go-top--show")}i.addEventListener("click",f);function f(){window.scrollY>0&&(window.scrollBy(0,-25),setTimeout(f,0))}
//# sourceMappingURL=page-2-56cddca4.js.map
