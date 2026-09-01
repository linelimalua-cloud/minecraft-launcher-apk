// Versões disponíveis
const versions = [
    {
        name: "Minecraft 1.20.1",
        type: "Latest Release",
        date: "2024",
        size: "450 MB"
    },
    {
        name: "Minecraft 1.19.2",
        type: "Stable",
        date: "2023",
        size: "420 MB"
    },
    {
        name: "Minecraft 1.18.2",
        type: "Snapshot",
        date: "2023",
        size: "410 MB"
    },
    {
        name: "Minecraft 1.17.1",
        type: "Legacy",
        date: "2021",
        size: "380 MB"
    }
];

// Carregar versões ao abrir a página
function loadVersions() {
    const versionsList = document.getElementById('versionsList');
    versionsList.innerHTML = '';
    
    versions.forEach((version, index) => {
        const versionDiv = document.createElement('div');
        versionDiv.className = 'version-item';
        versionDiv.innerHTML = `
            <div>
                <h4>${version.name}</h4>
                <p>${version.type} • ${version.date} • ${version.size}</p>
            </div>
            <button class="btn btn-primary" onclick="selectVersion(${index})">Selecionar</button>
        `;
        versionsList.appendChild(versionDiv);
    });
}

// Abrir página
function openPage(pageName) {
    // Esconder todas as páginas
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Mostrar página selecionada
    const page = document.getElementById(pageName);
    if (page) {
        page.classList.add('active');
        
        // Carregar versões se for a página de versões
        if (pageName === 'versions') {
            loadVersions();
        }
    }
}

// Login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('loginMessage');
    
    if (!username || !password) {
        message.textContent = '❌ Preencha todos os campos!';
        message.className = 'error';
        return;
    }
    
    if (username.length < 3) {
        message.textContent = '❌ Usuário deve ter pelo menos 3 caracteres!';
        message.className = 'error';
        return;
    }
    
    // Simular login bem-sucedido
    message.textContent = `✅ Login realizado com sucesso! Bem-vindo, ${username}!`;
    message.className = 'success';
    
    // Limpar campos
    setTimeout(() => {
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        openPage('home');
    }, 2000);
}

// Selecionar versão
function selectVersion(index) {
    const version = versions[index];
    alert(`✅ Versão ${version.name} selecionada!\n\nPronta para jogar.`);
}

// Jogar
function playMinecraft() {
    alert('🎮 Iniciando Minecraft...\n\nO jogo será lançado em poucos segundos.');
    console.log('Minecraft iniciado!');
}

// Inicializar ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    loadVersions();
});
