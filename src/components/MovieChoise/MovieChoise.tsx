import React, { Component } from 'react'
interface Props {
    nameMovie: string;
}

interface State {
    nameMovie: string;
}

class MovieChoise extends Component<Props , State> {

    state: State = {
        nameMovie: this.state.nameMovie
      };
      
      refactorMovie = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(prev => ({
            ...prev,
            nameMovie: event.target.value
          }))
      }

  render() {

    return (
      <div style={{marginTop:'10px'}}>
        <input onChange={(e) =>  this.refactorMovie(e)}  value={this.state.nameMovie} type="text"/>
        <button>X</button>
      </div>
    )
  }
}

export default MovieChoise
