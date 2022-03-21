let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

Nome.style.width ='100%'
email.style.width = '100%'

function validaNome(){
        let txtNome = document.querySelector('#txtNome')

        if(nome.value.length < 3){
        txtNome.innerHTML = "esqueceu alguma letra??"
        txtNome.style.color="#b33939"
        
        } else{
            txtNome.innerHTML="belo nome!"
            txtNome.style.color="#34ace0"
            //pesquisar sombra de texto
            let nomeOk = true
        }
    }

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 ) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color= "#b33939"
    }else{
        txtEmail.innerHTML="não me deixa na caixa de spam :("
        txtEmail.style.color="#34ace0"
        //pesquisar sombra de texto
        let emailOk = true
    }

    function validaAssunto() {
        let txtAssunto = document.querySelector("#txtAssunto")

            if (assunto.value.length >= 100 ) {
                txtAssunto.innerHTML = "mucho texto amigo.. mais de 100 caracteres eu não leio."
                txtAssunto.style.color="#b33939"
                txtAssunto.style.display="block"
            }else{
                txtAssunto.style.display = 'none'
                let assuntoOk = true
            }
        
    }

    function enviar () {
        if (nomeOk == true && emailOk == true && assuntoOk == true) {
            alert("formulário enviado meu chapa")
        }else{
            alert("calma lá meu patrão, falta umas coisinhas aí em...")
        }
    }



    function mapaZoom(){
        mapa.style.width = "800px"
        mapa.style.height = "600px"
    }

    function mapaNormal(){
        mapa.style.width = "400px"
        mapa.style.height = "300px"
    }
    }
    
