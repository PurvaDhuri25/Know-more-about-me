var readline=require('readline-sync');
var name=readline.question("What is your name? ");
console.log("Hello "+name+"!!!");
var know=readline.keyInYN("Do you know purva? ");
var score=0;
function quiz(question,ans)
{
  var uans=readline.question(question);
  if(uans==ans)
  {
    score=score+1;
    console.log("YEAH YOU ARE RIGHT!!! YOUR SCORE is: ",score);
  }
  else
  {if(score==0)
  {
    score=0;
  }
  else
  {
     score=score-1;
    console.log("AHH YOU ARE WRONG!!! YOUR SCORE is: ",score);
  }
  }
}
var que=[{
  que:"Where do Purva Live?\na)Delhi\nb)Mumbai\nc)Pune\nd)Lucknow\n",
  ans:"c"
},
{
  que:"In which stream Purva is studying?\na)Medical\nb)Engineering\nc)Arts\nd)Commerce\n",
  ans:"b"
},
{
  que:"What is her Hobby?\na)Dancing\nb)Singing\nc)Arts\nd)Cooking\n",
  ans:"d"
},
{
  que:"How big is her family?\na)2 Members\nb)3 Members\nc)Joint Family\nd)4 Members\n",
  ans:"d"
},
{
  que:"What is her Favourite Place?\na)Paris\nb)Switzerland\nc)America\nd)Australia\n",
  ans:"a"
},
{
  que:"Which Season do Purva Like?\na)Summer\nb)Winter \nc)Rainy\nd)Autumn\n",
  ans:"c"
},
{
  que:"Which cuisine does she like?\na)Indian\nb)Chinese\nc)Italian\nd)Japanese\n",
  ans:"a"
},
{
  que:"What do purva prefer?\na)Videos\nb)Books\nc)Podcast\n",
  ans:"a"
},
{
  que:"Which app does she uses the most?\na)Facebook\nb)Instagram\nc)Whatsapp\nd)Twitter\n",
  ans:"c"
},
{
  que:"What do purva Like?\na)Sunrise\nb)Sunset\n",
  ans:"b"
}
]
for(var i=0;i<que.length;i++)
{
  quiz(que[i].que,que[i].ans);
}
console.log("Your Final score is: ",score,"\nYOU ARE AWESOME!!!!!!!");