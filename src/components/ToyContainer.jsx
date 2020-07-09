import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  return(
    <div id="toy-collection">
      {props.toys.map(toy => {
        return <ToyCard 
          key={toy.id} 
          id={toy.id}
          index={props.toys.indexOf(toy)}
          name={toy.name} 
          image={toy.image} 
          likes={toy.likes} 
          handleLike={props.handleLike}
          handleDonate={props.handleDonate}
          />
      })}
    </div>
  );
}

export default ToyContainer;
