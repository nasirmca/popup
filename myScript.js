
 
    let modelBox = document.getElementById("modelBox");
    console.log(modelBox)

    // document.onclick = function(){
    //     modelBox.style.display= "block"; 
    // }
const openmodel = () => {
    modelBox.style.display= "block"; 
}
 

   function closeModel(){
       console.log("click")
 modelBox.style.display="none";
    }


    function show() {
        document.getElementById('codeImage')
                .style.display = "block";

        document.getElementById('btnID')
                .style.display = "none";
    }


    const textElement = document.getElementById("clip-text");
    const copySpan = document.getElementById("copy");

const copyText = (e) => {
window.getSelection().selectAllChildren(textElement);
document.execCommand("copy");
e.target.setAttribute("tooltip", "Copied! ✅");
};

const resetTooltip = (e) => {
e.target.setAttribute("tooltip", "Copy to clipboard");
};

copySpan.addEventListener("click", (e) => copyText(e));
copySpan.addEventListener("mouseover", (e) => resetTooltip(e));
