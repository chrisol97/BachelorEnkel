//#region 
// ALDRI ENDRE NOE INNEN FOR Regionen
import * as Blocks from "./barneprat/blocks.mjs";
import * as Actions from "./barneprat/actions.mjs";
import * as Utils from "./barneprat/utils.mjs";
import { removeAll } from "./barneprat/globalTimer.mjs";
import BaseBlock from "./barneprat/blocks/baseBlock.mjs";

const GaaTil = (maal) => {
    document.body.innerHTML = "";
    removeAll();
    maal();
}

const Start = (maal) => {
    if (window.location.hash) {
        maal = window.location.hash.replace("#", "")
        eval(maal)();
    } else {
        GaaTil(maal);
    }
}
//#endregion

// MUSIKK
    let titlescreenmusic = new Audio("Lydfiler/Musikk/titlescreenmusic.mp3");

// OBJEKTLYDER
    let flyingplanesound = new Audio("Lydfiler/Objektlyder/planesound.mp3");
    let boingsound = new Audio("Lydfiler/Objektlyder/boing.mp3");

// KARAKTERER
    let mainCharVoiceIntro1 = new Audio("Lydfiler/Karakterer/mainCharVoiceIntro1.mp3");
    let mainCharVoiceIntro2 = new Audio("Lydfiler/Karakterer/mainCharVoiceIntro2.mp3");
    let mainCharVoiceIntro3 = new Audio("Lydfiler/Karakterer/mainCharVoiceIntro3.mp3");
    let mainCharVoiceIntro4 = new Audio("Lydfiler/Karakterer/mainCharVoiceIntro4.mp3");
    let mainCharVoiceIntro5 = new Audio("Lydfiler/Karakterer/mainCharVoiceIntro5.mp3");
    let mainCharVoiceIntro6 = new Audio("Lydfiler/Karakterer/mainCharVoiceIntro6.mp3");
    let mainCharVoiceIntro7 = new Audio("Lydfiler/Karakterer/mainCharVoiceIntro7.mp3");
    let mainCharVoiceIntro8 = new Audio("Lydfiler/Karakterer/mainCharVoiceIntro8.mp3");
    let giraffeVoiceIntro1 = new Audio("Lydfiler/Karakterer/giraffeVoiceIntro1.mp3");
    let catVoiceIntro1 = new Audio("Lydfiler/Karakterer/catVoiceIntro1.mp3");
    let styrerVoiceIntro1 = new Audio("Lydfiler/Karakterer/styrerVoiceIntro1.mp3");
    let ouchCatMainChar = new Audio("Lydfiler/Karakterer/ouchCatMainChar.mp3"); 

Start(startscreen);

function startscreen() {
    const startscreenobject = new Blocks.Image("Bilder/Karakterer/mainCharClosedMouth.png", {x: 325, y: 150, width: 400, height:500 });
    const skipbutton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 200, y: 200, width: 200, height: 200});                           // HUSK Å FJERNE DETTE
    Actions.Click(skipbutton, () => {
        GaaTil(scene5);
    })
    Actions.Click(startscreenobject, () => {
        GaaTil(titlescreen);
    })
}

function titlescreen() {
    titlescreenmusic.play();
    const titlescreenbackground = new Blocks.Image("Bilder/Bakgrunner/kindergartenOutside.png", {x: -8, y: -8, width: 1088, height: 818});
    const sign1 = new Blocks.Image("Bilder/Objekter/signHumlekollen.png", {x: 100, y: 350, width: 120, height: 150});
    const sign2 = new Blocks.Image("Bilder/Objekter/signMarihønehula.png", {x: 475, y: 350, width: 75, height: 90});
    const sign3 = new Blocks.Image("Bilder/Objekter/signMaurtua.png", {x: 940, y: 320, width: 100, height: 150});
    const sun = new Blocks.Image("Bilder/Objekter/sun.png", {x: 900, y: -20, width: 200, height: 250});
    const giraffetitlescreen = new Blocks.Image("Bilder/Karakterer/giraffeClosedMouth.png", {x: 300, y: 220, width: 150, height: 300});
    const cattitlescreen = new Blocks.Image("Bilder/Karakterer/catClosedMouth.png", {x: 600, y: 490, width: 350, height: 300});
    const mantitlescreen = new Blocks.Image("Bilder/Karakterer/manClosedMouth.png", {x: 780, y: 330, width: 50, height: 100});
    const mainchartitlescreen = new Blocks.Image("Bilder/Karakterer/mainCharClosedMouth.png", {x: 200, y: 440, width: 200, height: 350});
    const startbutton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 420, y: 500, width: 150, height: 150});
    Actions.Click(startbutton, () => {
        titlescreenmusic.pause();
        GaaTil(scene1);
    })
    
}

