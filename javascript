<script>
  window.dataLayer = window.dataLayer || [];

  // Function to track specific button clicks and push events to the dataLayer
  function trackSpecificButtonClick(event) {
    event.preventDefault(); // Prevent immediate navigation

    const buttonElement = event.currentTarget; // The button clicked
    const buttonClass = buttonElement.className; // Get the button class

    // Prepare event data
    let eventData = {
      'event': 'shop_now_click', // General event name for all clicks
      'button_name': buttonElement.textContent.trim(), // Captures button text
      'destination_url': buttonElement.href // Destination URL
    };

    // Customize data based on button class
    if (buttonClass.includes('hirexstudio1')) {
      eventData.button_id = 'hirexstudio1';
      eventData.specific_event = 'fritter_mintz_click'; // Specific event name
      // Push the specific event to the dataLayer
      window.dataLayer.push({
        'event': 'fritter_mintz_click', // Push the specific event
        'button_name': buttonElement.textContent.trim(),
        'destination_url': buttonElement.href
      });
    } else if (buttonClass.includes('hirexstudio2')) {
      eventData.button_id = 'hirexstudio2';
      eventData.specific_event = 'oreoz_click';
      window.dataLayer.push({
        'event': 'oreoz_click', // Push the specific event
        'button_name': buttonElement.textContent.trim(),
        'destination_url': buttonElement.href
      });
    } else if (buttonClass.includes('hirexstudio3')) {
      eventData.button_id = 'hirexstudio3';
      eventData.specific_event = 'sour_animal_click';
      window.dataLayer.push({
        'event': 'sour_animal_click', // Push the specific event
        'button_name': buttonElement.textContent.trim(),
        'destination_url': buttonElement.href
      });
    } else if (buttonClass.includes('hirexstudio4')) {
      eventData.button_id = 'hirexstudio4';
      eventData.specific_event = 'strawberry_click';
      window.dataLayer.push({
        'event': 'strawberry_click', // Push the specific event
        'button_name': buttonElement.textContent.trim(),
        'destination_url': buttonElement.href
      });
    } else {
      // Default for other buttons
      eventData.button_id = 'shop_now_default';
      eventData.specific_event = 'general_shop_now_click';
      window.dataLayer.push(eventData); // Push default event
    }

    console.log("Data pushed to dataLayer:", eventData); // Debugging confirmation

    // Redirect to the destination URL after a short delay
    setTimeout(function() {
      window.location.href = buttonElement.href; // Redirect to the destination URL
    }, 200);
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Select specific buttons by their unique classes
    const shopNowButtons = document.querySelectorAll('.hirexstudio1, .hirexstudio2, .hirexstudio3, .hirexstudio4');
    shopNowButtons.forEach(button => {
      button.addEventListener('click', trackSpecificButtonClick);
    });
  });
</script>
