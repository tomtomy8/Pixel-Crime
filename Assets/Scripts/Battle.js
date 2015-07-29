#pragma strict

var brawlers : Brawler[];

var healthBarCanvas : GameObject;
var healthBarCanvas2 : GameObject;

private var healthBarW : UI.Image;
private var healthBarG : UI.Image;

private var healthBarW2 : UI.Image;
private var healthBarG2 : UI.Image;

private var canvasText : UI.Text;
private var canvasText2 : UI.Text;

private var health1divider : float;
private var health2divider : float;

function Start () {
	healthBarW = healthBarCanvas.transform.GetChild(0).gameObject.GetComponent(UI.Image);
	healthBarG = healthBarCanvas.transform.GetChild(1).gameObject.GetComponent(UI.Image);
	
	healthBarW2 = healthBarCanvas2.transform.GetChild(0).gameObject.GetComponent(UI.Image);
	healthBarG2 = healthBarCanvas2.transform.GetChild(1).gameObject.GetComponent(UI.Image);
	
	canvasText = healthBarW.GetComponentInChildren(UI.Text);
	canvasText2 = healthBarW2.GetComponentInChildren(UI.Text);
	
}

function Update () {
	canvasText.text = brawlers[0].currentHealth + "/" + brawlers[0].myClass.health; 
	canvasText2.text = brawlers[1].currentHealth + "/" + brawlers[1].myClass.health; 
	
	health1divider = healthBarW.rectTransform.right.x * (brawlers[0].currentHealth/brawlers[0].myClass.health);
	health2divider = healthBarW2.rectTransform.right.x * (brawlers[0].currentHealth/brawlers[0].myClass.health);
	
	healthBarW.rectTransform.right.x = brawlers[0].currentHealth * health1divider;
	healthBarW2.rectTransform.right.x = brawlers[1].currentHealth * health2divider;
		
}

function CalDamageTaken(attack : float, modifier : float, multiplier : float) {
	return (attack * multiplier) + modifier;
}