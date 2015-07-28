var lon : String;
var lat : String;

private var base : String = "http://policecrimeaggregates.herokuapp.com";

function Start () {
	var www : WWW = new WWW(base + "/totals?lat=" + lat + "&lng=" + lon);
	yield www;
	Debug.Log(www.text);
}