module.exports = {
    White: {
        rgb: [
            1,
            1,
            1
        ],
        get rgba() {
            return `rgba(${this.rgb[0] * 255}, ${this.rgb[1] * 255}, ${this.rgb[2] * 255})`
        }
    },
    Brown: {
        rgb: [
            0.443,
            0.231,
            0.09
        ],
        get rgba() {
            return `rgba(${this.rgb[0] * 255}, ${this.rgb[1] * 255}, ${this.rgb[2] * 255})`
        }
    },
    Red: {
        rgb: [
            0.856,
            0.1,
            0.094
        ],
        get rgba() {
            return `rgba(${this.rgb[0] * 255}, ${this.rgb[1] * 255}, ${this.rgb[2] * 255})`
        }
    },
    Orange: {
        rgb: [
            0.956, 0.392, 0.113
        ],
        get rgba() {
            return `rgba(${this.rgb[0] * 255}, ${this.rgb[1] * 255}, ${this.rgb[2] * 255})`
        }
    },
    Yellow: {
        rgb: [
            0.905, 0.898, 0.172
        ],
        get rgba() {
            return `rgba(${this.rgb[0] * 255}, ${this.rgb[1] * 255}, ${this.rgb[2] * 255})`
        }
    },
    Green: {
        rgb: [0.192, 0.701, 0.168],
        get rgba() {
            return `rgba(${this.rgb[0] * 255}, ${this.rgb[1] * 255}, ${this.rgb[2] * 255})`
        }
    },
    Teal: {
        rgb: [0.129, 0.694, 0.607],
        get rgba() {
            return `rgba(${this.rgb[0] * 255}, ${this.rgb[1] * 255}, ${this.rgb[2] * 255})`
        }
    },
    Blue: {
        rgb: [0.118, 0.53, 1],
        get rgba() {
            return `rgba(${this.rgb[0] * 255}, ${this.rgb[1] * 255}, ${this.rgb[2] * 255})`
        }
    },
    Purple: {
        rgb: [0.627, 0.125, 0.941],
        get rgba() {
            return `rgba(${this.rgb[0] * 255}, ${this.rgb[1] * 255}, ${this.rgb[2] * 255})`
        }
    },
    Pink: {
        rgb: [0.96, 0.439, 0.807],
        get rgba() {
            return `rgba(${this.rgb[0] * 255}, ${this.rgb[1] * 255}, ${this.rgb[2] * 255})`
        }
    },
    Grey: {
        rgb: [0.5, 0.5, 0.5],
        get rgba() {
            return `rgba(${this.rgb[0] * 255}, ${this.rgb[1] * 255}, ${this.rgb[2] * 255})`
        }
    },
    Black: {
        rgb: [0.25, 0.25, 0.25],
        get rgba() {
            return `rgba(${this.rgb[0] * 255}, ${this.rgb[1] * 255}, ${this.rgb[2] * 255})`
        },
        get hex() {

        }
    }
}