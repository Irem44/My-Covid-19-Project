var svg = document.getElementById("map");
var chinaText = document.getElementById("ch");


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


chinaText.addEventListener("click", function(event) {
    if (!clicked) {
        var point = svg.createSVGPoint();
        point.x = event.clientX;
        point.y = event.clientY;
        var svgPoint = point.matrixTransform(svg.getScreenCTM().inverse());
        var chinaCenterX =1470;
        var chinaCenterY =280;
        var lineEndX =1485;
        var lineEndY =205;
        var lineEndX2 =1320;
        var lineEndY2 =200;
        var lineEndX3=1450;
        var lineEndY3=100;
        var lineEndX4=1430;
        var lineEndY4=340;
        var lineEndX5=1355;
        var lineEndY5=310;
        var lineEndX6=1510;
        var lineEndY6=365;
        var lineEndX7=1565;
        var lineEndY7=357;
        var lineEndX8=1643;
        var lineEndY8=235;



        arrowLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine.setAttribute("x1", chinaCenterX);
        arrowLine.setAttribute("y1", chinaCenterY);
        arrowLine.setAttribute("x2", lineEndX);
        arrowLine.setAttribute("y2", lineEndY);
        arrowLine.setAttribute("stroke", "#ec5353");
        arrowLine.setAttribute("stroke-width", "2");

        text1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text1.setAttribute("x",1477);
        text1.setAttribute("y",250);
        text1.setAttribute("fill", "black");
        text1.setAttribute("font-size","5px");
        text1.textContent = "1223";

        arrowLine2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine2.setAttribute("x1", chinaCenterX);
        arrowLine2.setAttribute("y1", chinaCenterY);
        arrowLine2.setAttribute("x2", lineEndX2);
        arrowLine2.setAttribute("y2", lineEndY2);
        arrowLine2.setAttribute("stroke", "#ec5353");
        arrowLine2.setAttribute("stroke-width", "2");

        text2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text2.setAttribute("x", 1440);
        text2.setAttribute("y",260);
        text2.setAttribute("fill", "black");
        text2.setAttribute("font-size","5px");
        text2.textContent = "3323";

        arrowLine3 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine3.setAttribute("x1", chinaCenterX);
        arrowLine3.setAttribute("y1", chinaCenterY);
        arrowLine3.setAttribute("x2", lineEndX3);
        arrowLine3.setAttribute("y2", lineEndY3);
        arrowLine3.setAttribute("stroke", "#ec5353");
        arrowLine3.setAttribute("stroke-width", "2");

        text3 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text3.setAttribute("x", 1450);
        text3.setAttribute("y",240);
        text3.setAttribute("fill", "black");
        text3.setAttribute("font-size","5px");
        text3.textContent = "2853";

        arrowLine4 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine4.setAttribute("x1", chinaCenterX);
        arrowLine4.setAttribute("y1", chinaCenterY);
        arrowLine4.setAttribute("x2", lineEndX4);
        arrowLine4.setAttribute("y2", lineEndY4);
        arrowLine4.setAttribute("stroke", "#ec5353");
        arrowLine4.setAttribute("stroke-width", "2");

        text4 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text4.setAttribute("x", 1445);
        text4.setAttribute("y",300);
        text4.setAttribute("fill", "black");
        text4.setAttribute("font-size","5px");
        text4.textContent = "2984";

        arrowLine5 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine5.setAttribute("x1", chinaCenterX);
        arrowLine5.setAttribute("y1", chinaCenterY);
        arrowLine5.setAttribute("x2", lineEndX5);
        arrowLine5.setAttribute("y2", lineEndY5);
        arrowLine5.setAttribute("stroke", "#ec5353");
        arrowLine5.setAttribute("stroke-width", "2");

        text5 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text5.setAttribute("x", 1430);
        text5.setAttribute("y",285);
        text5.setAttribute("fill", "black");
        text5.setAttribute("font-size","5px");
        text5.textContent = "3283";

        arrowLine6 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine6.setAttribute("x1", chinaCenterX);
        arrowLine6.setAttribute("y1", chinaCenterY);
        arrowLine6.setAttribute("x2", lineEndX6);
        arrowLine6.setAttribute("y2", lineEndY6);
        arrowLine6.setAttribute("stroke", "#ec5353");
        arrowLine6.setAttribute("stroke-width", "2");

        text6 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text6.setAttribute("x", 1480);
        text6.setAttribute("y",300);
        text6.setAttribute("fill", "black");
        text6.setAttribute("font-size","5px");
        text6.textContent = "4597";

        arrowLine7 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine7.setAttribute("x1", chinaCenterX);
        arrowLine7.setAttribute("y1", chinaCenterY);
        arrowLine7.setAttribute("x2", lineEndX7);
        arrowLine7.setAttribute("y2", lineEndY7);
        arrowLine7.setAttribute("stroke", "#ec5353");
        arrowLine7.setAttribute("stroke-width", "2");

        text7 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text7.setAttribute("x", 1500);
        text7.setAttribute("y",300);
        text7.setAttribute("fill", "black");
        text7.setAttribute("font-size","5px");
        text7.textContent = "3439";

        arrowLine8 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine8.setAttribute("x1", chinaCenterX);
        arrowLine8.setAttribute("y1", chinaCenterY);
        arrowLine8.setAttribute("x2", lineEndX8);
        arrowLine8.setAttribute("y2", lineEndY8);
        arrowLine8.setAttribute("stroke", "#ec5353");
        arrowLine8.setAttribute("stroke-width", "2");

        text8 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text8.setAttribute("x", 1500);
        text8.setAttribute("y",265);
        text8.setAttribute("fill", "black");
        text8.setAttribute("font-size","5px");
        text8.textContent = "2092";




        svg.appendChild(arrowLine);
        svg.appendChild(arrowLine2);
        svg.appendChild(arrowLine3);
        svg.appendChild(arrowLine4);
        svg.appendChild(arrowLine5);
        svg.appendChild(arrowLine6);
        svg.appendChild(arrowLine7);
        svg.appendChild(arrowLine8);
        svg.appendChild(text1);
        svg.appendChild(text2);
        svg.appendChild(text3);
        svg.appendChild(text4);
        svg.appendChild(text5);
        svg.appendChild(text6);
        svg.appendChild(text7);
        svg.appendChild(text8);


        infoBox = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        infoBox.setAttribute("x", 1485);
        infoBox.setAttribute("y", 165);
        infoBox.setAttribute("width","50px");
        infoBox.setAttribute("height","10px");
        infoBox.setAttribute("font-size","6px");

        infoBox2 = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        infoBox2.setAttribute("x",1300);
        infoBox2.setAttribute("y", 160);
        infoBox2.setAttribute("width","50px");
        infoBox2.setAttribute("height","10px");
        infoBox2.setAttribute("font-size","6px");

        infoBox3 = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        infoBox3.setAttribute("x", 1420);
        infoBox3.setAttribute("y", 50);
        infoBox3.setAttribute("width","50px");
        infoBox3.setAttribute("height","10px");
        infoBox3.setAttribute("font-size","6px");

        infoBox4 = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        infoBox4.setAttribute("x", 1410);
        infoBox4.setAttribute("y", 355);
        infoBox4.setAttribute("width","50px");
        infoBox4.setAttribute("height","10px");
        infoBox4.setAttribute("font-size","6px");

        infoBox5 = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        infoBox5.setAttribute("x", 1348);
        infoBox5.setAttribute("y", 318);
        infoBox5.setAttribute("width","50px");
        infoBox5.setAttribute("height","10px");
        infoBox5.setAttribute("font-size","6px");

        infoBox6 = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        infoBox6.setAttribute("x", 1550);
        infoBox6.setAttribute("y", 260);
        infoBox6.setAttribute("width","50px");
        infoBox6.setAttribute("height","10px");
        infoBox6.setAttribute("font-size","6px");

        infoBox7 = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        infoBox7.setAttribute("x", 1510);
        infoBox7.setAttribute("y", 365);
        infoBox7.setAttribute("width","50px");
        infoBox7.setAttribute("height","10px");
        infoBox7.setAttribute("font-size","6px");

        infoBox8 = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        infoBox8.setAttribute("x", 1565);
        infoBox8.setAttribute("y", 350);
        infoBox8.setAttribute("width","50px");
        infoBox8.setAttribute("height","10px");
        infoBox8.setAttribute("font-size","6px");

        infoBox9 = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
        infoBox9.setAttribute("x", 1630);
        infoBox9.setAttribute("y", 248);
        infoBox9.setAttribute("width","50px");
        infoBox9.setAttribute("height","10px");
        infoBox9.setAttribute("font-size","6px");
        

        var infoContent = document.createElement("div");
         infoContent.innerHTML = "<p style='text-align: center;'>Vaka Sayısı/Nüfus</p><p style='text-align: center;'> 0,002994</p>";
         
        var infoContent2 = document.createElement("div");
        infoContent2.innerHTML = "<p style='text-align: center;'>Vaka Sayısı/Nüfus</p><p style='text-align: center;'>0,000735</p>";

        var infoContent3 = document.createElement("div");
        infoContent3.innerHTML = "<p style='text-align: center;'>Vaka Sayısı/Nüfus</p><p style='text-align: center;'>0,001651</p>";

         var infoContent4 = document.createElement("div");
         infoContent4.innerHTML = "<p style='text-align: center;'>Vaka Sayısı/Nüfus</p><p style='text-align: center;'>0,000320</p>";

         var infoContent5 = document.createElement("div");
         infoContent5.innerHTML = "<p style='text-align: center;'>Vaka Sayısı/Nüfus</p><p style='text-align: center;'>0.00006893</p>";

        var infoContent6 = document.createElement("div");
        infoContent6.innerHTML = "<p style='text-align:center;'>Vaka Sayısı/Nüfus: 0.00000347471</p>";

        var infoContent7 = document.createElement("div");
        infoContent7.innerHTML = "<p style='text-align:center;'>Vaka Sayısı/Nüfus: 0.000116</p>";
         
        var infoContent8 = document.createElement("div");
        infoContent8.innerHTML = "<p style='text-align:center;'>Vaka Sayısı/Nüfus: 0,001174</p>";
        
        var infoContent9 = document.createElement("div");
        infoContent9.innerHTML = "<p style='text-align:center;'>Vaka Sayısı/Nüfus: 0,001836</p>";
        // CSS stilini uygula
        infoBox.style.overflow = "visible";
        infoBox2.style.overflow = "visible";
        infoBox3.style.overflow = "visible";
        infoBox4.style.overflow = "visible";
        infoBox5.style.overflow = "visible";
        infoBox6.style.overflow = "visible";
        infoBox7.style.overflow = "visible";
        infoBox8.style.overflow = "visible";
        infoBox9.style.overflow = "visible";
       

        // CSS stilini uygula
        infoContent.style.cssText = "background-color: #b56d5b; border: 1px solid black; padding: 4px; border-radius:10px";
        infoContent2.style.cssText = "background-color:#b56d5b; border: 1px solid black; padding: 4px; border-radius:10px";
        infoContent3.style.cssText = "background-color:#b56d5b; border: 1px solid black; padding: 4px; border-radius:10px";
        infoContent4.style.cssText = "background-color:#b56d5b; border: 1px solid black; padding: 4px; border-radius:10px";
        infoContent5.style.cssText = "background-color:#b56d5b; border: 1px solid black; padding: 4px; border-radius:10px";
        infoContent6.style.cssText = "background-color:#ec5353;  padding: 4px; border-radius:6px";
        infoContent7.style.cssText = "background-color:#b56d5b;  padding: 4px; border-radius:6px";
        infoContent8.style.cssText = "background-color:#b56d5b;  padding: 4px; border-radius:6px";
        infoContent9.style.cssText = "background-color:#b56d5b;  padding: 4px; border-radius:6px";

         // Bilgilendirme kutusuna içeriği ekle
        infoBox.appendChild(infoContent);
        infoBox2.appendChild(infoContent2);
        infoBox3.appendChild(infoContent3);
        infoBox4.appendChild(infoContent4);
        infoBox5.appendChild(infoContent5);
        infoBox6.appendChild(infoContent6);
        infoBox7.appendChild(infoContent7);
        infoBox8.appendChild(infoContent8);
        infoBox9.appendChild(infoContent9);


 
         // SVG'ye bilgilendirme kutusunu ekleyin
         svg.appendChild(infoBox);
         svg.appendChild(infoBox2);
         svg.appendChild(infoBox3);
         svg.appendChild(infoBox4);
         svg.appendChild(infoBox5);
         svg.appendChild(infoBox6);
         svg.appendChild(infoBox7);
         svg.appendChild(infoBox8);
         svg.appendChild(infoBox9);

        

        clicked = true;
    } else {
         if (arrowLine && arrowLine2  && arrowLine3   && arrowLine4   && text1  && text2 && text3 && text4 && arrowLine5 && text5&& arrowLine6 && text6&& arrowLine7 && text7&& arrowLine8 && text8) {
            arrowLine.remove();
            arrowLine2.remove();
            arrowLine3.remove();
            arrowLine4.remove();
            arrowLine5.remove();
            arrowLine6.remove();
            arrowLine7.remove();
            arrowLine8.remove();
            text1.remove();
            text2.remove();
            text3.remove();
            text4.remove();
            text5.remove();
            text6.remove();
            text7.remove();
            text8.remove();
            
        }

        if (infoBox && infoBox2 && infoBox3  && infoBox4 && infoBox5 && infoBox6 && infoBox7&& infoBox8&& infoBox9) {
            infoBox.remove();
            infoBox2.remove();
            infoBox3.remove();
            infoBox4.remove();
            infoBox5.remove();
            infoBox6.remove();
            infoBox7.remove();
            infoBox8.remove();
            infoBox9.remove();
        }


        clicked = false;
    }
});