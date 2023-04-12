console.log("Let's get this party started!");

const API_KEY = 'POeovT1wHZrPoP0HA92WMVjtLkSuCcir';

async function getGiphy(input) {
    let response = await axios.get(`http://api.giphy.com/v1/gifs/search`,
        {
            params: {
                api_key: API_KEY,
                q: input,
                lang: 'en'
            }
        });
    addGif(response);
}

function addGif(response) {
    let random = Math.floor(Math.random() * 25);
    const newImg = document.createElement('IMG');
    newImg.src = response.data.data[random].images.original.url;
    $('#gif-container').append(newImg);
}

function removeGifs() {
    $('#gif-container')[0].innerHTML = '';
}

$('#giphy-form').on('submit', (e) => {
    e.preventDefault();
    if ($('#search-term').val() !== '') {
        getGiphy($('#search-term').val())
        $('#search-term').val('');
    }
});

$('#remove-gifs').on('click', removeGifs);