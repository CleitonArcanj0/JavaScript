const frm =  window.document.querySelector("form")
const btn = window.document.querySelector("button")
const list = window.document.querySelector(".list_erro")

/*Capturando os elementos pelo seu ID para alterar a cor dos elementos da lista dinamicamente atráves do atributo class, 
evitando que os outros elemento da lista sejam afetados antes que a validação ocorra*/
const list_senha = window.document.querySelector("#list_regra1")
const list_num = window.document.querySelector("#list_regra2")
const list_minus = window.document.querySelector("#list_regra3")
const list_maius = window.document.querySelector("#list_regra4")
const list_simb = window.document.querySelector("#list_regra5")

function contador(campo){
    const senha = campo.value
    const temNum = senha.match(/[0-9]/g)
    const temMinus = senha.match(/[a-z]/g)
    const temMaius = senha.match(/[A-Z]/g)
    const temEspeciais = senha.match(/\W/g)


    if(senha.length >= 8){
        list_senha.classList.remove("list_erro");
        list_senha.classList.add("list_success");
    } else{
        list_senha.classList.remove("list_success");
        list_senha.classList.add("list_erro");
    }

    if(!(temNum == null)){
        list_num.classList.remove("list_erro");
        list_num.classList.add("list_success");
    }else{
        list_num.classList.remove("list_success");
        list_num.classList.add("list_erro");
    }
    
    if(!(temMinus == null)){
        list_minus.classList.remove("list_erro");
        list_minus.classList.add("list_success");
    }else{
        list_minus.classList.remove("list_success");
        list_minus.classList.add("list_erro");
    }


    if(!(temMaius == null || temMaius.length < 2)){
        list_maius.classList.remove("list_erro");
        list_maius.classList.add("list_success");

    }else{
        list_maius.classList.remove("list_success");
        list_maius.classList.add("list_erro");
    }

    if(!(temEspeciais == null)){
        list_simb.classList.remove("list_erro");
        list_simb.classList.add("list_success");  
    }else{
        list_simb.classList.remove("list_success");
        list_simb.classList.add("list_erro");
    }
}

btn.addEventListener("click", (e)=>{
    mostrarSenha(e)
})

function mostrarSenha(e){
    let input = document.querySelector("#inSenha")
    if(input.getAttribute('type') == 'password'){
        input.setAttribute('type', 'text')
    }else{
        input.setAttribute('type', 'password')
    }
    
    e.preventDefault()
}