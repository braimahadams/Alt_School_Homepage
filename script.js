// Get the span element by its ID
let span = document.getElementById("text");

// Define an array of three statements
let statements = [
  "Software Engineering",
  "Data Analysis",
  "Data Science",
  "Product Marketing",
  "Product Management",
];

// Define a function to clear the text word by word
function clearText() {
  let text = span.textContent;
  let words = text.split(" ");
  let interval = setInterval(function () {
    if (words.length > 0) {
      words.shift();
      span.textContent = words.join(" ");
    } else {
      clearInterval(interval);
      // Select a random statement from the array
      let newStatement =
        statements[Math.floor(Math.random() * statements.length)];
      // Set a timeout to replace the text with the new statement after 1 second (1000 milliseconds)
      setTimeout(function () {
        span.textContent = "";
        let i = 0;
        let words = newStatement.split(" ");
        let interval = setInterval(function () {
          if (i < words.length) {
            span.textContent += words[i] + " ";
            i++;
          } else {
            clearInterval(interval);
            // Set a timeout to call the clearText() function again after 4 seconds (4000 milliseconds)
            setTimeout(clearText, 4000);
          }
        }, 200);
      }, 2000);
    }
  }, 200);
}

// Call the clearText() function to start the process
clearText();
