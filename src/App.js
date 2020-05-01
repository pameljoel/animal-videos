import React, {useEffect, useState} from 'react';
import _ from 'lodash';
import AnimalsJson from './resources/animals';

import {Animal} from "./Animal";
import './Animal.scss';
import './App.scss';
import './Video.scss';
import {Video} from "./Video";
const KEY = 'AIzaSyCth3fzhizoG-9vOyfZ1xRnyLMHmQOvpmc';

const stub = {
  "kind": "youtube#searchListResponse",
  "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/otdBITGO-15cj3VScUektCJFD-M\"",
  "nextPageToken": "CAUQAA",
  "regionCode": "IT",
  "pageInfo": {
    "totalResults": 1000000,
    "resultsPerPage": 5
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "etag": "\"Dn5xIderbhAnUk5TAW0qkFFir0M/n5zkS73ly2jkR5NPCbTZQbI5LXA\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "SB-qEYVdvXA"
      },
      "snippet": {
        "publishedAt": "2018-03-19T02:00:25.000Z",
        "channelId": "UCq5hgY37WAryZCwmehDyCaQ",
        "title": "So many cute kittens videos compilation 2018",
        "description": "Bravecto #anipetshop.com ✈✈✈Shop Pet Medicines : https://anipetshop.com ©BUY NOW : Bravecto, Nexgard, Heartgard, Revolution,..... ▻Worldwide FREE ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/SB-qEYVdvXA/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/SB-qEYVdvXA/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/SB-qEYVdvXA/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Funny Videos",
        "liveBroadcastContent": "none"
      }
    },
  ]
};

function App() {
  const [animals, setAnimals] = useState([]);
  const [videos, setVideos] = useState(stub.items);

  useEffect(() => {
    setAnimals(AnimalsJson);
  }, []);

  const getVideoFromKeyword = (keyword = 'kitten') => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${keyword}&maxResults=1&key=${KEY}`)
      .then(response => response.json())
      .then(response => {
        setVideos(response.items);
      })
      .catch(err => {
        console.log(err);
        setVideos(stub.items);
      });
  };

  useEffect(() => {
    getVideoFromKeyword()
  },[]);

  const handleClick = (name, keywords) => {
    const keyword = _.sample(keywords);
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
          return <Animal key={name} name={name} url={url} keywords={keywords} handleClick={handleClick}/>
        })}
      </div>
      }
    </main>
  );
}

export default App;
