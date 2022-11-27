import './index.css'

const NavBar = props => {
  const {scoreDetails} = props
  const {score, topScore, continueGame} = scoreDetails

  if (continueGame) {
    return (
      <div className="nav-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="logo-title">Emoji Game</h1>
        </div>
        <div className="score-container">
          <p>Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      </div>
    )
  }
  return (
    <div className="nav-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="logo-title">Emoji Game</h1>
      </div>
    </div>
  )
}

export default NavBar
