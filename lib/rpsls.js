// This is the main file where exported functions live
export {rps, rpsls}


function rps(shot) {
	let result = '';
	let options = ['rock', 'paper', 'scissors'];

	let computer = Math.floor(Math.random()*3);
	if(computer == 0) { computer = "rock"}
	else if(computer == 1) { computer = "paper"}
	else { computer = "scissors"}

	if (shot === undefined) {return {player: computer};}

	let user = shot.toLowerCase();

	if (!options.includes(user)) {
        	console.error(`${shot} is out of range.`);
        	throw new RangeError();
    	}

	if (computer === user) {
		result = "tie";
	} else if (computer === "paper" && user === "rock" || computer === "rock" && user === "scissors" || computer === "scissors" && user === "paper") {
		result = "lose";
	} else {
		result = "win";
	}

	return { player: user,
		opponent: computer,
		result: result
	};
}

function rpsls(shot) {
	let result = '';
        let options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

        let computer = Math.floor(Math.random()*5);
        if(computer == 0) { computer = "rock"}
        else if(computer == 1) { computer = "paper"}
        else if(computer == 2) { computer = "scissors"}
	else if(computer == 3) { computer = "lizard"}
	else { computer = "spock"}

	if (shot === undefined) {return {player: computer};}

	let user = shot.toLowerCase();

	if (!options.includes(user)) {
		console.error(`${shot} is not a valid choice.`);
		throw new RangeError();
	}


	if (computer === user) {
		result = "tie";
	} else if (computer === "paper" && user === "rock" || computer === "rock" && user === "scissors" || computer === "scissors" && user === "paper") {
		result = "lose";
	} else if (computer === "rock" && user === "lizard" || computer === "spock" && user === "rock" || computer === "lizard" && user === "spock" || computer === "spock" && user === "scissors" || computer === "scissors" && user === "lizard" || computer === "paper" && user === "spock" || computer === "lizard" && user === "paper") {
		result = "lose";
	} else {
		result = "win";
	}

	return { player: user,
		opponent: computer,
		result: result
	};
}
