import React from 'react'
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed'
import SearchIcon from '@material-ui/icons/SearchOutlined'
import './Widgets.css'

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={'1206529532636860418'} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="demirayebu"
          options={{ height: 400 }}
        />
        <div style={{ marginTop: '30px' }}>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="KoronaReport"
            options={{ height: 400 }}
          />
        </div>
      </div>
    </div>
  )
}

export default Widgets
