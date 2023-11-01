const s={form:document.querySelector("#search-form"),dataInput:document.querySelector(".search-input"),gallery:document.querySelector(".gallery"),loadmoreBtn:document.querySelector(".load-more"),messageFinish:document.querySelector(".message-finish"),guard:document.querySelector(".js-guard")},{searchQuery:h}=s.form.elements;let a,c=1;s.form.addEventListener("submit",b);function b(o){if(o.preventDefault(),s.gallery.innerHTML="",s.messageFinish.classList.add("hidden"),s.loadmoreBtn.classList.add("hidden"),a=h.value.trim(),!a)return console.log("Pleasure Input Search images...");l(a,c).then(e=>{console.log(e.hits),d(e.hits),s.guard.classList.remove("hidden")}).catch(e=>console.log(e))}async function l(o,e){const n="https://pixabay.com/api/",t=new URLSearchParams({key:"40254095-fb7e3bf791467f50a6328bb1e",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:10,page:e});return await fetch(`${n}?${t}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function d(o){const e=o.map(({webformatURL:n,largeImageURL:t,tags:r,likes:m,views:g,comments:f,downloads:p})=>`
       <div class="photo-card">
          <a class="gallery__link" href="${t}">
             <img class="images" src="${n}"
              alt="${r}" loading="lazy" />
                <div class="info">
                   <p class="info-item"><b>Likes</b> <br>${m}</p>
                   <p class="info-item"><b>Views</b> <br>${g}</p>
                   <p class="info-item"><b>Comments</b> <br>${f}</p>
                   <p class="info-item"><b>Downloads</b> <br>${p}</p>
                </div>
          </a>
       </div>
       `).join("");s.gallery.insertAdjacentHTML("beforeend",e)}const y={root:null,rootMargin:"200px"},w=new IntersectionObserver(v,y);document.querySelector(".js-guard");w.observe(s.guard);function v(o,e){o.forEach(n=>{n.isIntersecting&&(c+=1,l(a,c).then(t=>{d(t.hits),t.page<t.total_pages&&e.observe(elements.guard)}).catch(t=>console.log(t)))})}const i=document.querySelector(".go-top");window.addEventListener("scroll",S);i.addEventListener("click",u);function S(){const o=window.pageYOffset,e=document.documentElement.clientHeight;o>e?i.classList.add("go-top--show"):i.classList.remove("go-top--show")}function u(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(u,0))}
//# sourceMappingURL=gallery-pixabay-f6cf659f.js.map
