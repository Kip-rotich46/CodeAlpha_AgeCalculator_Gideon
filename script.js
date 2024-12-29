// script.js

// Add an event listener to the "Calculate" button
document.getElementById('calculate').addEventListener('click', function () {
    // Get the value of the input date
    const dob = document.getElementById('dob').value;
  
    // Validate that the user has entered a date
    if (!dob) {
      alert('Please select a valid date.');
      return;
    }
  
    // Convert the input date to a Date object
    const dobDate = new Date(dob);
    const today = new Date();
  
    // Check if the selected date is in the future
    if (dobDate > today) {
      document.getElementById('result').textContent = 'The selected date is in the future. Please select a valid date.';
      document.getElementById('dob').value = ''; // Clear the input field
      return;
    }
  
    // Calculate the age
    let age = today.getFullYear() - dobDate.getFullYear();
    const monthDiff = today.getMonth() - dobDate.getMonth();
    const dayDiff = today.getDate() - dobDate.getDate();
  
    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
  
    // Display the result
    document.getElementById('result').textContent = `You are ${age} years old.`;
  });
  