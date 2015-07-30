#pragma strict

var myCamera : Camera;

var zoomedOutC : Vector3;

function Start () {

}

function Update () {

}

function ZoomOut () {
	myCamera.transform.position = Vector3.Lerp(myCamera.transform.position, zoomedOutC, 1);
	gameObject.SendMessage("zoomOut");
}