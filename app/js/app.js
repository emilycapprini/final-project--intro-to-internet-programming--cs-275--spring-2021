window.onload  = () => {
    // Set intial input value to a string
    let input = `nothing`;

    // While input is not a number and too small keep prompting for new input
    while(isNaN(input.valueOf()) || input.valueOf() < 2){
        input = window.prompt(`Enter the size of your diamond as a number:`);
    }
    // Rounding up the input to an integer
    input = Math.ceil(parseFloat(input));

};
