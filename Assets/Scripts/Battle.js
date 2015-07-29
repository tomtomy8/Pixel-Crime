#pragma strict

var brawlers : Brawler[];
var healthBars : UI.Image[];
var healthTexts : UI.Text[];
var healthdividers : float[];

function Start () {
	for(var x=0; x < brawlers.length; x++) {
		healthdividers[x] = healthBars[x].fillAmount/brawlers[x].myClass.health;
		healthBars[x].fillAmount = healthdividers[x] * brawlers[x].currentHealth;
		healthTexts[x].text = brawlers[x].currentHealth + "/" + brawlers[x].myClass.health;
	}
}

function Update () {
	
}

function CalDamageTaken(attack : float, modifier : float, multiplier : float) {
	return (attack * multiplier) + modifier;
}

function brawlerUpdate (x : int) {
	healthBars[x].fillAmount = healthdividers[x] * brawlers[0].currentHealth;
	healthTexts[x].text = brawlers[0].currentHealth + "/" + brawlers[0].myClass.health;
	if(brawlers[0].currentHealth <= 0) {
		//brawlers[0].currentHealth = 0;
		healthTexts[x].text = "Dead";
		healthTexts[x].color = Color.red;
	} /*else if (brawlers[0].currentHealth > brawlers[0].myClass.health) {
		brawlers[0].currentHealth = brawlers[0].myClass.health;
	}*/
		else {
		healthTexts[x].color = Color.black;
	}
}