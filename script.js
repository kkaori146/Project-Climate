document.querySelector('.busca').addEventListener('submit', (event)=>{
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;

    if(input !== '') {
        showWarning('Loading...');

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=814f8c43d3c28d306f7d36c023b9bb91&units=metric&lang=en`;
    } 
});

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}