fetch('data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('conteudo').innerText = data.nome;
  });
