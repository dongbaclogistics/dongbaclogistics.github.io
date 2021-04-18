$('#circle1').circleProgress({
    value: 0.85,
    size: 120,
    fill: {
        gradient: ["#1D3557", "#E63946" ]
    },
    lineCap: "round"
}).on('circle-animation-progress', function(event, progress, stepValue) {
    $('#value1').text(stepValue.toFixed(2).substr(1)*100 + '%')
  });

$('#circle2').circleProgress({
    value: 0.75,
    size: 120,
    fill: {
        gradient: ["#1D3557", "#E63946"]
    },
    lineCap: "round"
}).on('circle-animation-progress', function(event, progress, stepValue) {
    $('#value2').text(stepValue.toFixed(2).substr(1)*100 + '%')
});

$('#circle3').circleProgress({
    value: 0.90,
    size: 120,
    fill: {
        gradient: ["#1D3557",  "#E63946"]
    },
    lineCap: "round"
}).on('circle-animation-progress', function(event, progress, stepValue) {
    $('#value3').text(stepValue.toFixed(2).substr(1)*100 + '%')
});

