import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Navbar from './Navbar';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    let apikey = 'd63d771354f4f6ae52243518b04a0672';
    let url = `https://gnews.io/api/v4/search?q=${category}&lang=en&country=in&max=12&apikey=` + apikey;
    
        fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching data. Please try again later.');
        setLoading(false);
        console.error('Error fetching data:', error);
      });
  }, [category]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-danger">{error}</div>;
  }

  return (
    <div>
      <h2 className='text-center'> 
        Latest <span className='badge bg-danger'>News</span>
      </h2>
      {articles.map((article, index) => (
        <NewsItem
          key={index}
          title={article.title}
          description={article.description}
          src={article.image || 'https://via.placeholder.com/200'} // Use placeholder image if actual image URL is missing
          url={article.url}
          publishedAt={article.publishedAt}
          sourceName={article.source.name}
          sourceUrl={article.source.url}
        />
      ))}
    </div>
  );
};

export default NewsBoard;
