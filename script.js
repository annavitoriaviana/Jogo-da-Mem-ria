// Função para redirecionar para o jogo escolhido
function startGame(game) {
    const gameContent = document.getElementById("game");
    gameContent.innerHTML = ''; // Limpa o conteúdo anterior
  
    if (game === 'memory') {
      startMemoryGame();
    } else if (game === 'snake') {
      startSnakeGame();
    } else if (game === 'car') {
      startCarGame();
    }
  }
  
  // Jogo da Memória
  function startMemoryGame() {
    const gameContent = document.getElementById("game");
    gameContent.innerHTML = `<h2>Jogo da Memória</h2>`;
    // Definir as imagens para o jogo (você pode trocar por imagens reais ou emojis)
const cards = [
    { id: 1, img: "🍎" },
    { id: 2, img: "🍌" },
    { id: 3, img: "🍓" },
    { id: 4, img: "🍉" },
    { id: 5, img: "🍒" },
    { id: 6, img: "🍍" },
    { id: 7, img: "🍊" },
    { id: 8, img: "🍑" }
  ];
  
  let gameBoard = [];
  let flippedCards = [];
  let matchedCards = 0;
  
  // Função para embaralhar o array de cartas
  function shuffle(cards) {
    let shuffled = [...cards, ...cards];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
  
  // Função para iniciar o jogo
  function startMemoryGame() {
    matchedCards = 0;
    gameBoard = shuffle(cards);
    flippedCards = [];
    
    const gameBoardElement = document.getElementById('game-board');
    gameBoardElement.innerHTML = '';
  
    gameBoard.forEach((card, index) => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      cardElement.setAttribute('data-id', index);
      cardElement.innerText = '';
      cardElement.addEventListener('click', flipCard);
      gameBoardElement.appendChild(cardElement);
    });
  }
  
  // Função para virar a carta
  function flipCard(event) {
    const clickedCard = event.target;
  
    // Se a carta já foi virada ou combinada, não faz nada
    if (clickedCard.classList.contains('flipped') || clickedCard.classList.contains('matched')) {
      return;
    }
  
    // Mostrar o conteúdo da carta
    const cardIndex = clickedCard.getAttribute('data-id');
    clickedCard.innerText = gameBoard[cardIndex].img;
    clickedCard.classList.add('flipped');
    flippedCards.push(clickedCard);
  
    // Verificar se duas cartas foram viradas
    if (flippedCards.length === 2) {
      setTimeout(checkMatch, 1000);
    }
  }
  
  // Função para verificar se as duas cartas viradas são iguais
  function checkMatch() {
    const [firstCard, secondCard] = flippedCards;
  
    const firstCardIndex = firstCard.getAttribute('data-id');
    const secondCardIndex = secondCard.getAttribute('data-id');
  
    if (gameBoard[firstCardIndex].img === gameBoard[secondCardIndex].img) {
      firstCard.classList.add('matched');
      secondCard.classList.add('matched');
      matchedCards++;
  
      if (matchedCards === cards.length) {
        setTimeout(() => alert('You won!'), 500);
      }
    } else {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');
      firstCard.innerText = '';
      secondCard.innerText = '';
    }
  
    flippedCards = [];
  }
  
  // Reiniciar o jogo
  function restartGame() {
    startMemoryGame();
  }
  
  // Chamar a função de início quando a página carregar
  startMemoryGame();
  
    // Lógica do jogo da memória
    // Criar as cartas, embaralhar, virar e verificar o jogo
  }
  
  // Jogo da Cobrinha (Snake)
  function startSnakeGame() {
    const gameContent = document.getElementById("game");
    gameContent.innerHTML = `<h2>Cobrinha</h2>`;
    // Lógica do jogo da cobrinha
    // Criar a tela do jogo e movimentos da cobrinha
  }
  
  // Jogo de Carrinho
  function startCarGame() {
    const gameContent = document.getElementById("game");
    gameContent.innerHTML = `<h2>Jogo de Carrinho</h2>`;
    // Lógica do jogo de carrinho
    // Criar pista, movimento de carrinho, pontuação
  }
  
  