# Project overview
This project applies terrain analysis and hydrological modelling to a DEM of the Nahmint watershed in British Columbia to delineate Riparian Management Areas (RMAs) for forest management purposes. Using ArcGIS Pro, stream networks are derived, classified by gradient and channel width, and buffered according to BC government stream classification standards to identify reserve and management zones where harvest activities are restricted.

## Key Steps of Map Creation
1. Prepare and clean the DEM
Fill sinks in the Nahmint DEM using the "Fill" tool to remove artificial depressions that would disrupt water flow modelling.
2. Derive the stream network
Run Flow Direction (D8) → Flow Accumulation → Reclassify using a chosen threshold (cells ≥ threshold = 1, all others = NoData) to produce a clean stream raster. Then run Stream Order (Strahler) and Stream to Feature to convert the raster network into polylines with order attributes.
3. Calculate stream gradient
Multiply the stream raster by the DEM to get stream elevation, then use Zonal Statistics with StreamLinks as zones to get elevation change per segment. Convert the result to polygon, spatially join it with the stream polylines, and calculate percent gradient (elevation change / stream length × 100).
4. Estimate stream width and assign stream class
Manually measure 10–15 stream widths per order using the basemap, compute averages, and use a Python ifelse code block in Calculate Field to assign average width to all segments by order. Then combine gradient and width to assign each segment a BC stream class (S1–S6) using another Python conditional calculation.
5. Generate Reserve and Management Zone buffers
Create two new fields for buffer distances based on stream class, adjusting for the fact that streams are centerlines (not edges). Run the Buffer tool twice — once for Reserve Zone and once for the combined Reserve + Management Zone — dissolving both outputs into single features.
6. Delineate watersheds and contour lines
Run the Watershed tool using the flow direction and StreamLinks rasters to delineate catchment boundaries. Run the Contour tool on the DEM (100 m interval) to produce contour lines for topographic context.
7. Compose the final map
Bring together watersheds, contour lines, stream network symbolized by stream class, and the RMA buffers. Add an inset map highlighting an example stream reach with its Reserve and Management Zones, and include text showing total RMA area and stream network length.

## Key output
![Riparian Management in the Nahmint Watershed](/archive-posts/images/riparian_management.jpg)

# Reflection
- Learned how sink-filling is a necessary first step in hydrological modelling — even small DEM imperfections can trap flow and produce unrealistic watershed boundaries and stream networks.
- Learned that percent gradient serves as a proxy for fish-bearing potential, and that combining it with estimated channel width allows streams to be classified into a regulatory framework (BC stream classes) without requiring costly field surveys.
- Developed practical experience using Python code blocks within ArcGIS Pro's Calculate Field tool to apply conditional logic across large datasets — a more efficient and reproducible approach than manually reclassifying features.
- Understood how contour lines and watersheds together provide the spatial context needed to interpret and communicate RMA maps to a forest management audience, not just as technical outputs but as decision-support tools