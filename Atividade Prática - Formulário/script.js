function retornarValores (conteudo) {
    if (!("erro" in conteudo)) {
        document.getElementById('Endereco').value=(conteudo.logradouro)
        document.getElementById('inputBairro').value=(conteudo.bairro)
        document.getElementById('inputCidade').value=(conteudo.localidade)
        document.getElementById('inputComplemento').value=(conteudo.complemento)
    }
    else {
        alert("CEP não identificado...")
    }
}

function buscaCep (valor) {
    var cep = valor.replace(/\D/g, '')
    if (cep != "") {
        var validarCEP = /^[0-9]{8}$/
        if (validarCEP.test(cep)) {
            document.getElementById('Endereco').value = " . . . "
            document.getElementById('inputBairro').value = " . . ."
            document.getElementById('inputCidade').value = " . . ."
            document.getElementById('inputComplemento').value = " . . ."
            var script = document.createElement('script')
            script.src = `https://viacep.com.br/ws/${cep}/json/?callback=retornarValores`
            document.body.appendChild(script)
        }
        else{
            alert(`Formato Inválido...`)
        }
    }
}