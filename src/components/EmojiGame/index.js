/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    selectedEmojiList: [],
    continueGame: true,
  }

  clickEmoji = emojiName => {
    const {selectedEmojiList, score} = this.state

    if (!selectedEmojiList.includes(emojiName)) {
      if (score + 1 === 12) {
        this.setState({
          score: 12,
          continueGame: false,
        })
      } else {
        this.setState(prevState => ({
          selectedEmojiList: [...prevState.selectedEmojiList, emojiName],
          score: prevState.score + 1,
        }))
      }
    } else {
      this.setState({
        continueGame: false,
      })
    }
  }

  playAgain = score => {
    const {topScore} = this.state

    if (score > topScore) {
      this.setState({
        topScore: score,
      })
    }

    this.setState({
      continueGame: true,
      score: 0,
      selectedEmojiList: [],
    })
  }

  render() {
    const {emojisList} = this.props
    const shuffledEmojisList = emojisList.sort(() => Math.random() - 0.5)
    const {continueGame} = this.state

    return (
      <>
        <NavBar scoreDetails={this.state} />
        {continueGame === true ? (
          <div className="game-container">
            {shuffledEmojisList.map(eachEmojiItem => (
              <EmojiCard
                emojiDetails={eachEmojiItem}
                key={eachEmojiItem.id}
                clickEmoji={this.clickEmoji}
              />
            ))}
          </div>
        ) : (
          <WinOrLoseCard scoreDetails={this.state} playAgain={this.playAgain} />
        )}
      </>
    )
  }
}
export default EmojiGame
