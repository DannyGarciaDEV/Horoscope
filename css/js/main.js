document.querySelector('#check').addEventListener('click', zodiacoSig)

function zodiacoSig() {
    const month = document.querySelector('#month').value
    const day = document.querySelector('#day').value


    if (month === 'january' && day >= 20 || month === 'febraury' && day <= 19) {
        document.querySelector('h2').innerText = 'Aquarius ♒️'
    } else if (month === 'febraury' && day >= 19 || month === 'march' && day <= 20) {
        document.querySelector('h2').innerText = 'Pisces ♓️'
    } else if (month === 'march' && day >= 21 || month === 'april' && day <= 19) {
        document.querySelector('h2').innerText = 'Aries ♈️'
    } else if (month === 'april' && day >= 20 || month === 'may' && day <= 20) {
        document.querySelector('h2').innerText = 'Taurus ♉️'
    } else if (month === 'may' && day >= 21 || month === 'june' && day <= 20) {
        document.querySelector('h2').innerText = 'Gemini ♊️'
    } else if (month === 'june' && day >= 21 || month === 'july' && day <= 22) {
        document.querySelector('h2').innerText = 'Cancer ♋️'
    } else if (month === 'july' && day >= 23 || month === 'august' && day <= 22) {
        document.querySelector('h2').innerText = 'Leo ♌️'
    } else if (month === 'august' && day >= 23 || month === 'september' && day <= 22) {
        document.querySelector('h2').innerText = 'Virgo ♍️'
    } else if (month === 'september' && day >= 23 || month === 'october' && day <= 22) {
        document.querySelector('h2').innerText = 'Libra ♎️'
    } else if (month === 'october' && day >= 23 || month === 'november' && day <= 21) {
        document.querySelector('h2').innerText = 'Scorpio ♏️'
    } else if (month === 'november' && day >= 22 || month === 'december' && day <= 21) {
        document.querySelector('h2').innerText = 'Saggitarius ♐️'
    } else if (month === 'december' && day >= 22 || month === 'january' && day <= 19) {
        document.querySelector('h2').innerText = 'Capricorn ♑️'


    }

}
