var tabuleiro;
var board;
var aviso;
var jogador;
var lin, col;
var jogoTravado = false;


function inicia()
{
 tabuleiro = new Array(3);
 board = document.getElementById('board');
 aviso = document.getElementById('aviso');
 jogador = 1;

 for(let i=0 ; i<3 ; i++)
  tabuleiro[i] = new Array(3);
 
 for(let i=0; i<3 ; i++)
  for(let j=0 ; j<3 ; j++)
   tabuleiro[i][j]=0;
  

 exibe();

}

function exibe() {
  var table = '<table cellpadding="10" border="1">';
  for (let i = 0; i < 3; i++) {
    table += '<tr>';
    for (let j = 0; j < 3; j++) {
      table += '<td onclick="jogar(' + i + ',' + j + ')"';
      if (tabuleiro[i][j] == 0) {
        table += ' class="empty-cell">__</td>';
      } else if (tabuleiro[i][j] == 1) {
        table += ' class="x-cell">X</td>';
      } else {
        table += ' class="o-cell">O</td>';
      }
    }
    table += '</tr>';
  }
  table += '</table><br />';
  board.innerHTML = table;
}

function jogar(lin,col) {
  if (jogoTravado) {
    return; // Retorna se o jogo já está travado (alguém já venceu)
  }
  aviso.innerHTML='Vez do jogador: ' + ((jogador)%2 + 1);
  
  if(tabuleiro[lin][col]==0)
    if(jogador % 2)
    tabuleiro[lin][col] = 1;
    else
    tabuleiro[lin][col] = -1;
  else{
    aviso.innerHTML='Campo ja foi marcado!'
    jogador--;
    return;
  }

  jogador++;
  exibe();
  checa();
}

function checa()
{
  var soma;

  //Linhas
  for(let i=0 ; i<3 ; i++){
      soma=0;
      soma=tabuleiro[i][0]+tabuleiro[i][1]+tabuleiro[i][2];

      if(soma==3 || soma==-3){
        aviso.innerHTML="Jogador " + ((jogador)%2 + 1) + " ganhou! Linha " + (i+1) + " preenchida!";
        jogoTravado = true;
      }
  }

  //Colunas
  for(let i=0 ; i<3 ; i++){
      soma=0;
      soma=tabuleiro[0][i]+tabuleiro[1][i]+tabuleiro[2][i];

      if(soma==3 || soma==-3){
        aviso.innerHTML="Jogador " + ((jogador)%2 + 1) + " ganhou! Coluna " + (i+1) + " preenchida!";
        jogoTravado = true;
      }
  }

  //Diagonal
  soma=0;
  soma = tabuleiro[0][0]+tabuleiro[1][1]+tabuleiro[2][2];
  if(soma==3 || soma==-3){
    aviso.innerHTML="Jogador " + ((jogador)%2 + 1) + " ganhou! Diagonal preenchida!";
    jogoTravado = true;
  }
  //Diagonal
  soma=0;
  soma = tabuleiro[0][2]+tabuleiro[1][1]+tabuleiro[2][0];
  if(soma==3 || soma==-3){
    aviso.innerHTML="Jogador " + ((jogador)%2 + 1) + " ganhou! Diagonal preenchida!";
    jogoTravado = true;
  } 
}

function reiniciar() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      tabuleiro[i][j] = 0;
    }
  }
  jogador = 1;
  jogoTravado = false;
  exibe();
  aviso.innerHTML = 'Vez do jogador: 1';
  
}