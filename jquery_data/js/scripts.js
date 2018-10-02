/*
Write a function that buids an HTML table with the data below. The table should have four columns:
first name, last name, position, and year. If the player is a Senior, her information should be in bold.
*/

var players = [
  {
    first:'Angela',
    last: 'Smith',
    position: 'Guard',
    year: 'Junior'
  },
    {
    first:'Ashley',
    last: 'Roberts',
    position: 'Guard',
    year: 'Senior'
  },
    {
    first:'Sarah',
    last: 'Spangler',
    position: 'Forward',
    year: 'Freshman'
  },
   {
    first:'Catherine',
    last: 'McAllister',
    position: 'Forward',
    year: 'Senior'
  },
   {
    first:'Haley',
    last: 'Bishop',
    position: 'Center',
    year: 'Sophomore'
  },
  {
   first:'Renee',
   last: 'Williams',
   position: 'Guard',
   year: 'Senior'
 },
 {
  first:'Jennifer',
  last: 'Olsen',
  position: 'Forward',
  year: 'Junior'
  }
];
//Write your function here
var info = '<tbody>'
    for(var i = 0;i < players.length; i++){
        info+= '<tr>';
        info+= '<td>' + players[i].first + '</td>';
        info+= '<td>' + players[i].last + '</td>';
        info+= '<td>' + players[i].position + '</td>';
    
 if (players[i].year=='Senior') {   info+='<td>'+'<b>'+players[i].year+'</b>'+'<td>'}
      else{
        info+= '<td>' + players[i].year + '</td>';
      }
        info+= '</tr>';
    }
    info+='</tbody>';
    document.getElementById('tData').innerHTML = info;
/*
EXTRA CREDIT: Write a function that compares the list above with the list below, finds the players that made the All-State team, and displays a message with the results: "Congratulations to Springfield's 2018 North Carolina All-State honorees: ____." Display the message in a div below the table.
Hint: You need two loops, one of which will be 'nested'.*/

/*
var allStars = [
  {
    first:'Melanie',
    last: 'Akers',
    position: 'Forward',
    school:'Johnson High School'
  },
    {
    first:'Olivia',
    last: 'Carter',
    position: 'Foward',
    school:'Providence Day School'
  },
    {
    first:'Sarah',
    last: 'Spangler',
    position: 'Forward',
    school:' Springfield High School'
  },
   {
    first:'Ursula',
    last: 'Jones',
    position: 'Guard',
    school: 'Chatham Senior High School'
  },
   {
    first:'Theresa',
    last: 'Hollinger',
    position: 'Guard',
    school: 'St. Joseph Academy'
  },
  {
   first:'Darleen',
   last: 'Lawrence',
   position: 'Guard',
   school: 'Everton High School'
 },
 {
  first:'Jennifer',
  last: 'Olsen',
  position: 'Forward',
  school: 'Springfield High School'
  }
];

function sNames(){
var starsDiv=document.getElementsById('stars')

var starName =[];
if(players.length==allStars.length){
for (var d=0; d<allStars.length;d++){
  if(players[d].first+players[d].last==allStars[d].first+allStars[d].last){
   starName +=players[d].first;
    starsDiv.innerHTML="Congratulations to Springfield's 2018 North Carolina All-State honorees: "+starName;
  }
}
}
}

*/
