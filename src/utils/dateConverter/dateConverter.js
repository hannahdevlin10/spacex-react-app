const dateConverter = (dateToConvert) => {
    function pad(s) {
        return (s < 10) ? '0' + s : s
    }
    let d = new Date(dateToConvert)
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/')
}

export { dateConverter }