const listaDeTeclas = document.querySelectorAll('.tecla');
const listaDeSons = document.getElementsByTagName('audio');

for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    listaDeTeclas[i].onclick = () => {
        listaDeSons[i].play();
    };   
    tecla.onkeydown = (evento) => {
        evento.code === 'Space' || evento.code === 'Enter' ? true : tecla.classList.add('ativa');
    };
    tecla.onkeyup = () => {
        tecla.classList.remove('ativa');
    };
};
// template string:
    // ${}
