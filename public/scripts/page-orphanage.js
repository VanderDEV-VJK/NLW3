const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// create map
const map = L.map('mapid', options).setView([-29.1683182,-51.1793576], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);


// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

// create and add marker
L
    .marker([-29.1683182,-51.1793576], { icon })
    .addTo(map);

// Image galery

function selectImage(event) {
    //console.log("cliquei no botão");
    const button = event.currentTarget;
    //console.log(button.children);

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button");
    //console.log(buttons);
    buttons.forEach(removeActiveClass);
    // Aqui poderia ser usada desta forma a function:
    // function removeActiveClass((button) => {
    // button.classList.remove("active");
    //})

    function removeActiveClass(button) {
        button.classList.remove("active");
    }

    //selecionar a image clicada
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img")

    // atualizar o container de image
    imageContainer.src = image.src

    // adicionar a classe .active para este botao
    button.classList.add('active');
}