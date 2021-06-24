const showModel = (e) =>{
    const url = e.target.closest(".card").children[0].src
}

const renderData = (data) => {
    const parent = document.querySelector(".album.row")
    parent.innerHTML=''
    data.forEach((img) => {
        const card = `<div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <img src="${img.large_url}">
          <div class="card-body">
           
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  Edit
                </button>
              </div>
              <small class="text-muted">${img.id}</small>
            </div>
          </div>
        </div>
      </div>`
      parent.innerHTML += card; 
    })


}


const searchImages = (query) => {
    fetch(`https://api.pexels.com/v1/search?query=${query})`
    .then((response) => response.json())
    .then(data=>{
    renderData(data.images)})
    .catch((err) => console.log(err))
)
}

searchImages("");


window.onload =() => {
     const primaryBtn = document.getElementById(`load-images`)
     const secondaryBtn = document.getElementById(`load-secondary-images`)
     primaryBtn.addEventListener('click', () =>{
         searchImages('')
     })
     secondaryBtn.addEventListener('click', () =>{
        searchImages('')
     })
    } 