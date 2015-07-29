#pragma strict

var brawlers : Brawler[];

var healthBar : UI.Image;
var healthBar2 : UI.Image;

var healthText : UI.Text;
var healthText2 : UI.Text;

var health1divider : float;
var health2divider : float;

function Start () {
	health1divider = healthBar.fillAmount/brawlers[0].myClass.health;
}

function Update () {
	healthBar.fillAmount = health1divider * brawlers[0].currentHealth;
	healthText.text = brawlers[0].currentHealth + "/" + brawlers[0].myClass.health;
	if(brawlers[0].currentHealth <= 0) {
		brawlers[0].currentHealth = 0;
		healthText.text = "Dead";
		healthText.color = Color.red;
	} else if (brawlers[0].currentHealth > brawlers[0].myClass.health) {
		brawlers[0].currentHealth = brawlers[0].myClass.health;
	}
		else {
		healthText.color = Color.black;
	}
}

function CalDamageTaken(attack : float, modifier : float, multiplier : float) {
	return (attack * multiplier) + modifier;
}