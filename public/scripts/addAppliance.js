document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const addApplianceCard = document.getElementById('addAppliance');
    const reminderTemplate = document.getElementById('reminderTemplate');
    
    // Hide the template reminder card initially
    if (reminderTemplate) {
        reminderTemplate.style.display = 'none';
    }
    
    // Load initial appliance count
    updateApplianceCount();
    
    // Add click event listener to the card, but only if it's not already showing the form
    addApplianceCard.addEventListener('click', function(e) {
        // If the click is inside a form element, don't replace the content
        if (e.target.closest('form, input, select, button')) {
            return;
        }
        
        e.preventDefault();
        showApplianceForm();
    });
    
    // Function to show the appliance form
    function showApplianceForm() {
        // Replace card content with form
        addApplianceCard.innerHTML = `
            <div class="card-body">
                <form id="applianceForm">
                    <div class="mb-3">
                        <label for="applianceName" class="form-label">Appliance Name</label>
                        <input type="text" class="form-control" id="applianceNameInput" required>
                    </div>
                    
                    <div class="mb-3">
                        <label class="form-label">Last Serviced</label>
                        <div class="row">
                            <div class="col">
                                <select class="form-select" id="serviceMonth" required>
                                    <option value="" disabled selected>Month</option>
                                    <option value="01">January</option>
                                    <option value="02">February</option>
                                    <option value="03">March</option>
                                    <option value="04">April</option>
                                    <option value="05">May</option>
                                    <option value="06">June</option>
                                    <option value="07">July</option>
                                    <option value="08">August</option>
                                    <option value="09">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                            </div>
                            <div class="col">
                                <select class="form-select" id="serviceYear" required>
                                    <option value="" disabled selected>Year</option>
                                    ${generateYearOptions()}
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mb-3">
                        <label for="applianceType" class="form-label">Appliance Type</label>
                        <select class="form-select" id="applianceType" required>
                            <option value="" disabled selected>Select type</option>
                            <option value="Alarm">Alarm</option>
                            <option value="Large Appliance">Large Appliance</option>
                        </select>
                    </div>
                    
                    <div class="d-flex justify-content-end">
                        <button type="button" class="btn btn-outline-danger me-2" id="cancelBtn">Cancel</button>
                        <button type="submit" class="btn btn-primary" id="saveBtn">Save</button>
                    </div>
                </form>
            </div>
        `;
        
        // Add event listener for cancel button
        document.getElementById('cancelBtn').addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent the card click event from firing
            resetAddApplianceCard();
        });
        
        // Add event listener for form submission
        document.getElementById('applianceForm').addEventListener('submit', function(e) {
            e.preventDefault();
            e.stopPropagation(); // Prevent the card click event from firing
            saveAppliance();
        });
    }
    
    // Function to generate year options (current year and past 10 years)
    function generateYearOptions() {
        const currentYear = new Date().getFullYear();
        let options = '';
        for (let i = 0; i <= 10; i++) {
            const year = currentYear - i;
            options += `<option value="${year}">${year}</option>`;
        }
        return options;
    }
    
    // Function to reset the add appliance card
    function resetAddApplianceCard() {
        const addApplianceCard = document.getElementById('addAppliance');
        addApplianceCard.innerHTML = `
            <div class="card-body d-flex align-items-center">
                <img src="./images/plus.png" alt="Add" width="40" height="40" class="mr-2">
                <h5 class="card-title mb-0 text-dark">Add Appliance</h5>
            </div>
        `;
    }
    
    // Function to save appliance data
    async function saveAppliance() {
        const applianceName = document.getElementById('applianceNameInput').value;
        const serviceMonth = document.getElementById('serviceMonth').value;
        const serviceYear = document.getElementById('serviceYear').value;
        const applianceType = document.getElementById('applianceType').value;
        
        if (!applianceName || !serviceMonth || !serviceYear || !applianceType) {
            alert('Please fill out all fields');
            return;
        }
        
        try {
            // Get user email from session
            const response = await fetch('/api/user');
            const userData = await response.json();
            
            if (!userData || !userData.email) {
                throw new Error('User not authenticated');
            }
            
            // Save appliance to database
            const saveResponse = await fetch('/api/appliances', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: applianceName,
                    lastServiceDate: `${serviceYear}-${serviceMonth}-01`,
                    type: applianceType,
                    userEmail: userData.email
                })
            });
            
            if (!saveResponse.ok) {
                throw new Error('Failed to save appliance');
            }
            
            // Reset the form
            resetAddApplianceCard();
            
            // Create a new reminder card
            createReminderCard({
                name: applianceName,
                lastServiceDate: `${serviceYear}-${serviceMonth}`,
                type: applianceType
            });
            
            // Update appliance count
            updateApplianceCount();
            
        } catch (error) {
            console.error('Error saving appliance:', error);
            alert('Failed to save appliance. Please try again.');
        }
    }
    
    // Function to create a new reminder card
    function createReminderCard(appliance) {
        // Get the current date
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;
        
        // Parse the service date
        const [serviceYear, serviceMonth] = appliance.lastServiceDate.split('-').map(Number);
        
        // Calculate months since last service
        const monthsSinceService = (currentYear - serviceYear) * 12 + (currentMonth - serviceMonth);
        
        // Create reminder description based on appliance type
        let description = '';
        if (appliance.type === 'Alarm') {
            description = 'Remember to check that your alarm is functioning this month.';
        } else {
            if (monthsSinceService === 0) {
                description = 'Remember to call a professional to maintain this appliance in 12 months.';
            } else if (monthsSinceService >= 12) {
                description = 'Remember to call a professional to maintain this appliance this month.';
            } else {
                const monthsLeft = 12 - monthsSinceService;
                description = `Remember to call a professional to maintain this appliance in ${monthsLeft} months.`;
            }
        }
        
        // Format the last service date for display
        const monthNames = ["January", "February", "March", "April", "May", "June",
                          "July", "August", "September", "October", "November", "December"];
        const formattedDate = `${monthNames[serviceMonth - 1]} ${serviceYear}`;
        
        // Count existing reminder cards (excluding the template)
        const reminderCards = document.querySelectorAll('.reminder-card');
        const reminderCount = reminderCards.length + 1;
        
        // Create the new reminder card
        const newReminder = document.createElement('div');
        newReminder.className = 'card reminder-card';
        newReminder.style.margin = '2em';
        newReminder.innerHTML = `
            <div class="card-header">
                Reminder <span class="reminder-count">${reminderCount}</span>
            </div>
            <div class="card-body">
                <h5 class="card-title">${appliance.name}</h5>
                <p class="card-text">${description}</p>
                <small class="text-muted">Last service: <span>${formattedDate}</span></small>
            </div>
        `;
        
        // Insert the new reminder after the add appliance card
        addApplianceCard.insertAdjacentElement('afterend', newReminder);
    }
    
    // Function to update the appliance count
    async function updateApplianceCount() {
        try {
            const response = await fetch('/api/appliances/count');
            const data = await response.json();
            const count = data.count || 0;
            
            const countElement = document.getElementById('applianceCountNum');
            const textElement = document.getElementById('applianceCountText');
            
            if (countElement && textElement) {
                countElement.textContent = count;
                textElement.textContent = count === 1 ? 'appliance' : 'appliances';
            }
        } catch (error) {
            console.error('Error updating appliance count:', error);
        }
    }
    
    // Function to load existing appliances
    async function loadExistingAppliances() {
        try {
            const response = await fetch('/api/appliances');
            const appliances = await response.json();
            
            appliances.forEach(appliance => {
                createReminderCard({
                    name: appliance.name,
                    lastServiceDate: appliance.lastServiceDate.split('-').slice(0, 2).join('-'),
                    type: appliance.type
                });
            });
            
            await updateApplianceCount();
        } catch (error) {
            console.error('Error loading existing appliances:', error);
        }
    }
    
    // Load existing appliances when page loads
    loadExistingAppliances();
});