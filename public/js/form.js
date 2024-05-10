document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Coleta os dados do formulário
    var formData = new FormData(this);

    // Envia os dados para o Formspree usando Fetch API
    fetch('https://formspree.io/f/moqgbval', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(function(response) {
        // Se o envio for bem-sucedido, exibe uma mensagem de agradecimento por alguns segundos
        if (response.ok) {
            alert('Obrigado pelo seu feedback! Sua mensagem foi enviada com sucesso.');
            // Limpa os campos do formulário
            document.getElementById('nome').value = '';
            document.getElementById('identidade').value = '';
            document.getElementById('feedback').value = '';
            document.getElementById('star1').checked = false;
            document.getElementById('star2').checked = false;
            document.getElementById('star3').checked = false;
            document.getElementById('star4').checked = false;
            document.getElementById('star5').checked = false;
        } else {
            alert('Desculpe, algo deu errado. Por favor, tente novamente mais tarde.');
        }
    })
    .catch(function(error) {
        console.error('Ocorreu um erro:', error);
        alert('Desculpe, algo deu errado. Por favor, tente novamente mais tarde.');
    });
});