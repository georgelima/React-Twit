import React from 'react';

const Tweet = ({ photo, author, postedAt, content, children }) => (
  <div className="tweet">
    <div className="row">
      <div className="col-md-2">
        <img src={ photo } className="tweet-author-photo" alt="Author"/>
      </div>
      <div className="col-md-10">
        <a className="tweet-author-name">{ author.name }</a>
        <a href="#" className="tweet-author-twitter">{ author.twitter }</a>
        <span className="tweet-postedAt">{ postedAt }</span>
        <i className="fa fa-chevron-down"></i>
        <div className="tweet-content">
          { children }
        </div>
      </div>
    </div>
  </div>
);

Tweet.propTypes = {
  photo: React.PropTypes.string.isRequired,
  author: React.PropTypes.shape ({
    name: React.PropTypes.string.isRequired,
    twitter: React.PropTypes.string.isRequired
  }),
  postedAt: React.PropTypes.string.isRequired,
  children: React.PropTypes.node
}

export default Tweet;
