const doc = {
    aside:document.querySelector('#aside'),
    alpha:document.querySelector('#alpha'),
    calcbutton:document.querySelector('#calcbutton'),
    area:document.querySelector('#area'),
    peri:document.querySelector('#peri')
};

const state = {

};

window.addEventListener('load', ()=>{
    init();
});

function init() {
    if (doc.calcbutton) {
        doc.calcbutton.addEventListener('click', ()=>{
            startCalc();
        });        
    }

}

function startCalc(){
    let side = doc.aside.value;
    if (doc.alpha.value!=undefined) {
        let alpha = doc.alpha.value;
        let area = calcArea(side, alpha);
        doc.area.innerHTML="A rombusz területe: "+area;
    }
    let peri = calcPeri(side); 
    doc.peri.innerHTML="A rombusz kerülete: "+peri;
}
function calcArea(side, alpha){
    let rad = alpha * (Math.PI / 180);
    return Math.pow(side,2)*Math.sin(rad);
}
function calcPeri(side){
    return side * 4;
}