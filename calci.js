let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
      button.addEventListener('click', (e) => {
            if (e.target.innerHTML == '=') {
                  try {
                        // Evaluate the expression  
                        let result = eval(string);
                        // Check if the result is finite 
                        if (typeof result === 'number' && isFinite(result)) {
                               
                              input.value = result.toFixed(2);
                               
                              string = result.toFixed(2);  
                        } else {
                              input.value = "Error"; //  infinity or NaN  
                              string = ""; // Reset the string  
                        }
                  } catch (error) {
                        input.value = "Error"; // Handle errors  
                        string = ""; // Reset the string  
                  }
            } else if (e.target.innerHTML == 'AC') {
                  string = "";  
                  input.value = string;   
            } else if (e.target.innerHTML == 'DEL') {
                  string = string.substring(0, string.length - 1);  
                  input.value = string;  
            } else {
                    
                  string += e.target.innerHTML;
                  input.value = string;   
            }
      });
});