import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {emojiName, emojiUrl} = emojiDetails

  const buttonClicked = () => {
    clickEmoji(emojiName)
  }

  return (
    <li type="none" className="emoji-card">
      <button type="button" className="emoji-btn" onClick={buttonClicked}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
