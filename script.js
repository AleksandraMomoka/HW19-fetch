async function getAlbums() {
    let albums = await fetch("https://jsonplaceholder.typicode.com/albums");

    if (albums.ok) { 
        let data = await albums.json();
        for(let name of data) {
        let li = document.querySelector("ul");
        li.innerHTML += `<li class="album-name" id =${name.id}>${name.title}</li>`       
        }
    } else {
        console.error('Error');
    }
}



async function getPhotos(id) {
    let photos = await fetch("https://jsonplaceholder.typicode.com/photos?id="+id);

    if (photos.ok) { 
        let data = await photos.json();
        for (let name of data) { 
            let photoList = document.querySelector(".photos");
            photoList.innerHTML = `<img src="${name.url}">`
        }
    } else {
        console.error('Error');
    }

}


async function getAlbumId(e) {  
    document.body.addEventListener('click', function(e) {
        if (e.target.classList.contains('album-name')) {
             getPhotos(e.target.id);
        }
        
    });  
}

getPhotos(1);
getAlbums();
getAlbumId();
getPhotos();
