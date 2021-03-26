# Happy Thoughts
The assignment was to create an app where you can post your happy thoughts (similar to Twitter, but happier!). The message is posted to a public API, and the app also fetches the latest 20 messages posted to the API. You can "like" other messages by clicking the heart-button.

## The problem
I made one component for the form where the user can type their message, and one component for the messages that are fetched from the API. In App, when you post a message, the page is re-rendered.  

To change the color on the heart-button when the message has one or more likes I used inline styling with ternary operator. I used the same technique to make a character counter that shows how many characters you've written, and the text turns red when there are 5 or less characters left. 

I followed the design provided by Technigo and tried to resemble it the best I could. 

## View it live
https://determined-engelbart-a7f7f6.netlify.app/