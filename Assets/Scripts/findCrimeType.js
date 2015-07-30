import SimpleJSON;
 
private var base : String = "http://policecrimeaggregates.herokuapp.com";

function find (lonlat : float[]) {
	var www : WWW = new WWW(base + "/totals?lat=" + lonlat[0] + "&lng=" + lonlat[1]);
	yield www;
	var data = JSON.Parse(www.text);
	var type : String;
	if(Random.value < 0.5) {
		type = data["first"];
	} else {
		type = data["second"];
	}
	Debug.Log(type);
}