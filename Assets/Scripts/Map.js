import System.IO;

var edits : UI.Text[];
var Images : UI.Image[];

private var criminalsInArea : Class[];

var areas : Area[];

private var currentArea : Area;

var myCamera : Camera;

var arrows : UI.Button[];

var mapImage : UI.Image;
var button : UI.Button;

function Start () {
	currentArea = areas[0];
	initNewArea();
}

function Awake () {
	myCamera.orthographicSize = 0.22;
}

function Update () {
}

function initNewArea () {
		edits[0].text = "Current Area: " + currentArea.areaName;
		myCamera.transform.position = Vector3.Lerp(myCamera.transform.position, currentArea.gameObject.transform.position, 1);
	
}

function nextArea() {
	var arr = new System.Collections.ArrayList();
	
	for(var x = 0; x<areas.length; x++) {
		arr.Add(areas[x]);
	}
	
	var tmp = arr.IndexOf(currentArea);
	tmp++;
	currentArea = areas[tmp];
	initNewArea();
}

function previousArea() {
	var arr = new System.Collections.ArrayList();
	
	for(var x = 0; x<areas.length; x++) {
		arr.Add(areas[x]);
	}
	
	var tmp = arr.IndexOf(currentArea);
	tmp = tmp-1;
	currentArea = areas[tmp];
	initNewArea();
}

function EnterBattle() {
	var lonlat = [currentArea.lat, currentArea.lon];
	gameObject.SendMessage("find", lonlat);
}	