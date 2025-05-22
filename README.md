# VestAbode

## Overview
VestAbode is designed to keep users informed and proactive, ensuring their safety equipment is functional and their home infrastructure is properly maintained. It provides reminders to users to check up on home appliances like their CO2 alarm, as well as reminding them to schedule maintenance. It also provides useful information for storing and handling chemicals, as well as contacts to aid in the home safety mission.

---

## Features
- **Reminder**: Users can add appliances or home infrastructure elements (e.g., fire extinguishers, CO alarms) and receive automated reminders for checkups or maintenance.
- **Safety Data Sheet (SDS) Access**: Integrated chemical database allows users to search for chemicals and retrieve safety data, handling instructions, and storage recommendations.
- **Technician Contact Directory:**: A list of local or categorized service providers who can assist with home maintenance needs (technicians, electricians, and plumbers).
- **Vesta AI Assistant**: An interactive chatbot powered by Google GenAI that answers user questions about home safety, chemical handling, and maintenance best practices.

---

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript, jQuery
- **Backend**: node.js, express, express-session, EJS, dotenv, connect-mongo, bcrypt, joi, axios
- **Database**: MongoDB
- **API**: google/genai, yelp

---

## Usage
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

## Project Structure
```
2800-202510-BBY04/
├── app/
│   ├── html/
│   │   ├── templates/
│   │   │   ├── footer.html
│   │   │   └── navbar.html
│   │   ├── login.html
│   │   ├── main.html
│   │   ├── reminders.html
│   │   └── vestabot.html
│   ├── prompts/
│   │   └── initial-prompt.txt
│   └── views/
│       ├── contacts.ejs
│       ├── sds.ejs
│       └── sdsTemplate.ejs
├── public/
│   ├── images/
│   │   ├── clock.png
│   │   ├── contacts.png
│   │   ├── default_pfp.jpg
│   │   ├── favicon.ico
│   │   ├── home.png
│   │   ├── Logo-Icon.png
│   │   ├── logo.jpg
│   │   ├── Logo.png
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
│       └── style.css
├── .gitignore
├── databaseConnection.js
├── index.js
├── package-lock.json
├── package.json
└── README.md
```

---

## Contributors
- **Jacob Fonseca** - BCIT CST Student...
- **Esin Sahutoglu** - BCIT CST Student...
- **Alexander Fisher** - BCIT CST Student...
- **Ervin Santiago** - BCIT CST Student...

---

## Acknowledgments
...

---

## Limitations and Future Work
### Limitations
- ...

### Future Work
- ...

---

## License
...