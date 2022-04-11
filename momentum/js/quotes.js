const quotes=[
    {
        quote:"지금을 즐겨라",
        author: "나"
},
{
    quote:"When I pass, speak freely of my shortcomings and my flaws. Learn from them, for I'll have no ego to injure.",
    author: "Aaron McGruder",
},
{
    quote:"가장 큰 실수는 능력 이상으로 친절하려 노력하는 것이다",
    author: "Walter Bagehot",
},
{
    quote:"만약 우리가 어떻게 느꼈는지 남들에게 항상 말한다면 얼마나 끔찍할지 상상할 수 있어? 인생은 견딜 수 없을 만큼 견딜만할 거야.",
    author: "Randy K. Milholland",
},
{
    quote:"신간은 대개 1년이면 잊혀지는데 특히 책을 빌리는 사람들에게서 잊혀진다",
    author: "Evan Esar",
},
{
    quote:"희망은 어둠 속에서 시작된다. 일어나 옳은 일을 하려 할 때, 고집스런 희망이 시작된다. 새벽은 올 것이다. 기다리고 보고 일하라. 포기하지 말라.",
    author:"Anne Lamott",
},
{
    quote:"허송세월하며 할 일이 없는 사람은 악(惡)으로 끌려가는 것이 아니라 저절로 기울어 진다.",
    author:"Hippocrates",
},
{
    quote:"경제적 빈곤은 문제가 아니다. 생각의 빈곤이 문제다.",
    author:"Ken Hakuta",
},
{
    quote:"지식에 투자하는 것은 항상 최고의 이자를 지불한다.",
    author:"Benjamin Franklin",
}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText=todaysQuote.author;