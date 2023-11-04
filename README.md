# Milestone_Game_Project
Milestone for SDSU 09 web browser game

This is Roxana Vazquez Milestone project for a Software Development Program.

GENERAL DESCRIPTION OF GAMEPLAY: The project entails a Connect Four game including two players taking turns to connect four of their pieces in a row. The goal is during a player's turn to block any potential areas
player one might connect four in a row, and also work on connecting four in a row with their own pieces. Player one is represented
by the purple pieces and player two is represented by the pink pieces. Instead of the class ic blue, red, and yellow colors, the board is dark green and 
the pieces are purple and pink. You can connect four in a row diagonally, anti-diagonally, vertically, and horizontally.

INSTRUCTIONS TO PLAY:
1. Click on the column where you want your piece to fall in. 
2. Connect four in a row in any direction to win.
3. You can refresh the page to start over or press the reset button.

DETAILS OF PROJECT DEVELOPEMENT:
My inspiration for developing a connect four game was found in my previous field experience working with children with ASD (Autism Deficit Disorder). This game has been a popular game to play and build rapport with my clients. It is easy to
start playing without too many rules, it is more complex than tic tac toe, and the sensory/tactile aspect of it is neat, simple, and pleasant during gameplay. There is also a turn component which helps shape patience and also model how social interactions
and conversation sort of works. There is strategy to the game, so it can be played by children and adults through a broad age range. I decided to stray away from the primary colors the game is usually seen in to make a statement against the infantilization of people with ASD, and also to bring awareness to the misdiagnosis and underdiagnoses of girls with ASD. My last reason for the change of colors is because I like those colors and find them just a little more exciting without sacrificing contrast. 

To develop a connect four game I needed to create the board which is an array of columns and rows where the pieces would be placed. The pieces themselves are actually just a background color change that is targeted by
an event listener on click. I made sure to alternate between players and make sure that the code updates the row index of the piece placed within a certain column after a click. Updating the row height is what allows the
pieces to be placed at the lowest spot available in a column, acting like gravity in a real live version of the gameboard. There are six rows and seven columns just like in the live version of the game. The game was built 
with an HTML file, CSS file, and a Javascript file.

