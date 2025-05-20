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
            <div class="card-body" id="applianceFormBody">
                <form id="applianceForm">

                    <div class="alert alert-light bg-light-red border-danger mb-3 p-2">
                        <small class="text-danger"><i class="bi bi-exclamation-circle-fill me-1"></i> All fields are required</small>
                    </div>

                    <div class="mb-3">
                        <label for="applianceName" class="form-label">Appliance Name</label>
                        <input type="text" class="form-control" id="applianceNameInput" 
                            pattern="[a-zA-Z0-9 ]+" 
                            title="Only letters, numbers, and spaces are allowed"
                            required>
                        <div class="invalid-feedback">Please use only letters and numbers (no special characters)</div>
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

        const nameRegex = /^[a-zA-Z0-9 ]+$/;
        if (!nameRegex.test(applianceName)) {
            document.getElementById('applianceNameInput').classList.add('is-invalid');
            alert('Appliance name can only contain letters, numbers, and spaces');
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

            const saveResult = await saveResponse.json();

            if (!saveResponse.ok) {
                throw new Error('Failed to save appliance');
            }

            // Reset the form
            resetAddApplianceCard();

            // Create a new reminder card with the returned ID
            createReminderCard({
                _id: saveResult.insertedId, // Use the returned ID
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
            if (monthsSinceService === 0) {
                description = 'Checked this month. Remember to check batteries and operation next month.';
            } else if (monthsSinceService >= 1) {
                description = 'Remember to check that your alarm is functioning this month.';
            }
        } else {
            if (monthsSinceService === 0) {
                description = 'Checked this month. Remember to call a professional to maintain this appliance in 12 months.';
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
        newReminder.className = 'card reminder-card mb-3';
        newReminder.style.margin = '2em';
        newReminder.setAttribute('data-id', appliance._id);
        newReminder.innerHTML = `
            <div class="card-header d-flex justify-content-between align-items-center" id="reminderHeader">
                <span>Reminder <span class="reminder-count">${reminderCount}</span></span>
                <div>
                    <button class="btn btn-sm btn-outline-primary me-1 update-btn">Update</button>
                    <button class="btn btn-sm btn-outline-danger delete-btn">Delete</button>
                </div>
            </div>
            <div class="card-body" id="reminderBody">
                <h5 class="card-title">${appliance.name}</h5>
                <p class="card-text">${description}</p>
                <small class="text-muted">Last service: <span class="service-date">${formattedDate}</span></small>
            </div>
        `;
        
        // Insert the new reminder after the add appliance card
        addApplianceCard.insertAdjacentElement('afterend', newReminder);
        
        // Add event listener for delete button
        newReminder.querySelector('.delete-btn').addEventListener('click', function(e) {
            e.stopPropagation();
            deleteAppliance(appliance._id, newReminder);
        });
        
        // Add event listener for update button
        newReminder.querySelector('.update-btn').addEventListener('click', function(e) {
            e.stopPropagation();
            updateAppliance(appliance._id, appliance.type, newReminder);
        });
    }
    
    // Function to delete an appliance
    async function deleteAppliance(id, cardElement) {
        if (!confirm('Are you sure you want to delete this appliance?')) {
            return;
        }
        
        try {
            const response = await fetch(`/api/appliances/${id}`, {
                method: 'DELETE'
            });
            
            if (!response.ok) {
                throw new Error('Failed to delete appliance');
            }
            
            // Remove the card from the DOM
            cardElement.remove();
            
            // Update appliance count
            updateApplianceCount();
            
            // Update reminder numbers
            updateReminderNumbers();
        } catch (error) {
            console.error('Error deleting appliance:', error);
            alert('Failed to delete appliance. Please try again.');
        }
    }
    
    // Function to update an appliance's service date
    async function updateAppliance(id, type, cardElement) {
        try {
            const response = await fetch(`/api/appliances/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error || 'Failed to update appliance');
            }
            
            // Get the current date for display
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();
            const currentMonth = currentDate.getMonth() + 1;
            const monthNames = ["January", "February", "March", "April", "May", "June",
                              "July", "August", "September", "October", "November", "December"];
            const formattedDate = `${monthNames[currentMonth - 1]} ${currentYear}`;
            
            // Update the displayed date
            cardElement.querySelector('.service-date').textContent = formattedDate;
            
            // Update the description based on type
            let description = '';
            if (type === 'Alarm') {
                description = 'Checked this month. Remember to check batteries and operation next month.';
            } else {
                description = 'Checked this month. Remember to call a professional to maintain this appliance in 12 months.';
            }
            
            // Update the description
            cardElement.querySelector('.card-text').textContent = description;
            
        } catch (error) {
            console.error('Error updating appliance:', error);
            alert('Failed to update appliance. Please try again.');
        }
    }
    
    // Function to update reminder numbers after deletion
    function updateReminderNumbers() {
        const reminderCards = document.querySelectorAll('.reminder-card');
        reminderCards.forEach((card, index) => {
            card.querySelector('.reminder-count').textContent = index + 1;
        });
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
                const [year, month] = appliance.lastServiceDate.split('-');
                createReminderCard({
                    _id: appliance._id,
                    name: appliance.name,
                    lastServiceDate: `${year}-${month}`,
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