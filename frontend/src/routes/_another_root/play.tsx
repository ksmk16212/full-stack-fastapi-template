import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/_another_root/play')({
  component: RouteComponent,
})

function RouteComponent() {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedPlayType, setSelectedPlayType] = useState('')
  const [players, setPlayers] = useState<{ name: string; position: string; x: number; y: number }[]>([])
  const [newPlayer, setNewPlayer] = useState<{ name: string; position: string }>({
    name: '',
    position: '',
  })
  const [playSimulation, setPlaySimulation] = useState(false)

  const handleAddPlayer = () => {
    if (newPlayer.name && newPlayer.position) {
      const player = {
        ...newPlayer,
        x: Math.random() * 400,  // Random x position on the field
        y: Math.random() * 200,  // Random y position on the field
      }
      setPlayers([...players, player])
      setNewPlayer({ name: '', position: '' })
    }
  }

  const handlePlayExecution = () => {
    setPlaySimulation(!playSimulation)
  }

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Football Play Management</h1>

      {/* Football Play Diagram */}
      <div style={styles.card}>
        <h2>🏈 Football Play Overview</h2>
        <div style={styles.diagramContainer}>
          <svg width="100%" height="300" viewBox="0 0 500 300">
            {/* Field lines */}
            <rect x="0" y="0" width="500" height="300" fill="#2b9ac1" />
            <line x1="0" y1="150" x2="500" y2="150" stroke="white" strokeWidth="2" />

            {/* Players */}
            {players.map((player, index) => (
              <circle
                key={index}
                cx={player.x}
                cy={player.y}
                r="10"
                fill={player.position === 'Quarterback' ? '#28a745' : '#007bff'}
                stroke="white"
                strokeWidth="2"
              />
            ))}

            {/* Ball */}
            <circle cx="250" cy="150" r="8" fill="#f7931a" />

            {/* Add movement or visual effect for play execution */}
            {playSimulation && (
              <circle cx="300" cy="120" r="8" fill="#dc3545" />
            )}
          </svg>
        </div>
        <p style={styles.muted}>Visual representation of your football play.</p>
      </div>

      {/* Play Type Selection */}
      <div style={styles.card}>
        <h2>📋 Select Play Type</h2>
        <div style={styles.playTypeSelection}>
          <button
            style={styles.playButton}
            onClick={() => setSelectedPlayType('Pass')}
          >
            Pass Play
          </button>
          <button
            style={styles.playButton}
            onClick={() => setSelectedPlayType('Run')}
          >
            Run Play
          </button>
          <button
            style={styles.playButton}
            onClick={() => setSelectedPlayType('Kickoff')}
          >
            Kickoff
          </button>
        </div>
        {selectedPlayType && (
          <p style={styles.muted}>Selected Play Type: <strong>{selectedPlayType}</strong></p>
        )}
      </div>

      {/* Player Management */}
      <div style={styles.card}>
        <h2>👥 Player Management</h2>
        <input
          type="text"
          placeholder="Player Name"
          value={newPlayer.name}
          onChange={(e) => setNewPlayer({ ...newPlayer, name: e.target.value })}
          style={styles.inputField}
        />
        <input
          type="text"
          placeholder="Player Position"
          value={newPlayer.position}
          onChange={(e) => setNewPlayer({ ...newPlayer, position: e.target.value })}
          style={styles.inputField}
        />
        <button style={styles.addPlayerBtn} onClick={handleAddPlayer}>
          Add Player
        </button>

        <h3>Players Involved:</h3>
        <ul style={styles.playersList}>
          {players.map((player, index) => (
            <li key={index} style={styles.playerItem}>
              {player.name} - {player.position}
            </li>
          ))}
        </ul>
      </div>

      {/* Play Execution */}
      <div style={styles.card}>
        <h2>🎯 Execute Play</h2>
        <button style={styles.executeBtn} onClick={handlePlayExecution}>
          {playSimulation ? 'Stop Simulation' : 'Execute Play'}
        </button>
      </div>

      {/* Calendar Management */}
      <div style={styles.card}>
        <h2>📅 Game Date Management</h2>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          style={styles.dateInput}
        />
        {selectedDate && (
          <p style={styles.muted}>
            Selected date: <strong>{selectedDate}</strong>
          </p>
        )}
      </div>
    </div>
  )
}

/* ---------------- STYLES ---------------- */

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    padding: '2rem',
    maxWidth: '900px',
    margin: '0 auto',
    fontFamily: 'system-ui, sans-serif',
    backgroundColor: '#141414',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: '#ffffff',
  },
  card: {
    background: '#1f2d3b',
    borderRadius: '12px',
    padding: '1.5rem',
    marginBottom: '1.5rem',
    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
    color: 'white',
  },
  muted: {
    color: '#999999',
    fontSize: '1rem',
    marginTop: '0.5rem',
  },
  diagramContainer: {
    background: '#2a2a2a',
    borderRadius: '10px',
    padding: '10px',
    marginBottom: '1rem',
  },
  playTypeSelection: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    marginTop: '1rem',
  },
  playButton: {
    background: '#3b82f6',
    color: '#fff',
    border: 'none',
    padding: '0.8rem 1.5rem',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: '0.3s ease',
  },
  playButtonHover: {
    background: '#2563eb',
  },
  inputField: {
    padding: '0.6rem',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #3b82f6',
    marginBottom: '0.8rem',
    width: '48%',
    backgroundColor: '#2c2c2c',
    color: 'white',
  },
  addPlayerBtn: {
    background: '#10b981',
    color: '#fff',
    border: 'none',
    padding: '0.8rem 1.5rem',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  playersList: {
    listStyleType: 'none',
    paddingLeft: '0',
  },
  playerItem: {
    backgroundColor: '#2e3b4e',
    padding: '0.5rem',
    marginBottom: '0.5rem',
    borderRadius: '6px',
  },
  executeBtn: {
    background: '#f97316',
    color: '#fff',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '8px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    width: '100%',
  },
  dateInput: {
    padding: '0.6rem',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #3b82f6',
    width: '100%',
    backgroundColor: '#2c2c2c',
    color: 'white',
  },
}
