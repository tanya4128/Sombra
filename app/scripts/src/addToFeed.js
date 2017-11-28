function subscribeToNews() {
    var email = document.getElementById('email_news');
    var result = {"email": email.value};
    var json = JSON.stringify(result);
    console.log(json)
}
