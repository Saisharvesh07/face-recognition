webcam.set({
width:350,
height:300,
image_format : 'png',
png_quality:90
});
camera = document.getElementById("camera")

webcam.attach( "#camea" );

function take_snapshot()
{
webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
});
}

console.log("ml5 version:", ml5.version);
classifier = ml5.imageclassifier('https://teachablemachine.withgoogle.com/models/moSx_orip/',modelLoded);
