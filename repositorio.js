function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
        section.classList.remove('active');
    });
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}

function copyText() {
    const textElement = document.getElementById("correo_autor");
    const range = document.createRange();
    range.selectNodeContents(textElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
        document.execCommand('copy');
        const confirmacion_mensaje = document.getElementById("confirmacion_mensaje");
        confirmacion_mensaje.style.display = "block";
        setTimeout(() => {
            confirmacion_mensaje.style.display = "none";
        }, 2000);
    } catch (err) {
        console.error("No se pudo copiar el texto", err);
    }

    window.getSelection().removeAllRanges();
}
