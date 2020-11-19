import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams,
  Link
} from "react-router-dom"

import Image from '../components/Image'
import DATABASE_URL from '../DATABASE_URL'

import './ImagesContainer.css'


class ImagesContainer extends Component {
  state = {
    images: [],
  }

  componentDidMount() {
    fetch(`${DATABASE_URL}/images`)
    .then(response => response.json())
    .then(json => this.setState({
      images: json,
    }))
  }

  render() {
    // const match = useRouteMatch()

    return (
      <div className="ImagesContainer">
        <Router>
          <Switch>
            <Route path={`/images/:id`}>
              {/* <Image url={this.state.images.find(image => image.id === useParams()).url} /> */}
              <p>{JSON.stringify(this.props.match.params.id)}</p>
            </Route>
            <Route path={`/images`}>
              {this.state.images.map(image => <Image url={image.url} />)}
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}


export default ImagesContainer
