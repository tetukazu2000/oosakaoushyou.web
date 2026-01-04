const Langbtn =  document.getElementById("EN")
const introText = document.getElementById("intro");
const secondText = document.getElementById("second");
const thirdText = document.getElementById("third");
const deliveryTitle = document.getElementById("delivery-title");
const takeoutTitle = document.getElementById("takeout");

Langbtn.addEventListener("click",  () => {
    if (Langbtn.textContent === "English") {
        Langbtn.textContent = "日本語";

         introText.innerHTML =
            "Since 1985, we are expanding our company <br> across Japan and the world. <br>and also in Iwakuni!";

          secondText.innerHTML =
             "Since 1985, we are expanding our company <br> across Japan and the world. <br>and also in Iwakuni!";

          thirdText.innerHTML =
             "Since 1985, we are expanding our company <br> across Japan and the world. <br>and also in Iwakuni!";


        deliveryTitle.textContent = "Delivery";

        takeoutTitle.textContent = "Take out";
    } else {
        Langbtn.textContent = "English";

       introText.innerHTML =
            "１９８５年から日本や世界に展開し<br>岩国市新港町にもおいしい餃子を！";

        secondText.innerHTML =
             "１９８５年から日本や世界に展開し<br>岩国市新港町にもおいしい餃子を！";

          thirdText.innerHTML =
             "１９８５年から日本や世界に展開し<br>岩国市新港町にもおいしい餃子を！";

        deliveryTitle.textContent = "デリバリー";

        takeoutTitle.textContent = "お持ち帰り";
    }
});