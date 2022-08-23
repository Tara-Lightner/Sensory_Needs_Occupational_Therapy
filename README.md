# Autism in the United States

## Background: 
Sensory Processing Disorders (SPD) are continued to be studied including Autism, ADHD, ODD, exc.  However there are SPD is not currently in the DSM.  There is a recent study that shows there are nerological differences to those who have sensory processing disorders.  As DSM definitions change throughout time how do we know what is the best framework for classification.  Interestinly enought one of the subsets of SPD, Autim is new as a diagnsis and recently has had s change in diffination (clasification).  Are there indicators that might correlate to what produce these neroglogical differences?  For the scope of this project we will be focusing on Austim and the relationship between reported indicators and diagnosis.

## Presentation (25 points)
## Team Google Drive
[Link to - Final_Presentation](https://drive.google.com/drive/u/0/folders/1Jwe2gP8jb_1W5QPOZSjVowWevnC5cHkG)

[Link to - Autism in the United States Google Slides Presentation](https://docs.google.com/presentation/d/13SCgl2SQF4RX6fgQHCViAJBk9nc9_eXYf5JLvXoNsME/edit#slide=id.p)

Remember, you won't necessarily be graded on whether or not you've built the very best model. Instead, you'll be graded on your process: 
- How did you select the model, and why? 

- What roadblocks did you encounter (there are always roadblocks!), and 
  - how did you solve them?
  - One of the road blocks we encountered is the degree in which we needed to be subject experts in a topic area in which we are not subject experts.  More specifically we were hoping to use a data set to see which autisim indicator were most influential in predicting if someone had autims.  However, the dataset we used did not have the specific purpose to diagnosis autism.  One then has to ask are any of the inputs actually indicators.  One line of thought is that we could consider correlation, vs. causation. Indicators for a diagnosis should actually inculde data points that would indicates signs of autims.  There are already test out there that do this.  One route would be to look at which similart inputs are also considered within a diagnosis.  However, without being subject experts, there might still be items that could be overlooked.  Instead we took a ground floor approach and change the overarching question to refelct similar purpost to the survey.  We refocused asking in comparison the national average of childrens health across the United states how are those diagnosed with autism above or below.  This can then be broken down into other filter groups, such as state level, economic level, gender, exc.  The strength in this question is it help to provide a representive picture of what the average autistic child deals with in there overall health.  What is the overalhealth of those with Autism?

  We used pgAdmin: Management Tools for Postgre SQL.
  
Content
The presentation should tell a cohesive story about the project and include the following:

### Description of the source of data
#### Data Sets that were explored for consideration:
* [ACS American Community Survey](https://www.census.gov/programs-surveys/acs)
* [U.S. bureau of labor statistics](https://www.bls.gov/)
-
#### The data set we ended up using was:
* The 2019-2020_NSCH_CAHMI_DRC data set was used.  Which is the National Survey for Childrens Health (NSCH) and Administration Maternal and Child and Adolescent Healht MEasurement Initiative (CAHMI), under a cooperative agreement with the Health Resources and Services Administration’s (HRSA) Maternal and Child Health Bureau (MCHB).  This data set includes data from 72,210 children ages 0-17 years.
There current interactive data looks as follows:
[Child Health Data Browse Survey](https://www.childhealthdata.org/browse/survey?s=2&y=32&r=1/)


### Questions the team hopes to answer with the data
 - How can trends in Autism Diagnosis over time be used to predict upcoming diagnoses? 
   - This was our original question, but the dataset we were originally trying to use was limited.
 - Are some identifiers of autims more likely to help determine if there will be a diagnosis of autism?  
   - This is our rough draft of our intital question
 - Are some identifiers of autims more likley to indicate the severity of an autism diagnosis? 
   - This is a potential question to further explore demending on our time or for future recomendations.
- Are there unique clustering in regards to autims severity levels and indicators?
  - This is a potential question to further explore demending on our time or for future recomendations.

### Description of the data exploration phase of the project
  The NSCH data obtained by request contains over 800 columns of data and 72,000 rows. This data was gathered in 2019 and 2020.

There are two columns that represent the data, columns that ended with "_1920" were used for this analysis and all other columns were dropped. These columns represent the combined 2019 and 2020 data. The column "fwc_1920" was dropped since it is a weighted value based on the initial analysis.

The [Exploratory Data Analysis (EDA) - A step by step guide](https://www.analyticsvidhya.com/blog/2021/05/exploratory-data-analysis-eda-a-step-by-step-guide/?) was utilized asfor our exploratory phase.


### Description of the Analysis phase of the project
A simple balanced random forest classifier model was used to analyze if there were any strong predictors in the data. The model returned a 92% accuracy score and an 89% recall score. Before running this model, columns relating to an autism diagnosis, autism medication, severity of autism, and other similar columns were dropped so that the model could use the diagnosis of autism as its target. Rows for the autism diagnosis containing the values 2, 95, or 99 were dropped. These values correspond to children that were told they have autism but don't, children younger than 2 years old, and missing responses respectively. The values of 1 and 3 correspond to a negative and a positive diagnosis respectively.

This data set shows potential for creating a questionairre based on identifiers weighted stronger by the BRFC model that can be used to predict an autism diagnosis. This could be used for parents wondering if they should get their child evaluated and could be used for early detection in the 0-2 year old range based on the trends seen in 3-17 year olds.

## Technologies, languages, tools, and algorithms used throughout the project

### Data Cleaning and Analysis
Jupyter notebok and Pandas will be used to clean the data and perform an exploratory analysis. Further analysis will be completed using Python.

### Database Storage
Psycopg - Postgresql database adapter is we are using to do preliminary work for segment one.
A possible consideration might be Mongo is the database we intend to use, and we will integrate Flask to display the data.

### Machine Learning
SciKitLearn is the ML library we'll be using to create a classifier. Our training and testing setup is 
train_test_split was used then training data with the BalancedRandomForestClassifier to resample


### Dashboard
Our dashboard is hosted on tableau-- [Autism Dashboard Link](https://public.tableau.com/app/profile/salvador.maciel/viz/Autismdashboard_16607918869220/Map)

## Analysis Results
### Recommendation for future analysis
- Anything the team would have done differently
- Slides


### Communication Protocols 
- Utilize class time Tuesdays and Thursdays from 7:00 p.m. - 9:00 p.m. e.s.t.
- Communicate per slack group channel proj-g8 to tag team members for urgent questions that need help within 24 hours.
- Utilize individual Git Hub branches for any individuals work that might not be needed from the final group branch or
- Utilize main branch to add each individauls contributions minimally once a week, an as progress occures that others may need to interact or pull from to continue their work
-  Utilize Google Drive team Folder that includes documents such as notes and final presentation to help keep track for overal project management
-- Utilize class time Tuesdays and Thursdays from 7:00 p.m. - 9:00 p.m. e.s.t.
- Communicate per slack group channel proj-g8 to tag team members for urgent questions that need help within 24 hours.
- Utilize individual Git Hub branches for any individuals work that might not be needed from the final group branch or
- Utilize main branch to add each individual contributions minimally once a week, an as progress occures that others may need to interact or pull from to continue their work
-  Utilize Google Drive team Folder that includes documents such as notes and final presentation to help keep track for overal project management
- Git Hub Branches
  - Goal: separate your work and keep the main branch free from code in progress. 
create a new branch for each topic. 
For example, code to clean a dataset on tomatoes could be called cleaning_tomatoes. If the same person started analysis on the data, he or she would then create a new branch called analyzing_tomatoes.
  - All code in the main branch should be production-ready.
    - clean
    - commented
    - easy to read
    - adhere to a coding standard, such as PEP8.

Jupyter Notebook: For each coding section, please alternate with a md cell that explains what is happening


### The presentation should be finalized in Google Slides and include the following:

- Slides are primarily images or graphics (rather than primarily text).
- Images are clear, in high-definition, and directly illustrative of subject matter.

### Live Presentation
Requirements for the live presentation follow:

- All team members present in equal proportions.
- The team demonstrates the dashboard's real-time interactivity.
- The presentation falls within any time limits provided by the instructor.
- The submission includes speaker notes, flashcards, or a video of the presentation rehearsal.

## GitHub Repository (10 points)
- repository requirements in the rubrics for the other three segments.
NEED TO LIST REQUIREMENTS HERE

- make your repository stand out.

### Main Branch
- All code in the main branch should be production-ready. 
- All code should be:
  - clean
  - commented
  - easy to read
  - adhere to a coding standard, such as PEP8.

- All code necessary to perform exploratory analysis
- All code necessary to complete the machine learning portion of the project
- Any images that have been created (at least three)
- Requirements.txt file
## README.md should include:

- Cohesive, structured outline of the project (this may include images, but they should be easy to follow and digest)

### IMPORTANT
The descriptions and explanations required in all other project deliverables should also be in your README.md as part of your outline, unless otherwise noted.

## Machine Learning Model
### Segment 1: Create a model mockup, importing data in the desired format and exporting data in the required format. 
Which model did you choose and why?

How are you training your model?

What is the model's accuracy?
0.9226404429705763

How does this model work?


### Segments 2 & 3: Train your model and confirm it's working with your robust database. 
We switched over to another data set.  To help start our work we used the homework template with our new data set. 

### Segment 4: Submit your machine learning model, the description and working code, as well as the following information:

#### Description of data preprocessing

#### Description of feature engineering and the feature selection, including the team's decision-making process

#### Description of how data was split into training and testing sets

#### Explanation of model choice, including limitations and benefits
  - We compared the different supervised learning models and used the out put to decided which one was a better fit.

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
!!!!Sean we ned the ERD
![]()

## Dashboard (15 points)

![]()
Requirements:

- The dashboard presents a data story that is logical and easy to follow for someone unfamiliar with the topic. 

- It should include all of the following:
   - Images from the initial analysis
   - Data (images or report) from the machine learning task
  - At least one interactive element
Either the dashboard is published or the submission includes a screen capture video of it in action
