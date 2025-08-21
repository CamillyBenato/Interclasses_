const apiUrl = 'http://localhost:8000/api/';

// Função para carregar as modalidades
async function getModalidades() {
    try {
        const response = await fetch(apiUrl + 'modalidades/');
        const modalidades = await response.json();

        const tbody = document.getElementById('modalidades-table').getElementsByTagName('tbody')[0];
        tbody.innerHTML = '';

        modalidades.forEach(modalidade => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${modalidade.nome}</td>`;
            tbody.appendChild(tr);
        });
    } catch (error) {
        console.error('Erro ao carregar as modalidades:', error);
    }
}

// Função para criar nova Modalidade
async function criarModalidade(event) {
    event.preventDefault();

    const nome = document.getElementById('nome_modalidade').value;

    const fd = new FormData();
    fd.append('nome', nome);

    try {
        const response = await fetch(apiUrl + 'modalidades/', {
            method: 'POST',
            body: fd
        });

        if (!response.ok) throw new Error('Erro ao cadastrar as modalidades');

        const modalidadeCriada = await response.json();
        console.log('Modalidade criada com sucesso:', modalidadeCriada);

        // Atualizar a tabela
        const tbody = document.getElementById('modalidades-table').getElementsByTagName('tbody')[0];
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${modalidadeCriada.nome}</td>`;
        tbody.appendChild(tr);

        document.getElementById('nome_modalidade').value = '';
    } catch (error) {
        console.error('Erro ao criar a modalidade:', error);
        alert('Ocorreu um erro ao criar a modalidade. Detalhes: ' + error.message);
    }
}

// Inicialização da página
document.addEventListener('DOMContentLoaded', () => {
    getModalidades(); // Carregar modalidades existentes
    document.getElementById('submit-categoria-btn').addEventListener('click', criarModalidade);
});
