$('#rippleria').rippleria({

    duration: 750,

    easing: 'ease-in'
});

$('#rippleria').click(function(e) {
    e.preventDefault();

    var randInt = function (min, max) {
    var rand = min + Math.random() * (max - min)
    rand = Math.round(rand);
    return rand;
};

$(this).rippleria('changeColor',
        'rgba('+randInt(0,200)+','+randInt(0,200)+','+randInt(0,200)+',0.'+randInt(3,5));
});
