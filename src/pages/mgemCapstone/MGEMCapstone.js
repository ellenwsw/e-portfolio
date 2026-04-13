import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./MGEMCapstone.css";

const sampleCode = `
# Parse utc_datetime, extract local hour and date
# Parse string to datetime
df_2024['utc_datetime'] = pd.to_datetime(
    df_2024[UTC_COL],
    utc=True,
    errors='coerce'
)
df_2025['utc_datetime'] = pd.to_datetime(
    df_2025[UTC_COL],
    utc=True,
    errors='coerce'
)
# Convert to Pacific Time
df_2024['pt_datetime'] = df_2024['utc_datetime'].dt.tz_convert(
    "America/Vancouver"
)
df_2025['pt_datetime'] = df_2025['utc_datetime'].dt.tz_convert(
    "America/Vancouver")`;

export default function MGEMCapstone({ theme, onToggle }) {
  return (
    <div
      className="capstone-page"
      style={{ backgroundColor: theme.body, color: theme.text }}
    >
      <Header theme={theme} onToggle={onToggle} />
      <main className="capstone-main">
        <section className="capstone-hero">
          <h1>MGEM Capstone Project</h1>
          <p>
            This spatial ecology project integrates GPS animal tracking, GIS tools, and machine learning to model and predict cattle habitat selection on British Columbia rangelands. Working across two seasons of fine-scale movement data, I applied Generalized Linear Models and Random Forest algorithms alongside environmental predictors, including monthly NDVI, EVI, topography, and distance to water, to characterize and forecast livestock distribution patterns. The project demonstrates an end-to-end geospatial analysis workflow, from raw GPS data processing through predictive model validation.
          </p>
        </section>

        <section
          className="capstone-panel"
          style={{ borderColor: theme.imageHighlight }}
        >
          <h2>Project snapshot</h2>
          <ul>
            <li>
              Focus: Ecological habitat analytics + geospatial decision support
            </li>
            <li>Workflow: Data cleaning → Data exploration → Modeling → map/report outputs</li>
            <li>Tools: ArcGIS Pro, Python</li>
          </ul>
        </section>

        <section className="capstone-grid">
          <article
            className="capstone-panel"
            style={{ borderColor: theme.imageHighlight }}
          >
            <h3>Sample code snippet - Converting UTC time to PT time</h3>
            <pre>
              <code>{sampleCode}</code>
            </pre>
          </article>

          <article
            className="capstone-panel"
            style={{ borderColor: theme.imageHighlight }}
          >
            <h3>Sample outputs</h3>
            <div className="capstone-output-list">
              <figure>
                <img
                  src="/archive-posts/images/fix_distribution_month_pasture.png"
                  alt="Number of GPS Fixes by Month-Pasture, Mar-Sep 2024"
                  loading="true"
                />
                <figcaption>This figure visualized the distribution of GPS fixes by the combination of month and pasture.</figcaption>
              </figure>
              <figure>
                <img
                  src="/archive-posts/images/vif_results.png"
                  alt="VIF Evaluation for z-scored Predictors"
                  loading="true"
                />
                <figcaption>This figure demonstrate the VIF of the z-scored training predictors.</figcaption>
              </figure>
            </div>
          </article>
        </section>
      </main>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}
