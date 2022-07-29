export const utilService = {
    makeId,
    dateToString,
}
function makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

function dateToString(date: any, language = 'he-IL') {
    return Intl.DateTimeFormat(language, {  hour12: false, hour: 'numeric', minute: 'numeric' }).format(new Date(date))
}
