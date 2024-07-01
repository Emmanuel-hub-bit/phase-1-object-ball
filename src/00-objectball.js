function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 22,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Kemba Walker": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 7,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}

function numPointsScored(playerName) {
    const game = gameObject();
    let points = null;
    
    // Check in home players
    if (game.home.players[playerName]) {
        points = game.home.players[playerName].points;
    }
    
    // Check in away players if not found in home
    if (!points && game.away.players[playerName]) {
        points = game.away.players[playerName].points;
    }
    
    return points;
}

function shoeSize(playerName) {
    const game = gameObject();
    let shoeSize = null;
    
    // Check in home players
    if (game.home.players[playerName]) {
        shoeSize = game.home.players[playerName].shoe;
    }
    
    // Check in away players if not found in home
    if (!shoeSize && game.away.players[playerName]) {
        shoeSize = game.away.players[playerName].shoe;
    }
    
    return shoeSize;
}

function teamColors(teamName) {
    const game = gameObject();
    
    if (game.home.teamName === teamName) {
        return game.home.colors;
    } else if (game.away.teamName === teamName) {
        return game.away.colors;
    } else {
        return null; // Team not found
    }
}

function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
    const game = gameObject();
    let playerNumbers = [];
    
    if (game.home.teamName === teamName) {
        playerNumbers = Object.values(game.home.players).map(player => player.number);
    } else if (game.away.teamName === teamName) {
        playerNumbers = Object.values(game.away.players).map(player => player.number);
    }
    
    return playerNumbers;
}

function playerStats(playerName) {
    const game = gameObject();
    
    // Check in home players
    if (game.home.players[playerName]) {
        return game.home.players[playerName];
    }
    
    // Check in away players if not found in home
    if (game.away.players[playerName]) {
        return game.away.players[playerName];
    }
    
    return null; // Player not found
}












function homeTeamName() {
    const game = gameObject();
    return game.home.teamName;
}

function awayTeamName() {
    const game = gameObject();
    return game.away.teamName;
}

function homeTeamColors() {
    const game = gameObject();
    return game.home.colors;
}

function awayTeamColors() {
    const game = gameObject();
    return game.away.colors;
}

function allPlayers() {
    const game = gameObject();
    const homePlayers = Object.keys(game.home.players);
    const awayPlayers = Object.keys(game.away.players);
    return homePlayers.concat(awayPlayers);
}

function playerStats(playerName) {
    const game = gameObject();
    if (game.home.players[playerName]) {
        return game.home.players[playerName];
    } else if (game.away.players[playerName]) {
        return game.away.players[playerName];
    } else {
        return null; // Player not found
    }
}


function bigShoeRebounds() {
    const game = gameObject();
    let maxShoeSize = -Infinity;
    let playerWithLargestShoe = null;
    
    // Iterate through home team players
    for (let player in game.home.players) {
        if (game.home.players[player].shoe > maxShoeSize) {
            maxShoeSize = game.home.players[player].shoe;
            playerWithLargestShoe = player;
        }
    }
    
    // Iterate through away team players
    for (let player in game.away.players) {
        if (game.away.players[player].shoe > maxShoeSize) {
            maxShoeSize = game.away.players[player].shoe;
            playerWithLargestShoe = player;
        }
    }
    
    // Return number of rebounds for the player with the largest shoe size
    if (playerWithLargestShoe) {
        return game.home.players[playerWithLargestShoe].rebounds || game.away.players[playerWithLargestShoe].rebounds;
    } else {
        return null; // Handle case where no player is found (shouldn't happen with given data)
    }
}

function mostPointsScored() {
    const game = gameObject();
    let maxPoints = -Infinity;
    let playerWithMostPoints = null;
    
    // Check home team players
    for (let player in game.home.players) {
        if (game.home.players[player].points > maxPoints) {
            maxPoints = game.home.players[player].points;
            playerWithMostPoints = player;
        }
    }
    
    // Check away team players
    for (let player in game.away.players) {
        if (game.away.players[player].points > maxPoints) {
            maxPoints = game.away.players[player].points;
            playerWithMostPoints = player;
        }
    }
    
    return playerWithMostPoints;
}

function winningTeam() {
    const game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;
    
    // Calculate home team total points
    for (let player in game.home.players) {
        homePoints += game.home.players[player].points;
    }
    
    // Calculate away team total points
    for (let player in game.away.players) {
        awayPoints += game.away.players[player].points;
    }
    
    // Determine winning team based on points
    if (homePoints > awayPoints) {
        return game.home.teamName;
    } else {
        return game.away.teamName;
    }
}

function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
    let playerWithLongestName = null;
    
    // Check home team players
    for (let player in game.home.players) {
        if (player.length > longestName.length) {
            longestName = player;
            playerWithLongestName = player;
        }
    }
    
    // Check away team players
    for (let player in game.away.players) {
        if (player.length > longestName.length) {
            longestName = player;
            playerWithLongestName = player;
        }
    }
    
    return playerWithLongestName;
}


function doesLongNameStealATon() {
    const game = gameObject();
    let longestName = "";
    let playerWithLongestName = null;
    let maxSteals = -Infinity;
    let playerWithMostSteals = null;
    
    // Find player with longest name
    for (let player in game.home.players) {
        if (player.length > longestName.length) {
            longestName = player;
            playerWithLongestName = player;
        }
    }
    
    for (let player in game.away.players) {
        if (player.length > longestName.length) {
            longestName = player;
            playerWithLongestName = player;
        }
    }
    
    // Find player with most steals
    for (let player in game.home.players) {
        if (game.home.players[player].steals > maxSteals) {
            maxSteals = game.home.players[player].steals;
            playerWithMostSteals = player;
        }
    }
    
    for (let player in game.away.players) {
        if (game.away.players[player].steals > maxSteals) {
            maxSteals = game.away.players[player].steals;
            playerWithMostSteals = player;
        }
    }
    
    // Compare longest name player with most steals player
    return playerWithLongestName === playerWithMostSteals;
}