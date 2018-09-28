import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import SaveBtn from "../../components/SaveBtn";


class Detail extends Component {
  state = {
    article: {}
  };
  // Add code to get the article with an _id equal to the id in the route param
  // e.g. http://localhost:3000/articles/:id
  // The article id for this route can be accessed using this.props.match.params.id
  componentDidMount() {
    const id = this.props.match.params.id;
    API.getArticle(id)
      .then(res => {
        console.log(res.data)
        this.setState({ article: res.data });
      })
      .catch(err => console.log(err));
  }

  saveArticle = id => {
    API.saveArticle(id, {saved: true})
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div className="container">
        {this.state.article.saved ? (
          <div className="card" key={this.state.article._id}>
            <img className="card-image-top" src={this.state.article.img_url} alt={this.state.article.title+" img"} />
            <div className="card-body">
              <h5 className="card-title">{this.state.article.title}</h5>
              <Link className="card-text" to={"/articles/" + this.state.article.url}></Link>
              <DeleteBtn onClick={() => this.deleteArticle(this.state.article._id)} />
            </div>
          </div>
        ) : (
          <div className="card" key={this.state.article._id}>
            <img className="card-image-top" src={this.state.article.img_url} alt={this.state.article.title+" img"} />
            <div className="card-body">
              <h5 className="card-title">{this.state.article.title}</h5>
              <Link className="card-text" to={"/articles/" + this.state.article.url}></Link>
              <SaveBtn onClick={() => this.saveArticle(this.state.article._id)} />
            </div>
        </div>
      )}
    </div>
    );
  }
}

export default Detail;
