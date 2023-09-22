let test = async () => {
    return ((await fetch('/index.json')).json())
}
test().then((val) => {
    console.log(val)

    let show = ''
    val.map((data) => {
        show +=
            `
    <div class="card-box" style="width: 18rem;">
        <img class="card-img-top" src=${data.src} alt="Card image">
        <div class="card-body">
          <h5 class="card-title">${data.title}</h5>
          <p class="card-text">${data.description}</p>
        </div>
        <div class='btn'>
          <a href=${data.link} class=" btn btn-primary "  target="_blank">LIVE</a>
        </div>
    </div>

      
        
        `
        document.getElementById('card-container').innerHTML = show;
    })

})



{/* <div class= "resume-content mr-auto" id='proj-cont'>
<div>
<img src=${data.src} width="200px" height="150px" alt="profile">
<div/>
<br>
<h3 class="mb-0">${data.title}</h3>
<p class='prgph'>${data.description}</p>
<a href=${data.link} id="anchar-btn" target="_blank">Live</a>
<br>
<br><br/>
<br><br/>
</div> */}