function addQuote() {
  var quotesArray = [
    " <i class='fa-solid fa-quote-left fa-bounce fa-2xs'></i> I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best. <i class='fa-solid fa-quote-right fa-bounce fa-2xs'></i> <p class='author lead py-2'> -- Marilyn Monroe</p>",
    "<i class='fa-solid fa-quote-left fa-bounce fa-2xs'></i> Be yourself; everyone else is already taken. <i class='fa-solid fa-quote-right fa-bounce fa-2xs'></i><p class='author lead py-2'>  -- Oscar Wilde</p>",
    "<i class='fa-solid fa-quote-left fa-bounce fa-2xs'></i> A room without books is like a body without a soul. <i class='fa-solid fa-quote-right fa-bounce fa-2xs'></i><p class='author lead py-2'>  -- Marcus Tullius Cicero</p>",
    "<i class='fa-solid fa-quote-left fa-bounce fa-2xs'></i> Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind. <i class='fa-solid fa-quote-right fa-bounce fa-2xs'></i><p class='author lead py-2'>  -- Bernard M. Baruch</p>",
    "<i class='fa-solid fa-quote-left fa-bounce fa-2xs'></i> You only live once, but if you do it right, once is enough. <i class='fa-solid fa-quote-right fa-bounce fa-2xs'></i><p class='author lead py-2'>  -- Mae West</p>",
    "<i class='fa-solid fa-quote-left fa-bounce fa-2xs'></i> Be the change that you wish to see in the world. <i class='fa-solid fa-quote-right fa-bounce fa-2xs'></i><p class='author lead py-2'> -- Mahatma Gandhi</p>",
  ];
  var imagesArray = [
    "images/gaza_01.jpg",
    "images/gaza_02.jpg",
    "images/gaza_03.jpg",
    "images/gaza_04.jpg",
    "images/gaza_05.jpeg",
    "images/gaza_06.jpg",
  ];

  var random1 = Math.floor(Math.random() * quotesArray.length);
  var random2 = Math.floor(Math.random() * imagesArray.length);
  document.getElementById("qute").innerHTML = quotesArray[random1];
  document.getElementById("images").src = imagesArray[random2];
}
