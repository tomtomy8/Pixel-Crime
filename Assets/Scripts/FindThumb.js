#pragma strict
private var myThumbGO : GameObject;

function Start () {
	myThumbGO = GameObject.Find("GameObject");
}

function Update () {
	gameObject.GetComponent(UI.Image).overrideSprite = myThumbGO.GetComponent(SceneScene).opponent.thumb;
}