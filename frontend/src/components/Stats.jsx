import { companyInfo } from "../data/companyData";

function Stats() {
  return (
    <section className="stats-section">

      <div className="container stats-grid">

        {companyInfo.statistics.map((stat) => (
          <div className="stat-item" key={stat.label}>

            <div className="stat-value">
              {stat.value}
            </div>

            <div className="stat-label">
              {stat.label}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Stats;