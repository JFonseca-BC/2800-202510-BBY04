# VestAbode

## Project Description
VestAbode is designed to keep users informed and proactive, ensuring their safety equipment is functional and their home infrastructure is properly maintained. It provides reminders to users to check up on home appliances like their CO2 alarm, as well as reminding them to schedule maintenance. It also provides useful information for storing and handling chemicals, as well as contacts to aid in the home safety mission.

---

## Feature Descriptions
- **Reminder**: Users can add appliances or home infrastructure elements (e.g., fire extinguishers, CO alarms) and receive automated reminders for checkups or maintenance.
- **Safety Data Sheet (SDS) Access**: Integrated chemical database allows users to search for chemicals and retrieve safety data, handling instructions, and storage recommendations.
- **Technician Contact Directory:**: A list of local or categorized service providers who can assist with home maintenance needs (technicians, electricians, and plumbers).
- **Vesta AI Assistant**: An interactive chatbot powered by Google GenAI that answers user questions about home safety, chemical handling, and maintenance best practices.

---

## Technologies
- **Frontend**: HTML, CSS, JavaScript, jQuery
- **Backend**: node.js, express, express-session, EJS, dotenv, connect-mongo, bcrypt, joi, axios
- **Database**: MongoDB
- **API**: google/genai, Yelp, Geolocation, OpenStreetMap

---

## Files
```
2800-202510-BBY04/
├── app/
│   ├── html/
│   │   ├── 404.html
│   │   ├── login.html
│   │   ├── main.html
│   │   ├── reminders.html
│   │   ├── vestabot.html
│   │   └── templates/
│   │       ├── chatBubble.html
│   │       ├── footer.html
│   │       └── navbar.html
│   ├── prompts/
│   │   └── initial-prompt.txt
│   └── views/
│       ├── contacts.ejs
│       ├── sds.ejs
│       └── sdsTemplate.ejs
├── dbScripts/
│   └── chemicals_inserts.js
├── node_modules/ 
├── public/
│   ├── images/
│   │   ├── clock.png
│   │   ├── contacts.png
│   │   ├── default_pfp.jpg
│   │   ├── favicon.ico
│   │   ├── home.png
│   │   ├── logo.jpg
│   │   ├── Logo.png
│   │   ├── logoicon.png
│   │   ├── plus.png
│   │   ├── sds.png
│   │   └── vestabot-icon.png
│   ├── scripts/
│   │   ├── addAppliance.js
│   │   ├── authentication.js
│   │   ├── location.js
│   │   ├── sdsDownload.js
│   │   ├── sdsSearch.js
│   │   ├── templateLoader.js
│   │   └── vestabot.js
│   └── styles/
│       ├── login.css
│       ├── main.css
│       ├── reminders.css
│       ├── style.css
│       └── vestabot.css
├── .env
├── .gitignore
├── databaseConnection.js
├── index.js
├── package-lock.json
├── package.json
└── README.md
```
**Note**: The node_module/ files have not been added to the list above, but should be there if the project is installed.

---

## Installation
To get started with VestAbode, follow the steps below to set up your local development environment.

### 1. Required Installations
1.1 Languages & Runtimes
- Node.js: Download and install Node.js
- npm: Comes bundled with Node.js

1.2 IDEs
- Visual Studio Code

1.3 Database
- MongoDB Community Server: Download MongoDB
- OR use MongoDB Atlas (cloud version): Set up MongoDB Atlas

1.4 Other Required Software
- Git: Download Git


### 2. Required Modules
After cloning the repo, run "npm install" for the following:
- express
- express-session
- ejs
- dotenv 
- connect-mongo
- bcrypt
- joi
- axios


### 3. Create a .env file
Create a .env file in the project folder and add the following:
```
PORT=<your-port-number>
MONGODB_HOST=<mongodb-cluster>
MONGODB_USER=<mongodb-user>
MONGODB_PASSWORD=<mongodb-password>
MONGODB_DATABASE=<database-name>
MONGODB_SESSION_SECRET=<GUID>
NODE_SESSION_SECRET=<GUID>
GOOGLE_API_KEY=<your-google-gemini-api-key>
YELP_API_KEY=<your-yelp-api-key>
```
Replace the <...> above with associated information. 

