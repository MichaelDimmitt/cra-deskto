const helpers = {
  randomArrValue: (arr) => arr[ Math.floor((Math.random() * arr.length)) ],
  randomArrNumber: (num) => Math.floor((Math.random() * num)),
  buildUrlPlaylist: (plist) => 'https://www.youtube.com/embed/?list=' + plist + '&index=1&rel=0&autoplay=1',
  buildLiveChannelsUrl: (channel) => 'https://www.youtube.com/embed/live_stream?channel=' + channel + '&autoplay=1',
  buildLiveVideo: (plist) => 'https://www.youtube.com/embed/' + plist + '?index=1&rel=0&autoplay=1'
}

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

const bestThreadMaps = [ // 5,6,7 - 5
  'https://threatmap.fortiguard.com',
  'https://cybermap.kaspersky.com/widget',
  'https://threatbutt.com/map'
]
module.exports = {
  helpers, video_experiences, bestThreadMaps
}