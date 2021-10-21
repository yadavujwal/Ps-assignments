document.addEventListener('DOMContentLoaded',()=>{


const squares  = document.querySelectorAll('.grid div');
const result = document.querySelector('#result');
const displayCurrentPlayer = document.querySelector('#current-player');
const d = document.querySelectorAll('.taken');
let currentPlayer = 1;

for(var i = 0;i<squares.length;i++)
{
  squares[i].id = i;
 
}
for(var i = 42 ;i<49;i++)
{
  d[i-42].id = i; 
}

squares.forEach(div=>{
    div.addEventListener('click',()=>{
        // console.log(div.id);
        // console.log(document.getElementById((parseInt(div.id)+7)));
        if(document.getElementById(parseInt(div.id)+7).classList.contains('taken') && !(div.classList.contains('player-one') || div.classList.contains('player-two')))
        {
          document.getElementById('valid').innerHTML = "";
         
          if(currentPlayer==1)
          {
            div.classList.add('taken');
            div.classList.add('player-one');
            currentPlayer = 2;
            displayCurrentPlayer.textContent = currentPlayer;
            checkIfP1Match();
          }
          
          else if(currentPlayer==2)
          {
            div.classList.add('taken');
            div.classList.add('player-two');
            currentPlayer = 1;
            displayCurrentPlayer.textContent = currentPlayer;
            checkIfP2Match();
          }
          
        }
        else{
          document.getElementById('valid').textContent = "Can't Place There";
        }
    })
})

function checkIfP1Match(){
 let WinningCombination =  [[0, 1, 2, 3], [41, 40, 39, 38], [7, 8, 9, 10], [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], [21, 22, 23, 24],
 [20, 19, 18, 17], [28, 29, 30, 31], [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], [0, 7, 14, 21], [41, 34, 27, 20],
 [1, 8, 15, 22], [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25],
 [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], [41, 33, 25, 17],
 [7, 15, 23, 31], [34, 26, 18, 10], [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], [6, 12, 18, 24], [28, 22, 16, 10],
 [13, 19, 25, 31], [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22],
 [2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], [40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], [11, 7, 23, 29],
 [12, 18, 24, 30], [1, 2, 3, 4], [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9], [15, 16, 17, 18], [19, 18, 17, 16],
 [22, 23, 24, 25], [26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28],
 [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34]
 ];

 for(var i =0 ; i<WinningCombination.length;i++)
 {
  var check = [WinningCombination[i][0],WinningCombination[i][1],WinningCombination[i][2],WinningCombination[i][3]];
  // console.log(check);
  var player_1 = document.querySelectorAll('.player-one');
  // console.log(player_1);
  var flag = 4;
  for(var j= 0 ;j<check.length;j++)
  {
    for(var k = 0;k<player_1.length;k++)
    {
      if(check[j]== parseInt(player_1[k].id))
      {
        flag = flag-1;
        break;
      }
    }
    if(flag==0)
    {
      break;
    }
  }
  if(flag==0)
  {
    setWinner('player-one');
    break;
  }
  
 
 }
}

function checkIfP2Match(){
    let WinningCombination =  [[0, 1, 2, 3], [41, 40, 39, 38], [7, 8, 9, 10], [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], [21, 22, 23, 24],
    [20, 19, 18, 17], [28, 29, 30, 31], [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], [0, 7, 14, 21], [41, 34, 27, 20],
    [1, 8, 15, 22], [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25],
    [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], [41, 33, 25, 17],
    [7, 15, 23, 31], [34, 26, 18, 10], [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], [6, 12, 18, 24], [28, 22, 16, 10],
    [13, 19, 25, 31], [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22],
    [2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], [40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], [11, 7, 23, 29],
    [12, 18, 24, 30], [1, 2, 3, 4], [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9], [15, 16, 17, 18], [19, 18, 17, 16],
    [22, 23, 24, 25], [26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28],
    [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34]
    ];
   
    for(var i =0 ; i<WinningCombination.length;i++)
    {
     var check = [WinningCombination[i][0],WinningCombination[i][1],WinningCombination[i][2],WinningCombination[i][3]];
     // console.log(check);
     var player_2 = document.querySelectorAll('.player-two');
     // console.log(player_2);
     var flag = 4;
     for(var j= 0 ;j<check.length;j++)
     {
       for(var k = 0;k<player_2.length;k++)
       {
         if(check[j]== parseInt(player_2[k].id))
         {
           flag = flag-1;
           break;
         }
       }
       if(flag==0)
       {
         break;
       }
     }
     if(flag==0)
     {
       setWinner('player-two');
       break;
     }
     
    
    }
}

})

function setWinner(classs)
{
   document.getElementById('valid').classList.add(classs);
   document.getElementById('valid').innerHTML = classs+" won the round";
   document.getElementById('valid').setAttribute('style','color:black;')
   var x = document.querySelector('.grid');
   while(x.firstChild)
   {
     x.removeChild(x.firstChild);
   }
   document.querySelector('.head').remove();

}