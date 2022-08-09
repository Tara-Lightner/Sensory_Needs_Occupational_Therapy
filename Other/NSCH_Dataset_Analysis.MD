# NSCH Data Analysis

The NSCH data obtained by request contains over 800 columns of data and 72,000 rows. This data was gathered in 2019 and 2020.

There are two columns that represent the data, columns that ended with "_1920" were used for this analysis and all other columns were dropped. These columns represent the combined 2019 and 2020 data. The column "fwc_1920" was dropped since it is a weighted value based on the initial analysis.

A simple balanced random forest classifier model was used to analyze if there were any strong predictors in the data. The model returned a 92% accuracy score and an 89% recall score.
Before running this model, columns relating to an autism diagnosis, autism medication, severity of autism, and other similar columns were dropped so that the model could use the diagnosis of autism as its target.
Rows for the autism diagnosis containing the values 2, 95, or 99 were dropped. These values correspond to children that were told they have autism but don't, children younger than 2 years old, and missing responses respectively.
The values of 1 and 3 correspond to a negative and a positive diagnosis respectively.

This data set shows potential for creating a questionairre based on identifiers weighted stronger by the BRFC model that can be used to predict an autism diagnosis.
This could be used for parents wondering if they should get their child evaluated and could be used for early detection in the 0-2 year old range based on the trends seen in 3-17 year olds.