function abrirTab(event, idTab) {
    let conteudos = document.getElementsByClassName("conteudo")
    let tabs = document.getElementsByClassName("tab-button")

    for (let i = 0; i < conteudos.length; i++) {
      conteudos[i].style.display = 'block';
    }

    for (let i = 0; i < conteudos.length; i++) {
      if (conteudos[i].id !== idTab) {
        conteudos[i].style.display = 'none';
      }
    }

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('ativo')
    }

    
    event.currentTarget.classList.add('ativo')
}