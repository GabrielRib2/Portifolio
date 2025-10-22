document.addEventListener('DOMContentLoaded', () => {

    // 1. Menu Hamburger (Mobile)
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Troca o ícone do menu
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Fecha o menu ao clicar em um link (para mobile)
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });


    // 2. Animação de Barras de Progresso e Fade-In ao Scroll (Intersection Observer)
    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-left');
    const skillBars = document.querySelectorAll('.skill-level');

    const observerOptions = {
        root: null, // viewport
        threshold: 0.2, // aciona quando 20% do elemento está visível
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                target.classList.add('active'); // Ativa a animação de fade-in/slide-in

                // Se for uma barra de habilidade, inicia a animação
                if (target.classList.contains('skill-item')) {
                    const skillLevel = target.querySelector('.skill-level');
                    const level = skillLevel.getAttribute('data-level');
                    // Aplica o width para iniciar a transição CSS
                    skillLevel.style.width = `${level}%`;
                }

                observer.unobserve(target); // Para de observar depois de animar
            }
        });
    }, observerOptions);

    // Observa todos os elementos de animação
    fadeElements.forEach(el => observer.observe(el));
    document.querySelectorAll('.skill-item').forEach(el => observer.observe(el));


    // 3. Validação e Submissão do Formulário de Contato (BÁSICO)
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Simula o envio do formulário (em um projeto real, você usaria fetch() ou XMLHttpRequest)
        console.log('Formulário submetido! (Simulação)');
        
        // Exibe mensagem de sucesso
        formMessage.textContent = 'Mensagem enviada com sucesso! Em breve, entrarei em contato.';
        formMessage.style.backgroundColor = '#4CAF50';
        formMessage.classList.remove('hidden');

        // Limpa o formulário
        contactForm.reset();

        // Esconde a mensagem após 5 segundos
        setTimeout(() => {
            formMessage.classList.add('hidden');
        }, 5000);
    });

});
