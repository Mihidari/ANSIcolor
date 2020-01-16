const ANSIColorCode = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",

    fgBlue: "\x1b[34m",
    fgBlack: "\x1b[30m",
    fgRed: "\x1b[31m",
    fgGreen: "\x1b[32m",
    fgYellow: "\x1b[33m",
    fgBlue: "\x1b[34m",
    fgMagenta: "\x1b[35m",
    fgCyan: "\x1b[36m",
    fgWhite: "\x1b[37mb",

    bgBlack: "\x1b[40m",
    bgRed: "\x1b[41m",
    bgGreen: "\x1b[42m",
    bgYellow: "\x1b[43m",
    bgBlue: "\x1b[44m",
    bgMagenta: "\x1b[45m",
    bgCyan: "\x1b[46m",
    bgWhite: "\x1b[47m"
}

const ANSIcolor = {}

for(let key in ANSIColorCode) {
    let colorCode = ANSIColorCode[key]
    ANSIcolor[key] = function(message) {
        if(message) {
            if(this.buffer) {
                let buffer = this.buffer
                delete this.buffer
                return `${buffer}${colorCode}${message}\x1b[0m`
            } 
            else return `${colorCode}${message}\x1b[0m`
        } else {
            this.buffer = colorCode
            return this
        }
    }
}

module.exports = ANSIcolor
