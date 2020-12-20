import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const petCards = this.props.pets.map(pet => {
      return(
      <div>
        <Pet pet={pet} onAdoptPet={this.props.onAdoptPet}/>
      </div>
      )
    }
    )
    return <div className="ui cards">{petCards}</div>
  }
}

export default PetBrowser
