const apiUrl = 'http://localhost:8000/api/';

// -------------------- MODALIDADES --------------------
async function getModalidades() {
    try {
        const response = await fetch(apiUrl + 'modalidades/');
        const modalidades = await response.json();

        const select = document.getElementById("modalidade");
        if (select) {
            // Mantém apenas o placeholder
            select.innerHTML = `<option value="" disabled selected hidden>Selecione uma modalidade</option>`;
            modalidades.forEach(mod => {
                const option = document.createElement('option');
                option.value = mod.id;
                option.textContent = mod.nome;
                select.appendChild(option);
            });
        }
    } catch (err) {
        console.error("Erro ao carregar modalidades:", err);
    }
}

// -------------------- FORMULÁRIO --------------------
async function enviarFormulario(e) {
    e.preventDefault();

    const nome = document.querySelector(".nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const email = document.querySelector(".email").value.trim();
    const senha = document.querySelector(".senha").value.trim();
    const time = document.getElementById("time").value.trim();
    const modalidade_id = document.getElementById("modalidade").value;

    if (!nome || !telefone || !email || !senha || !time || !modalidade_id) {
        alert("Preencha todos os campos obrigatórios!");
        return;
    }

    try {
        const response = await fetch(apiUrl + "usuarios/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                nome, 
                telefone, 
                email, 
                senha, 
                time, 
                modalidade_id 
            })
        });
        
        const data = await response.json();
        console.log("Resposta backend:", data);
        alert("Formulário enviado com sucesso!");
        document.querySelector(".textField").reset();
    } catch (err) {
        console.error(err);
        alert("Erro ao enviar formulário.");
    }
}

// -------------------- INICIALIZAÇÃO --------------------
document.addEventListener('DOMContentLoaded', () => {
    getModalidades();

    const form = document.querySelector(".textField");
    if (form) form.addEventListener("submit", enviarFormulario);
});
