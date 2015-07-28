#pragma strict

var isPlayer : boolean;
var isBoss : boolean;
var difficulty : int;
var myClass : Class;


var childCollider : BoxCollider2D;

private var myAnimator : Animator;

private var direction : String;

private var collider1 : BoxCollider2D;
private var collider2 : BoxCollider2D;

private var collider1Y : float;
private var collider2Y : float;
private var collider1X : float;
private var collider2X : float;


function Start () {
	myAnimator = gameObject.GetComponent("Animator");
	
	collider1 = gameObject.GetComponent("BoxCollider2D");
	collider2 = childCollider;
	
	collider1Y = collider1.offset.y;
	collider2Y = collider2.offset.y;
	collider1X = collider1.offset.x;
	collider2X = collider2.offset.x;
	
}

function FixedUpdate () {
	Move();
	checkColliderDirection();
	if(isPlayer) {
		if(Input.GetKeyDown("d")) {
			direction = "right";
		} else if(Input.GetKeyDown("a")) {
			direction = "left"; 
		} else if (!Input.anyKey){
			direction = null;
		} 
	}
}

function Move () {
	
	if(direction == "right") {
		myAnimator.SetFloat("Speed", 1);
		myAnimator.SetBool("IsFacingRight", true);
		transform.Translate(Time.deltaTime, 0, 0);		
	} else if (direction == "left") {
		myAnimator.SetFloat("Speed", -1);
		myAnimator.SetBool("IsFacingRight", false);
		transform.Translate(-(Time.deltaTime), 0, 0);
	} else {
		transform.Translate(0,0,0);
		myAnimator.SetFloat("Speed", 0);
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