import { Link as RouterLink,createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/bitcoin')({
  component: RouteComponent,
})




import { useState } from 'react'



function RouteComponent() {
  const [selectedDate, setSelectedDate] = useState('')

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Crypto Dashboard</h1>

      {/* Bitcoin Diagram */}
      <div style={styles.card}>
        <h2>📈 Bitcoin Price Overview</h2>
        <svg width="100%" height="200" viewBox="0 0 500 200">
          <polyline
            fill="none"
            stroke="#f7931a"
            strokeWidth="3"
            points="0,150 60,120 120,140 180,90 240,110 300,60 360,80 420,40 480,70"
          />
        </svg>
        <p style={styles.muted}>Sample BTC trend diagram</p>
      </div>

      {/* PayPal Button */}
      <div style={styles.card}>
        <h2>💳 Payment</h2>
        <button style={styles.paypalBtn}>
          Pay with PayPal
        </button>
      </div>

      {/* Calendar Management */}
      <div style={styles.card}>
        <h2>📅 Calendar Management</h2>
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
      <div>
        <RouterLink to='/Bitcoin/staking'>
          <button style={styles.paypalBtn}>
          Staking
          </button>
        </RouterLink>
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
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
  },
  card: {
    background: '#141414ff',
    borderRadius: '12px',
    padding: '1.5rem',
    marginBottom: '1.5rem',
    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
  },
  paypalBtn: {
    background: '#003087',
    color: '#fff',
    border: 'none',
    padding: '0.8rem 1.5rem',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  dateInput: {
    padding: '0.6rem',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #0a061dff',
  },
  muted: {
    color: '#666',
    fontSize: '0.9rem',
    marginTop: '0.5rem',
  },
}