**Note**: You will need Google Gemini and Yelp Business Search API keys.

### 4. Installation Order & Location
Installation Order:
1. Install Git and VS Code
2. Install Node.js (includes npm)
3. Install MongoDB (or create a MongoDB Atlas cluster)
4. Clone the repository
5. Install dependencies "npm i"
6. Create and configure .env file (see above)
7. Seed the database with chemical_inserts.js
8. Start the app with the command: "node index.js"

Installation Location:
Avoid restricted system directories and clone the repo into any directory of your choosing.

---

## How to Use
Below is a basic step by step guide to utilize the VestAbode features.

### Creating an Account
1. Click this [link](https://two800-202510-bby04.onrender.com/).
2. Register with a name, email, and password or log in with your account's email and password if you have already registered.

### Creating/Using Reminders
To utilize the reminder feature:
1. Navigate to the Reminders page.
2. Click the plus (+) icon to add a new appliance or system (e.g., smoke detector, water heater).
3. Enter the appliance/system's name, month and year last serviced, and appliance type.
4. View all saved reminders in a list format. Update or delete reminders as needed.

### Accessing SDSs
To utilize the SDS feature:
1. Navigate to the SDS page.
2. Use the search bar to enter the name of a chemical (e.g., "Bleach", "Acetone") or click the 1st letter of the chemical.
3. Click on the chemical to view its Safety Data Sheet.
4. Click the Download PDF button if you wish to download the SDS.

### Contacting Technicians
To utilize the contacts feature:
1. Navigate to the Contacts or Technicians page.
2. Enter the appliance or system that is broken.
3. View contact details.

### Talking With Vesta
To utilize the Vesta AI feature:
1. Navigate to the VestaBot page.
2. Type your question into the chat interface (e.g. "How often should I replace my furnace filter?" or "Is bleach safe to mix with vinegar?").
3. Continue the conversation as needed to get more details or clarification.

**Note**: The bot utilizes cookies to remember your conversation. If you clear your browser's cookies, it will not remember your last conversation.

---

## Contributors
Members of BBY04:
- **Jacob Fonseca** - Set 2D
- **Esin Sahutoglu** - Set 1A
- **Alexander Fisher** - Set 1D
- **Ervin Santiago** - Set 2A

---

## Acknowledgments
### APIs:
- [Google Gemini](https://ai.google.dev/gemini-api/docs)
- [Geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- [Yelp Business Search](https://docs.developer.yelp.com/reference/v3_business_search)
- [OpenStreetMap](https://wiki.openstreetmap.org/wiki/API)

### API Usage:
- **Google Gemini** is  utilized in creating a Vesta, which is the AI home maintenance/safety assistant. The AI chat is created utilizing the API key and loaded with the initial prompt and  the current session's chat history. 
- **Geolocation** is utilized in accessing the user's current location using longitude and latitude coordinates.
- **OpenStreetMap** is utilized in creating a map on the contacts page and displaying the user's current city and country.
- **Yelp** is utilized in helping the user find the contact information of technicians and workers who can help maintain their home.

### External Source Code/Ideas/Inspiration:
- Reddit Post r/openstreetmap: [Get the user's location](https://www.reddit.com/r/openstreetmap/comments/iab0ar/get_the_users_location/): The post helped us create the location functionality.

### Data Sources: 
- [Chemical Safety's Global Database](https://chemicalsafety.com/sds-search/)

### AI Usage:
AI Tools like ChatGPT, Deepseek Gemini were used in the creation of this project. The AI tools were utilized in helping with creating documentation, commenting, debugging, and code creation. 

---

## Licenses
VestAbode by Jacob Fonseca, Esin Sahutoglu, Alexander Fisher, and Ervin Santiago is licensed under the
[Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/).

Summary of Terms
You are free to:
- Share — copy and redistribute the material in any medium or format
- Adapt — remix, transform, and build upon the material

Under the following terms:
- Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made.
- NonCommercial — You may not use the material for commercial purposes.
- No Additional Restrictions — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.

This license is intended for educational, research, and personal use only.