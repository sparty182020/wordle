class UCheat {
    constructor(autoClose) {
        this.autoClose = Boolean(autoClose)
    }
    solve() {
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
            Promise.resolve()
                .then(
                    setTimeout(document.getElementsByClassName("btn-close")[0].click(), 500)
                )
                .then(
                    setTimeout(document.dispatchEvent(new KeyboardEvent('keydown', {key = 'Enter'})))
                )
        }
    }
    autoSolve() {
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