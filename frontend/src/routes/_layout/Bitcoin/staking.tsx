import { createFileRoute, Link } from "@tanstack/react-router";
import AddItem from "@/components/Bitcoin/AddItem"


export const Route = createFileRoute("/_layout/Bitcoin/staking")({
  component: Staking,
});

function Staking() {
  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Bitcoin Staking</h1>
        <p style={styles.subtitle}>
          Earn passive income by staking your BTC securely
        </p>
      </div>

      {/* Stats Cards */}
      <div style={styles.cards}>
        <StatCard label="APY" value="4.5%" />
        <StatCard label="Minimum Stake" value="0.01 BTC" />
        <StatCard label="Lock Period" value="30 Days" />
      </div>

      {/* Main Card */}
      <div style={styles.mainCard}>
        <h2 style={styles.sectionTitle}>Stake Your Bitcoin</h2>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Amount (BTC)</label>
          <input
            type="number"
            placeholder="0.00"
            style={styles.input}
          />
        </div>
        <AddItem />
        <div style={styles.actions}>
          <button style={styles.primaryBtn}>Stake BTC</button>
          <button style={styles.secondaryBtn}>Unstake</button>
        </div>
      </div>

      {/* Navigation */}
      <div style={styles.footer}>
        <Link to="/bitcoin" style={styles.backLink}>
          ← Back to Bitcoin
        </Link>
      </div>
    </div>
  );
}

/* ---------- Reusable Card ---------- */
function StatCard({label="APY", value="4.5%" }) {
  return (
    <div style={styles.statCard}>
      <p style={styles.statLabel}>{label}</p>
      <h3 style={styles.statValue}>{value}</h3>
    </div>
  );
}

/* ---------- Styles ---------- */
const styles = {
  page: {
    padding: "32px",
    maxWidth: "900px",
    margin: "0 auto",
    fontFamily: "system-ui, sans-serif",
  },

  header: {
    marginBottom: "32px",
  },

  title: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "8px",
  },

  subtitle: {
    color: "#666",
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "16px",
    marginBottom: "32px",
  },

  statCard: {
    background: "#242222ff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  },

  statLabel: {
    color: "#777",
    fontSize: "14px",
  },

  statValue: {
    fontSize: "22px",
    fontWeight: "600",
    marginTop: "8px",
  },

  mainCard: {
    background: "#332f2fff",
    borderRadius: "16px",
    padding: "28px",
    boxShadow: "0 10px 30px rgba(36, 31, 31, 0.08)",
  },

  sectionTitle: {
    fontSize: "22px",
    marginBottom: "20px",
  },

  inputGroup: {
    marginBottom: "20px",
  },

  label: {
    display: "block",
    marginBottom: "8px",
    fontSize: "14px",
    color: "#d1c2c2ff",
  },

  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "16px",
  },

  actions: {
    display: "flex",
    gap: "12px",
    marginTop: "20px",
  },

  primaryBtn: {
    flex: 1,
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "#f7931a",
    color: "#050505ff",
    fontWeight: "600",
    cursor: "pointer",
  },

  secondaryBtn: {
    flex: 1,
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #0a0a0aff",
    background: "#020202ff",
    cursor: "pointer",
  },

  footer: {
    marginTop: "30px",
  },

  backLink: {
    color: "#555",
    textDecoration: "none",
    fontSize: "14px",
  },
};
