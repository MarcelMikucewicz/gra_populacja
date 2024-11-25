
const body = document.querySelector("body")
body.style.backgroundColor = "beige"

const p1 = document.createElement("p")
p1.innerHTML = "Wybierz, który kraj ma większą populację"
p1.style.fontSize = "50px"
p1.style.textAlign = "center"
p1.style.fontFamily = "italic"
body.appendChild(p1)

const div1 = document.createElement("div")
div1.style.display = "flex"
div1.style.flexDirection = "row"
div1.style.justifyContent = "space-around"
body.appendChild(div1) 

const country1 = document.createElement ("div")
country1.style.height = "500px"
country1.style.width = "450px"
country1.style.backgroundColor = "white"
country1.style.border = "1px solid black"
country1.style.backgroundColor = "blue"
div1.appendChild(country1)

let flag1 = document.createElement("img");
flag1.style.height = "200px"
flag1.style.width = "340px"
flag1.style.marginTop = "10px"
flag1.style.border = "1px solid black"
country1.appendChild(flag1)

let name1 = document.createElement("h2")
name1.style.fontSize = "22px"


let btn1 = document.createElement("button")
btn1.innerHTML = "Wybierz"
btn1.style.width = "100px"
btn1.style.padding = "2px"
btn1.style.height = "75px"
btn1.style.backgroundColor = "green"
btn1.style.color = "white"
country1.appendChild(btn1)


const country2 = document.createElement ("div")
country2.style.height = "500px"
country2.style.width = "450px"
country2.style.backgroundColor = "white"
country2.style.border = "1px solid black"
country2.style.backgroundColor = "blue"
div1.appendChild(country2)

let flag2 = document.createElement("img")
flag2.style.height = "200px"
flag2.style.width = "340px"
flag2.style.marginTop = "10px"
flag2.style.border = "1px solid black"
country2.appendChild(flag2)

let name2 = document.createElement("h2")
name2.style.fontSize = "22px"
country2.appendChild(name2)

let btn2 = document.createElement("button")
btn2.innerHTML = "Wybierz"
btn2.style.width = "100px"
btn2.style.padding = "2px"
btn2.style.height = "75px"
btn2.style.backgroundColor = "green"
btn2.style.color = "white"
country2.appendChild(btn2)


async function getData(){

    const res = await fetch("https://restcountries.com/v3.1/region/europe")
    const data = await res.json()
    console.log(data);
    return data
}
getData()


async function RandomCountry() {

    const countries = await
    fetchCountries();
    if(!countries)return;

    let randomIndex = Math.floor(Math.random()*countries.length);

    selectedPopulation = countries[randomIndex].population ? countries[randomIndex].population[0]:"";
    flag1.setAttribute("src", countries[randomIndex].flags.png);

    name1.textContent = countries[randomIndex].name.common;
    country1.innerHTML ="";
    country1.appendChild(name1)

    
    
}









