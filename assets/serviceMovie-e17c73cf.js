const n={list:document.querySelector(".js-movie-list"),guard:document.querySelector(".js-guard")},g={root:null,rootMargin:"300px"},d=new IntersectionObserver(v,g);let i=1;l(i).then(e=>{n.list.insertAdjacentHTML("beforeend",u(e.results)),e.page<e.total_pages&&d.observe(n.guard)}).catch(e=>console.log(e));function l(e=1){const r="https://api.themoviedb.org/3",o="/trending/movie/week",t="345007f9ab440e5b86cef51be6397df1",s=new URLSearchParams({api_key:t,page:e});return fetch(`${r}${o}?${s}`).then(c=>{if(!c.ok)throw new Error(c.statusText);return c.json()})}function u(e){return e.map(({poster_path:r,original_title:o,release_date:t,vote_average:s})=>`
      <li class="movie-card">
          <img src="https://image.tmdb.org/t/p/w300${r}" loading="lazy" alt="${o}">
          <div class="movie-info">
          <h2>${o}</h2>
          <p>Release date: ${t}</p>
          <p>Vote Average: ${s}</p>
          </div>
      </li>`).join("")}let a=0;function v(e,r){a+=1,console.log("counterObserver",a),e.forEach(o=>{o.isIntersecting&&(i+=1,l(i).then(t=>{n.list.insertAdjacentHTML("beforeend",u(t.results)),t.page>=500&&r.unobserve(n.guard)}).catch(t=>console.log(t)))})}
//# sourceMappingURL=serviceMovie-e17c73cf.js.map
