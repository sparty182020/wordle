class UCheat {
    autoClose = false
    constructor(autoClose) {
        if (autoClose != null) {
            this.autoClose = Boolean(autoClose)
        }
    }
    static solve() {
        if (location.host !== "www.wordleunlimited.com") { return }
        const x = document.getElementsByClassName("game-id")[0].innerText.replace("Game ID: ", "")
        const solution = atob(x)
        const spSolution = solution.split('')
        for (let i = 0; i <= solution.length; i++) {
            if (i == solution.length) {
                document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Enter' }))
                break
            }
            document.dispatchEvent(new KeyboardEvent('keydown', { 'key': `${spSolution[i]}` }))
        }
        if (this.autoClose == true) {
            setTimeout(_ => {
                Promise.resolve()
                    .then(
                        setTimeout(document.getElementsByClassName("btn-close")[0].click(), 500)
                    )
                    .then(
                        setTimeout(document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Enter' })))
                    )
            },
                500)
        }
    }
    static autoSolve() {
        if (location.host !== "www.wordleunlimited.com") { return }
        const x = document.getElementsByClassName("game-id")[0].innerText.replace("Game ID: ", "")
        const solution = atob(x)
        const spSolution = solution.split('')
        for (let i = 0; i <= solution.length; i++) {
            if (i == solution.length) {
                document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Enter' }))
                break
            }
            Promise.resolve()
                .then(
                    setTimeout(_ => { document.getElementsByClassName("btn-close")[0].click() }, 500)
                )
                .then(
                    setTimeout(_ => { document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Enter' })) }, 1000)
                )
                .then(
                    setTimeout(_ => { this.autoSolve() }, 1000)
                )
        }
    }
    cSolve() {
        if (location.host !== "www.wordleunlimited.com") { return }
        const x = document.getElementsByClassName("game-id")[0].innerText.replace("Game ID: ", "")
        const solution = atob(x)
        const spSolution = solution.split('')
        for (let i = 0; i <= solution.length; i++) {
            if (i == solution.length) {
                document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Enter' }))
                break
            }
            document.dispatchEvent(new KeyboardEvent('keydown', { 'key': `${spSolution[i]}` }))
        }
        if (this.autoClose == true) {
            setTimeout(_ => {
                Promise.resolve()
                    .then(
                        setTimeout(document.getElementsByClassName("btn-close")[0].click(), 500)
                    )
                    .then(
                        setTimeout(document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Enter' })))
                    )
            },
                500)
        }
    }
    cAutoSolve() {
        if (location.host !== "www.wordleunlimited.com") { return }
        const x = document.getElementsByClassName("game-id")[0].innerText.replace("Game ID: ", "")
        const solution = atob(x)
        const spSolution = solution.split('')
        for (let i = 0; i <= solution.length; i++) {
            if (i == solution.length) {
                document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Enter' }))
                break
            }
            document.dispatchEvent(new KeyboardEvent('keydown', { 'key': `${spSolution[i]}` }))
        }
        Promise.resolve()
            .then(
                setTimeout(_ => { document.getElementsByClassName("btn-close")[0].click() }, 500)
            )
            .then(
                setTimeout(_ => { document.dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Enter' })) }, 1000)
            )
            .then(
                setTimeout(_ => { UCheat.autoSolve() }, 1000)
            )
    }
}

const genButton = function () {
    const buttondiv = document.createElement("div")
    buttondiv.style.cssText = "left: 5vw; top: 50vh; width: 128px; position: absolute;"
    const button = document.createElement("button")
    button.onclick = _ => new UCheat(true).cSolve()
    button.innerText = "Solve this Wordle"
    button.style.cssText = "border: 4px solid black; border-radius: 16px; position: relative; background: linear-gradient(45deg, red, blue);"
    buttondiv.appendChild(button)
    document.body.appendChild(buttondiv)
}