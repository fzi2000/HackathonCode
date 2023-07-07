document.addEventListener("DOMContentLoaded", function() {
  // Get references to the required HTML elements  
    const smartComposeBtn = document.getElementById("smartComposeBtn");
    const summarizeBtn = document.getElementById("summarizeBtn");
    const sentimentAnalysisBtn = document.getElementById("sentimentAnalysisBtn");
    const outputCompose = document.getElementById("outputCompose");
    const outputSummary = document.getElementById("outputSummary");
    const outputSenti = document.getElementById("outputSenti");
  
     // Add event listeners to the buttons
    smartComposeBtn.addEventListener("click", function() {
        const prompt = composeInput.value;
        //   const prompt = prompt("Enter the meeting prompt to draft a mail:");
      if (prompt) {
        smartCompose(prompt);
      }
    });
  
    summarizeBtn.addEventListener("click", function() {
      const text = prompt("Please enter the text to summarize:");
      summarize(text);
    });
  
    sentimentAnalysisBtn.addEventListener("click", function() {
      const text = prompt("Please enter the text:");
      if (text) {
        sentimentAnalysis(text);
      }
    });
  

     // Function for smart compose feature
    function smartCompose(prompt) {
      const url = "https://api.ai21.com/studio/v1/j2-mid/complete";
      const payload = {
       // Prompt and other parameters for smart compose
        prompt: prompt,
        numResults: 1,
        maxTokens: 70,
        minTokens: 0,
        temperature: 0.7,
        topP: 1,
        topKReturn: 0,
        frequencyPenalty: {
          scale: 1,
          applyToWhitespaces: true,
          applyToPunctuations: true,
          applyToNumbers: true,
          applyToStopwords: true,
          applyToEmojis: true
        },
        presencePenalty: {
          scale: 0,
          applyToWhitespaces: true,
          applyToPunctuations: true,
          applyToNumbers: true,
          applyToStopwords: true,
          applyToEmojis: true
        },
        countPenalty: {
          scale: 0,
          applyToWhitespaces: true,
          applyToPunctuations: true,
          applyToNumbers: true,
          applyToStopwords: true,
          applyToEmojis: true
        }
      };
      const headers = {
        "accept": "application/json",
        "content-type": "application/json",
        "Authorization": "Bearer ESYcXYc1UAzzDNxZ8BcVXTWbJcBgcUbL"
      };
  
      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload)
      })
      .then(response => response.json())
      .then(data => {
        const text = data.completions[0].data.text;
        outputCompose.innerHTML = text + "\n";
      })
      .catch(error => {
        console.error(error);
      });
    }
  
    // Function for summarize feature
    function summarize(text) {
      const url = "https://api.ai21.com/studio/v1/summarize";
      const payload = {
        // text: text,
        min_tokens: 5,
        source: text,
        sourceType: "TEXT"
      };
      const headers = {
        "accept": "application/json",
        "content-type": "application/json",
        "Authorization": "Bearer ESYcXYc1UAzzDNxZ8BcVXTWbJcBgcUbL"
      };
  
      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload)
      })
      .then(response => response.json())
      .then(data => {
        //data.summary
        // const summary = data.summary ;
        const summary = data.summary || "Summary not available. Input must be 40 words or longer";
        outputSummary.innerHTML ="Here is your Summary:\n" + summary + "\n";
        // if (data.choices && data.choices.length > 0) {
        //     const summary = data.choices[0].text;
        //     outputDiv.innerHTML = summary;
        //   } else {
        //     console.error("No summary found");
        //   }
        })
      .catch(error => {
        console.error(error);
      });
    }
  
     // Function for sentimental analysis feature
    function sentimentAnalysis(text) {
        const url = "https://api.ai21.com/studio/v1/j2-ultra/complete";
        const bad_words=["bad","horrible","dirty","unclean", "dislike","eww","old", "trash","smelly","noisy", "nasty"]
        const good_words=["good","amazing","clean","beautiful","happy","excellent","like","awesome","lovely","fathima","spacious","nice","friendly","great","gorgeous"]
        const containsBadWord = bad_words.some(word => text.toLowerCase().includes(word.toLowerCase()));
        const containsGoodWord = good_words.some(word => text.toLowerCase().includes(word.toLowerCase()));
        if (containsBadWord) {
            outputSenti.innerHTML = "Sentiment: \n" + "Bad- Negative " + "\n";    
          }
        if (containsGoodWord) {
            outputSenti.innerHTML = "Sentiment: \n" + "Good-Positive " + "\n";       
        }  

        const payload = {
          prompt: text,
          numResults: 1,
          maxTokens: 50,
          temperature: 0,
          topP: 1,
          topKReturn: 0,
          frequencyPenalty: {
            scale: 0,
            applyToWhitespaces: false,
            applyToPunctuations: false,
            applyToNumbers: false,
            applyToStopwords: false,
            applyToEmojis: false
          },
          presencePenalty: {
            scale: 0,
            applyToWhitespaces: false,
            applyToPunctuations: false,
            applyToNumbers: false,
            applyToStopwords: false,
            applyToEmojis: false
          },
          countPenalty: {
            scale: 0,
            applyToWhitespaces: false,
            applyToPunctuations: false,
            applyToNumbers: false,
            applyToStopwords: false,
            applyToEmojis: false
          },
          stopSequences: ["##"]
        };
        const headers = {
          "accept": "application/json",
          "content-type": "application/json",
          "Authorization": "Bearer ESYcXYc1UAzzDNxZ8BcVXTWbJcBgcUbL"
        };
    
        fetch(url, {
          method: "POST",
          headers: headers,
          body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => {
          const sentiment = data.completions[0].data.text;
        //   const sentiment= data.choices[0]?.text
        // outputSenti.innerHTML = "Sentiment: \n" + sentiment + "\n";
        })
        .catch(error => {
          console.error(error);
        });
      }
    });

    
