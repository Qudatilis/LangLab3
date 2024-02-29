document.getElementById('searchButton').addEventListener('click', function() {
    var word = document.getElementById('wordInput').value;
    search(word);
});

function search(word) {
    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Temizle

    // Cambridge Dictionary
    var cambridgeURL = 'https://dictionary.cambridge.org/dictionary/english/' + encodeURIComponent(word);
    var cambridgeResult = '<div class="result"><h3>Cambridge Dictionary</h3><p><a href="' + cambridgeURL + '" target="_blank">' + cambridgeURL + '</a></p></div>';
    resultsDiv.insertAdjacentHTML('beforeend', cambridgeResult);

    // Collins Dictionary
    var collinsURL = 'https://www.collinsdictionary.com/dictionary/english/' + encodeURIComponent(word);
    var collinsResult = '<div class="result"><h3>Collins Dictionary</h3><p><a href="' + collinsURL + '" target="_blank">' + collinsURL + '</a></p></div>';
    resultsDiv.insertAdjacentHTML('beforeend', collinsResult);

    // Tureng
    var turengURL = 'https://tureng.com/tr/turkce-ingilizce/' + encodeURIComponent(word);
    var turengResult = '<div class="result"><h3>Tureng</h3><p><a href="' + turengURL + '" target="_blank">' + turengURL + '</a></p></div>';
    resultsDiv.insertAdjacentHTML('beforeend', turengResult);
}
