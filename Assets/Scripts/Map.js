import System.IO;

var edits : UI.Text[];
var Images : UI.Image[];

private var criminalsInArea : Class[];

var areas : Area[];

private var currentArea : Area;

function Start () {
	currentArea = areas[0];
	initNewArea();
}

function Update () {
	
}

function initNewArea () {
	edits[0].text = "Current Area: " + currentArea.areaName;
}