import React from 'react'
import Game1 from '../../../components/games/Game1'
import Game2 from '../../../components/games/Game2'
import Game3 from '../../../components/games/Game3'
import { Navigate, useParams } from 'react-router-dom'
import Navbar from '../../../components/ui/Navbar'


const gamesComponent: Record<string, JSX.Element> = {
  1: <Game1 />,
  2: <Game2 />,
  3: <Game3 />,
  
}

const GamePage = () => {
  const { id } = useParams<{ id?: string }>()

  if (!id) {
    return <Navigate to="/notfound" replace />
  }

  const selectedGame = gamesComponent[id]

  return (
    <div
      className="exchange scrollbar-hide"
      /*style={{
        backgroundImage: 'url("/assets/images/space-exchange-bg.webp")',
        width: '100vw',
        height: '100vh',
        backgroundSize: 'cover',
      }}*/
    >
      <div className='game-container'>
     
      {selectedGame ? selectedGame : <div>Game Not Found with id {id}</div>}
      </div>
    </div>
  )
}

export default GamePage
