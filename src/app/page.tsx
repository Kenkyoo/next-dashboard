import styles from "./page.module.css";
import Dashboard from "./ui/dashboard/dashboard";

export default function Home() {
  return (
    <div className={styles.page}>
      <Dashboard />
    </div>
  );
}
