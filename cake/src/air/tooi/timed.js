import moment from "moment"

const WEEK = [
    '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日',
]
export default {
    // 获取 星期的句子
    week_word(mmt_or_str) {
        return WEEK[ Number.parseInt(moment(mmt_or_str).day() + '') - 1 ] // WEEK( Number.parseInt( moment(mmt_or_str).day() ) )
    },

    // 后台专用时间格式
    himmer_time(iong = true) {
        return iong ? moment().format('yyyy-MM-DD hh:mm:ss') : moment().format('yyyy-MM-DD')
    },

    // 序列化时间
    view(src, iong = false, spit = '/') {
        src = moment(src)
        if (src) {
            if (iong) { return src.format('yyyy' + spit + 'MM' + spit + 'DD' + ' ' + 'HH:mm') }
            return src.format('yyyy' + spit + 'MM' + spit + 'DD')
        }
    },
    view_cn(src, iong = false) {
        src = moment(src)
        if (src) {
            return src.format('yyyy年MM月DD日')
        }
    },
    now() { return moment(new Date()).format('yyyy-MM-DD') },

    hour(v) {
        return moment(v ? v : new Date()).hour()
    },
    year(v) {
        return moment(v ? v : new Date()).year()
    },
    month(v) {
        return moment(v ? v : new Date()).month()
    }
}