(function () {
    var log = function log (msg) {
        var now = new Date();
        var now_utc = new Date(now.getUTCFullYear(),
            now.getUTCMonth(), now.getUTCDate(),
            now.getUTCHours(), now.getUTCMinutes(),
            now.getUTCSeconds());
        var dayOfWeek = now_utc.getDay();
        var secondsPastMidnightUTC = now_utc.getSeconds() + 60 *
            now_utc.getMinutes() + 60 * 60 * now_utc.getHours();
        var dateline = dayOfWeek + " " + secondsPastMidnightUTC;
        console.log(dateline + " " + msg);
    };
    module.exports = {log : log};
}());
