const themeToggleBtn = document.getElementById('themeToggleBtn');
        const body = document.body;

        themeToggleBtn.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            
            if (body.classList.contains('light-mode')) {
                themeToggleBtn.textContent = '☀️';
            } else {
                themeToggleBtn.textContent = '🌙';
            }
        });

        document.addEventListener("DOMContentLoaded", () => {
    // 1. Definimos el límite de caracteres máximo visible
    const LIMITE_CARACTERES = 150; 

    // 2. Buscamos todos los párrafos que contienen un botón de "Leer más"
    const botones = document.querySelectorAll('.btn-leer-mas');

    botones.forEach(boton => {
        const parrafo = boton.parentElement;
        
        // Otenemos el texto completo limpiando espacios extra, ignorando el texto del propio botón
        const textoCompleto = parrafo.childNodes[0].textContent.trim();

        // 3. Si el texto es más corto que el límite, no hace falta el "Leer más"
        if (textoCompleto.length <= LIMITE_CARACTERES) {
            boton.style.display = 'none'; // Desaparece por completo
            return; 
        }

        // 4. Creamos los fragmentos de texto para el efecto visual inline
        const textoCorto = textoCompleto.substring(0, LIMITE_CARACTERES);
        const textoOculto = textoCompleto.substring(LIMITE_CARACTERES);

        // 5. Vaciamos el párrafo y reestructuramos de forma limpia y nativa
        parrafo.innerHTML = '';
        
        const spanVisible = document.createElement('span');
        spanVisible.textContent = textoCorto + '...';
        
        const spanOculto = document.createElement('span');
        spanOculto.textContent = textoOculto;
        spanOculto.style.display = 'none'; // Oculto por defecto

        // Metemos todo adentro del párrafo respetando el orden de las letras
        parrafo.appendChild(spanVisible);
        parrafo.appendChild(spanOculto);
        parrafo.appendChild(boton);

        let expandido = false;

        // 6. Evento de click para la palabra azul
        boton.addEventListener('click', () => {
            expandido = !expandido;

            if (expandido) {
                spanVisible.textContent = textoCorto; // Sacamos los puntos suspensivos
                spanOculto.style.display = 'inline';  // Mostramos el resto alineado a las letras
                boton.textContent = 'Leer menos';
            } else {
                spanVisible.textContent = textoCorto + '...'; // Volvemos a poner los puntos
                spanOculto.style.display = 'none';           // Escondemos el sobrante
                boton.textContent = 'Leer más';
            }
        });
    });
});
