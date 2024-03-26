const URL_INSTAGRAM = "https://www.instagram.com/luizbez?igsh=cHp2c201bDR0N3p6"

let compartilharButton = document.getElementById("compartilhar-perfil-button")

// Forma mais comum de compartilhar eventos aos botões
compartilharButton.addEventListener('click', compartilharPerfilFn)

async function compartilharPerfilFn() {
    let shareData = {
        title: "Instagram Luiz Marcello",
        text: "Conheça Luiz Marcello",
        url: URL_INSTAGRAM 
    }

    try {
        await navigator.share(shareData)

    } catch (err) {
        console.log(err)
        if (!(err instanceof DOMException && err.name === "AbortError")) {
            window.open(URL_INSTAGRAM)
        }
    }
}

function copiarLink() {
    navigator.clipboard.writeText("https://www.instagram.com/luizbez?igsh=cHp2c201bDR0N3p6")
    // Mudar o texto do botão para "Link copiado!" e em negrito
    let copiarLinkText = document.getElementById("copiar-link-text")
    copiarLinkText.innerHTML = "<strong>Link copiado<strong>"
    // Adicionar animação no botão (feedback)
    let copiarLinkButton = document.getElementById("copiar-link-btn")
    copiarLinkButton.classList.add('animate__animated', 'animate__pulse')
    // copiarLinkButton.addEventListener('animationend', () => {
    //     copiarLinkText.innerText = "Copiar link"
    //     copiarLinkButton.classList.remove('animate_pulse')
    // })
}
