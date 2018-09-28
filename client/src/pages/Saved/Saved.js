import React, {Component} from 'react';
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";


class Saved extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data })
      )
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  render() {
    return(
      <div className="container">
        <div className="col">
          <div className="jumbotron">
            <h1>saved articles</h1>
          </div>
          <div className="card-columns">
          {this.state.articles.length ? (

           this.state.articles.map(article => (
            <div className="card" key={article._id}>
              <img className="card-image-top" src={article.img_url} alt={article.title+" img"} />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <Link className="card-text" to={"/articles/" + article._id}></Link>
                <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
              </div>
            </div>
           ))

          ) : (
            <h3>No Saved Articles</h3>
          )}
          </div>
        </div>
      </div>
    )
  }
}

export default Saved;

