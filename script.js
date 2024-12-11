function generateList() {
    // Get the length of the list from the input box
    const listLength = document.getElementById('listLength').value;
    
    // Ensure the input is a valid number greater than 0
    if (listLength <= 0 || isNaN(listLength)) {
        alert('Please enter a valid number greater than 0.');
        return;
    }
    
    // Clear the previous list
    const numberList = document.getElementById('numberList');
    numberList.innerHTML = '';

    // Generate the list of numbers from 1 to the user-defined length
    for (let i = 1; i <= listLength; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = i;
        numberList.appendChild(listItem);
    }
}

function chooseRandomNumber() {
    // Get the list items
    const listItems = document.querySelectorAll('#numberList li');
    
    // Ensure there are items in the list
    if (listItems.length === 0) {
        alert('Please generate a list first.');
        return;
    }

    // Get user's choice regarding repeated numbers
    const repeatOption = document.querySelector('input[name="repeatOption"]:checked').value;

    let chosenNumber;

    if (repeatOption === 'allow') {
        // Allow repeated numbers
        // Remove any previous highlighting
        listItems.forEach(item => item.classList.remove('highlight'));

        // Generate a random index based on the length of the list
        const randomIndex = Math.floor(Math.random() * listItems.length);
        
        // Highlight the randomly chosen list item
        listItems[randomIndex].classList.add('highlight');
        
        // Get the chosen number
        chosenNumber = listItems[randomIndex].textContent;
    } else {
        // No repeated numbers
        // Filter out already highlighted items
        const availableItems = Array.from(listItems).filter(item => !item.classList.contains('highlight'));

        // Ensure there are available items left to choose from
        if (availableItems.length === 0) {
            alert('All numbers have been highlighted. Please generate a new list.');
            return;
        }

        // Remove any previous highlighting
        listItems.forEach(item => item.classList.remove('highlight'));

        // Generate a random index based on the available items
        const randomIndex = Math.floor(Math.random() * availableItems.length);

        // Highlight the randomly chosen list item
        availableItems[randomIndex].classList.add('highlight');
        
        // Get the chosen number
        chosenNumber = availableItems[randomIndex].textContent;
    }

    // Show the chosen number in the modal
    document.getElementById('chosenNumberText').textContent = `The chosen number is: ${chosenNumber}`;
    document.getElementById('messageBox').style.display = 'block';
}

function closeModal() {
    document.getElementById('messageBox').style.display = 'none';
}
