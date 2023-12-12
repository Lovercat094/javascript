export  const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response);
    }
    return response;
};

export try {
    // Fazendo uma solicitação GET para obter produtos da AP
    const response =
        await fetch('http://localhost:3000/jogos');
    //lidando com oerros na resposta
    handleErrors(response);

    //converter os dados para json
    const data = await response.json();

    //exibir os dados na pagina html
    data.forEach(jogo => {
        const tagDiv =
            document.createElement('div');
        tagDiv.innerHTML =
            `<strong>${jogo.nome}</strong><p>${jogo.preco}</p>`;
        dataContainer.appendChild(tagDiv);
    });

} catch (error) {
    console.log('Error >>>', error);
}