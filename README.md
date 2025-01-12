# DeltaHacks2025
This is a project completed in a 24-hour hackathon called DeltaHacks 2025.
Backend: JavaScript
Frontend: React, HTML, CSS
Plant API: https://perenual.com/docs/api
Local Database: PostgreSQL

Top three features:
1. The user can create an account. The login credentials are stored in local database.
2. User prompts about plants to keep in their house and an API of Cohere to get the top plant name and its scientific name. The scientific name is searched in an external database of 10000+ plants using a public API. The extracted plant properties are entered again to Cohere using the first API and the user gets a recommendation of top 3 plants with 3 properties.
3. User stores their plants in their account by uploading the plant image, plant name and the location of the house it is located. Based on the plant name and location collected from the local database, an API goes to Cohere and retrieves information about certain plant properties like watering schedule, lifespan, health benefits of the plant, etc.
