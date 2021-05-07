import { Button, Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './TweetBox.css'
import db from './firebase'

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('')
  const [tweetImage, setTweetImage] = useState('')

  const sendTweet = (e) => {
    e.preventDefault()

    db.collection('posts').add({
      displayName: 'Ebubekir DEMİRAY',
      username: 'ebdem',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        'https://media-exp1.licdn.com/dms/image/C4E03AQE3bGlJ3k2mQw/profile-displayphoto-shrink_400_400/0/1608029669444?e=1624492800&v=beta&t=7Z0Y1ojaCO7CeivVK7Jy1YhcHcU7vvRUQ--MeQRdaVQ'
    })

    setTweetImage('')
    setTweetMessage('')
  }
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQE3bGlJ3k2mQw/profile-displayphoto-shrink_400_400/0/1608029669444?e=1624492800&v=beta&t=7Z0Y1ojaCO7CeivVK7Jy1YhcHcU7vvRUQ--MeQRdaVQ" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Enter image URL"
          type="text"
        />
        <Button type="submit" onClick={sendTweet} className="tweetBox__tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  )
}

export default TweetBox
