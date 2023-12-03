let rgbButton = document.querySelector('#rgbButton');

const generateRGBColor = (number) => {  return Math.floor( Math.random() * (number + 1))  };

// console.log(generateRGBColor(255))

const randomNumbers = () => {
    return [
        generateRGBColor(255),generateRGBColor(255),generateRGBColor(255)
    ]
};

// console.log(randomNumbers());

rgbButton.addEventListener('click', () =>{
    let done = document.body.style.backgroundColor = `rgb(${randomNumbers()})`;
    console.log(done)
})





