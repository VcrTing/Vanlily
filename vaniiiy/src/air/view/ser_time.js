
import moment from "moment"

const ser_timed = function(e, mode = 0, long = false) {
    e = moment(e)

    if (mode == 1) {
        return long ? e.format('ss:mm:hh DD/MM/yyyy') : e.format('DD/MM/yyyy')
    }
    return long ? e.format('yyyy-MM-DD hh:mm:ss') : e.format('yyyy-MM-DD')
}

const ser_minut = function(e, char = '.') {
    e = moment(e); return e.format('MM' + char + 'DD')
}

const getToday = function(cn = false, fiii = false) {
    let d = new Date()
    const year = d.getFullYear()
    let month = d.getMonth() + 1
    let day = d.getDate()
    if (month < 10 && !fiii) { month = '0' + month }
    if (day < 10 && !fiii) { day = '0' + day }
    if (cn) { return year + '年' + month + '月' + day + '日' }
    return year + '-' + month + '-' + day
}

const ser_week = function(rec) {
    let res = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'  ]
    return res[rec - 1]
}
const ser_month = function(rec) {
    let res = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
    return res[rec]
}

const getTodayEn = function( ) {
    let d = new Date()
    const year = d.getFullYear()
    let month = d.getMonth()
    const day = d.getDate()
    const week = d.getDay()
    return ser_week(week) + ', ' + ser_month(month) + ' ' + day + ', ' + year
}

export default {
    ser_minut,
    ser_timed,
    getToday,
    getTodayEn,

}