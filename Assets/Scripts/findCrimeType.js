import SimpleJSON;
 
private var base : String = "http://policecrimeaggregates.herokuapp.com";

var sceneScene : SceneScene;

var brawlers : Class[];
function find (lonlat : float[]) {
	var www : WWW = new WWW(base + "/totals?lat=" + lonlat[0] + "&lng=" + lonlat[1]);
	yield www;
	var data = JSON.Parse(www.text);
	var type : String;
	if(!data) {
		var ran = Random.value;
		if(ran == 0.1) {
			type = "Anti-Social-Behavior";
		} else {
			type = "Shoplifting";
		}
	} else {
		if(Random.value < 0.5) {
			type = data["first"]; 
		} else {
			type = data["second"];
		}
		if(type == "Anti-Social-Behavior") {
			sceneScene.opponent = brawlers[0];
		} else if(type == "Shoplifting") {
			sceneScene.opponent = brawlers[1];
		} else {
			sceneScene.opponent = brawlers[0];
		}
	}
	Application.LoadLevel(1);
}	