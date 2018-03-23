// JavaScript för att implementera kraven A-E.



    /*//push to Json database
    let temp = new Object();
    temp["id"] = "po-0167";
    temp["date"] = new Date();
    temp["quantity"] = 1;
    temp["amount"] = 4;
    temp["title"] = "A Book About Nothing";

    bookorders.push(temp);
*/




let output = $('#output');
let request = new XMLHttpRequest();
request.open("GET", "http://demo.edument.se/api/products", "http://demo.edument.se/api/content");

// XMLHRequest
$("#xhr").click(()=>{



    request.onreadystatechange = ()=>{
    if (request.readyState === XMLHttpRequest.DONE){
        if (request.status === 200){
            /*let p = $("<p></p>").text(JSON.parse(request.responseText));
            output.append(p);*/
            let xData =JSON.parse(request.responseText)
            addHtml(xData);
        }else {
            document.write('error');
        }
    }
};
request.send();
});


function addHtml(data) {

    let htmlText ="";

    for (i=0;i<data.length;i++){

        htmlText += "<br><br>" + "ID Number " + data[i].Id+ " Have name : " + " "+  data[i].Name + "<br> <br>" + data[i].Image ;

    }

    output.innerHTML=document.write(htmlText);
}

