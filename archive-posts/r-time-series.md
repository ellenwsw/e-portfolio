# Project Overview
This project builds a reproducible **R time-series workflow** to investigate temporal trends, seasonal cycles, and short-term anomalies in an environmental indicator dataset. The analysis focuses on cleaning and structuring timestamped observations, then using decomposition and smoothing approaches to interpret long- and short-term dynamics.

## Workflow Summary
1. Import and tidy timestamped records using `tidyverse` and `lubridate`.
2. Convert the cleaned table into a regular time-series object, using `BFAST` for change detection.
3. Visualize baseline trend and seasonal effects.
4. Apply decomposition/smoothing to isolate trend, seasonality, and residuals.
5. Summarize practical implications for monitoring and management.

## Key Visual Outputs

### Median NDVI calculated across 23 raster files
![Median NDVI](/archive-posts/images/median_ndvi.png)

### Monthly mean NDVI trend across May-Sep 
![Monthly mean NDVI Trend across May-Sep](/archive-posts/images/monthly_ndvi_change.png)

### Change detection algorithm using BFAST for two different ROI
![Change detection 2008](/archive-posts/images/time_series_2008.png)
![Change detection 2011](/archive-posts/images/time_series_2011.png)

### Land cover change between years
![Land cover change](/archive-posts/images/classification_comparison.png)

### Yearly net forest area change in hectares
![Yearly change trend](/archive-posts/images/forest_change.png)

### Yearly forest area gain and loss
![Yearly change gain and loss](/archive-posts/images/forest_gain_loss.png)

## Reflection
- A consistent date-time standard is critical before modeling.
- Multiple visual diagnostics improve confidence in interpreting seasonality versus noise.
- Reproducible scripts make it easier to extend the analysis to new monitoring periods.
