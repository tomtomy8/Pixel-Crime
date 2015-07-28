#pragma strict

var name : String;
var isPlayer : boolean;
var isBoss : boolean;
var difficulty : int;
var attack : float;
var defense : float;
var speed : float;
var health : int;

private var myAnimator : Animator;

private var direction : String;

function Start () {
	myAnimator = gameObject.GetComponent("Animator");
}

function FixedUpdate () {
	Move();
	if(Input.GetKeyDown("d")) {
		direction = "right";
	} else if(Input.GetKeyDown("a")) {
		direction = "left"; 
	} else if (!Input.anyKey){
		direction = null;
	} 
}

function Move () {
	
	if(direction == "right") {
		myAnimator.SetFloat("Speed", 1);
		myAnimator.SetBool("IsFacingRight", true);
		transform.Translate(Time.deltaTime, 0, 0);		
	} else if (direction == "left") {
		myAnimator.SetFloat("Speed", -1);
		transform.Translate(-(Time.deltaTime), 0, 0);
		myAnimator.SetBool("IsFacingRight", false);
	} else {
		transform.Translate(0,0,0);
		myAnimator.SetFloat("Speed", 0);
	}
}