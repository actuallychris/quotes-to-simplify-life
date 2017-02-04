var quotes = [
    "A life can never be happy that is focused inward. So if you are miserable now, forget your troubles. March right out your door, and find someone who needs you. - Robert L. Backman (Charity)",
    "There is no more tender and beautiful picture in all of sacred writing than this simple language describing the love of the Savior for little children. - Gordon B. Hinkley (Charity)",
    "To effectively serve others, we must see them through a parent's eyes, through Heavenly Father's eyes. - Dale G. Renlund (Charity)",
    "Correct knowledge of and faith in the Lord empower us to hush our fears because Jesus Christ is the only source of enduring peace. - David A. Bednar (Comfort)"
]

Function newQuote() {
    var randomNumber = math.floor(math.random()*(quotes.length));
       document.getElementById('quoteDisplay').innerHTML = quotes(randomNumber);

}