function scene1() {
    mainCharVoiceIntro1.play();
    flyingplanesound.play();
    const scene1background = new Blocks.Image("Bilder/Bakgrunner/kindergartenOutside.png", {x: -8, y: -8, width: 1088, height: 818});
    const flyingplane = new Blocks.Image("Bilder/Objekter/plane.png", { x: -250, y: 0, width: 220, height: 150});
    const mainChar = new Blocks.Image("Bilder/Karakterer/mainCharClosedMouth.png", {x: 420, y: 400, width: 250, height: 400});
    mainChar.hide();
    const mainCharTalking = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], {x: 420, y: 400, width: 250, height: 400, loop: true, auto: true});
    const continuebutton = new Blocks.Image("Bilder/Knapper/continueButton.png", {x: 800, y: 500, width: 150, height: 150});
    Actions.Tween(flyingplane, 6.5, 0);
    mainCharVoiceIntro1.onended = () => {
        mainCharTalking.hide();
        mainChar.show();
    }
    Actions.Click(continuebutton, () => {
        flyingplanesound.pause();
        mainCharVoiceIntro1.pause();
        GaaTil(scene2);
    })

}

function scene2() {
    const background = new Blocks.Image("Bilder/Bakgrunner/sandbox.png", {x: -8, y: -8, width: 1088, height: 818});
    const giraffeSandbox = new Blocks.Image("Bilder/Karakterer/giraffeClosedMouth.png", {x: 200, y: 200, width: 200, height: 400});
    const mainChar = new Blocks.Image("Bilder/Karakterer/mainCharClosedMouth.png", {x: 1100, y: 0, width: 200, height: 250});
    const yellowball = new Blocks.Image("Bilder/Objekter/yellowBall1.png", {x: 550, y: 550, width: 100, height: 100});
    const mainCharTalking = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], {x: 595, y: 303, width: 200, height: 250, loop: true, auto: true});
    const giraffeTalking = new Blocks.CellAnimation(["Bilder/Karakterer/giraffeClosedMouth.png", "Bilder/Karakterer/giraffeClosedMouth.png", "Bilder/Karakterer/giraffeClosedMouth.png", "Bilder/Karakterer/giraffeOpenMouth.png"], {x: 200, y: 200, width: 200, height: 400, loop: true, auto: true});
    const triggerObject = new Blocks.Image("Bilder/Objekter/block3.png", {x: 50, y: 850, width: 20, height: 20});
    giraffeTalking.hide();
    mainCharTalking.hide();
    const mainCharMoving = Actions.Tween(mainChar, -10, 6);
    Actions.Colide(mainChar, yellowball, () => {Actions.Tween(yellowball, -10, 10)});                       // Spørre hvordan jeg kan stoppe denne
    Actions.Colide(mainChar, yellowball, () => {mainCharMoving.pause()});
    Actions.Colide(mainChar, yellowball, () => {boingsound.play()});
    boingsound.onended = () => {
        mainChar.hide();
        mainCharTalking.show();
        mainCharVoiceIntro2.play();

    }
    mainCharVoiceIntro2.onended = () => {
        mainCharTalking.hide();
        mainChar.show();
        giraffeSandbox.hide();
        giraffeTalking.show();
        giraffeVoiceIntro1.play();   

    }
    giraffeVoiceIntro1.onended = () => {                         
        giraffeTalking.hide();
        giraffeSandbox.show();
        mainChar.hide();
        mainCharTalking.show();
        mainCharVoiceIntro3.play();                     
       
    }
    mainCharVoiceIntro3.onended = () => {
        mainCharTalking.hide();
        mainChar.show();
        Actions.Tween(mainChar, -10, 6);

    }
    Actions.Colide(mainChar, triggerObject, () => {
        GaaTil(scene3);
    });
}

function scene3() {
    const background = new Blocks.Image("Bilder/Bakgrunner/grillhutOutside.png", {x: -8, y: -8, width: 1088, height: 818});
    const mainChar = new Blocks.Image("Bilder/Karakterer/mainCharClosedMouth.png", {x: 1100, y: 460, width: 220, height: 320});
    const catStanding = new Blocks.Image("Bilder/Karakterer/catClosedMouth.png", {x: 200, y: 500, width: 300, height: 250});
    const mainCharTalking = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], {x: 490, y: 460, width: 220, height: 320, loop: true, auto: true});
    const catTalking = new Blocks.CellAnimation(["Bilder/Karakterer/catClosedMouth.png", "Bilder/Karakterer/catClosedMouth.png", "Bilder/Karakterer/catClosedMouth.png", "Bilder/Karakterer/catOpenMouth.png"], {x: 200, y: 500, width: 300, height: 250, auto: true, loop: true});
    const triggerObject = new Blocks.Image("Bilder/Objekter/block3.png", {x: 1400, y: 450, width: 20, height: 20 });
    mainCharTalking.hide();
    catTalking.hide();
    const mainCharMoving = Actions.Tween(mainChar, -10, 0);
    Actions.Colide(mainChar, catStanding, () => {mainCharMoving.pause()});
    Actions.Colide(mainChar, catStanding, () => {ouchCatMainChar.play()});             
    ouchCatMainChar.onended = () => {
        mainChar.hide(); 
        mainCharTalking.show();
        mainCharVoiceIntro4.play()    

    } 
    mainCharVoiceIntro4.onended = () => {                       
        mainCharTalking.hide();
        mainChar.show();
        catStanding.hide();
        catTalking.show();
        catVoiceIntro1.play();

    }
    catVoiceIntro1.onended = () => {                            
        catTalking.hide();
        catStanding.show();
        mainChar.hide();
        mainCharTalking.show();
        mainCharVoiceIntro5.play();

    }
    mainCharVoiceIntro5.onended = () => {                       
        mainCharTalking.hide();
        mainChar.show();
        Actions.Tween(mainChar, 10, 0);
        
    }
    Actions.Colide(mainChar, triggerObject, () => {
        GaaTil(scene4);
    });
}

