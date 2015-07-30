/*@System.NonSerialized
var lon : String;

@System.NonSerialized
var lat : String;*/

private var base : String = "http://policecrimeaggregates.herokuapp.com";

function find (lonlat : float[]) {
	var www : WWW = new WWW(base + "/totals?lat=" + lonlat[0] + "&lng=" + lonlat[1]);
	yield www;
	Debug.Log(www.text);
}