import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { useEffect } from 'react';
import News from './components/News/News';
function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('http://newsapi.org/v2/everything?q=bitcoin&from=2020-10-22&sortBy=publishedAt&apiKey=f440e2b89c6c40aeb9789844cf631d33')
    .then(res => res.json())
    .then(data => setNews(data.articles))
  }, [])
  return (
    <div className = "App">
    <h2>News Loaded: {news.length}</h2>
      {
        news.map(newsItem => <News newsItem={newsItem}></News>)
      }
    </div>
  );
}

export default App;
