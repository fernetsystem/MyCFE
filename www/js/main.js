function onBodyLoad(){
    document.addEventListener("deviceready",onDeviceReady,false);
}
function onDeviceReady(){
    navigator.notification.alert("Phonegap is working");
}