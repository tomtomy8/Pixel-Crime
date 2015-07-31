#pragma strict

var isPlayer : boolean;
var myClass : Class;
var childCollider : BoxCollider2D;

var currentHealth : int;
var thumb : UI.Image;
var myThumb : Sprite;

private var myAnimator : Animator; 

private var direction : String;

private var collider1 : BoxCollider2D;
private var collider2 : BoxCollider2D;

private var collider1Y : float;
private var collider2Y : float;
private var collider1X : float;
private var collider2X : float;


function Awake () {
	myAnimator = gameObject.GetComponent(Animator);
	
	currentHealth = myClass.health;
	
	collider1 = gameObject.GetComponent(BoxCollider2D);
	collider2 = childCollider;
	
	collider1Y = collider1.offset.y;
	collider2Y = collider2.offset.y;
	collider1X = collider1.offset.x;
	collider2X = collider2.offset.x;
}

function Start () {
	thumb.overrideSprite = myThumb;
}

function Update () {
	checkColliderDirection();
	if(isPlayer) {
		if(Input.GetKeyDown("d")) {
			direction = "right";
		} else if(Input.GetKeyDown("a")) {
			direction = "left"; 
		} else if(Input.GetKeyDown("z")){
			direction = "attack1";
		} else if(Input.GetKeyDown("x")){
			direction = "attack2";
		} else if (!Input.anyKey){
			direction = null;
		} 
		Move();
		var up = Vector2.right;
		
   		var hit : RaycastHit;    
   		Debug.DrawRay(Vector3(transform.position.x+0.5, transform.position.y, transform.position.z), up * 0.8, Color.green); 
		if(Physics2D.Raycast(Vector2(transform.position.x+0.5, transform.position.y), up,  0.8, LayerMask.GetMask("Brawlers"))){
			if(direction == "attack1" || direction == "attack2") {
    			GameObject.Find("Mugger Enemy").gameObject.GetComponent(Brawler).currentHealth--;
    		}
  	 	}
	} 
	gameObject.transform.position.z = 0;
}

function Move () {
	
	if(direction == "right") {
		myAnimator.SetFloat("Speed", 1);
		myAnimator.SetBool("IsFacingRight", true);
		transform.Translate(Time.deltaTime * myClass.Speed, 0, 0);		
	} else if (direction == "left") {
		myAnimator.SetFloat("Speed", -1);
		myAnimator.SetBool("IsFacingRight", false);
		transform.Translate(-(Time.deltaTime * myClass.Speed), 0, 0);
	} else if (direction == "attack1") {
		myAnimator.SetBool("Attacking", true);
		Debug.Log("Attacked");
	} else if (direction == "attack2") {
		myAnimator.SetBool("Attacking2", true);
		Debug.Log("Attacked");
	} else {
		transform.Translate(0,0,0);
		myAnimator.SetFloat("Speed", 0);
		myAnimator.SetBool("Attacking", false);
		myAnimator.SetBool("Attacking2", false);
	}
}

function checkColliderDirection() {
	if(myAnimator.GetBool("IsFacingRight")) {
		collider1.offset = Vector2(collider1X, collider1Y);
		collider2.offset = Vector2(collider2X, collider2Y);
	} else {
		collider1.offset = Vector2(-0.005, collider1Y);
		collider2.offset = Vector2(-0.009, collider2Y);
	}
}

function die () {
	gameObject.GetComponent(Animator).enabled = false;
	transform.rotation.z = transform.rotation.z + 90;
	GameObject.Find("Text").GetComponent(Animation).Play();
	yield WaitForSeconds(2);
	Application.LoadLevel(0);
}