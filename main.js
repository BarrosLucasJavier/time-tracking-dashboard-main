const sectionContainers = document.getElementsByClassName('sectionContainer')
const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');

/* Function that loads data according to the Daily Weekly or Monthly option */

const valueLoad = ( time ) =>{
    fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach((element, index) => {
            const h3 = sectionContainers[index].querySelector('h3');
            const h2 = sectionContainers[index].querySelector('h2');
            const span = sectionContainers[index].querySelector('span');
            h3.innerText= element.title;
            h2.innerText = element.timeframes[time].current + 'hrs'
            span.innerText = element.timeframes[time].previous + 'hrs'
        });
    })
    .catch(error => console.error('Error al leer el archivo JSON:', error));
}
/* Default Value */
valueLoad('daily');

/* Listener Options */
daily.addEventListener('click', ()=>{
    valueLoad('daily');
})
weekly.addEventListener('click', ()=>{
    valueLoad('weekly');
})
monthly.addEventListener('click', ()=>{
    valueLoad('monthly');
})
