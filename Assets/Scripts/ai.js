var difficulty : int;

private var myBrawler : Brawler;
var player : GameObject;
private var isAtPlayer : boolean;

// Use this for initialization
function Start () {
	myBrawler = gameObject.GetComponent(Brawler);
}

// Update is called once per frame
function Update () {
	if(!isAtPlayer) {
		transform.LookAt(player.transform);
		transform.Translate(Time.deltaTime * myBrawler.myClass.Speed, 0, 0);
	}
	gameObject.transform.rotation.x = 0;
	gameObject.transform.rotation.y = 180;
}

function OnTriggerEnter2D(col : Collider2D) {
	if(col.gameObject == player) {
		isAtPlayer = true;
	} else {
		isAtPlayer = false;
	}
}	

function OnTriggerExit2D(col : Collider2D) {
	if(col.gameObject == player) {
		isAtPlayer = false;
	} else {
		isAtPlayer = true;
	}
}