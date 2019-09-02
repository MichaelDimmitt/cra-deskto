import React, {Fragment, useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import YouTube from 'react-youtube';
import {helpers, video_experiences, bestThreadMaps} from './televisionData.js'
const { /*randomArrValue, randomArrNumber, buildUrlPlaylist, buildLiveVideo*/ buildLiveChannelsUrl } = helpers


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

const CodePen = ({url}) => {
  return <iframe title="1" style={{position:'absolute', top:'-62px', width:"100%", height:"120%"}} src={url} width="100%" height="120%" frameBorder="0"/>
}

const { code_pen, /*channel,*/ live, playlists, videos, radio } = experiencesByTypes
const accum1 = code_pen.length
const accum2 = accum1 + bestThreadMaps.length
const accum3 = accum2 + videos.length
const accum4 = accum3 + playlists.length
const accum5 = accum4 + live.length
const accum6 = accum5 + radio.length
const fullArrayLength = accum6

// perform the playllist validation here.
const Resolve = ({randomArrayLength}) => {
  
  return <span style={{zIndex: -1}}>
  {
    randomArrayLength < accum1 ?
      <CodePen url={ code_pen[randomArrayLength] }/>
    : randomArrayLength < accum2 ?
      <iframe title="1" src={bestThreadMaps[randomArrayLength-accum1]} width="100%" height="100%" frameBorder="0"/>
    : randomArrayLength < accum3 ?
      <YouTube videoId={videos[randomArrayLength-accum2]} opts={{width: '100%',playerVars: {autoplay: 1}} } />
    : randomArrayLength < accum4 ?
      <YouTube videoId="" opts={{width: '100%', height:'100vh', playerVars: {autoplay: 1, list: (playlists[randomArrayLength-accum3]) }} } /> 
    : randomArrayLength < accum5 ?
      <iframe title="1" src={buildLiveChannelsUrl(live[randomArrayLength-accum4])} width="100%" height="100%" frameBorder="0"/>
    : randomArrayLength < accum6 ?
      <iframe title="1" src={radio[randomArrayLength-accum5]} width="100%" height="100%" frameBorder="0"/>
    : <YouTube videoId="" opts={{width: '100%',playerVars: {autoplay: 1, list: (playlists[17-accum3]) }} } /> 
    // : <iframe src={buildLiveChannelsUrl(channel[randomArrayLength-accum5])} width="100%" height="100%" frameBorder="0"/>
  }
  </span>
}
const Profile = () => 
  <div class="gridiron gridcomponent" style={{zIndex: 1, position: 'absolute'}}>
    <div class="grid-full"></div>
    <h1 class="title justify-center grid-full">Michael Dimmitt</h1>
    <p class="ds robo-text justify-center grid-full">Elixir &nbsp; Bash &nbsp; and Javascript Developer</p>
    <p class="ds robo-text justify-center grid-full pb3 pt2" >
      FullStack&nbsp;
      {'<= = - == -- = =>'}
      &nbsp;
      FrontEnd
    </p>
    <div class="grid-full">
      <div class="flex justify-center" >
        <a class="grid-half1 justify-self-end nav-link f3 active" href="https://github.com/michaeldimmitt">github</a>
        <a class="grid-half2 justify-self-start nav-link f3" href="https://twitter.com/m_dimmitt">twitter</a>
      </div>
      <div class="flex" >
        <a class="nav-link f3 active" href="https://stock-tick-website.surge.sh/symbols">stocktick</a><a class="nav-link f3" href="https://repository-dashboard.surge.sh">dashboard</a>
        <a class="nav-link f3" href="https://github.com/MichaelDimmitt/gh_reveal#reveal_brew">reveal</a><a class="nav-link f3" href="https://github.com/MichaelDimmitt/emoji-terminal">emoji_terminal</a>
      </div>
      <div class="flex" >
        <a class="nav-link f3 active" href="https://github.com/MichaelDimmitt/know-your-package-manager">know-your-package-manager</a>
        <a class="nav-link f3" href="https://github.com/MichaelDimmitt/meetup-subscribe#usage">meetup-subscribe</a>
      </div>
    </div>
    <p id="hobbies" class="grid-full f3">
      When I'm not <a href="https://github.com/michaeldimmitt">programming</a>, I can usually be found
      <span class="robo-text bb-2d"  id="what_i_do"></span>.
    </p>
    <p class="grid-full f3">
      <span id="whereami"></span>
    </p>
  </div>    
function Television() {
  

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
      
      <Profile/>
      <button onClick={() => changeChannel(randomArrayLength)}style={{position: 'absolute', left:'calc(35%)', top: '30px', zIndex: '2'}}>Refresh? Click Here to change TV Channel</button>
      <Resolve randomArrayLength={randomArrayLength}/>
    </Fragment>
  );
}

export default Television;
