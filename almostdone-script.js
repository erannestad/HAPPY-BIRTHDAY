///////// ARRAYYYYYY TEXTTTTTTTT ////////////

var eggText = [ 
    ['many good ones', 
     "I always try to make you something by hand for a gift, but I got a little tired of painting everyone watercolor landscapes. So this time around I made you a scraggly lookin' chicken that pops out little secret egg messages. I figured you'd like that.", 
     'Rumney, NH', 'beep boop'], 
    //
    ['and lots of love', 
     "&lt;3 <br><br>", 
     'Jubilee Lake, WA'], 
    //
    ['GET IN THE HOLE', 
     "so much to love about this photo... the perfect molehole as well.",
     'City of Rocks, ID'], 
    //
    ['beep bop boop bop', 
     "I've had so many good adventures with you. So many good beers. So many funny noises.",
     'Joshua Tree, CA'],
    //
    ['ski tours', 
     "ohhhhh you love skiing maybe not as much as elliot but you love it.",
     'Anthony Lakes, OR'],
    //
    ['hut ambience', 
     "and the many other damp smelly places we dry our gear.",
     'Kieths Hut, BC'],
    //
    ['lovely lakes', 
     "of the many we've seen to together, the lakes basin &#40;ice and sunshine lakes in particular&#41; remains particularly special. As we plan the coming summer it is tempting to try and make at least one trip to the Wallowas. I'm starting to miss the east side. So many memories there.",
     'Wallowa Mountains, OR'],
    //
    ['epics', 
     "yeah...",
     'bug2'],
    ['ohhhhhhh climbing...', 
     '', 'Joshua Tree, CA'],
    ['pic9', 'bug1', 'bug2'],
    ['pic10', 'bug1', 'bug2'],
    ['pic11', 'bug1', 'bug2'],
    ['pic12', 'bug1', 'bug2'],
    ['pic13', 'bug1', 'bug2'],
    ['pic14', 'bug1', 'bug2'],
    ['pic15', 'bug1', 'bug2'],
    ['pic16', 'bug1', 'bug2'],
    ['pic17', 'bug1', 'bug2'],
    ['pic18', 'bug1', 'bug2'],
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
var eggContentInfo = document.getElementById('egg-content-info');
var eggTransitionImage = document.getElementById('egg-transition-image');
var eggTransitionSubtext = document.getElementById('egg-transition-subtext');
var eggTransitionTitle = document.getElementById('egg-transition-title');
var eggTransitionInfo = document.getElementById('egg-transition-info');
var topBar = document.getElementById('topBar');
var footer = document.getElementById('footer');
var Layer_3 = document.getElementById('Layer_3');
var Layer_2 = document.getElementById('Layer_2');

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
//    var getLayer_2Top = 180;
    var counterSlideLeft = -120 + counter*20;
    var counterSlideRight =  counter*20;
    
    
    console.log('counter:' + counter);
    console.log('counterLAG:' + counterLAG);
    console.log('counterSlideLeft:' + counterSlideLeft);
//    console.log('getLayer_2Top:' + getLayer_2Top);
    console.log('counterSlideRight:'+ counterSlideRight);
    
    Layer_2.style.top = "-"+counterSlideRight+ "vh";
    Layer_3.style.top = ""+counterSlideLeft+ "vh";
    //increment sliders
//        if (window.matchMedia("(max-width: 900px)").matches) {
//                Layer_2.style.top = "-"+counterSlideRight+ "vh";
//                Layer_3.style.top = ""+counterSlideLeft+ "vh";
//        }
//        else {
//                Layer_3.style.left = counterSlideLeft+ "vh";
//        }

    
    //strip egg animations
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
    eggContentInfo.innerHTML = eggText[counterLAG][2];
    eggContentSubtext.innerHTML = eggText[counterLAG][1];
    eggContentTitle.innerHTML = eggText[counterLAG][0];
    
    console.log(updateHTML);
    
    chickenWrapper.classList.add('shift');
    eggContent.classList.add('shift-egg-content');
    topBar.classList.add('shift-topBar');
    footer.classList.add('shift-footer');
    
    setTimeout(function(){
        //add transition animations//
         topBar.classList.add('shift-topBar-hide');
        footer.classList.add('shift-topBar-hide');
    }, 1000);
   
    
    
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

