///////// ARRAYYYYYY TEXTTTTTTTT ////////////

var eggText = [ 
    ['big ol bug', 
     "happy birthday lydia :) <br> can't believe this was one year ago", 
     'also what is andrew doing??? lol'], 
    //
    ['pic1', 
     "happy birthday lydia :) <b> can't believe this was one year ago. happy birthday lydia :) <b> can't believe this was one year ago happy birthday lydia :) <b> can't believe this was one year ago", 
     'oops2'], 
    //
    ['pic2', 
     "happy birthday lydia :) <b> can't believe this was one year ago",
     'wow2'], 
    //
    ['pic3', 
     "happy birthday lydia :) <b> can't believe this was one year agohappy birthday lydia :) <b> can't believe this was one year ago. happy birthday lydia :) <b> can't believe this was one year ago happy birthday lydia :) <b> can't believe this was one year ago",
     'bug2'],
    //
    ['pic4', 
     "happy birthday lydia :) <b> can't believe this was one year ago",
     'bug2'],
    //
    ['pic5', 
     "happy birthday lydia :) <b> can't believe this was one year ago",
     'bug2'],
    //
    ['pic6', 
     "happy birthday lydia :) <b> can't believe this was one year ago",
     'bug2'],
    //
    ['pic7', 'bug1', 'bug2'],
    ['pic8', 'bug1', 'bug2'],
    ['pic9', 'bug1', 'bug2'],
    ['pic10', 'bug1', 'bug2'],
    ['pic11', 'bug1', 'bug2'],
    ['pic12', 'bug1', 'bug2'],
    ['pic13', 'bug1', 'bug2'],
    ['pic14', 'bug1', 'bug2'],
    ['pic15', 'bug1', 'bug2'],
    ['pic16', 'bug1', 'bug2'],
    ['pic17', 'bug1', 'bug2'],
];
console.log(eggText);

///////// ARRAYYYYYY TEXTTTTTTTT ////////////

var counter = 0;
var counterLAG = counter - 1;

var chicken = document.getElementById('chicken');
var tl = new TimelineMax();

var chickenWrapper = document.getElementById('Layer_1');
var tl = new TimelineMax();

var BF1rotation = 5;
var BF2rotation = 4;
var BF3rotation = 3;

var eggX = document.getElementById('eggX');
var eggY = document.getElementById('eggY');
var egg = document.getElementById('egg');
var eggShadow = document.getElementById('egg-shadow');
var eggBreakRight = document.getElementById('egg-break-right');
var eggBreakLeft = document.getElementById('egg-break-left');


var tween1 = new TweenMax.to('#BIGfeather1', 5, {
        rotation: BF1rotation,
        transformOrigin: '100% 100%',
        repeat: 1,
        yoyo: true
        });

var tween2 = new TweenMax.to('#BIGfeather2', 4, {
        rotation: BF2rotation,
        transformOrigin: '100% 100%',
        repeat: 1,
        yoyo: true
        });

var tween3 = new TweenMax.to('#BIGfeather3', 3, {
        rotation: BF3rotation,
        transformOrigin: '100% 0%',
        repeat: 1,
        yoyo: true
        });


var eggContentWrapper = document.getElementsByClassName('egg-content-wrapper');
var eggContent = document.getElementById('egg-content')
var eggContentImage = document.getElementById('egg-content-image');
var eggContentSubtext = document.getElementById('egg-content-subtext');
var eggContentTitle = document.getElementById('egg-content-title');
var eggTransitionImage = document.getElementById('egg-transition-image');
var eggTransitionSubtext = document.getElementById('egg-transition-subtext');
var eggTransitionTitle = document.getElementById('egg-transition-title');
var topBar = document.getElementById('topBar');
var footer = document.getElementById('footer');

var updateHTML = "<img src='pics/img"+ counter+".jpg'>";

//initialize the Array
var imgArray = new Array;
for(var i=0;i<17;i++){ 
imgArray[i] = new Image(); 
imgArray[i].src = 'pics/img' + i + '.jpg'; };

console.log(imgArray);


///////////////////////////////////////////////////
///////////////////////////////////////////////////
/////////////// POPEGG FUNCTION ///////////////////

