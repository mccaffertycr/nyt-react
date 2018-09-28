import React, { Component } from "react";
import SaveBtn from "../../components/SaveBtn";
import API from "../../utils/API";

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

  newArticles = () => {
    API.searchArticles(this.state.search)
      .then((res) => {
        console.log(res);
        this.setState({ articles: res.data.response.docs, search: '' })
      })
        
    .catch(err => console.log(err));
  }

  newArticle = id => {
    API.newArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  saveArticle = (id, newArticle) => {
    API.saveArticle(id, newArticle)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = () => {
    if (this.state.search) {
      this.setState({
        search: ''
      })
    }
  };

  render() {
    return (
      <div className="container mt-2">
        <div className="col">
          <div className="jumbotron text-center">
            <h1>New York Times React App</h1>
            <div className="row">
              <input className="form-control col-sm-5 mr-sm-1 mx-auto" name="search" type="search" placeholder="Search for Articles" aria-label="Search" onChange={this.handleInputChange} />
              <button className="btn btn-outline-primary my-2 my-sm-0 mr-auto" type="submit" onClick={this.newArticles}>Search</button>
            </div>
          </div>
        </div>
        <div className="card-columns">
          {this.state.articles.length ? (

           this.state.articles.map(article => (
            <div className="card" key={article._id}>
              <img className="card-image-top" src={article.multimedia[4].url} alt={article.title+" img"} />
              <div className="card-body">
                <h5 className="card-title">{article.headline.main}</h5>
                <a className="card-text" href={article.web_url}>link</a>
                <SaveBtn onClick={() => this.saveArticle(article._id, {})} />
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
