import React from 'react';
import axios from 'axios';
import moment from 'moment';



export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hashtag: null,
      tweets: []

    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    console.log("on submit called");
    e.preventDefault();
    this.getHashtags();
  }

  getHashtags() {
    axios.post('http://localhost:3000/api/v1/tweet/getTweets', { hashtag: this.state.hashtag }).then((res) => {
      if (res) {
        this.setState({ tweets: [] });
        this.setState({ tweets: res.data.data.statuses });
      }
    }).catch((error) => {

    })
  }

  componentDidMount() {
   if (this.props.location.state.searchData) {

      this.setState({ hashtag: this.props.location.state.searchData })

      axios.post('http://localhost:3000/api/v1/tweet/getTweets', { hashtag: this.props.location.state.searchData }).then((res) => {
        if (res) {
          this.setState({ tweets: res.data.data.statuses });
        }
      }).catch((error) => {

      })
    }
    // axios('http://localhost:8000/api/articles')
    //   .then((res) => onLoad(res.data));
  }




  render() {
    const { tweets } = this.state;
    return (
      <div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3 mt-2">
              <h2>TWEET <i class="fab fa-twitter" style={{ color: "#4c6ef5" }} aria-hidden="true" /> SEARCH</h2>
            </div>

            <div class="col-md-8 mb-2 mt-2">
              <form onSubmit={this.onSubmit} >
                <div class="input-group">
                  <input type="text"

                    placeholder="Search by Hasthtag"
                    required
                    class="form-control mr-2"
                    placeholder="Search"
                    value={this.state.hashtag}
                    onChange={e => {
                      this.setState({ hashtag: e.target.value })
                    }} />
                  <span class="input-group-btn">
                    <button type="submit"
                      class="btn btn-primary"
                    >Search</button>
                  </span>
                </div>



              </form>






            </div>
          </div>

        </div>

        {tweets.length &&
          <div class="container-fluid">
            <div class="row">
              {
                tweets.map(tweetsData => {
                  let createdDateTime = moment(tweetsData.created_at).format("MMM,DD,YYYY")

                  return (

                    <div class="col-sm-4">
                      <div class="card mb-3">
                        <div class="card-body">
                          <div class="input-group">
                            <div class="col-2">
                              <img src={tweetsData.user.profile_image_url_https} class="rounded-circle" />
                            </div>
                            <div class="col-5">

                              <h5 class="card-title">{tweetsData.user.name}</h5>
                              <h6 class="card-subtitle  text-muted">@{tweetsData.user.screen_name}</h6>

                            </div>
                            <div class="text-right col-5">
                              <p class="card-text pull-right ml-4 mt-2"><small class="text-muted">{createdDateTime.toString()}  </small></p>
                            </div>
                          </div>
                          <p class="card-text"> {tweetsData.text}</p>
                          <p class="card-text">
                            <i class="fa fa-comment " aria-hidden="true"></i> {tweetsData.favorite_count}
                            <i class="fa fa-retweet ml-4" aria-hidden="true"></i> {tweetsData.retweet_count}

                          </p>


                        </div>
                      </div>
                    </div>

                  )
                })
              }
            </div>
          </div>
        }
      </div>
    )
  }

}


