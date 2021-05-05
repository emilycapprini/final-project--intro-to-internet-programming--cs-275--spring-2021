window.onload  = () => {
    // Set intial input value to a string
    let input = `nothing`;

    // While input is not a number and too small keep prompting for new input
    while(isNaN(input.valueOf()) || input.valueOf() < 2){
        input = window.prompt(`Enter the size of your diamond as a number:`);
    }
    // Rounding up the input to an integer
    input = Math.ceil(parseFloat(input));

    // Getting div element
    let diamond = document.getElementById(`diamond`);

    // Making the diamond
    // variable to maintain the i value for outside the for loop
    let holder = 0;
    // create the upper half of the diamond
    for(let i = 1; i <= input; i+= 2){
        // add spaces to center the row
        for(let j = input-1; j >= i; j--){
            diamond.innerHTML += ` `;
        }
        // add appropraite number of stars
        for(let k = 1; k<= i; k++){
            diamond.innerHTML += `* `;
        }
        // add a new line after each row of stars
        diamond.innerHTML += `<br>`;
        // update the holder variable
        holder = i + 1;
        // if input is even set i = 0 so it prints only an even amount of stars
        if(input % 2 === 0 && i === 1){
        i = 0;
        }
    }
    // if it has printed the input number of stars
    if (holder === input+1){
        // create the lower half of the diamond
        for(let i = 1; i <= input-2; i+=2){
            // add spaces to center the row
            for(let k = 1; k<= i; k++){
                diamond.innerHTML += ` `;
            }
            // add appropriate number of stars
            for(let j = i; j <= input-2; j++){
                diamond.innerHTML += `* `;
            }
            // add a new line after each row of stars
            diamond.innerHTML += `<br>`;
        }
        // if the input is zero add and extra star for the bottom row
        if(input % 2 === 0) {
            // add the last star
            diamond.innerHTML += `*`;
        }
    }
};
