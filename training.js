let wu = document.getElementById('wu');
let cr = document.getElementById('cr');
let ppl = document.getElementById('ppl');
let bs = document.getElementById('bs');

let wut = document.getElementById('wui');
let crt = document.getElementById('cri');
let pplt = document.getElementById('ppli');
let bst = document.getElementById('bsi');

let gn = document.getElementById('gn');
let sn = document.getElementById('sn');

wut.addEventListener('click',dwu);
crt.addEventListener('click',dcr);
pplt.addEventListener('click',dppl);
bst.addEventListener('click',dbs);




function dwu(){

    gn.style['display']= 'grid';
    sn.style['display']='grid';

    wu.style['display']='block';
    cr.style['display']='none';
    ppl.style['display']='none';
    bs.style['display']='none';
}
function dcr(){

    gn.style['display']= 'grid';
    sn.style['display']='grid';
    wu.style['display']='none';
    cr.style['display']='block';
    ppl.style['display']='none';
    bs.style['display']='none';
}
function dppl(){

    gn.style['display']= 'grid';
    sn.style['display']='grid';
    wu.style['display']='none';
    cr.style['display']='none';
    ppl.style['display']='block';
    bs.style['display']='none';
}
function dbs(){

    gn.style['display']= 'grid';
    sn.style['display']='grid';
    wu.style['display']='none';
    cr.style['display']='none';
    ppl.style['display']='none';
    bs.style['display']='block';
}