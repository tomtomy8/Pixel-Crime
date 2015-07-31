#pragma strict

private var slider : UI.Scrollbar;

private var finder : findCrimeType;

var myText : GameObject;
var img1 : GameObject;
var img2 : GameObject;

function Start () {
	finder = GameObject.Find("Map").GetComponent(findCrimeType);
	slider = gameObject.GetComponent(UI.Scrollbar);
	gameObject.DontDestroyOnLoad(gameObject);
}

function Update () {
	if(!finder.ready) {
		slider.value++;
		if(slider.value == 1) {
			slider.value = 0;
		}
	} else {
		finder.GetComponent(AudioSource).enabled = false;
		Destroy(finder);
		myText.SetActive(true);
		img1.SetActive(true);
		img2.SetActive(true);
		Destroy(gameObject);
		Application.LoadLevel(2);
	} 
}
