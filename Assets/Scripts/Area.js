@System.NonSerializedAttribute
var areaName : String;

private var criminal1 : Class;
private var criminal2 : Class;

var myCamera : Camera;

var lon : float;
var lat : float;

@System.NonSerializedAttribute
var cordonates : Vector3;

function Start () {
	areaName = gameObject.name;
	cordonates = gameObject.transform.position;
}

function Update () {
			
}