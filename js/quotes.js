const quotes = [
    {
        quote: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다.",
        author: "괴테",
    },
    {
        quote: "돈이란 바닷물과도 같다. 그것은 마시면 마실수록 목이 말라진다.",
        author: "쇼펜하우어",
    },
    {
        quote: "인생에 뜻을 세우는데 있어 늦은 때라곤 없다",
        author: "볼드윈",
    },
    {
        quote: "도중에 포기하지 말라. 망설이지 말라. 최후의 성공을 거둘 때까지 밀고 나가자. ",
        author: "헨리포드",
    },
    {
        quote: "피할수 없으면 즐겨라.",
        author: "로버트 엘리엇",
    },
    {
        quote: "자신감 있는 표정을 지으면 자신감이 생긴다",
        author: "찰스다윈",
    },
    {
        quote: "그대의 하루 하루를 그대의 마지막 날이라고 생각하라.",
        author: "호라티우스",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;