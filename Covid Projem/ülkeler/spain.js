var svg = document.getElementById("map");
var spainText = document.getElementById("sp");

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

spainText.addEventListener("click", function(event) {
    if (!clicked) {
        var point = svg.createSVGPoint();
        point.x = event.clientX;
        point.y = event.clientY;
        var svgPoint = point.matrixTransform(svg.getScreenCTM().inverse());
        var spainCenterX = 970;
        var spainCenterY = 250;
        var lineEndX =1000;
        var lineEndY =200;
        var lineEndX2 = 1030;
        var lineEndY2 =202;
        var lineEndX3=1050;
        var lineEndY3=220;
        var lineEndX4=1005;
        var lineEndY4=322;
        var lineEndX5=940;
        var lineEndY5=300;
        var lineEndX6=1030;
        var lineEndY6=280;


        arrowLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine.setAttribute("x1", spainCenterX);
        arrowLine.setAttribute("y1", spainCenterY);
        arrowLine.setAttribute("x2", lineEndX);
        arrowLine.setAttribute("y2", lineEndY);
        arrowLine.setAttribute("stroke", "#ec5353");
        arrowLine.setAttribute("stroke-width", "2");
        //arrowLine.setAttribute("stroke-dasharray", "4,4");

        text1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text1.setAttribute("x", 975);
        text1.setAttribute("y",230);
        text1.setAttribute("fill", "black");
        text1.setAttribute("font-size","3px");
        text1.textContent = "2439";

        arrowLine2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine2.setAttribute("x1", spainCenterX);
        arrowLine2.setAttribute("y1", spainCenterY);
        arrowLine2.setAttribute("x2", lineEndX2);
        arrowLine2.setAttribute("y2", lineEndY2);
        arrowLine2.setAttribute("stroke", "#ec5353");
        arrowLine2.setAttribute("stroke-width", "2");
        //arrowLine2.setAttribute("stroke-dasharray", "4,4");

        text2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text2.setAttribute("x", 983);
        text2.setAttribute("y",240);
        text2.setAttribute("fill", "black");
        text2.setAttribute("font-size","3px");
        text2.textContent = "1687";

        arrowLine3 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine3.setAttribute("x1", spainCenterX);
        arrowLine3.setAttribute("y1", spainCenterY);
        arrowLine3.setAttribute("x2", lineEndX3);
        arrowLine3.setAttribute("y2", lineEndY3);
        arrowLine3.setAttribute("stroke", "#ec5353");
        arrowLine3.setAttribute("stroke-width", "2");
        //arrowLine3.setAttribute("stroke-dasharray", "4,4");

        text3 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text3.setAttribute("x",980);
        text3.setAttribute("y",245);
        text3.setAttribute("fill", "black");
        text3.setAttribute("font-size","3px");
        text3.textContent = "1971";

        arrowLine4 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine4.setAttribute("x1", spainCenterX);
        arrowLine4.setAttribute("y1", spainCenterY);
        arrowLine4.setAttribute("x2", lineEndX4);
        arrowLine4.setAttribute("y2", lineEndY4);
        arrowLine4.setAttribute("stroke", "#ec5353");
        arrowLine4.setAttribute("stroke-width", "2");
        //arrowLine4.setAttribute("stroke-dasharray", "4,4");


        text4 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text4.setAttribute("x", 967);
        text4.setAttribute("y",260);
        text4.setAttribute("fill", "black");
        text4.setAttribute("font-size","3px");
        text4.textContent = "1467";

        arrowLine5 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine5.setAttribute("x1", spainCenterX);
        arrowLine5.setAttribute("y1", spainCenterY);
        arrowLine5.setAttribute("x2", lineEndX5);
        arrowLine5.setAttribute("y2", lineEndY5);
        arrowLine5.setAttribute("stroke", "#ec5353");
        arrowLine5.setAttribute("stroke-width", "2");

        text5 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text5.setAttribute("x", 960);
        text5.setAttribute("y",255);
        text5.setAttribute("fill", "black");
        text5.setAttribute("font-size","3px");
        text5.textContent = "1341";

        arrowLine6 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine6.setAttribute("x1", spainCenterX);
        arrowLine6.setAttribute("y1", spainCenterY);
        arrowLine6.setAttribute("x2", lineEndX6);
        arrowLine6.setAttribute("y2", lineEndY6);
        arrowLine6.setAttribute("stroke", "#ec5353");
        arrowLine6.setAttribute("stroke-width", "2");

        text6 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text6.setAttribute("x",980);
        text6.setAttribute("y",253);
        text6.setAttribute("fill", "black");
        text6.setAttribute("font-size","3px");
        text6.textContent = "2204";


        svg.appendChild(arrowLine);
        svg.appendChild(arrowLine2);
        svg.appendChild(arrowLine3);
        svg.appendChild(arrowLine4);
        svg.appendChild(arrowLine5);
        svg.appendChild(arrowLine6);
        svg.appendChild(text1);
        svg.appendChild(text2);
        svg.appendChild(text3);
        svg.appendChild(text4);
        svg.appendChild(text5);
        svg.appendChild(text6);


        infoBox = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        infoBox.setAttribute("x", 975);
        infoBox.setAttribute("y",165);
        infoBox.setAttribute("width","50px");
        infoBox.setAttribute("height","10px");
        infoBox.setAttribute("font-size","6px");

        infoBox2 = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        infoBox2.setAttribute("x", 1035);
        infoBox2.setAttribute("y", 170);
        infoBox2.setAttribute("width","50px");
        infoBox2.setAttribute("height","10px");
        infoBox2.setAttribute("font-size","6px");

        infoBox3 = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        infoBox3.setAttribute("x", 1055);
        infoBox3.setAttribute("y", 200);
        infoBox3.setAttribute("width","50px");
        infoBox3.setAttribute("height","10px");
        infoBox3.setAttribute("font-size","6px");

        infoBox4 = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        infoBox4.setAttribute("x", 980);
        infoBox4.setAttribute("y", 330);
        infoBox4.setAttribute("width","50px");
        infoBox4.setAttribute("height","10px");
        infoBox4.setAttribute("font-size","6px");

        infoBox5 = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        infoBox5.setAttribute("x", 920);
        infoBox5.setAttribute("y", 300);
        infoBox5.setAttribute("width","50px");
        infoBox5.setAttribute("height","10px");
        infoBox5.setAttribute("font-size","6px");

        infoBox6 = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        infoBox6.setAttribute("x",920);
        infoBox6.setAttribute("y", 205);
        infoBox6.setAttribute("width","50px");
        infoBox6.setAttribute("height","10px");
        infoBox6.setAttribute("font-size","6px");

        infoBox7 = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        infoBox7.setAttribute("x",1030);
        infoBox7.setAttribute("y", 280);
        infoBox7.setAttribute("width","50px");
        infoBox7.setAttribute("height","10px");
        infoBox7.setAttribute("font-size","6px");
        

        var infoContent = document.createElement("div");
        infoContent.innerHTML = "<p style='text-align: center;'>Vaka Sayısı/Nüfus</p><p style='text-align: center;'>0,006120</p>";
         
        var infoContent2 = document.createElement("div");
        infoContent2.innerHTML = "<p style='text-align: center;'>Vaka Sayısı/Nüfus</p><p style='text-align: center;'>0,005075</p>";

        var infoContent3 = document.createElement("div");
        infoContent3.innerHTML = "<p style='text-align: center;'>Vaka Sayısı/Nüfus</p><p style='text-align: center;'>0,004434</p>";

        var infoContent4 = document.createElement("div");
        infoContent4.innerHTML = "<p style='text-align: center;'>Vaka Sayısı/Nüfus</p><p style='text-align: center;'>0,0000059979</p>";

        var infoContent5 = document.createElement("div");
        infoContent5.innerHTML = "<p style='text-align: center;'>Vaka Sayısı/Nüfus</p><p style='text-align: center;'>0,000338</p>";

        var infoContent6 = document.createElement("div");
        infoContent6.innerHTML = "<p style='text-align:center;'>Vaka Sayısı/Nüfus: 0,002978</p>";


        var infoContent7 = document.createElement("div");
        infoContent7.innerHTML = "<p style='text-align:center;'>Vaka Sayısı/Nüfus: 0,000957</p>";
         // CSS stilini uygula
        infoBox.style.overflow = "visible";
        infoBox2.style.overflow = "visible";
        infoBox3.style.overflow = "visible";
        infoBox4.style.overflow = "visible";
        infoBox5.style.overflow = "visible";
        infoBox6.style.overflow = "visible";
        infoBox7.style.overflow = "visible";
       

        // CSS stilini uygula
        infoContent.style.cssText = "background-color:  #b56d5b; border: 1px solid black; padding: 4px; border-radius: 10px";
        infoContent2.style.cssText = "background-color: #b56d5b; border: 1px solid black; padding: 4px; border-radius:10px";
        infoContent3.style.cssText = "background-color: #b56d5b; border: 1px solid black; padding: 4px; border-radius:10px";
        infoContent4.style.cssText = "background-color: #b56d5b; border: 1px solid black; padding: 4px; border-radius:10px";
        infoContent5.style.cssText = "background-color: #b56d5b; border: 1px solid black; padding: 4px; border-radius:  10px";
        infoContent6.style.cssText = "background-color:#ec5353;  padding: 4px; border-radius:10px";
        infoContent7.style.cssText = "background-color:#b56d5b;  padding: 4px; border-radius:10px";

         // Bilgilendirme kutusuna içeriği ekle
        infoBox.appendChild(infoContent);
        infoBox2.appendChild(infoContent2);
        infoBox3.appendChild(infoContent3);
        infoBox4.appendChild(infoContent4);
        infoBox5.appendChild(infoContent5);
        infoBox6.appendChild(infoContent6);
        infoBox7.appendChild(infoContent7);


 
         // SVG'ye bilgilendirme kutusunu ekleyin
         svg.appendChild(infoBox);
         svg.appendChild(infoBox2);
         svg.appendChild(infoBox3);
         svg.appendChild(infoBox4);
         svg.appendChild(infoBox5);
         svg.appendChild(infoBox6);
         svg.appendChild(infoBox7);

        

        clicked = true;
    } else {
         if (arrowLine && arrowLine2 && arrowLine3 && arrowLine4 && text1  && text2 && text3 && text4  && arrowLine5 && text5&& arrowLine6 && text6) {
            arrowLine.remove();
            arrowLine2.remove();
            arrowLine3.remove();
            arrowLine4.remove();
            arrowLine5.remove();
            arrowLine6.remove();
            text1.remove();
            text2.remove();
            text3.remove();
            text4.remove();
            text5.remove();
            text6.remove();
            
        }

        if (infoBox && infoBox2  && infoBox3 && infoBox4  && infoBox5&& infoBox6&& infoBox7) {
            infoBox.remove();
            infoBox2.remove();
            infoBox3.remove();
            infoBox4.remove();
            infoBox5.remove();
            infoBox6.remove();
            infoBox7.remove();
        }


        clicked = false;
    }
});