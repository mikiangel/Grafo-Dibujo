var grafo = [
    { "id": "1", "actividad":"A", "duracion": 1, "predecesor": [], "nivel": 1 },
    { "id": "2", "actividad":"B", "duracion": 1, "predecesor": ["A"], "nivel": 2 },
    { "id": "3", "actividad":"C", "duracion": 1, "predecesor": ["A"], "nivel": 2 },
    { "id": "4", "actividad":"D", "duracion": 1, "predecesor": ["B", "C"], "nivel": 3 },
    { "id": "5", "actividad":"E", "duracion": 1, "predecesor": ["D"], "nivel": 4 }
];
var nNiveles = 4;
var nActNivel = 2;

function graficarGrafo()
{
    limpiarGrafo();
    let grafoCont = document.getElementById("DibujoGrafo");
    for(let i=1; i <= nNiveles; i++)
    {
        let nivel = document.createElement("div");
        nivel.className = "Nivel Blue100";

        for(let j=0;j<grafo.length ;j++)
        {
            if(grafo[j].nivel == i)
            {
                let arista = document.createElement("div");
                arista.className = "Arista Blue800";
                arista.innerHTML = grafo[j].actividad;

                let btn1 = document.createElement("button");
                let span = document.createElement("span");
                btn1.className = "btn btn-default";
                span.className = "glyphicon glyphicon-align-left";
                span.setAttribute('aria-hidden', 'true');
                let idG = grafo[j].id;
                let acG = grafo[j].actividad;
                btn1.onclick = function(){
                    alert("ID: "+idG+"\nArista: "+acG);
                };

                btn1.appendChild(span);
                arista.appendChild(btn1);
                nivel.appendChild(arista);
            }
        }

        grafoCont.appendChild(nivel);
    }
}
function llenarTabla()
{
    limpiarTabla();
    
    let tBody = document.getElementById("TablaGrafo");

    for(let i=0; i< grafo.length; i++)
    {
        let tr = document.createElement("tr");
        
        let th_id = document.createElement("th");
        let td_act = document.createElement("td");
        let td_dur = document.createElement("td");
        let td_pre = document.createElement("td");
        let td_niv = document.createElement("td");

        th_id.innerHTML = grafo[i].id;
        th_id.scope = "row";
        td_act.innerHTML = grafo[i].actividad;
        td_dur.innerHTML = grafo[i].duracion;
        for(let j=0; j < grafo[i].predecesor.length ; j++)
        {
            td_pre.innerHTML += grafo[i].predecesor[j] + ", ";
        }
        td_niv.innerHTML = grafo[i].nivel;

        tr.appendChild(th_id);
        tr.appendChild(td_act);
        tr.appendChild(td_dur);
        tr.appendChild(td_pre);
        tr.appendChild(td_niv);

        tBody.appendChild(tr);
    }

    graficarGrafo();
}
function limpiarTabla()
{
    let element = document.getElementById("TablaGrafo");
    while (element.firstChild)
    {
        element.removeChild(element.firstChild);
    }
}
function limpiarGrafo()
{
    let element = document.getElementById("DibujoGrafo");
    while (element.firstChild)
    {
        element.removeChild(element.firstChild);
    }
}
function prueba()
{
    console.log(grafo);

    llenarTabla();
}