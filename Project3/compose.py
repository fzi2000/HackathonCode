# import os # import openai
# openai.api_key = os.getenv("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")
import ai21, json, requests
from ai21 import utils
ai21.api_key = 'ESYcXYc1UAzzDNxZ8BcVXTWbJcBgcUbL'
url = "https://api.ai21.com/studio/v1/j2-mid/complete"

print("Features: 1.Smart Compose 2.Smart Reply  3.Summarize 4.Sentimental Analysis")
feature_selected=int(input("Enter a number to proceed: "))

if feature_selected==1:
  print("You have chosen Smart Compose")
  prompt= input("Enter the meeting prompt to draft a mail:")
  payload = {
      "prompt": prompt ,
      "numResults": 1,
      "maxTokens": 70,
      "minTokens": 0,
      "temperature": 0.7,
      "topP": 1,
      "topKReturn": 0,
      "frequencyPenalty": {
          "scale": 1,
          "applyToWhitespaces": True,
          "applyToPunctuations": True,
          "applyToNumbers": True,
          "applyToStopwords": True,
          "applyToEmojis": True
      },
      "presencePenalty": {
          "scale": 0,
          "applyToWhitespaces": True,
          "applyToPunctuations": True,
          "applyToNumbers": True,
          "applyToStopwords": True,
          "applyToEmojis": True
      },
      "countPenalty": {
          "scale": 0,
          "applyToWhitespaces": True,
          "applyToPunctuations": True,
          "applyToNumbers": True,
          "applyToStopwords": True,
          "applyToEmojis": True
      }
  }
  headers = {
      "accept": "application/json",
      "content-type": "application/json",
      "Authorization": "Bearer ESYcXYc1UAzzDNxZ8BcVXTWbJcBgcUbL"
  }

  response = requests.post(url, json=payload, headers=headers)

  # print(response["completions"][0]["data"]["text"])
  data = json.loads(response.text)
  text = data["completions"][0]["data"]["text"]

  print(text)
#   response= ai21.Completion.execute(
#       model='j1-large',
#       prompt=prompt,
#       temperature=0.65,
#       minTokens=4,
#       maxTokens=32,
#       numResults=1
#   )
#   generated_text = response['completions'][0]['data']['text']
# #   print(generated_text)
elif feature_selected==2:
  print("You have chosen Smart Reply")

elif feature_selected==3:
  print("You have chosen Summarize")
  prompt=input("Please enter the text to summarize:")
  summary = ai21.Summarize.execute(
      source=prompt,
      sourceType='TEXT')
  print("Summary:"+summary["summary"])


elif feature_selected==4:
  print("You have chosen Sentimental analysis")
  prompt=input("Please enter the text")
  sentiment=ai21.Completion.execute(
    model="j2-ultra",
    prompt=prompt,
    numResults=1,
    maxTokens=50,
    temperature=0,
    topKReturn=0,
    topP=1,
    countPenalty={
      "scale": 0,
      "applyToNumbers": False,
      "applyToPunctuations": False,
      "applyToStopwords": False,
      "applyToWhitespaces": False,
      "applyToEmojis": False
    },
    frequencyPenalty={
        "scale": 0,
        "applyToNumbers": False,
        "applyToPunctuations": False,
        "applyToStopwords": False,
        "applyToWhitespaces": False,
        "applyToEmojis": False
    },
    presencePenalty={
        "scale": 0,
        "applyToNumbers": False,
        "applyToPunctuations": False,
        "applyToStopwords": False,
        "applyToWhitespaces": False,
        "applyToEmojis": False
    },
    stopSequences=["##"]
  )
  print("Sentiment:"+str(sentiment['prompt']['text']))