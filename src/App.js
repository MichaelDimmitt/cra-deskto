import React, {Fragment, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import YouTube from 'react-youtube';



const helpers = {
  randomArrValue: (arr) => arr[ Math.floor((Math.random() * arr.length)) ],
  randomArrNumber: (num) => Math.floor((Math.random() * num)),
  buildUrlPlaylist: (plist) => 'https://www.youtube.com/embed/?list=' + plist + '&index=1&rel=0&autoplay=1',
  buildLiveChannelsUrl: (channel) => 'https://www.youtube.com/embed/live_stream?channel=' + channel + '&autoplay=1',
  buildLiveVideo: (plist) => 'https://www.youtube.com/embed/' + plist + '?index=1&rel=0&autoplay=1'
}
const { /*randomArrValue, randomArrNumber, buildUrlPlaylist,*/ buildLiveChannelsUrl, buildLiveVideo } = helpers

const video_experiences = {
  live: {
    live_news_if_online : {
      spacexLiveChecker: ('UCtI0Hodo5o5dUb67FeUjDeA'),
      podcastLiveChecker: ('UCzQUP1qoWDoEbmsQxvdjxgQ'),
    },
  },
  playlists: {
    live_news_playlists: {
      youtubeLiveNowTechnology: ('PL57quI9usf_th5iJjjhXcRzlzibHUgYMA'),
      youtubeLiveNowAnimals: ('PLIFqWCuxNyoj8HAwNYOlqdDL52pNsbvKV')
    },
    static_news: {   /* static news updated daily */
      bbcTopStories: ('PLS3XGZxi7cBVNadbxDqZCUgISvabEpu-g'),
      espnMustSee: ('PLn3nHXu50t5xa7-HYnJpzN5cxkLYgFP_V')
    },
    entertainment_and_visuals: {
      creedLoadscreens: 'PLZbIo_dYB77tFXtSy6nZjnRyiH_Hwqe_B',
      assassinsCreedTrailers: 'PLOcTEsKp5qpV7pbtiGeLAjlmD086bqymr',
      lofiAnimes: 'PLZbIo_dYB77tkPQCgwRMq9a_RRkq0UXZ3',
      historyOfArchitectureTestWillFailLaterOn: 'PL7_CkZ72ky5P1aPgHTbLBZbcddN_48F44',
      birds:'PLOh2AUhKQzaNeE-vXiH1SMeJyTdRT84dr'
    }
  },
  videos: {
    live_music: {
      youtubeChilledCowByVideo: ('hHW1oY26kxQ'),
    },
  },
  channel: {
    music: {
      youtubeChilledCowByChannelId: ('UCSJ4gkVC6NrvII8umztf0Ow')
    }
  },
  code_pen: {
    css: {
      hyperSpace: 'https://codepen.io/yuanchuan/full/dqrdow',
      enterTheMatrix: 'https://codepen.io/yuanchuan/full/YoqWeR',
      dnaSequence: 'https://codepen.io/yuanchuan/full/pBrMNQ',
      trippy: 'https://codepen.io/yuanchuan/full/wZJqNK',
      pitfall: 'https://codepen.io/dsenneff/full/RqYONv'
    }
  },
  radio: {
    jetsetradio: "http://www.jetsetradio.live/",
    x1029radio: "https://www.x1065.com/"
    /*kexp: "https://kexp.org"*/
  }
}


// const { live_news_if_online, live_news_playlists, static_news, live_music, code_pen, entertainment_and_visuals } = video_experiences
// const { spacexLiveChecker, podcastLiveChecker } = live_news_if_online
// const { youtubeLiveNowTechnology, youtubeLiveNowAnimals } = live_news_playlists
// const { bbcTopStories, espnMustSee } = static_news
// const { youtubeChilledCowByVideo, youtubeChilledCowByChannelId } = live_music
// const { hyperSpace, enterTheMatrix, dnaSequence, trippy, pitfall } = code_pen
// const { creedLoadscreens, assassinsCreedTrailers, lofiAnimes, historyOfArchitectureTestWillFailLaterOn, birds } = entertainment_and_visuals
const threatMaps = [
  'https://threatmap.fortiguard.com',
  'https://threatmap.bitdefender.com',
  'https://cybermap.kaspersky.com/widget',
  'https://www.deteque.com/live-threat-map',
  'https://www.fireeye.com/cyber-map/threat-map.html',
  'https://threatbutt.com/map'
]

const CodePen = ({url}) => {
  return <iframe style={{position:'absolute', top:'-62px', width:"100%", height:"120%"}} src={url} width="100%" height="120%" frameBorder="0"/>
}

const GifExperience = () => (
  <div>
    <iframe src="https://giphy.com/embed/3jvujBL5wCSYM" width="480" height="358" frameBorder="0" class="giphy-embed" allowFullScreen />
    <iframe src="https://giphy.com/embed/Yohz12bnBkqVW" width="480" height="255" frameBorder="0" class="giphy-embed" allowFullScreen />
    <iframe src="https://giphy.com/embed/3jvujBL5wCSYM" width="480" height="358" frameBorder="0" class="giphy-embed" allowFullScreen />
    <iframe src="https://giphy.com/embed/Yohz12bnBkqVW" width="480" height="255" frameBorder="0" class="giphy-embed" allowFullScreen />
  </div>
);

// const codePenArray = [ // 0,1,2,3,4 - 0
//   hyperSpace,
//   enterTheMatrix,
//   dnaSequence,
//   trippy,
//   pitfall
// ];

// const bestThreadMaps = [ // 5,6,7 - 5
//   'https://threatmap.fortiguard.com',
//   'https://cybermap.kaspersky.com/widget',
//   'https://threatbutt.com/map'
// ]

// const liveChannels = [
//   spacexLiveChecker,
//   podcastLiveChecker,
//   youtubeChilledCowByChannelId
// ]

// const liveVideos = [
//   youtubeChilledCowByVideo
// ]
// const videoExperienceVideo = [ // 8,9,10,11,12,13,14,15,16 - 8
//   youtubeChilledCowByVideo,
// ];

// const videoExperienceList = [
//   bbcTopStories,
//   espnMustSee,
// ]
// const youtubeList = [ // 17,18,19,20,21 - 17
//   creedLoadscreens,
//   assassinsCreedTrailers,
//   lofiAnimes,
//   historyOfArchitectureTestWillFailLaterOn,
// ]

const fun = (info) => {
  return Object.keys(info).map(
    x => (typeof info[x] === "object") ? 
      fun(info[x]) : info[x]
  )
}

const keys = Object.keys(video_experiences)
const experiencesByTypes = keys.reduce( (acc, cur) => {
  acc[cur] = fun(video_experiences[cur]).flat(Infinity)
  return acc
},{});
console.log({experiencesByTypes})
// const sum = Object.keys(experiencesByTypes).reduce((acc, key) => 
//   experiencesByTypes[key].length + acc
// ,0)
// console.log({sum})
const bestThreadMaps = [ // 5,6,7 - 5
  'https://threatmap.fortiguard.com',
  'https://cybermap.kaspersky.com/widget',
  'https://threatbutt.com/map'
]
const { code_pen, channel, live, playlists, videos, radio } = experiencesByTypes

const accum1 = code_pen.length
const accum2 = accum1 + bestThreadMaps.length
const accum3 = accum2 + videos.length
const accum4 = accum3 + playlists.length
const accum5 = accum4 + live.length
const accum6 = accum5 + radio.length
// const accum6 = accum5 + channel.length // live channel not included because not supported by youtube-react

const fullArrayLength = accum6

// perform the playllist validation here.
const Resolve = ({randomArrayLength}) => {
  console.log({randomArrayLength})
  return <Fragment>
  {
    randomArrayLength < accum1 ?
      <CodePen url={ code_pen[randomArrayLength] }/>
    : randomArrayLength < accum2 ?
      <iframe src={bestThreadMaps[randomArrayLength-accum1]} width="100%" height="100%" frameBorder="0"/>
    : randomArrayLength < accum3 ?
      <YouTube videoId={videos[randomArrayLength-accum2]} opts={{width: '100%',playerVars: {autoplay: 1}} } />
    : randomArrayLength < accum4 ?
      <YouTube videoId="" opts={{width: '100%', height:'100vh', playerVars: {autoplay: 1, list: (playlists[randomArrayLength-accum3]) }} } /> 
    : randomArrayLength < accum5 ?
      <iframe src={buildLiveChannelsUrl(live[randomArrayLength-accum4])} width="100%" height="100%" frameBorder="0"/>
    : randomArrayLength < accum6 ?
      <iframe src={radio[randomArrayLength-accum5]} width="100%" height="100%" frameBorder="0"/>
    : <YouTube videoId="" opts={{width: '100%',playerVars: {autoplay: 1, list: (playlists[17-accum3]) }} } /> 
    // : <iframe src={buildLiveChannelsUrl(channel[randomArrayLength-accum5])} width="100%" height="100%" frameBorder="0"/>
  }
  </Fragment>
}

function App() {
  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    // event.target.playVideo();
    
  }

  const _makeFullscreen = () => {
    
      const playerElement = document.getElementById('widget2')
      const requestFullScreen =
        playerElement.requestFullScreen ||
        playerElement.mozRequestFullScreen ||
        playerElement.webkitRequestFullScreen
      console.log({requestFullScreen})
      if (requestFullScreen) {
        requestFullScreen.bind(playerElement)()
      }
  }
  // const [randomArrayLength, setNum] = useState(randomArrNumber(fullArrayLength)-1)
  const [randomArrayLength, setNum] = useState(21)
  const changeChannel = (randomArrayLength) => {
    if(randomArrayLength < fullArrayLength-1){
      setNum(randomArrayLength+1)
    } else {
      setNum(1)
    }
    
  }
  
  return (
    <Fragment>
      <button onClick={() => changeChannel(randomArrayLength)}style={{position: 'absolute', left:'calc(35%)', top: '30px', zIndex: '1000'}}>Refresh? Click Here to change TV Channel</button>
      <Resolve randomArrayLength={randomArrayLength}/>
    </Fragment>
  );
}

export default App;
