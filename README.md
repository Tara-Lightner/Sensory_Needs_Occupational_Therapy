# Autism in the United States

## Background:

Sensory Processing Disorders (SPD) are continued to be studied including Autism, ADHD, ODD, exc. However, there are SPD is not currently in the DSM. There is a recent study that shows there are neurological differences to those who have sensory processing disorders. As DSM definitions change throughout time how do we know what is the best framework for classification. Interestingly enough one of the subsets of SPD, Autism is new as a diagnosis and recently has had s change in definition (classification). Are there indicators that might correlate to what produce these neurological differences? For the scope of this project we will be focusing on Autism and the relationship between reported indicators and diagnosis.

## Important Links:

## [Presentation Link](https://docs.google.com/presentation/d/13SCgl2SQF4RX6fgQHCViAJBk9nc9_eXYf5JLvXoNsME/edit?usp=sharing)

## [Google Team Folder](https://drive.google.com/drive/folders/1Jwe2gP8jb_1W5QPOZSjVowWevnC5cHkG?usp=sharing)

[]()



### Challenges and Solutions

  - One of the roadblocks we encountered was the degree to which we needed to be subject experts in a topic area in which we are not subject experts. More specifically, we were hoping to use a dataset to see which autism indicators were most influential in predicting if someone had autism. However, the dataset we used did not have the sole or specific purpose of diagnosing autism. One then must ask are any of the inputs are actual (correlation) indicators. One line of thought is that we could consider correlation vs. causation. Indicators for a diagnosis should include data points that would indicates signs of autism. There are already test out there that do this. One route would be to look at which similar inputs are also considered within a diagnosis. However, without being subject experts, there might still be items that could be overlooked. Instead, we took a ground floor approach and change the overarching question to reflect similar purpose to the survey. We refocused asking in comparison the national average of children’s health across the United States how are those diagnosed with autism above or below. This can then be broken down into other filter groups, such as state level, economic level, gender, exc. The strength in this question is it help to provide a representative picture of what the average autistic child deals with in their overall health. What is the overall health of those with Autism?

  We used pgAdmin: Management Tools for Postgre SQL.

### Description of Data Set

