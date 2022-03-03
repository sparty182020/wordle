# Wordle Game Solver Script
These scripts will auto solve your wordle for you! Made by [Sparty182020](https://sparty182020.carrd.co)

***Disclaimer:*** These cheats are for non-commercial use and are only meant for use in a non-competitive area or are meant a method to be able to win a competitive match. I, [Sparty182020](https://github.com/sparty182020), am not liable for any issues; legal or not, for any method of usage of the following scripts. I partially hope that both of these issues get patched by the devs and hope that the method of game-keeping is altered to prevent such exploits.

**WARNING:** The code was created in Febuary/March of 2022. This code may be patched by then. Please do not disturb me on bugs.

### [Traditional Wordle Cheat](./script/original.js)
***Note:*** You require to be on a PC for this to work
1) Go to the [Original Wordle Game](https://nytimes.com/games/wordle/index.html)
2) Press **Ctrl+Shift+I**
3) Go to the tab labeled "_Console_"
4) Copy the code from [here](./script/original.js) and paste it, then press enter
5) Make sure the code was entered, and that it says "undefined" after it in the console. If not, redo step 4.
6) Type `Cheat.set(3)` and press enter
7) Reload and bang your done

### [Unlimited Wordle Cheat](./script/unlimited.js)
***Note:*** You require to be on a PC for this to work
1) Go to the [Wordle Unlimited Game](https://www.wordleunlimited.com/)
2) Press **Ctrl+Shift+I**
3) Go to the tab labeled "_Console_"
4) Copy the code from [here](./script/unlimited.js) and paste it, then press enter
5) Make sure the code was entered, and that it says "undefined" after it in the console. If not, redo step 4.
6) Type `const x = new UCheat(true)` if you want it to auto close the "success" message and start the next Wordle or `const x = new UCheat(false)` if not, and press enter
7) Type `x.solve()` to solve only that problem or type `x.autoSolve()` to solve that and following words