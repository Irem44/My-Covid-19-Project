var svg = document.getElementById("map");
var avsText = document.getElementById("at");

var arrowLine = null;
var arrowLine2 = null;
var arrowLine3 = null;
var arrowLine4 = null;
var arrowLine5 = null;
var text1 = null;
var text2 = null;
var text3 = null;
var text4 = null;
var text5 = null;
var clicked = false;

avsText.addEventListener("click", function(event) {
    if (!clicked) {
        var point = svg.createSVGPoint();
        point.x = event.clientX;
        point.y = event.clientY;
        var svgPoint = point.matrixTransform(svg.getScreenCTM().inverse());
        var avsCenterX = 1060;
        var avsCenterY = 195;
        var lineEndX =1030;
        var lineEndY =175;
        var lineEndX2 = 1060;
        var lineEndY2 =185;
        var lineEndX3=1080;
        var lineEndY3=190;
        var lineEndX4=1085;
        var lineEndY4=199;
        var lineEndX5=1060;
        var lineEndY5=205;
        

        arrowLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine.setAttribute("x1", avsCenterX);
        arrowLine.setAttribute("y1", avsCenterY);
        arrowLine.setAttribute("x2", lineEndX);
        arrowLine.setAttribute("y2", lineEndY);
        arrowLine.setAttribute("stroke", "#ec5353");
        arrowLine.setAttribute("stroke-width", "1");
        //arrowLine.setAttribute("stroke-dasharray", "4,4");

        text1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text1.setAttribute("x", 1040);
        text1.setAttribute("y",180);
        text1.setAttribute("fill", "black");
        text1.setAttribute("font-size","3px");
        text1.textContent = "686";

        arrowLine2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine2.setAttribute("x1", avsCenterX);
        arrowLine2.setAttribute("y1", avsCenterY);
        arrowLine2.setAttribute("x2", lineEndX2);
        arrowLine2.setAttribute("y2", lineEndY2);
        arrowLine2.setAttribute("stroke", "#ec5353");
        arrowLine2.setAttribute("stroke-width", "1");
        //arrowLine2.setAttribute("stroke-dasharray", "4,4");

        text2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text2.setAttribute("x", 1055);
        text2.setAttribute("y",190);
        text2.setAttribute("fill", "black");
        text2.setAttribute("font-size","3px");
        text2.textContent = "374";

        arrowLine3 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine3.setAttribute("x1", avsCenterX);
        arrowLine3.setAttribute("y1", avsCenterY);
        arrowLine3.setAttribute("x2", lineEndX3);
        arrowLine3.setAttribute("y2", lineEndY3);
        arrowLine3.setAttribute("stroke", "#ec5353");
        arrowLine3.setAttribute("stroke-width", "1");
        //arrowLine3.setAttribute("stroke-dasharray", "4,4");

        text3 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text3.setAttribute("x",1065);
        text3.setAttribute("y",193);
        text3.setAttribute("fill", "black");
        text3.setAttribute("font-size","3px");
        text3.textContent = "554";

        arrowLine4 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine4.setAttribute("x1", avsCenterX);
        arrowLine4.setAttribute("y1", avsCenterY);
        arrowLine4.setAttribute("x2", lineEndX4);
        arrowLine4.setAttribute("y2", lineEndY4);
        arrowLine4.setAttribute("stroke", "#ec5353");
        arrowLine4.setAttribute("stroke-width", "1");
        //arrowLine4.setAttribute("stroke-dasharray", "4,4");


        text4 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text4.setAttribute("x", 1068);
        text4.setAttribute("y",200);
        text4.setAttribute("fill", "black");
        text4.setAttribute("font-size","3px");
        text4.textContent = "472";

        arrowLine5 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine5.setAttribute("x1", avsCenterX);
        arrowLine5.setAttribute("y1", avsCenterY);
        arrowLine5.setAttribute("x2", lineEndX5);
        arrowLine5.setAttribute("y2", lineEndY5);
        arrowLine5.setAttribute("stroke", "#ec5353");
        arrowLine5.setAttribute("stroke-width", "1");

        text5 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text5.setAttribute("x", 1060);
        text5.setAttribute("y",203);
        text5.setAttribute("fill", "black");
        text5.setAttribute("font-size","3px");
        text5.textContent = "262";

       
        svg.appendChild(arrowLine);
        svg.appendChild(arrowLine2);
        svg.appendChild(arrowLine3);
        svg.appendChild(arrowLine4);
        svg.appendChild(arrowLine5);
        svg.appendChild(text1);
        svg.appendChild(text2);
        svg.appendChild(text3);
        svg.appendChild(text4);
        svg.appendChild(text5);


        infoBox = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        infoBox.setAttribute("x", 1000);
        infoBox.setAttribute("y",140);
        infoBox.setAttribute("width","50px");
        infoBox.setAttribute("height","10px");
        infoBox.setAttribute("font-size","6px");

        infoBox2 = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        infoBox2.setAttribute("x", 1052);
        infoBox2.setAttribute("y", 150);
        infoBox2.setAttribute("width","50px");
        infoBox2.setAttribute("height","10px");
        infoBox2.setAttribute("font-size","6px");

        infoBox3 = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        infoBox3.setAttribute("x", 1096);
        infoBox3.setAttribute("y", 165);
        infoBox3.setAttribute("width","50px");
        infoBox3.setAttribute("height","10px");
        infoBox3.setAttribute("font-size","6px");

        infoBox4 = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        infoBox4.setAttribute("x", 1090);
        infoBox4.setAttribute("y", 195);
        infoBox4.setAttribute("width","50px");
        infoBox4.setAttribute("height","10px");
        infoBox4.setAttribute("font-size","6px");

        infoBox5 = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        infoBox5.setAttribute("x", 1040);
        infoBox5.setAttribute("y", 209);
        infoBox5.setAttribute("width","50px");
        infoBox5.setAttribute("height","10px");
        infoBox5.setAttribute("font-size","6px");

        infoBox6 = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        infoBox6.setAttribute("x",1000);
        infoBox6.setAttribute("y", 185);
        infoBox6.setAttribute("width","50px");
        infoBox6.setAttribute("height","10px");
        infoBox6.setAttribute("font-size","6px");

        

        var infoContent = document.createElement("div");
        infoContent.innerHTML = "<p style='text-align: center;'>Vaka Sayısı/Nüfus</p><p style='text-align: center;'>0,004628</p>";
         
        var infoContent2 = document.createElement("div");
        infoContent2.innerHTML = "<p style='text-align: center;'>Vaka Sayısı/Nüfus</p><p style='text-align: center;'>0,004432</p>";

        var infoContent3 = document.createElement("div");
        infoContent3.innerHTML = "<p style='text-align: center;'>Vaka Sayısı/Nüfus</p><p style='text-align: center;'>0,003438</p>";

        var infoContent4 = document.createElement("div");
        infoContent4.innerHTML = "<p style='text-align: center;'>Vaka Sayısı/Nüfus</p><p style='text-align: center;'>0,002321</p>";

        var infoContent5 = document.createElement("div");
        infoContent5.innerHTML = "<p style='text-align: center;'>Vaka Sayısı/Nüfus</p><p style='text-align: center;'>0,006527</p>";

        var infoContent6 = document.createElement("div");
        infoContent6.innerHTML = "<p style='text-align:center;'>Vaka Sayısı/Nüfus: 0,006707</p>";


      
         // CSS stilini uygula
        infoBox.style.overflow = "visible";
        infoBox2.style.overflow = "visible";
        infoBox3.style.overflow = "visible";
        infoBox4.style.overflow = "visible";
        infoBox5.style.overflow = "visible";
        infoBox6.style.overflow = "visible";
       

        // CSS stilini uygula
        infoContent.style.cssText = "background-color:  #b56d5b; border: 1px solid black; padding: 4px; border-radius: 10px";
        infoContent2.style.cssText = "background-color: #b56d5b; border: 1px solid black; padding: 4px; border-radius:10px";
        infoContent3.style.cssText = "background-color: #b56d5b; border: 1px solid black; padding: 4px; border-radius:10px";
        infoContent4.style.cssText = "background-color: #b56d5b; border: 1px solid black; padding: 4px; border-radius:10px";
        infoContent5.style.cssText = "background-color: #b56d5b; border: 1px solid black; padding: 4px; border-radius:  10px";
        infoContent6.style.cssText = "background-color:#ec5353;  padding: 4px; border-radius:10px";

         // Bilgilendirme kutusuna içeriği ekle
        infoBox.appendChild(infoContent);
        infoBox2.appendChild(infoContent2);
        infoBox3.appendChild(infoContent3);
        infoBox4.appendChild(infoContent4);
        infoBox5.appendChild(infoContent5);
        infoBox6.appendChild(infoContent6);
        


 
         // SVG'ye bilgilendirme kutusunu ekleyin
         svg.appendChild(infoBox);
         svg.appendChild(infoBox2);
        svg.appendChild(infoBox3);
        svg.appendChild(infoBox4);
        svg.appendChild(infoBox5);
        svg.appendChild(infoBox6);

        

        clicked = true;
    } else {
         if (arrowLine && text1 && arrowLine2 && text2 && arrowLine3 && text3 && arrowLine4 && text4&& arrowLine5 && text5) {
            arrowLine.remove();
            arrowLine2.remove();
            arrowLine3.remove();
            arrowLine4.remove();
            arrowLine5.remove();
            text1.remove();
            text2.remove();
             text3.remove();
            text4.remove();
            text5.remove();
            
        }

        if (infoBox && infoBox2 && infoBox3 && infoBox4  && infoBox5&& infoBox6) {
            infoBox.remove();
            infoBox2.remove();
            infoBox3.remove();
            infoBox4.remove();
            infoBox5.remove();
            infoBox6.remove();
        }


        clicked = false;
    }
});