function scene4() {
    const background = new Blocks.Image("Bilder/Bakgrunner/wardrobe.png", {x: -8, y: -8, width: 1088, height: 818});
    const mainChar = new Blocks.Image("Bilder/Karakterer/mainCharClosedMouth.png", {x: 1100, y: 470, width: 220, height: 320});
    const styrerPlaceholder = new Blocks.Image("Bilder/Karakterer/manClosedMouth.png", {x: 150, y: 300, width: 350, height: 450});
    const mainCharTalking = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], {x: 498, y: 470, width: 220, height: 320, auto: true, loop: true});
    const styrerPlaceholderTalking = new Blocks.CellAnimation(["Bilder/Karakterer/manClosedMouth.png", "Bilder/Karakterer/manClosedMouth.png", "Bilder/Karakterer/manClosedMouth.png", "Bilder/Karakterer/manOpenMouth.png"], {x: 150, y: 300, width: 350, height: 450, auto: true, loop: true});
    const mainCharTalking2 = new Blocks.CellAnimation(["Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharClosedMouth.png", "Bilder/Karakterer/mainCharOpenMouth.png"], {x: 350, y: 300, width: 420, height: 620, auto: true, loop: true});
    mainCharTalking2.hide();
    mainCharTalking.hide();
    styrerPlaceholderTalking.hide();
    const mainCharMoving = Actions.Tween(mainChar, -7, 0);
    Actions.Colide(mainChar, styrerPlaceholder, () => {
        mainCharMoving.pause();
        mainChar.hide();
        mainCharTalking.show();
        mainCharVoiceIntro6.play();                             
    })
    mainCharVoiceIntro6.onended = () => {
        mainCharTalking.hide();
        mainChar.show();
        styrerPlaceholder.hide();
        styrerPlaceholderTalking.show();
        styrerVoiceIntro1.play();
    }
    styrerVoiceIntro1.onended = () => {
        styrerPlaceholderTalking.hide();
        styrerPlaceholder.show();
        mainChar.hide();
        mainCharTalking.show();
        mainCharVoiceIntro7.play();
    }
    mainCharVoiceIntro7.onended = () => {
        mainCharTalking.hide();
        mainCharTalking2.show();
        mainCharVoiceIntro8.play();
    } 
    mainCharVoiceIntro8.onended = () => {
        GaaTil(scene5);
    }
}

function scene5() {
    const mapBackground = new Blocks.Image("Bilder/Bakgrunner/mapBackground.jpg", {x: -8, y: -8, width: 1088, height: 818});
    const beachText = new Blocks.Image("Bilder/Objekter/beachTitle.PNG", {x: 380, y: 50, width: 300, height: 70});
    const cityText = new Blocks.Image("Bilder/Objekter/cityTitle.PNG", {x: 720, y: 550, width: 300, height: 70});
    const forestText = new Blocks.Image("Bilder/Objekter/forestTitle.PNG", {x: 30, y: 550, width: 300, height: 70});
    const kindergartenText = new Blocks.Image("Bilder/Objekter/kindergartenTitle.PNG", {x: 410, y: 415, width: 250, height: 50});
    beachText.hide();
    cityText.hide();
    forestText.hide();
    kindergartenText.hide();
}

/*
const countdown = new Actions.CountDown(11, (complete) => {
        if (countdown.remainingTime < 10000) {
            loadingbar10.hide();
        }
        if (countdown.remainingTime < 9000) {
            loadingbar9.hide();
        }
        if (countdown.remainingTime < 8000) {
            loadingbar8.hide();
        } 
        if (countdown.remainingTime < 7000) {
            loadingbar7.hide();
        }
        if (countdown.remainingTime < 6000) {
            loadingbar6.hide();
        }
        if (countdown.remainingTime < 5000) {
            loadingbar5.hide();
        }
        if (countdown.remainingTime < 4000) {
            loadingbar4.hide();
        }
        if (countdown.remainingTime < 3000) {
            loadingbar3.hide();
        }
        if (countdown.remainingTime < 2000) {
            loadingbar2.hide();
        }
        if (countdown.remainingTime < 1000) {
            loadingbar1.hide();
        }
        if (complete) {
            GaaTil(scene2);
        }
        }, {onTick: true, auto: true}); */

