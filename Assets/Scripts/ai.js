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
		transform.translate(Time.deltaTime * myBrawler.myClass.Speed, 0, 0);
	}
	Debug.DrawLine(gameObject.transform.position, player.transform.position, Color.red);
}

function On2DTriggerEnter(col : Collider2D) {
	if(col.gameObject == player) {
		isAtPlayer = true;
	} else {
		ifAtPlayer = false;
	}
}	