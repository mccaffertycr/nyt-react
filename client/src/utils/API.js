import axios from "axios";

export default {
  searchArticles: function(query) {
    return axios.get("/api/key")
                .then(res => axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {params: { "api-key": res.data.apiKey, "q": query}}))
                .catch(err => console.log(err));
  },
  // Gets all articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a article to the database
  newArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
