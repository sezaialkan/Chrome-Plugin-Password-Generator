// Initialize button with user's preferred color
let randomItem = document.getElementById("defaults");
let levelItem = 2;
$('#level').change(function () {
	levelItem = document.getElementById('level').value;
});
let lengthItem = 12;
$('#length').change(function () {
	lengthItem = document.getElementById('length').value;
});

function whatLevel(level) {
	if (level == 1) {
		$('#defaults').addClass("success").removeClass("danger");
		return '0#aA';
	} else if (level == 2) {
		$('#defaults').removeClass("success").removeClass("danger");
		return '0aA';
	}
	else if (level == 3) {
		$('#defaults').addClass("danger").removeClass("success");
		return 'aA';
	}
}
function rasteleSembol(uzunluk, semboller) {
	let maske = '';
	if (semboller.indexOf('a') > -1) maske += 'abcdefghijklmnopqrstuvwxyz';
	if (semboller.indexOf('A') > -1) maske += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	if (semboller.indexOf('0') > -1) maske += '0123456789';
	if (semboller.indexOf('#') > -1) maske += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
	let sonuc = '';

	for (var i = uzunluk; i > 0; --i) {
		sonuc += maske[Math.floor(Math.random() * maske.length)];
	}
	return sonuc;
}

let pass = randomItem.innerHTML = rasteleSembol(12, whatLevel(2));

$('#createPass').click(function () {
	pass = randomItem.innerHTML = rasteleSembol(lengthItem, whatLevel(levelItem));
});

function Kopyala(element) {
	var $temp = $("<input>")
	$("body").append($temp);
	$temp.val($(element).text()).select();
	document.execCommand("copy");
	// console.log("Kopyalandı");
	$temp.remove();

	return false;
};
$('#copyMain').click(function () {

	Kopyala('#defaults');

	$('#copyMain').text("Kopyalandı!");
	$('#copyMain').addClass("success");

	setTimeout(function(){
		$('#copyMain').removeClass("success");
		$('#copyMain').text("Kopyala");
	},2000);

});
