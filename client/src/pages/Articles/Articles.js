import React, { Component } from "react";
import SaveBtn from "../../components/SaveBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";


class Articles extends Component {
  state = {
    articles: [],
    search: '',
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data, search: '' })
      )
      .catch(err => console.log(err));
  };

  newArticle = id => {
    API.newArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveArticle({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="container mt-2">
        <div className="col">
          <div className="jumbotron text-center">
            <h1>New York Times React App</h1>
            <p>Use the Search bar above to find new articles</p>
          </div>
        </div>
        <div className="card-columns">
          {this.state.articles.length ? (

           this.state.articles.map(article => (
            <div className="card" key={article._id}>
              <img className="card-image-top" src={article.img_url} alt={article.title+" img"} />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <Link className="card-text" to={"/articles/" + article._id}></Link>
                <SaveBtn onClick={() => this.saveArticle(article._id)} />
              </div>
            </div>
           ))

          ) : (
            <h3>No Results</h3>
          )}
          </div>
      </div>
    );
  }
}

export default Articles;
