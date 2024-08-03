console.log("nokturnalplague");

function calcularAP(){
    let portalAcertos = parseFloat(document.querySelector("#portal").value);
    let trabalho = parseFloat(document.querySelector("#trabalho").value);
    let total = 0;

    portal = portalAcertos * 0.5;

    console.log("Portal: "+portal);
    console.log("Trabalho: "+trabalho);
    
    total = (portal * 0.64 )+ (trabalho * 0.36);

    console.log("Total: "+total);

    if(isNaN(portalAcertos)||isNaN(trabalho)){
        alert("Preencha todos os valores.")
    }else{
        alert("A nota da AP é "+total.toFixed(1));
    }
}

function calcularAV1(){
    let ap1 = parseFloat(document.querySelector("#ap1").value);
    let ap2 = parseFloat(document.querySelector("#ap2").value);
    let ap3 = parseFloat(document.querySelector("#ap3").value);
    let portal = parseFloat(document.querySelector("#portal").value);
    let ap4 = 0;
    let total = 0;

    ap4 = portal * 0.5;

    console.log("AP1: "+ap1);
    console.log("AP2: "+ap2);
    console.log("AP3: "+ap3);
    console.log("AP4: "+ap4);

    total = (ap1 * 0.275) + (ap2 * 0.275) + (ap3 * 0.275) + (ap4 * 0.175);

    console.log("Total: "+total);

    if(isNaN(ap1)||isNaN(ap2)||isNaN(ap3)||isNaN(portal)){
        alert("Preencha todos os valores.")
    }else{
        alert("A nota da AV1 é aproximadamente "+total.toFixed(1));
    }
}

function calcularMF(){
    let av1 = parseFloat(document.querySelector("#av1").value);
    let av2 = parseFloat(document.querySelector("#av2").value);
    let total = 0;

    console.log("AV1: "+av1);
    console.log("AV2: "+av2);

    
    total = (av1 * 0.4) + (av2 * 0.6);

    console.log("Total: "+total);

    if(isNaN(av1)||isNaN(av2)){
        alert("Preencha todos os valores.")
    }else{
        alert("A média final é aproximadamente "+total.toFixed(1));
    }
}
