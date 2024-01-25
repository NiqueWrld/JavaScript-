const rngVibrate = document.querySelector("#rngVibrate")
const lblVibrate = document.querySelector('#lblVibrate')

rngVibrate.addEventListener('change', event => {
  lblVibrate.innerHTML = `Vibrate for ${rngVibrate.value}ms`
})


function vibrate() {
  var ms = rngVibrate.value;
  if (navigator.vibrate) {
    window.navigator.vibrate(ms)
  }
  else {

    console.log('vibrated')
  }
}
