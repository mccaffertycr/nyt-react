import axios from "axios";

export default {
  searchArticles: function(query) {
    return axios.get(`/api/nyt/${query}`);
  },
  // Gets all articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves anarticle to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
