# Project overview
This project uses **R-based post-fire recovery analysis** to examine how vegetation or ecosystem indicators changed after disturbance. It combines exploratory visualization with comparative summaries across post-fire periods to identify recovery trajectories and potential lag effects.

## Workflow Summary
1. Load and clean post-fire monitoring records in R.
2. Group measurements by recovery phase and/or time since fire.
3. Compare indicators through plots and summary statistics.
4. Highlight patterns of early recovery, stabilization, or delayed response.
5. Document methodological limits and next steps for stronger inference.

## Key Visual Outputs

### Summary statistics of burned area annually by cause summary 
![Burned area annually by cause](/archive-posts/images/fire_cause.png)

### Classify burn severity, map visualization
![Fire severity map](/archive-posts/images/fire_severity_map.png)

### NDVI change by year after wildfire
![Fire severity map](/archive-posts/images/ndvi_year.png)

### Post-fire recovery analysis
![Postfire ndvi analysis](/archive-posts/images/postfire_ndvi.png)

## Reflection
- Recovery signals can vary by metric, so multi-metric interpretation (by year, by severity, etc.) is important.
- Visual comparison by phase reveals patterns hidden in aggregate averages.
- The workflow is ready to plug in additional years of monitoring data.
