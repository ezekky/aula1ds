
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões de abas e todos os painéis de conteúdo
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Remove a classe 'active' de todos os botões
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // 2. Remove a classe 'active' de todos os painéis de conteúdo
            tabPanels.forEach(panel => panel.classList.remove('active'));

            // 3. Adiciona a classe 'active' ao botão clicado
            button.classList.add('active');

            // 4. Pega o valor do atributo 'data-target' do botão clicado
            const targetId = button.getAttribute('data-target');

            // 5. Encontra o painel com o ID correspondente e adiciona a classe 'active'
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
});