chicken.onclick = function popEGG(){
    
    counter++;
    counterLAG++;
    console.log('counter:' + counter);
    console.log('counterLAG:' + counterLAG);
    
    eggX.classList.remove('bounce-egg-x');
    eggY.classList.remove('bounce-egg-y');
    egg.classList.remove('bounce-egg-rotate');
    eggShadow.classList.remove('bounce-egg-shadow');
    eggBreakRight.classList.remove('egg-break-right-anim');
    eggBreakLeft.classList.remove('egg-break-left-anim');
    //strip transition animations//
    eggContentImage.classList.remove('slideIn');
    eggContentImage.classList.remove('slideOut');
    eggContentSubtext.classList.remove('slideIn-subtext');
    eggContentSubtext.classList.remove('slideOut-subtext');
    eggContentTitle.classList.remove('slideOut-title');
    
    var timeoutAdd = setTimeout(function(){
        eggX.classList.add('bounce-egg-x');
        eggY.classList.add('bounce-egg-y');
        egg.classList.add('bounce-egg-rotate');
        eggShadow.classList.add('bounce-egg-shadow');
        eggBreakRight.classList.add('egg-break-right-anim');
        eggBreakLeft.classList.add('egg-break-left-anim');
    }, 0);
    
    var timeoutAddTransition = setTimeout(function(){
        //add transition animations//
        eggContentImage.classList.add('slideOut');
        eggContentSubtext.classList.add('slideOut-subtext');
        eggContentTitle.classList.add('slideOut-title');
        }, 2400);

    var timeoutAddTransition = setTimeout(function(){
        //add transition animations//
        eggContentImage.classList.remove('slideOut');
        eggContentSubtext.classList.remove('slideOut-subtext');
        eggContentImage.classList.add('slideIn');
        eggContentSubtext.classList.add('slideIn-subtext');
    }, 2800);
    
    var crackEggVar = window.setTimeout(crackEgg, 2800);
    
    var timeoutAddTransition = setTimeout(function(){
        //add transition animations//
         eggContentTitle.classList.remove('slideOut-title');
        eggContentTitle.classList.add('slideIn-title');
    }, 2800);
    
    
    var BF1rotation = 40;
    var BF2rotation = 30;
    var BF3rotation = 50;
    console.log(BF1rotation);
    
    tl.add("start", "+=0")
    
    .to('#BIGfeather1', .2, {
        rotation: BF1rotation,
        transformOrigin: '100% 100%',
        repeat: 0,
        yoyo: true
        }, 'start')

    .to('#BIGfeather2', .2, {
        rotation: BF2rotation,
        transformOrigin: '100% 100%',
        repeat: 0,
        yoyo: true
        }, 'start')

    .to('#BIGfeather3', .2, {
        rotation: BF3rotation,
        transformOrigin: '100% 0%',
        repeat: 0,
        yoyo: true
        }, 'start');
    
    tl.add("end", "+=.2")
    .to('#BIGfeather1', .2, {
        rotation: 0,
        }, 'end')

    .to('#BIGfeather2', .2, {
        rotation: 0,
        }, 'end')

    .to('#BIGfeather3', .2, {
        rotation: 0,
        }, 'end');
    
        function capSubtext () {
            var eggTransitionSubtextHeight = eggTransitionSubtext.heigh;
            console.log("eggTransitionSubtextHeight: "+eggTransitionSubtextHeight+"px")
             
        };

    capSubtext();
//    window.onresize = capSubtext();
    
    return;
};

/////////////// POPEGG FUNCTION ///////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
////////////// CRACKEGG FUNCTION //////////////////

function crackEgg() {
    eggContentImage.innerHTML = "<img src='pics/img" + counter + ".jpg' id='img" + counter + "' class='egg-images'>";
    eggContentSubtext.innerHTML = eggText[counterLAG][1];
    eggContentTitle.innerHTML = eggText[counterLAG][0];
    
    console.log(updateHTML);
    
    chickenWrapper.classList.add('shift');
    eggContent.classList.add('shift-egg-content');
    topBar.classList.add('shift-topBar');
    footer.classList.add('shift-footer');
    
    
//        function transitionContent () {
//            
//            var timeoutAddTransitions = setTimeout(function(){
//                
//                eggContentImage.classList.add('animated', 'fadeOut', 'delay-5s');
//            }, 0);
//            
//            console.log('you clicked the chicken')
//        }
    
//    chicken.onclick = transitionContent();
    
    
    function capPortraits () {
            var eggImg = document.getElementById('img' + counter);
            var eggImgWidth = eggImg.width;
            var eggImgHeight = eggImg.height;
            var eggImgWidthNew = eggImg.offsetWidth;
            var eggImgHeightNew = eggImg.offsetHeight;
            var convertVW = document.documentElement.clientWidth;

            eggContent.style.width = eggImgWidthNew/convertVW*100+"vw";
            eggTransitionImage.style.height = eggImgHeightNew+'px';
            
        };

    capPortraits();
    window.onresize = capPortraits;
    
};
////////////// CRACKEGG FUNCTION //////////////////




























/////////////// SCRAPS ///////////////////

//    function getWidthHeight(){
//        var eggImages = document.getElementById('img' + counter);
//        var eggImagesWidth = eggImages.scrollWidth;
//        var eggImagesHeight = eggImages.scrollHeight;
//        var eggTransitionImage = document.getElementById('egg-transition-image');
//        var convertVH = document.documentElement.clientHeight;
//        var convertVW = document.documentElement.clientWidth;
//        eggTransitionImage.style.width = eggImagesWidth/convertVH*100+"vh";
//        eggTransitionImage.style.height = eggImagesHeight/convertVW*100+"vw";
////        eggContent.style.gridTemplateColumns = "1fr," +eggImagesHeight/convertVW*100+"vw , 1fr";
//        eggImages.style.width = eggImagesWidth/convertVH*100+"vh";
////        eggImages.style.height = eggImagesHeight/convertVH*100+"vw";
//        console.log("offsetWidth of img"+counter+": "+eggImagesWidth+" and offsetHeight of img"+counter+": "+eggImagesHeight);
//    }
//    
//    getWidthHeight();
//    
//    window.onresize = getWidthHeight;
