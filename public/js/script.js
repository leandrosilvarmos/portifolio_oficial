// Aqui fica a parte do menu que acompanha o scrol da pagina
window.addEventListener('scroll', function() {
    var menu = document.getElementById('menu');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
        menu.classList.add('fixed');
    } else {
        menu.classList.remove('fixed');
    }
});




// Aqui fica a parte do feedback
document.addEventListener('DOMContentLoaded', function () {
    const feedbacks = document.querySelectorAll('.comments__return');
    let index = 0; // �ndice do feedback atual

    // Fun��o para fazer a transi��o para o pr�ximo feedback
    function nextFeedback() {
        const currentFeedback = feedbacks[index];
        const nextIndex = (index + 1) % feedbacks.length;
        const nextFeedback = feedbacks[nextIndex];

        // Adiciona classe para anima��o de sa�da
        currentFeedback.classList.add('fadeOut');

        setTimeout(function () {
            // Remove a classe active do feedback atual
            currentFeedback.classList.remove('active', 'fadeOut');
            // Adiciona a classe active ao pr�ximo feedback
            nextFeedback.classList.add('active');
            index = nextIndex; // Atualiza o �ndice do pr�ximo feedback
        }, 500); // Tempo da anima��o de sa�da

        // Adiciona classe para anima��o de entrada
        setTimeout(function () {
            nextFeedback.classList.add('fadeIn');
        }, 550); // Tempo da anima��o de entrada
    }

    // Chamando a fun��o para iniciar o carrossel autom�tico
    setInterval(nextFeedback, 6000); // Altere o tempo de rota��o conforme necess�rio (3000 = 3 segundos)

    // Exibir o primeiro feedback inicialmente
    feedbacks[index].classList.add('active');
});


// Aqui fica a fun��o das labels de avalia��o
const stars = document.querySelectorAll('.rating input[type="radio"]');
const labels = document.querySelectorAll('.rating label');

stars.forEach((star, index) => {
    star.addEventListener('change', function () {
        for (let i = 0; i <= index; i++) {
            labels[i].style.color = '#DFEBF2'; // Marca os labels at� o index selecionado
        }
        for (let i = index + 1; i < labels.length; i++) {
            labels[i].style.color = '#292526'; // Desmarca os labels ap�s o index selecionado
        }
    });
});


// Aqui fica o toggle do menu para responsividade
document.addEventListener("DOMContentLoaded", function () {
    const toggleMenu = document.querySelector(".toggle-menu");
    const navigationHeader = document.querySelector(".navigation-header");

    toggleMenu.addEventListener("click", function () {
        navigationHeader.classList.toggle("show-menu");
    });

    // Adiciona um ouvinte de evento de clique no documento inteiro
    document.addEventListener("click", function (event) {
        // Verifica se o clique ocorreu dentro do menu de navega��o ou no �cone de toggle
        if (!navigationHeader.contains(event.target) && !toggleMenu.contains(event.target)) {
            // Se o clique ocorreu fora do menu, fecha o menu
            navigationHeader.classList.remove("show-menu");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.querySelector(".scroll-button");

    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 300 && window.innerWidth <= 768) {
            scrollButton.style.display = "block";
        } else {
            scrollButton.style.display = "none";
        }
    });

    scrollButton.addEventListener("click", function (event) {
        event.preventDefault(); 
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    });
});


