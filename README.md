# releaf AI-powered Application
# DeltaHacks2025
# 24-hour hackathon

#### Project Introduction
This Artificial Intelligence application was designed to enhance the user's indoor plant experience. It offers personalized recommendations for houseplants tailored to the user's needs and preferences, along with a comprehensive tracking system to help them manage and care for their plants. By simplifying the plant selection and care process, Releaf not only elevates the living or work environment but also promotes mental well-being, making plant ownership effortless and enjoyable. 

Backend: programming language: JavaScript, libraries: Axios, Node.js
Frontend: React, HTML, CSS
Plant API: https://perenual.com/docs/api
Local Database: PostgreSQL

#### How the User Can Use the Program
1. The user can create a new account. When the user enters login credentials, if the user login credentials are correct, the user will be able to log in and the account information will be stored in a local database.
2. In the Dashboard section, the user can add the plant name and location it is located in their house to get information on how to take care of the plant. The information includes: maintenance, sunlight exposure tolerance, watering schedule, lifespan, health benefits and one general tip. The user can add and remove a plant card. If the user has an account, the search history will be saved to the local database.
3. In the Query section's search bar, the user writes about the desired plant they want to buy in future. The program outputs the top three recommended plants with the plant's common name, scientific name, and a picture of the plant. 

#### Technical Overview of How the Program Works
1. Creating an account and sign-in: The local database is designed with PostgreSQL. The user table contains the user ID, user name, hidden password, etc. The user authentication is enabled through cookies.
2. User dashboard: When the user uploads a plant name and plant location in the house, the Axios API makes a call to Perenual API that gets the correct data the user is looking for from a public database with data on 10000+ plants and sends that data to Axios API. Axios API then makes a call to Cohere API and it receives the call. According to the specific prompt (written by us), Cohere APU collects the 3 best plant names and plant properties and corresponding plant images. If the plant name field or any other property field is blank, ignore that plant and increment the number of iterations of the for loop by 1.
3. User query: When the user writes to the search bar, Axios API makes a call to the Cohere API. Cohere API does a web search, retrieves data from the web search, organizes and formats the data and sends the data to Axios API and Axios API returns the collected data (plant's common name, scientific name, watering schedule and sunlight exposure tolerance) to the user.
