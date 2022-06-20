window.onload = function(){

    const inputCep = document.querySelector("#inputCep");

    const buscar = document.querySelector("#buscar");

    buscar.addEventListener('click', function(){
        const opcoes = {
            method:'GET',
            mode:'cors',
            cache:'default'
        }

        fetch(`https://viacep.com.br/ws/${inputCep.value}/json/`, opcoes)
        .then(
            response => { response.json()
            .then(data => {
                    document.querySelector("#cep").textContent = data['cep'];
                    document.querySelector("#rua").textContent = data['logradouro'];
                    document.querySelector("#bairro").textContent = data['bairro'];
                    document.querySelector("#cidade").textContent = data['localidade'];
                    document.querySelector("#estado").textContent = data['uf'];

                })

            }
        )
    });

}