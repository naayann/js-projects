const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const welcomePage = document.getElementById('welcome-page');
const showMoreBtn = document.getElementById('show-more-btn');
const noResult = document.getElementById('no-result');
const modeToggle = document.querySelector(".mode");
const accessKey = "TSW7hljQdopvtbZhTOoOVgSHLlpuWzgAqO4Nk8a9Ggs";


let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=13`

    const respose = await fetch(url);
    const data = await respose.json();

    if(page == 1) {
        searchResult.innerHTML = "";
    }

    const results = data.results;
    noResult.style.display = "none"

    if(!results || results.length === 0) {
        noResult.style.display = "flex"
        showMoreBtn.style.display = "none"
        welcomePage.style.display = "none"
    } else {
        results.forEach((result) => {
        const image = document.createElement("img")
        image.src = result.urls.small;

        const imageLink = document.createElement("a")
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);

        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display = "block"
    welcomePage.style.display = "none"

    }
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault()
    page = 1;
    searchImages()
})

showMoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
})

modeToggle.addEventListener("click", () => {
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        modeToggle.src = "/Image-Search-Engine-unsplash/image/sun-fill.png";
        modeToggle.style.filter = "invert(1)";
    } else {
        modeToggle.src = "/Image-Search-Engine-unsplash/image/moon-fill.png";
        modeToggle.style.filter = "invert(0)";
    }
})
   