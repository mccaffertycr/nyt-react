import React, {Component} from 'react';
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";

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
        <div className="jumbotron text-center">
          <h1>saved articles</h1>
        </div>
        <div className="list-group" >
          {this.state.articles.length ? (
           this.state.articles.map(article => (
            <div className="list-group-item" key={article._id}>
              <div className="row">
                <h5 className="col-sm-8">{article.title}</h5>
                <div className="col-sm-4 text-right">
                  <a className="mr-5" href={article.url}>view</a>
                  <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                </div>
              </div>
              <div className="row ml-auto">
                <p>{article.byline}</p>
              </div>
            </div>
          ))
        ) : (
          <h3>No Saved Articles Found</h3>
        )
        }
        </div>
      </div>
    )
  }
}

export default Saved;

