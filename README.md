## Releaf AI-powered Application

### Project Introduction
This Artificial Intelligence application was designed to enhance the user's indoor plant experience. It offers personalized recommendations for houseplants tailored to the user's needs and preferences, along with a comprehensive tracking system to help them manage and care for their plants. By simplifying the plant selection and care process, Releaf not only elevates the living or work environment but also promotes mental well-being, making plant ownership effortless and enjoyable. 

Backend: JavaScript, Axios, Node.js

Frontend: React, HTML, CSS

Plant API: https://perenual.com/docs/api

Local Database: PostgreSQL

### How the User Can Use the Program
1. The user can create a new account. When the user enters login credentials, if the user login credentials are correct, the user will be able to log in and the account information will be stored in a local database.
2. In the Dashboard section, the user can add the plant name and location it is located in their house to get information on how to take care of the plant. The information includes: maintenance, sunlight exposure tolerance, watering schedule, lifespan, health benefits and one general tip. The user can add and remove a plant card. If the user has an account, the search history will be saved to the local database.
3. In the Query section's search bar, the user writes about the desired plant they want to buy in future. The program outputs the top three recommended plants with the plant's common name, scientific name, and a picture of the plant. 

### Technical Overview of How the Program Works
1. Creating an account and sign-in: The local database is designed with PostgreSQL. The user table contains the user ID, user name, hidden password, etc. The user authentication is enabled through cookies.
2. User dashboard: When the user uploads a plant name and plant location in the house, the Axios API makes a call to Perenual API that gets the correct data the user is looking for from a public database with data on 10000+ plants and sends that data to Axios API. Axios API then makes a call to Cohere API and it receives the call. According to the specific prompt (written by us), Cohere APU collects the 3 best plant names and plant properties and corresponding plant images. If the plant name field or any other property field is blank, ignore that plant and increment the number of iterations of the for loop by 1.
3. User query: When the user writes to the search bar, Axios API makes a call to the Cohere API. Cohere API does a web search, retrieves data from the web search, organizes and formats the data and sends the data to Axios API and Axios API returns the collected data (plant's common name, scientific name, watering schedule and sunlight exposure tolerance) to the user.

### DeltaHacks2025 Setup Guide

Follow these steps to set up the project and run it on your local machine.

---

#### Step 1: Prerequisites

Ensure the following are installed on your system:

- **Node.js** (v16+ recommended)
- **PostgreSQL** (installed and running)
- **Git** (optional, for cloning the repository)

---

#### Step 2: Clone the Project Repository

Clone the repository to your local machine and navigate to the project folder:

```bash
git clone https://github.com/tridibbanik17/DeltaHacks2025.git
cd ./DeltaHacks2025
```

---

#### Step 3: Backend Setup

Navigate to the backend directory:

```bash
cd ./backend
```

Install backend dependencies:

```bash
npm install
```

Configure the .env file:

Create a .env file in the backend directory if it doesn't already exist.

Add the following values to the file:

```env
DB_PASS='#Tomiwa12'
PLANT_API_KEY='sk-kj1z6783d86da43888202'
ORIGIN='http://localhost:5173'
```

Ensure the database is correctly set up:

Open PostgreSQL and create a database named DeltaHacks2025:

```sql
CREATE DATABASE DeltaHacks2025;
```

Update the credentials in db.js if your database username or host is different.

Start the backend server:

```bash
node server.js
```

You should see:
```arduino
Connection has been established successfully
Server is running on port 5000
````

---

#### Step 4: Frontend Setup

Navigate to the frontend directory:

```bash
cd ../frontend
```

Install frontend dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend server should start, typically at http://localhost:5173.

#### Step 5: Verify the Environment

Backend Verification:
Test the backend API endpoints using a tool like Postman or cURL.
Example endpoint to test: http://localhost:5000/auth.

Frontend Verification:
Open the frontend in a browser (e.g., http://localhost:5173) and confirm the UI loads correctly.

Database Verification:
Use a database management tool like pgAdmin to verify the DeltaHacks2025 database is populated correctly after testing the application.
You’re all set!

#### Front-end Showcase

<figure style="margin-bottom: 20px;">
  <img src="https://github.com/user-attachments/assets/b3a8eb3a-c8c1-4b37-a2c3-14ab0859b222" alt="Landing Page" style="max-width: 100%; border-radius: 8px;" />
  <figcaption style="text-align: center; font-size: 1rem; color: #555; margin-top: 10px;">Landing Page</figcaption>
</figure><be>

<figure style="margin-bottom: 20px;">
  <img src="https://github.com/user-attachments/assets/77e0e258-eff4-40da-b393-a1923609c3f8" alt="Sign-up option" style="max-width: 100%; border-radius: 8px;" />
  <figcaption style="text-align: center; font-size: 1rem; color: #555; margin-top: 10px;">Sign-up option</figcaption>
</figure><br>

<figure style="margin-bottom: 20px;">
  <img src="https://github.com/user-attachments/assets/aea8f4e4-081d-4674-9262-1e6d12e2fd75" alt="Query page where users can enter their preferences" style="max-width: 100%; border-radius: 8px;" />
  <figcaption style="text-align: center; font-size: 1rem; color: #555; margin-top: 10px;">Query page where users can enter their preferences</figcaption>
</figure><br>

<figure style="margin-bottom: 20px;">
  <img src="https://github.com/user-attachments/assets/a9ff4793-09fa-4f7e-a03d-fcac82bb2dae" alt="Adding a plant pop-up" style="max-width: 100%; border-radius: 8px;" />
  <figcaption style="text-align: center; font-size: 1rem; color: #555; margin-top: 10px;">Adding a plant pop-up</figcaption>
</figure><br>

<figure style="margin-bottom: 20px;">
  <img src="https://github.com/user-attachments/assets/dee8f48f-5eae-40c2-b30f-67bf86cb8f36" alt="Query responses with top three plant recommendations" style="max-width: 100%; border-radius: 8px;" />
  <figcaption style="text-align: center; font-size: 1rem; color: #555; margin-top: 10px;">Query responses with top three plant recommendations</figcaption>
</figure><br>

<figure style="margin-bottom: 20px;">
  <img src="https://github.com/user-attachments/assets/126086f1-2dfe-462d-b685-8047e74a7c3c" alt="Generate plant details" style="max-width: 100%; border-radius: 8px;" />
  <figcaption style="text-align: center; font-size: 1rem; color: #555; margin-top: 10px;">Generate plant details</figcaption>
</figure><br>

<figure style="margin-bottom: 20px;">
  <img src="https://github.com/user-attachments/assets/00c67f9f-d0cc-47f2-9ebc-f3e82dfaa394" alt="Homepage with links to informative external articles" style="max-width: 100%; border-radius: 8px;" />
  <figcaption style="text-align: center; font-size: 1rem; color: #555; margin-top: 10px;">Homepage with links to informative external articles</figcaption>
</figure><br>
