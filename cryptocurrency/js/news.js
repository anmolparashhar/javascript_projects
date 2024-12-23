async function fetchCryptoNews() {
    const apiKey = "fec750408827411aa5e14d26a960b68a";  // Replace with your actual API key from NewsAPI
    const newsAPI = `https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=${apiKey}`;

    try {
        const response = await fetch(newsAPI);
        const data = await response.json();
        const newsFeed = document.getElementById("newsFeed");

        if (data && data.articles) {
            const validArticles = data.articles.filter(article => 
                article.description && article.description !== '[Removed]' && article.description.trim() !== ""
            );

            if (validArticles.length > 0) {
                newsFeed.innerHTML = validArticles.map((article) => {
                    return `
                        <div class="news-item">
                            <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
                            <p>${article.description}</p>
                            <small>Published: ${new Date(article.publishedAt).toLocaleDateString()}</small>
                        </div>
                    `;
                }).join('');
            } else {
                newsFeed.innerHTML = "<p>No valid news available at the moment.</p>";
            }
        } else {
            newsFeed.innerHTML = "<p>No news available at the moment.</p>";
        }
    } catch (error) {
        console.error("Error fetching news:", error);
        document.getElementById("newsFeed").innerHTML = "<p>Failed to load news. Please try again later.</p>";
    }
}

fetchCryptoNews();
    