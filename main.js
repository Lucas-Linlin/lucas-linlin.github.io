let DARK_MODE = true;

function downloadFile(url, filename) {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function switchLD(){
    document.getElementsByClassName("ableLD").forEach(element => {
            if (element.color == "black"){element.color = "white" }
            else{element.color = "black" }
            
    });
    }

function myLink(url){
    const link = document.createElement('a');
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}