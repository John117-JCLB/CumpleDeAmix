// ============================
// ELEMENTOS
// ============================

const btnEntrar = document.getElementById("btnEntrar");
const btnContinuar = document.getElementById("btnContinuar");

const inicio = document.getElementById("inicio");
const sorpresa = document.getElementById("sorpresa");
const recuerdos = document.getElementById("recuerdos");

const musica = document.getElementById("musica");

let fotosActuales = [];
let indiceActual = 0;

// ============================
// FOTOS DE LOS RECUERDOS
// ============================

const recuerdosFotos = {

    1: {
        fotos: [
            "imagenes/img1.jpeg",
            "imagenes/img2.jpeg"
        ],
        frase: "Los primeros recuerdos ❤️"
    },

    2: {
        fotos: [
            "imagenes/img3.jpeg",
            "imagenes/img4.jpeg",
            "imagenes/img5.jpeg",
            "imagenes/img6.jpeg"
        ],
        frase: "Momentos que nunca olvidaré ✨"
    },

    3: {
        fotos: [
            "imagenes/img7.jpeg",
            "imagenes/img8.jpeg",
            "imagenes/img9.jpeg",
            "imagenes/img10.jpeg",
            "imagenes/img11.jpeg",
            "imagenes/img12.jpeg",
            "imagenes/img13.jpeg",
            "imagenes/img14.jpeg"
        ],
        frase: "Los recuerdos más especiales ❤️"
    }

};

// ============================
// CONTROL DE CARTAS
// ============================

let cartasAbiertas = 0;

const cartasVistas = {
    1: false,
    2: false,
    3: false
};

function verificarCartas() {

    document.getElementById("progresoCartas").textContent =
        `Recuerdos descubiertos: ${cartasAbiertas}/3`;

    if (cartasAbiertas === 3) {

        document.getElementById("continuarContainer")
            .style.display = "block";
    }
}

// ============================
// CONTROL DE FRASES
// ============================

let frasesDescubiertas = 0;

const frasesVistas = [
    false,
    false,
    false,
    false
];

function verificarFrases() {

    if (frasesDescubiertas === 4) {

        document.getElementById(
            "continuarCualidades"
        ).style.display = "block";
    }
}

// ============================
// CONTROL DE CUALIDADES
// ============================

let cualidadesDescubiertas = 0;

const cualidadesVistas = {
    amable: false,
    inteligente: false,
    divertida: false,
    determinada: false
};

function verificarCualidades() {

    if (cualidadesDescubiertas === 4) {

        document.getElementById(
            "continuarCarta"
        ).style.display = "block";
    }
}

// ============================
// PORTADA
// ============================

btnEntrar.addEventListener("click", () => {

    musica.play();

    inicio.style.display = "none";
    sorpresa.style.display = "block";
});

// ============================
// BIENVENIDA
// ============================

btnContinuar.addEventListener("click", () => {

    sorpresa.style.display = "none";
    recuerdos.style.display = "block";
});

// ============================
// CARTAS
// ============================

function abrirCaja(numero) {

    if (numero <= 3 && !cartasVistas[numero]) {

        cartasVistas[numero] = true;

        cartasAbiertas++;

        verificarCartas();
    }

    if (numero <= 3) {

        fotosActuales =
            recuerdosFotos[numero].fotos;

        indiceActual = 0;

        document.getElementById("fraseModal")
            .textContent =
            recuerdosFotos[numero].frase;

        mostrarFoto();

        document.getElementById("modalFoto")
            .style.display = "flex";

        return;
    }

    if (numero === 4) {

        document.getElementById("imagenModal").src =
            "imagenes/img8.jpeg";

        document.getElementById("fraseModal")
            .textContent =
            "Gracias por formar parte de tantos momentos especiales ❤️";

        document.getElementById("contadorFoto")
            .textContent = "💌";

        document.getElementById("modalFoto")
            .style.display = "flex";
    }
}

// ============================
// MODAL DE FOTOS
// ============================

function mostrarFoto() {

    document.getElementById("imagenModal").src =
        fotosActuales[indiceActual];

    document.getElementById("contadorFoto").textContent =
        `${indiceActual + 1} / ${fotosActuales.length}`;
}

function siguienteFoto() {

    if (indiceActual < fotosActuales.length - 1) {

        indiceActual++;

        mostrarFoto();
    }
}

function anteriorFoto() {

    if (indiceActual > 0) {

        indiceActual--;

        mostrarFoto();
    }
}

function cerrarModal() {

    document.getElementById("modalFoto")
        .style.display = "none";
}

// ============================
// PASAR A FRASES
// ============================

const btnContinuarFrases =
    document.getElementById("btnContinuarFrases");

const frases =
    document.getElementById("frases");

btnContinuarFrases.addEventListener("click", () => {

    recuerdos.style.display = "none";

    frases.style.display = "block";
});

// ============================
// TARJETAS VOLTEABLES
// ============================

function voltearTarjeta(tarjeta) {

    tarjeta.classList.toggle("volteada");

    const indice = tarjeta.dataset.id;

    if (!frasesVistas[indice]) {

        frasesVistas[indice] = true;

        frasesDescubiertas++;

        verificarFrases();
    }
}

// ============================
// CUALIDADES
// ============================

function mostrarCualidad(tipo) {

    const texto =
        document.getElementById("textoCualidad");

    if (!cualidadesVistas[tipo]) {

        cualidadesVistas[tipo] = true;

        cualidadesDescubiertas++;

        verificarCualidades();
    }

    switch (tipo) {

        case "amable":

            texto.innerHTML =
                "Siempre tienes una forma especial de hacer sentir bien a los demás ❤️";
            break;

        case "inteligente":

            texto.innerHTML =
                "Admiro la forma en que ves las cosas y aprendes constantemente 🌟";
            break;

        case "divertida":

            texto.innerHTML =
                "Contigo siempre hay razones para sonreír 😄";
            break;

        case "determinada":

            texto.innerHTML =
                "Cuando te propones algo, das lo mejor de ti para lograrlo 🎯";
            break;
    }
}

// ============================
// IR A CUALIDADES
// ============================

const btnCualidades =
    document.getElementById("btnCualidades");

const cualidades =
    document.getElementById("cualidades");

btnCualidades.addEventListener("click", () => {

    frases.style.display = "none";

    cualidades.style.display = "block";
});

// ============================
// IR A CARTA FINAL
// ============================

const btnCartaFinal =
    document.getElementById("btnCartaFinal");

const cartaFinal =
    document.getElementById("cartaFinal");

btnCartaFinal.addEventListener("click", () => {

    cualidades.style.display = "none";

    cartaFinal.style.display = "block";
});

// ============================
// CONFETI FINAL
// ============================

const btnConfeti =
    document.getElementById("btnConfeti");

if (btnConfeti) {

    btnConfeti.addEventListener("click", () => {

        const duracion = 4000;
        const fin = Date.now() + duracion;

        const intervalo = setInterval(() => {

            if (Date.now() > fin) {

                clearInterval(intervalo);
                return;
            }

            confetti({
                particleCount: 8,
                startVelocity: 30,
                spread: 360,
                ticks: 60,
                origin: {
                    x: Math.random(),
                    y: Math.random() - 0.2
                }
            });

        }, 200);

    });
}