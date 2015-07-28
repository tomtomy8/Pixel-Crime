#pragma strict

var brawlers : Brawler[];

function Start () {
	
}

function Update () {
		
}

function CalDamageTaken(attack : float, modifier : float, multiplier : float) {
	return (attack * multiplier) + modifier;
}