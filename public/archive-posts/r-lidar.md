# Project overview
This lab develops a compact **LiDAR analysis workflow in R** for the Alex Fraser Research Forest (AFRF). The project processes 24 discrete-return `.las` tiles to generate core forest products: a **2 m DEM**, **2 m CHM**, and model-based maps of **total above-ground biomass (AGB)** and **dominant tree height**.

## Key analysis workflow
1. Load and quality-check LiDAR tiles with `lidR`.
2. Remove duplicate/invalid points and organize processed outputs.
3. Build a 2 m Digital Elevation Model (DEM) and normalize heights.
4. Generate a 2 m Canopy Height Model (CHM).
5. Use plot data and LiDAR metrics to fit prediction models for AGB and dominant height.
6. Apply the models across raster layers to map forest attributes.

## Key output
![DEM mosaic (2 m)](/archive-posts/images/unnamed-chunk-4-2.png)

![CHM mosaic (2 m)](/archive-posts/images/unnamed-chunk-8-1.png)

![Predicted total above-ground biomass (AGB)](/archive-posts/images/unnamed-chunk-17-3.png)

![Predicted dominant tree height](/archive-posts/images/unnamed-chunk-17-4.png)

## Reflection
- LiDAR preprocessing choices (duplicate filtering and height normalization) strongly affect final raster quality.
- CHM and terrain products provide complementary structure for modeling forest attributes.
- Simple, interpretable LiDAR-metric models can scale plot observations to full-coverage forest maps.
