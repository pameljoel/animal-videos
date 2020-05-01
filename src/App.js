import React, {useEffect, useState} from 'react';
import _ from 'lodash';
import AnimalsJson from './resources/animals';

import {Animal} from "./Animal";
import './Animal.scss';
import './App.scss';
import './Video.scss';
import {Video} from "./Video";

const KEY = 'AIzaSyCth3fzhizoG-9vOyfZ1xRnyLMHmQOvpmc';

function App() {
  const [animals, setAnimals] = useState([]);
  const [selected, setSelected] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setAnimals(AnimalsJson);
  }, []);


  const getRandomAnimal = () => {
    const animal = _.sample(AnimalsJson);
    return _.sample(animal.keywords);
  };

  const getVideoFromKeyword = (keyword = 'kitten') => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${keyword}&maxResults=1&key=${KEY}`)
      .then(response => response.json())
      .then(response => {
        setVideos(response.items);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getVideoFromKeyword(getRandomAnimal())
  },[]);

  const handleClick = (name, keywords) => {
    const keyword = _.sample(keywords);
    setSelected(name);
    getVideoFromKeyword(keyword);
  };

  return (
    <main>
      {videos && videos.map(video => {
        return <Video video={video}/>
      })}

      {animals && <div className="animals">
        {animals.map(animal => {
          const {name, url, keywords} = animal;
          const isSelected = animal.name === selected;
          return <Animal key={name} name={name} url={url} keywords={keywords} handleClick={handleClick} isSelected={isSelected}/>
        })}
      </div>
      }
    </main>
  );
}

export default App;
