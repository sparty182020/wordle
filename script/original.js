// Classic Cheat Class
class Cheat {
    constructor() {

    }
    static gameSolver() {
        if (!location.host.includes("nytimes")) {return}
        const wordleJSON = JSON.parse(localStorage.getItem('nyt-wordle-state'))
        const wordleSolution = wordleJSON.solution
        const time = Date.now()
        const wordleGameState = {
            "boardState": [
                wordleSolution,
                "",
                "",
                "",
                "",
                ""
            ],
            "evaluations": [
                [
                    "correct",
                    "correct",
                    "correct",
                    "correct",
                    "correct"
                ],
                null,
                null,
                null,
                null,
                null
            ],
            "rowIndex": 1,
            "solution": wordleSolution,
            "gameStatus": "WIN",
            "lastPlayedTs": time,
            "lastCompletedTs": time,
            "restoringFromLocalStorage": null,
            "hardMode": false
        }
        return wordleGameState;
    }
    static addGameStreak() {
        if (!location.host.includes("nytimes")) {return}
        const wordleOldStats = JSON.parse(localStorage.getItem('nyt-wordle-statistics'))
        const wordleStats = {
            "currentStreak": wordleOldStats.currentStreak + 1,
            "maxStreak": wordleOldStats.maxStreak + 1,
            "guesses": {
                "1": wordleOldStats.guesses[1] + 1,
                "2": 0,
                "3": 0,
                "4": 0,
                "5": 0,
                "6": 0,
                "fail": 0
            },
            "winPercentage": 100,
            "gamesPlayed": wordleOldStats.guesses[1] + 1,
            "gamesWon": wordleOldStats.gamesWon + 1,
            "averageGuesses": 1
        }
        return wordleStats;
    }
    static newGameStreak() {
        if (!location.host.includes("nytimes")) {return}
        const wordleStats = {
            "currentStreak": 1,
            "maxStreak": 1,
            "guesses": {
                "1": 1,
                "2": 0,
                "3": 0,
                "4": 0,
                "5": 0,
                "6": 0,
                "fail": 0
            },
            "winPercentage": 100,
            "gamesPlayed": 1,
            "gamesWon": 1,
            "averageGuesses": 1
        }
        return wordleStats;
    }
    static setStreak() {
        if (!location.host.includes("nytimes")) {return}
        const valid = localStorage.getItem('nyt-wordle-statistics')
        if (typeof valid === "object") {
            return this.newGameStreak()
        } else if (typeof valid === "string") {
            return this.addGameStreak()
        } else {
            throw new Error("Failed to set the streak in the existance check")
        }
    }
    static set(m) {
        if (!location.host.includes("nytimes")) {return}
        if (m > 3 || m < 1) {
            throw new Error("incorrect m value")
        }
        switch (m) {
            case 1:
                localStorage.setItem('nyt-wordle-state', JSON.stringify(this.gameSolver()))
                break;
            case 2:
                localStorage.setItem('nyt-wordle-statistics', JSON.stringify(this.setStreak()))
                break;
            case 3:
                localStorage.setItem('nyt-wordle-state', JSON.stringify(this.gameSolver()))
                localStorage.setItem('nyt-wordle-statistics', JSON.stringify(this.setStreak()))
                break;
        }
        console.log('%cSucsess', 'color:green;')
    }
}