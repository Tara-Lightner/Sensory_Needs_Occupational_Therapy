# Sensory Needs Occupational Therapy
Purpose:  Autism was added to the DSM-IV in 1994.  More research continues to be looked into around Sensory Processing Disorders, this creates a unique space for inquiry.
Condiseration for data sources: https://towson.libguides.com/OCTH/datasets

A few other thoughts on additoinal data sets:
* ACS American Community Survey https://www.census.gov/programs-surveys/acs
* U.S. bureau of labor statistics https://www.bls.gov/

Presentation (25 points)
The presentation itself is worth 25 points, or a full quarter of your grade for the final segment. This is your chance to share a polished, interview or boardroom ready deliverable.

Remember, you won't necessarily be graded on whether or not you've built the very best model. Instead, you'll be graded on your process: 
- How did you select the model, and why? 
- What roadblocks did you encounter (there are always roadblocks!), and 
  - how did you solve them?
Content
The presentation should tell a cohesive story about the project and include the following:

- Selected topic
- Reason the topic was selected
- Description of the source of data
- Questions the team hopes to answer with the data
- Description of the data exploration phase of the project
- Description of the analysis phase of the project
- Technologies, languages, tools, and algorithms used throughout the project
- Result of analysis
- Recommendation for future analysis
- Anything the team would have done differently
- Slides

## The presentation should be finalized in Google Slides and include the following:

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

- Link to dashboard (or link to video of dashboard demonstration)
- Link to Google Slides presentation

### IMPORTANT
The descriptions and explanations required in all other project deliverables should also be in your README.md as part of your outline, unless otherwise noted.

Individual Branches: Requirements

- At least one branch for each team member
- Each team member has at least four commits for the duration of the final segment (16 total commits per person)

## Machine Learning Model (25 points)
- In your first segment, you'll create a model mockup, importing data in the desired format and exporting data in the required format. 
- In your second and third segments, you'll train your model and confirm it's working with your robust database. 
- For the final segment, you'll submit your machine learning model, the description and working code, as well as the following information:

  - Description of data preprocessing

  - Description of feature engineering and the feature selection, including the team's decision-making process
  - Description of how data was split into training and testing sets
  - Explanation of model choice, including limitations and benefits
  - Explanation of changes in model choice (if changes occurred between the Segment 2 and Segment 3 deliverables)
   - Description of how the model was trained (or retrained if the team used an existing model)
  - Description and explanation of model's confusion matrix, including final accuracy score
  - Additionally, the model obviously addresses the question or problem the team is solving.

### IMPORTANT
If statistical analysis is not included as part of the current analysis, the team should add a description of how it would be included in the next phases of the project.

## Database Integration (25 points)
- Just as you did for the machine learning model, you'll create a mockup or "dummy" database during the first segment of your project to make sure the model works. This mockup will follow the format of the expected database, but it will be simpler and likely in a CSV or JSON format.

- For your final segment, you'll present a project with a fully integrated database, with the following features:

  - Stores static data for use during the project
   - Interfaces with the project in some format (e.g., scraping updates the database, or database connects to the model)
   - Includes at least two tables (or collections if using MongoDB)
   - Includes at least one join using the database language (not including any joins in Pandas)
  - Includes at least one connection string (using SQLAlchemy or PyMongo)
### IMPORTANT
If you use a SQL database, you must provide your Entity Relationship Diagram (ERD) with relationships.

## Dashboard (15 points)
You'll demonstrate your dashboard during the presentation, but it is important enough to count as its own aspect of the deliverable. When building your dashboard, keep the following requirements in mind:

- The dashboard presents a data story that is logical and easy to follow for someone unfamiliar with the topic. It should include all of the following:

  - Images from the initial analysis
Data (images or report) from the machine learning task
  - At least one interactive element
Either the dashboard is published or the submission includes a screen capture video of it in action.
