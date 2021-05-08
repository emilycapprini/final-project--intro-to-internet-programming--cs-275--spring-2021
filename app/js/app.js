window.onload  = () => {
    // Set intial input value to a string
    let input = `nothing`;

    // While input is not a number and too small keep prompting for new input
    while(isNaN(input.valueOf()) || input.valueOf() < 1){
        input = window.prompt(`Enter the size of your diamond as a number:`);
    }
    // Rounding up the input to an integer
    input = Math.ceil(parseFloat(input));

    // Getting div element
    let diamond = document.getElementById(`diamond`);

    // Making the diamond
    // create the upper half of the diamond
    for(let i = 1; i <= input; i+= 2){
        // add spaces to center the row
        for(let j = input-1; j >= i; j--){
            diamond.innerHTML += `&nbsp;`;
        }
        // add appropraite number of stars
        for(let k = 1; k<= i; k++){
            if(k === i){
                diamond.innerHTML += `*`;
            }
            else{
                diamond.innerHTML += `* `;
            }
        }
        // add a new line after each row of stars
        diamond.innerHTML += `<br>`;
        // if input is even set i = 0 so it prints only an even amount of stars
        if(input % 2 === 0 && i === 1){
            i = 0;
        }
    }
    // create the lower half of the diamond
    for(let i = 1; i <= input-2; i+=2){
        // add spaces to center the row
        for(let k = 1; k<= i+1; k++){
            diamond.innerHTML += `&nbsp;`;
        }
        // add appropriate number of stars
        for(let j = i; j <= input-2; j++){
            if(j === input-2){
                diamond.innerHTML += `*`;
            }
            else{
                diamond.innerHTML += `* `;
            }
        }
        // add a new line after each row of stars
        diamond.innerHTML += `<br>`;
    }
    // if the input is even add and extra star for the bottom row
    if(input % 2 === 0) {
        // add the spaces for last row
        for(let k = 1; k<= input-1; k++){
            diamond.innerHTML += `&nbsp;`;
        }
        // add the last star
        diamond.innerHTML += `*`;
    }

    // set constant for one second, find left of diamond, set marker to 0
    const SECOND = 1000;
    let leftside = diamond.offsetLeft;
    let marker = 0;

    // Function to move diamond back and forth
    setInterval( () => {

        // get the widths of viewport and element, get left location
        let width = window.innerWidth;
        let dwidth = diamond.offsetWidth;

        // move diamond right if it is not at end of viewport
        if(leftside < width-dwidth){
            leftside += 1;
            diamond.style.left = leftside + `px`;
            marker = leftside;
        }
        // move the diamond back to the left once reaches end
        else {
            // move left until its at 0px left
            if(marker > 0){
                marker -= 1;
                diamond.style.left = marker + `px`;
            }
            // once marker is 0, set leftside to 0
            else{
                leftside = 0;
            }
        }

    }, (SECOND/1000) );
};
