import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { Redirect } from 'react-router-dom';



export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hashtag: null,

    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    this.props.history.push('/list', {
      searchData: this.state.hashtag
    });
    e.preventDefault();
  }

  componentDidMount() {
  }




  render() {
    return (
      <div class="container centered">
        <div class="container">
          <div class="text-center">
            <h2>TWEET <i class="fab fa-twitter" style={{ color: "#4c6ef5" }} aria-hidden="true" /> SEARCH</h2>
          </div>
        </div>


        <div class="container">
          <div class="form mb-2 mt-2">
            <fieldset>
              <div>
                <form onSubmit={this.onSubmit}>


                  <div class="form-group has-search inline">
                    <span class="fa fa-search form-control-feedback"></span>
                    <input type="text"
                      name="hashtag"
                      placeholder="Search by Hasthtag"
                      required
                      class="form-control"
                      value={this.state.hashtag}
                      onChange={e => {
                        this.setState({ hashtag: e.target.value })
                      }} />

                   
                  </div>
                  <div class="text-center mx-auto mt-2">
                    <button type="submit" class="btn btn-primary">
                      SEARCH
                </button>
                  </div>
                </form>

              </div>

            </fieldset>

          </div>

        </div>
      </div>
    )
  }

}


