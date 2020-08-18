require('dotenv').config()
console.log(process.env)
const express = require('express');
const cors = require('cors');
const Pusher = require('pusher');
const NewsAPI = require('newsapi');
const news = require('gnews');

const app = express();

// const pusher = new Pusher({
//     appId: process.env.PUSHER_APP_ID,
//     key: process.env.PUSHER_APP_KEY,
//     secret: process.env.PUSHER_APP_SECRET,
//     cluster: process.env.PUSHER_APP_CLUSTER,
//     encrypted: true,
// });

// const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

// const fetchNews = (searchTerm, pageNum) =>
//     newsapi.v2.everything({
//         q: searchTerm,
//         language: 'en',
//         page: pageNum,
//         pageSize: 5,
//     });

app.use(cors());

// function updateFeed(title) {
//     let counter = 2;
//     setInterval(() => {
//         fetchNews(title, counter)
//             .then(response => {
//                 pusher.trigger('news-channel', 'update-news', {
//                     articles: response.articles,
//                 });
//                 counter += 1;
//             })
//             .catch(error => console.log(error));
//     }, 1000);
// }

// app.get('/live', (req, res) => {
//     const title = 'climate';
//     fetchNews(title, 1)
//         .then(response => {
//             res.json(response.articles);
//             updateFeed(title);
//         })
//         .catch(error => console.log(error));
// });

app.set('port', process.env.PORT || 3000);
const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});
