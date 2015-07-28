#pragma strict

var brawlers : Brawler[];

var healthBarCanvas : GameObject;
var healthBarCanvas2 : GameObject;

private var healthBarW : UI.Image;
private var healthBarG : UI.Image;

private var healthBarW2 : UI.Image;
private var healthBarG2 : UI.Image;

function Start () {
	healthBarW = healthBarCanvas.transform.GetChild(0).gameObject.GetComponent(UI.Image);
	healthBarG = healthBarCanvas.transform.GetChild(1).gameObject.GetComponent(UI.Image);
	
	healthBarW2 = healthBarCanvas2.transform.GetChild(0).gameObject.GetComponent(UI.Image);
	healthBarG2 = healthBarCanvas2.transform.GetChild(1).gameObject.GetComponent(UI.Image);
	
	var canvasText = healthBarW.GetComponentInChildren(UI.Text);
	var canvasText2 = healthBarW2.GetComponentInChildren(UI.Text);
	
	//canvasText.Text(brawlers[0].toString());
}

function Update () {
	
}

function CalDamageTaken(attack : float, modifier : float, multiplier : float) {
	return (attack * multiplier) + modifier;
}