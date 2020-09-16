function onClickFunction() {
$.ajax({
	method: "GET",
	url: "http://localhost:8080/user"
	})
.done(
	function(odpowiedz) {
	$("#content").text(odpowiedz[0].login);
	})
.fail(
	function(jasdgfj, textStatus) {
	alert(textStatus);
	});
}
