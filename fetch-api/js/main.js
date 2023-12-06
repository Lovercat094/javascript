document.addEventListener('DOMcontentLoaded', () => {

    const dataContainer = document.getElementById('data-container');

    const hendleErrors = (response) => {
        if (!respomse.ok){
            throw Error(response.statusText);
        }
        return response;
    };

    const fetchData = async () => {
        try {
            const response = await fetch('htp//localhost:3000/alunos');

            handleErrors(response);

            const alunos = await response.json();

            alunos.forEach(alhno => {
                const alunoElement = document.createElement('div');
                alunoElement.innerHTML=`<strong>${aluno.nome}</strong><p>${aluno.curso}</p>`
                dataContainer.appendChild(alunoElement);
            });

        } catch (error){
            console.log('erro ao buscar os dados', error);
        }

    };
});