- The 2019-2020_NSCH_CAHMI_DRC data set was used. Which is the National Survey for Children’s Health (NSCH) and Administration Maternal and Child and Adolescent Health Measurement Initiative (CAHMI), under a cooperative agreement with the Health Resources and Services Administration’s (HRSA) Maternal and Child Health Bureau (MCHB). This data set includes data from 72,210 children ages 0-17 years.
  There current interactive data looks as follows:
  [Child Health Data Browse Survey](https://www.childhealthdata.org/browse/survey?s=2&y=32&r=1/)

### Project Questions

- How can trends in Autism Diagnosis over time be used to predict upcoming diagnoses?
  - This was our original question, but the dataset we were originally trying to use was limited.
- Are some identifiers of autism more likely to help determine if there will be a diagnosis of autism?
  - This is our rough draft of our initial question
- Are some identifiers of autism more likely to indicate the severity of an autism diagnosis?
  - This is a potential question to further explore, demanding our time or for future recommendations.
- Is there unique clustering in regard to autism severity levels and indicators?
  - This is a potential question to further explore, demanding our time or for future recommendations.

### Final Refocused Questions (Answered through Data Set)


### Description of the data exploration phase of the project

The NSCH data obtained by request contains over 800 columns of data and 72,000 rows. This data was gathered in 2019 and 2020.

For the first exploratory analysis and machine learning, there are many duplicate columns. Although they had different headings, the data itself was identical. As this dataset contained two columns that represent the data, columns that ended with "\_1920" were used for this analysis and all other columns were dropped. These columns represent the combined 2019 and 2020 data. The column "fwc_1920" was dropped since it is a weighted value based on the initial analysis.

The [Exploratory Data Analysis (EDA) - A step by step guide](https://www.analyticsvidhya.com/blog/2021/05/exploratory-data-analysis-eda-a-step-by-step-guide/?) was utilized for our exploratory phase.

![Dashboard](../../../../Desktop/Sensory_Needs_Occupational_Therapy/Dashboard)

### Description of the Analysis phase of the project

A simple, balanced random forest classifier model was used to analyze if there were any strong predictors in the data. The model returned a 92% accuracy score and an 89% recall score. Before running this model, columns relating to an autism diagnosis, autism medication, severity of autism, and other similar columns were dropped so that the model could use the diagnosis of autism as its target. Rows for the autism diagnosis containing the values 2, 95, or 99 were dropped. These values correspond to children that were told they have autism but don't, children younger than two years old, and missing responses, respectively. The values of 1 and 3 correspond to a negative and a positive diagnosis respectively.

This data set shows potential for creating a questionnaire based on identifiers weighted stronger by the BRFC model that can be used to predict an autism diagnosis. This could be used for parents wondering if they should get their child evaluated and could be used for early detection in the 0-2 year old range based on the trends seen in 3-17 year old.

## Technologies, languages, tools, and algorithms used throughout the project
We used pgAdmin: Management Tools for Postgre SQL.
We used Jupternotebook and Pandas
We used python language.
### Data Cleaning and Analysis

Jupyter notebook and python language with Pandas will be used to clean the data and perform an exploratory analysis. Further analysis will be completed using Python.

### Database Storage

The database is stored in PostgreSQL 11 using pgAdmin 4, SQLALchemy, and psycopg2 to connect to the machine learning model. The ERD for this database can be found in the project presentation.

### Machine Learning

SciKitLearn is the ML library we'll be using to create a classifier. Our training and testing setup is
train_test_split was used, then training data with the BalancedRandomForestClassifier to resample. This was initially done on a subset of the data containing half the original columns. Columns dropped were either duplicates or were used to directly calculate another column. These columns were then ranked using the Balanced Random Forest Classifier to filter for the top 10 columns that were relevant to predicting autism diagnosis based on the current understanding of autism. These 10 columns were used in a balanced random forest and easy ensemble classifier model to confirm the accuracy remained high. Both models performed similarly at 82% accuracy.

### Dashboard

Our dashboard is hosted on tableau-- [Autism Dashboard Link](https://public.tableau.com/app/profile/salvador.maciel/viz/Autismdashboard_16607918869220/Map)

## Analysis Results

### Recommendation for future analysis

- 

### Communication Protocols

- Utilize class time Tuesdays and Thursdays from 7:00 p.m. - 9:00 p.m. e.s.t.
- Communicate per slack group channel proj-g8 to tag team members for urgent questions that need help within 24 hours.
- Utilize individual Git Hub branches for any individual work that might not be needed from the final group branch or
- Utilize the main branch to add everyone’s contributions minimally once a week, and as progress occurs that others may need to interact or pull from to continue their work
- Utilize Google Team Drive team that includes documents such as notes and final presentation to help keep track of overall project management
  -- Utilize class time Tuesdays and Thursdays from 7:00 p.m. - 9:00 p.m. e.s.t.
- Communicate per slack group channel proj-g8 to tag team members for urgent questions that need help within 24 hours.
- Utilize individual Git Hub branches for any individual work that might not be needed from the final group branch or
- Utilize main branch to add each individual contribution minimally once a week, an as progress occurs that others may need to interact or pull from to continue their work
- Utilize Google Team Drive Folder that includes documents such as notes and final presentation to help keep track for overall project management
- Git Hub Branches
  - Goal: separate your work and keep the main branch free from code in progress.
    create a new branch for each topic.
    For example, code to clean a dataset on tomatoes could be called cleaning tomatoes. If the same person started analysis on the data, he or she would then create a new branch called analyzing_tomatoes.
  - All code in the main branch should be production-ready.
    - clean
    - commented
    - easy to read
    - adhere to a coding standard, such as PEP8.

Jupyter Notebook: For each coding section, please alternate with a md cell that explains what is happening


### Main Branch / GitHub
- All code necessary to perform exploratory analysis
- Any images that have been created (at least three)
- Requirements.txt file

### IMPORTANT

The descriptions and explanations required in all other project deliverables should also be in your README.md as part of your outline, unless otherwise noted.

## [Machine Learning Model](/Machine_Learning_Session2/)

### Segment 1: Create a model mockup, importing data in the desired format and exporting data in the required format.

### [Machine Learning Code File 1](/Machine_Learning_Session2/Maching_Learning_Exploratory_Research_NSCH_Sean.ipynb) 

### How did you select the model, and why?

Which model did you choose and why?

How are you training your model?

What is the model's accuracy?
0.9226404429705763

How does this model work?

### Segments 2 & 3: Train your model and confirm it's working with your robust database.

### [Machine Learning File 2]() 

We switched over to another data set. To help start our work we used the homework template with our new data set.

### Segment 4: Submit your machine learning model, the description and working code, as well as the following information:
### [Machine Learning File 2]() 

#### Description of data preprocessing

#### Description of feature engineering and the feature selection, including the team's decision-making process

#### Description of how data was split into training and testing sets

#### Explanation of model choice, including limitations and benefits

- We compared the different supervised learning models and used the output to decide which one was a better fit.

#### Explanation of changes in model choice (if changes occurred between the Segment 2 and Segment 3 deliverables)

#### Description of how the model was trained (or retrained if the team used an existing model)

#### Description and explanation of model's confusion matrix, including final accuracy score

- Additionally, the model obviously addresses the question or problem the team is solving.

### IMPORTANT

If statistical analysis is not included as part of the current analysis, the team should add a description of how it would be included in the next phases of the project.

## Database Integration

### Segment 1: Create a mockup or "dummy" database to make sure the model works. This mockup will follow the format of the expected database, but it will be simpler and likely in a CSV or JSON format.

### Segment 2:

### Segment 3:

### Final Segment: Present a project with a fully integrated database, with the following features:

- Stores static data for use during the project

- Interfaces with the project in some format (e.g., scraping updates the database, or database connects to the model)
- We did not find this appropriate with our time as we had a csv and the survey items slightly change each your to help decisions makers gather the data they need to make relevant decision.

- Includes at least two tables

- Includes at least one join using the database language (not including any joins in Pandas)

- Includes at least one connection string (using SQLAlchemy or PyMongo)

### Entity Relationship Diagram (ERD) with relationships.

!!!!Sean we need the ERD
![]()

## Dashboard (15 points)


![]()
Requirements: