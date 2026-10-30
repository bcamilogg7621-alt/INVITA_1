

document.addEventListener("DOMContentLoaded", function() {

    const startBtn = document.getElementById("startBtn");
    const introScreen = document.getElementById("introScreen");
    const mainContent = document.getElementById("mainContent");
    const audioPlayer = document.getElementById("audioPlayer");

    // Verificar que los elementos existan
    if (!startBtn || !introScreen || !mainContent) {
        console.error("No se encontraron los elementos de la invitación.");
        return;
    }

    // ABRIR INVITACIÓN
    startBtn.addEventListener("click", function() {

        introScreen.style.display = "none";
        mainContent.classList.remove("hidden");

        // Reproducir música
        if (audioPlayer) {
            audioPlayer.play().catch(error => {
                console.log("No se pudo reproducir la música:", error);
            });
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});

