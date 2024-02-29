document.addEventListener('DOMContentLoaded', function() {
    // Arama düğmesine tıklandığında
    document.getElementById('searchButton').addEventListener('click', function() {
        // Kullanıcının girdiği kelimeyi al
        var word = document.getElementById('wordInput').value.trim();
        
        // Kelimenin boş olup olmadığını kontrol et
        if (word === '') {
            alert('Lütfen bir kelime girin');
            return;
        }
        
        // Arama sonuçlarını göstereceğimiz alanı seç
        var searchResultsDiv = document.getElementById('searchResults');
        // Temizle
        searchResultsDiv.innerHTML = '';

        // Cambridge Dictionary'de arama yap
        var cambridgeUrl = 'https://dictionary.cambridge.org/dictionary/english/' + encodeURIComponent(word);
        appendSearchResult(searchResultsDiv, 'Cambridge Dictionary', cambridgeUrl);

        // Collins Dictionary'da arama yap
        var collinsUrl = 'https://www.collinsdictionary.com/dictionary/english/' + encodeURIComponent(word);
        appendSearchResult(searchResultsDiv, 'Collins Dictionary', collinsUrl);

        // Tureng'de arama yap
        var turengUrl = 'https://tureng.com/tr/turkce-ingilizce/' + encodeURIComponent(word);
        appendSearchResult(searchResultsDiv, 'Tureng', turengUrl);
    });

    // Arama sonuçlarını gösterme fonksiyonu
    function appendSearchResult(parentDiv, siteName, url) {
        var link = document.createElement('a');
        link.href = url;
        link.textContent = siteName;
        link.target = '_blank';
        parentDiv.appendChild(link);
        parentDiv.appendChild(document.createElement('br')); // Boşluk ekleyelim
    }
});
