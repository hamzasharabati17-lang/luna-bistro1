const languageBtn = document.getElementById("languageBtn");
const reservationForm = document.getElementById("reservationForm");
const formMessage = document.getElementById("formMessage");

let language = "en";


function updateLanguage() {

  document.documentElement.lang = language;

  document.documentElement.dir =
    language === "ar" ? "rtl" : "ltr";


  document.querySelectorAll("[data-en][data-ar]")
    .forEach((element) => {

      element.textContent =
        language === "ar"
          ? element.dataset.ar
          : element.dataset.en;

    });


  document.querySelectorAll(
    "[data-en-placeholder]"
  ).forEach((input) => {

    input.placeholder =
      language === "ar"
        ? input.dataset.arPlaceholder
        : input.dataset.enPlaceholder;

  });


  languageBtn.textContent =
    language === "ar"
      ? "English"
      : "العربية";


  document.title =
    language === "ar"
      ? "لونا بيسترو | مطعم عصري"
      : "Luna Bistro | Modern Restaurant";

}


languageBtn.addEventListener("click", () => {

  language =
    language === "en"
      ? "ar"
      : "en";

  updateLanguage();

});


reservationForm.addEventListener("submit", (event) => {

  event.preventDefault();

  formMessage.textContent =
    language === "ar"
      ? "تم استلام طلب الحجز بنجاح!"
      : "Your reservation request has been received!";

  reservationForm.reset();

});


updateLanguage();
