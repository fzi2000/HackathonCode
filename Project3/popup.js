// document.getElementById("smartComposeBtn").addEventListener("click", function () {
//     var prompt = prompt("Enter the meeting prompt to draft a mail:");
//     var data = {
//         prompt: prompt
//     };
//     fetch('/smart_compose', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     .then(response => response.json())
//     .then(data => {
//         var text = data.text;
//         document.getElementById("date").textContent = text;
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// });





document.getElementById("smartComposeBtn").addEventListener("click", function () {
    chrome.runtime.sendMessage({ action: "smartCompose" });
    // Function executed when the button is clicked
    var prompt = prompt("Enter the meeting prompt to draft a mail:");
    // Display a prompt dialog box and store the user's input in the 'prompt' variable

    var data = {
        prompt: prompt
    };
    // Create an object 'data' with a 'prompt' property that contains the user's input

    fetch('/smart_compose', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    // Perform a POST request to the '/smart_compose' endpoint with the 'data' object as the request payload

    .then(response => response.json())
    // Parse the response from the server as JSON

    .then(data => {
        // Process the JSON data
        var text = data.text;
        // Extract the 'text' property from the response data
        // Send the response back to the content script
        sendResponse({ text: text });
        
        document.getElementById("date").textContent = text;
        // Set the text content of the element with the ID 'date' to the extracted 'text' value
    })

    .catch(error => {
        // Handle any errors that occur during the request
        console.error('Error:', error);
        sendResponse({ error: error.message });
    });
});




//fathima boo boo
// im sleepy
//i would've lost 
//nooooooooooooooooooo
// ur such a green flag- as a FRIEND
//the eyes- eyes dont lie boooi
//imagine you cut someone just cuz they start liking you
//like as a crush
//there's nothing to loosssseee
//this is why i suck in rs frfr
//shooo
//that's sweeeet
//omggg OMGGG
//I DONT GO FOR LOOOKS
//80-20
//then u fall? slippery feet 
//such a good friend 
//you wanna be thier friend cuz they attractive?
//someone had a crush on you - hehe bsesed hehehehe
//damn sherry had a crazy lover ooooh
//sorry boo
//ik its nature to bully
//u rejected? UR TOO SWEET TO REJECT AHHHNOO
//BROTHERRR awwwwwww