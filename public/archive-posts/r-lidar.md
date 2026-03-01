# Project overview
This lab develops a compact **LiDAR analysis workflow in R** for the Alex Fraser Research Forest (AFRF). The project processes 24 discrete-return `.las` tiles to generate core forest products: a **2 m DEM**, **2 m CHM**, and model-based maps of **total above-ground biomass (AGB)** and **dominant tree height**.

## Workflow Summary
1. Load and quality-check LiDAR tiles with `lidR`.
2. Remove duplicate/invalid points and organize processed outputs.
3. Build a 2 m Digital Elevation Model (DEM) and normalize heights.
4. Generate a 2 m Canopy Height Model (CHM).
5. Use plot data and LiDAR metrics to generate and fit linear models for AGB and dominant height prediction.
6. Apply the models across raster layers to map forest attributes.
7. Evaluate the linear model with R2 and scatter plots.

## Key Visual Outputs

### DEM mosaic in 2 m spatial resolution
![DEM mosaic (2 m)](/archive-posts/images/dem_mosaic.png)

### CHM mosaic in 2 m spatial resolution
![CHM mosaic (2 m)](/archive-posts/images/chm_mosaic.png)

### Predicted AGB across the whole study area with developed linear model
![Predicted total above-ground biomass (AGB)](/archive-posts/images/predicted_AGB.png)

### Predicted AGB across the whole study area with developed linear model
![Predicted dominant tree height](/archive-posts/images/predicted_dominantheight.png)

## Reflection
- LiDAR preprocessing choices (duplicate filtering and height normalization) strongly affect final raster quality.
- CHM and terrain products provide complementary structure for modeling forest attributes.
- Simple, interpretable LiDAR-metric models can scale plot observations to full-coverage forest maps, but it is essential to choose the most appropriate variables for prediction.
