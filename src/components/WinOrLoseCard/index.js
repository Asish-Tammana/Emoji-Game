import './index.css'

const WinOrLoseCard = props => {
  const {scoreDetails, playAgain} = props
  const {score} = scoreDetails

  const imgUrl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const clickButton = () => {
    playAgain(score)
  }

  if (score === 12) {
    return (
      <div className="result-bg-card">
        <div className="result-card">
          <div className="result-content">
            <h1>You Won</h1>
            <p>Best Score</p>
            <p className="score-display">12/12</p>
            <button type="button" className="play-again" onClick={clickButton}>
              Play Again
            </button>
          </div>
          <img className="result-img" src={imgUrl} alt="win or lose" />
        </div>
      </div>
    )
  }

  return (
    <div className="result-bg-card">
      <div className="result-card">
        <div className="result-content">
          <h1>You Lose</h1>
          <p>Score</p>
          <h1 className="score-display">{score}/12</h1>
          <button type="button" className="play-again" onClick={clickButton}>
            Play Again
          </button>
        </div>
        <img className="result-img" src={imgUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
