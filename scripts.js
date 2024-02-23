const obtenerTitulosAlbumes = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';

    try {
        const response = await fetch(url);
        const albums = await response.json();
        const albumList = document.getElementById('album-list');

        albums.slice(0, 20).forEach(album => {
            const li = document.createElement('li');
            li.textContent = album.title;
            albumList.appendChild(li);
        });

        /* 
        //Busqueda por ID
        const filteredAlbums = albums.filter(album => album.id <= 20);

        filteredAlbums.forEach(album => {
            const li = document.createElement('li');
            li.textContent = album.title;
            albumList.appendChild(li);
        });
        */
        await mostrarMensaje();

    } catch (error) {
        console.error('Error al obtener los álbumes:', error);
    }
};

const mostrarMensaje = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Información Enviada');
            resolve();
        }, 3000);
    });
};

obtenerTitulosAlbumes();
