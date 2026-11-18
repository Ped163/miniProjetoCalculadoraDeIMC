const numeroMassa= document.getElementById('numeroMassa')
const numeroAltura = document.getElementById('numeroAltura')
const btnCalcular = document.getElementById('btnCalcular')
const textoResultado = document.getElementById('textoResultado')

// btnCalcular.addEventListener('click', async() =>{

//     const valorMassa = numeroMassa.value;
//     const valorAltura = numeroAltura.value;

//     const resposta = await fetch (`/?massa=${valorMassa}&altura=${valorAltura}`)

//     const dados = await resposta.json()

//     textoResultado.textContent = `O valor do seu IMC é ${dados.imc} `

  
// })

btnCalcular.addEventListener('click', async () => {

    const valorMassa = numeroMassa.value
    const valorAltura = numeroAltura.value

    const resposta = await fetch(
        `/imc?massa=${valorMassa}&altura=${valorAltura}`
    )

    const dados = await resposta.json()

    textoResultado.textContent =
        `O valor do seu IMC é ${dados.imc.toFixed(2)}`

})