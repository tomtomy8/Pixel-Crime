var difficulty : int;

private var myBrawler : Brawler;
var player : GameObject;
private var isAtPlayer : boolean;

function Start () {
	myBrawler = gameObject.GetComponent(Brawler);
}

function Update () {
	if(!isAtPlayer) {
		transform.LookAt(player.transform);
		transform.Translate(Time.deltaTime * myBrawler.myClass.Speed, 0, 0);
	}
	gameObject.transform.rotation.x = 0;
	gameObject.transform.rotation.y = 180;
	if(myBrawler.rayCastHitting) {
		if(Random.value < 0.5) {
			//myBrawler.direction = "attack1";
		} else {
			//myBrawler.direction = "attack2";
		}
	}
}