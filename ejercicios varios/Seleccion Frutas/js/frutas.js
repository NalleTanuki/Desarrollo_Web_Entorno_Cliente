function mostrarFruta(){
    var fruta = document.getElementById('fruta').value;
    var titulo, descripcion, imagen;

    //Infromacion de las frutas
    if(fruta === 'manzana'){
        titulo = 'Manzana';
        descripcion = 'La manzana es una fruta dulce y crujiente, rica en fibra y vitaminas.';
        imagen = 'images/manzana.jpg';
    } else if(fruta === 'platano'){
        titulo = 'Plátano';
        descripcion = 'El plátano es una fruta tropical rica en potasio, ideal para deportistas.';
        imagen = 'images/platano.jpg';
    } else if(fruta === 'fresa'){
        titulo = 'Fresa';
        descripcion = 'La fresa es una fruta pequeña y jugosa, con un sabor dulce y ácido.';
        imagen = 'images/fresa.jpg';
    }

    //Mostrar la informacion
    document.getElementById('infoFruta').innerHTML = `
        <h2>${titulo}</h2>
        <p>${descripcion}</p>
        <img src="${imagen}" alt="${titulo}">
        `;
}