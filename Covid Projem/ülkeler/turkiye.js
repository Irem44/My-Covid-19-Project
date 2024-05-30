var svg = document.getElementById("map");
var turkeyText = document.getElementById("tr");
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

turkeyText.addEventListener("click", function(event) {
    if (!clicked) {
        var point = svg.createSVGPoint();
        point.x = event.clientX;
        point.y = event.clientY;
        var svgPoint = point.matrixTransform(svg.getScreenCTM().inverse());
       
        var turkeyCenterX2=1200;
        var turkeyCenterY2=245;
        var lineEndX = 1120;
        var lineEndY = 209;
        var lineEndX2 = 1120;
        var lineEndY2 = 230;
        var lineEndX3=1270;
        var lineEndY3=295;
        var lineEndX4=1215;
        var lineEndY4=288;
        var lineEndX5=1226;
        var lineEndY5=245;
        var lineEndX6=1145;
        var lineEndY6=190;
        var lineEndX7=1193;
        var lineEndY7=276;


        arrowLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine.setAttribute("x1", turkeyCenterX2);
        arrowLine.setAttribute("y1", turkeyCenterY2);
        arrowLine.setAttribute("x2", lineEndX);
        arrowLine.setAttribute("y2", lineEndY);
        arrowLine.setAttribute("stroke", "#ec5353");
        arrowLine.setAttribute("stroke-width", "1");
        

        text1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text1.setAttribute("x", 1165);
        text1.setAttribute("y",235);
        text1.setAttribute("fill", "black");
        text1.setAttribute("font-size","4px");
        text1.textContent = "1627";

        arrowLine2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine2.setAttribute("x1", turkeyCenterX2);
        arrowLine2.setAttribute("y1", turkeyCenterY2);
        arrowLine2.setAttribute("x2", lineEndX2);
        arrowLine2.setAttribute("y2", lineEndY2);
        arrowLine2.setAttribute("stroke", "#ec5353");
        arrowLine2.setAttribute("stroke-width", "1");

        text2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text2.setAttribute("x", 1150);
        text2.setAttribute("y", 240);
        text2.setAttribute("fill", "black");
        text2.setAttribute("font-size","4px");
        text2.textContent = "1150";


        arrowLine3 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine3.setAttribute("x1", turkeyCenterX2);
        arrowLine3.setAttribute("y1", turkeyCenterY2);
        arrowLine3.setAttribute("x2", lineEndX3);
        arrowLine3.setAttribute("y2", lineEndY3);
        arrowLine3.setAttribute("stroke", "#ec5353");
        arrowLine3.setAttribute("stroke-width", "1");

        text3 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text3.setAttribute("x", 1250);
        text3.setAttribute("y", 285);
        text3.setAttribute("fill", "black");
        text3.setAttribute("font-size","4px");
        text3.textContent = "2606";


        arrowLine4 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine4.setAttribute("x1", turkeyCenterX2);
        arrowLine4.setAttribute("y1", turkeyCenterY2);
        arrowLine4.setAttribute("x2", lineEndX4);
        arrowLine4.setAttribute("y2", lineEndY4);
        arrowLine4.setAttribute("stroke", "#ec5353");
        arrowLine4.setAttribute("stroke-width", "1");

        text4 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text4.setAttribute("x", 1200);
        text4.setAttribute("y", 273);
        text4.setAttribute("fill", "black");
        text4.setAttribute("font-size","4px");
        text4.textContent = "1518";


        arrowLine5 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine5.setAttribute("x1", turkeyCenterX2);
        arrowLine5.setAttribute("y1", turkeyCenterY2);
        arrowLine5.setAttribute("x2", lineEndX5);
        arrowLine5.setAttribute("y2", lineEndY5);
        arrowLine5.setAttribute("stroke", "#ec5353");
        arrowLine5.setAttribute("stroke-width", "1");

        text5 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text5.setAttribute("x", 1210);
        text5.setAttribute("y", 248);
        text5.setAttribute("fill", "black");
        text5.setAttribute("font-size","4px");
        text5.textContent = "1065";

        arrowLine6 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine6.setAttribute("x1", turkeyCenterX2);
        arrowLine6.setAttribute("y1", turkeyCenterY2);
        arrowLine6.setAttribute("x2", lineEndX6);
        arrowLine6.setAttribute("y2", lineEndY6);
        arrowLine6.setAttribute("stroke", "#ec5353");
        arrowLine6.setAttribute("stroke-width", "1");

        text6 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text6.setAttribute("x", 1145);
        text6.setAttribute("y", 200);
        text6.setAttribute("fill", "black");
        text6.setAttribute("font-size","4px");
        text6.textContent = "2138";

        arrowLine7 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        arrowLine7.setAttribute("x1", turkeyCenterX2);
        arrowLine7.setAttribute("y1", turkeyCenterY2);
        arrowLine7.setAttribute("x2", lineEndX7);
        arrowLine7.setAttribute("y2", lineEndY7);
        arrowLine7.setAttribute("stroke", "#ec5353");
        arrowLine7.setAttribute("stroke-width", "1");

        text7 = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text7.setAttribute("x", 1190);
        text7.setAttribute("y", 255);
        text7.setAttribute("fill", "black");
        text7.setAttribute("font-size","4px");
        text7.textContent = "774";


        svg.appendChild(arrowLine);
        svg.appendChild(arrowLine2);
        svg.appendChild(arrowLine3);
        svg.appendChild(arrowLine4);
        svg.appendChild(arrowLine5);
        svg.appendChild(arrowLine6);
        svg.appendChild(arrowLine7);
        svg.appendChild(text1);
        svg.appendChild(text2);
        svg.appendChild(text3);
        svg.appendChild(text4);
        svg.appendChild(text5);
        svg.appendChild(text6);
        svg.appendChild(text7);


         // Bilgilendirme kutusunu oluşturun ve ayarlayın
         infoBox = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
         infoBox.setAttribute("x", 1200);
         infoBox.setAttribute("y", 223);
         infoBox.setAttribute("width","40px");
         infoBox.setAttribute("height","10px");
         infoBox.setAttribute("font-size","4px");

         infoBox2 = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
         infoBox2.setAttribute("x", 1270);
         infoBox2.setAttribute("y", 273);
         infoBox2.setAttribute("width","40px");
         infoBox2.setAttribute("height","10px");
         infoBox2.setAttribute("font-size","4px");

         infoBox3 = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
         infoBox3.setAttribute("x", 1200);
         infoBox3.setAttribute("y", 295);
         infoBox3.setAttribute("width","40px");
         infoBox3.setAttribute("height","10px");
         infoBox3.setAttribute("font-size","4px");

         infoBox4 = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
         infoBox4.setAttribute("x", 1080);
         infoBox4.setAttribute("y",183);
         infoBox4.setAttribute("width","40px");
         infoBox4.setAttribute("height","10px");
         infoBox4.setAttribute("font-size","4px");


         infoBox5 = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
         infoBox5.setAttribute("x", 1080);
         infoBox5.setAttribute("y",233);
         infoBox5.setAttribute("width","40px");
         infoBox5.setAttribute("height","10px");
         infoBox5.setAttribute("font-size","4px");


         infoBox6= document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
         infoBox6.setAttribute("x", 1135);
         infoBox6.setAttribute("y",250);
         infoBox6.setAttribute("width","40px");
         infoBox6.setAttribute("height","10px");
         infoBox6.setAttribute("font-size","4px");

         infoBox7= document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
         infoBox7.setAttribute("x", 1125);
         infoBox7.setAttribute("y",160);
         infoBox7.setAttribute("width","40px");
         infoBox7.setAttribute("height","10px");
         infoBox7.setAttribute("font-size","4px");
 
         infoBox8= document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
         infoBox8.setAttribute("x", 1165);
         infoBox8.setAttribute("y",280);
         infoBox8.setAttribute("width","40px");
         infoBox8.setAttribute("height","10px");
         infoBox8.setAttribute("font-size","4px");
 
 
         // İçerik oluşturun
         var infoContent = document.createElement("div");
         infoContent.innerHTML = "<p style='text-align: center;'>Vaka Sayısı/Nüfus</p><p style='text-align: center;'>0,000810</p>";
         
         var infoContent2 = document.createElement("div");
         infoContent2.innerHTML = "<p style='text-align: center;'>Vaka Sayısı/Nüfus</p><p style='text-align: center;'>0,000886</p>";

         var infoContent3 = document.createElement("div");
         infoContent3.innerHTML = "<p style='text-align: center;'>Vaka Sayısı/Nüfus</p><p style='text-align: center;'>0,000584</p>";

         var infoContent4 = document.createElement("div");
         infoContent4.innerHTML = "<p style='text-align: center;'>Vaka Sayısı/Nüfus</p><p style='text-align: center;'>0,001854</p>";

         var infoContent5 = document.createElement("div");
         infoContent5.innerHTML = "<p style='text-align: center;'>Vaka Sayısı/Nüfus</p><p style='text-align: center;'>0,001957</p>";

         var infoContent6 = document.createElement("div");
         infoContent6.innerHTML = "<p style='text-align:center;'>Vaka Sayısı/Nüfus: 0,00201</p>";


         var infoContent7 = document.createElement("div");
         infoContent7.innerHTML = "<p style='text-align:center;'>Vaka Sayısı/Nüfus: 0,001286</p>";
         
         var infoContent8 = document.createElement("div");
         infoContent8.innerHTML = "<p style='text-align:center;'>Vaka Sayısı/Nüfus: 0,0000298</p>";
         // CSS stilini uygula
        infoBox.style.overflow = "visible";
        infoBox2.style.overflow = "visible";
        infoBox3.style.overflow = "visible";
        infoBox4.style.overflow = "visible";
        infoBox5.style.overflow = "visible";
        infoBox6.style.overflow = "visible";
        infoBox7.style.overflow = "visible";
        infoBox8.style.overflow = "visible";
       

        // CSS stilini uygula
        infoContent.style.cssText = "background-color:  #b56d5b; border: 1px solid black; padding: 4px; border-radius: 10px";
        infoContent2.style.cssText = "background-color: #b56d5b; border: 1px solid black; padding: 4px; border-radius:10px";
        infoContent3.style.cssText = "background-color: #b56d5b; border: 1px solid black; padding: 4px; border-radius:10px";
        infoContent4.style.cssText = "background-color: #b56d5b; border: 1px solid black; padding: 4px; border-radius:10px";
        infoContent5.style.cssText = "background-color: #b56d5b; border: 1px solid black; padding: 4px; border-radius:10px";
        infoContent6.style.cssText = "background-color: #ec5353;  padding: 4px;border: 1px solid black; border-radius:10px";
        infoContent7.style.cssText = "background-color: #b56d5b;  padding: 4px;border: 1px solid black;border-radius:10px";
        infoContent8.style.cssText = "background-color: #b56d5b;  padding: 4px;border: 1px solid black;border-radius:10px";

         // Bilgilendirme kutusuna içeriği ekle
         infoBox.appendChild(infoContent);
         infoBox2.appendChild(infoContent2);
         infoBox3.appendChild(infoContent3);
         infoBox4.appendChild(infoContent4);
         infoBox5.appendChild(infoContent5);
         infoBox6.appendChild(infoContent6);
         infoBox7.appendChild(infoContent7);
         infoBox8.appendChild(infoContent8);


 
         // SVG'ye bilgilendirme kutusunu ekleyin
         svg.appendChild(infoBox);
         svg.appendChild(infoBox2);
         svg.appendChild(infoBox3);
         svg.appendChild(infoBox4);
         svg.appendChild(infoBox5);
         svg.appendChild(infoBox6);
         svg.appendChild(infoBox7);
         svg.appendChild(infoBox8);

        

        clicked = true;
    } else {
         if (arrowLine && arrowLine2 && arrowLine3 && arrowLine4 && arrowLine5 && text1  && text2 && text3 && text4 && text5&& arrowLine6 && text6 && arrowLine7 && text7 ) {
            arrowLine.remove();
            arrowLine2.remove();
            arrowLine3.remove();
            arrowLine4.remove();
            arrowLine5.remove();
            arrowLine6.remove();
            arrowLine7.remove();
            text1.remove();
            text2.remove();
            text3.remove();
            text4.remove();
            text5.remove();
            text6.remove();
            text7.remove();
            
        }

        if (infoBox && infoBox2 && infoBox3 && infoBox4 && infoBox5 && infoBox6&& infoBox7&& infoBox8) {
            infoBox.remove();
            infoBox2.remove();
            infoBox3.remove();
            infoBox4.remove();
            infoBox5.remove();
            infoBox6.remove();
            infoBox7.remove();
            infoBox8.remove();
            
        }
        // "svg-turkiye-haritasi/index.html"
       window.location.href = "svg-turkiye-haritasi/index.html";

        clicked = false;
    }
});