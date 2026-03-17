const language = {
  en: {
    title: "Monthly Budget Calculator",
    income: "Income",
    calculate: "Calculate",
    resultNeeds: "Essential Expenses (50%)",
    resultWants: "Non-Essential Expenses (30%)",
    resultSavings: "Savings (20%)"
  },
  id: {
    title: "Kalkulator Anggaran Bulanan",
    income: "Pendapatan",
    calculate: "Hitung",
    resultNeeds: "Pengeluaran Wajib (50%)",
    resultWants: "Pengeluaran Tidak Wajib (30%)",
    resultSavings: "Tabungan (20%)"
  }
};

let currentLang = "en";

// Wait until page fully loads (IMPORTANT)
document.addEventListener("DOMContentLoaded", function () {

  const incomeInput = document.getElementById("income");
  const resultDiv = document.getElementById("result");
  const calculateBtn = document.getElementById("calculateBtn");
  const langSwitcher = document.getElementById("languageSwitcher");

  function setLanguage(lang) {
    currentLang = lang;
    document.getElementById("title").textContent = language[lang].title;
    document.getElementById("incomeLabel").textContent = language[lang].income;
    calculateBtn.textContent = language[lang].calculate;
  }

  langSwitcher.addEventListener("change", function () {
    setLanguage(this.value);
  });

  function formatRupiah(number) {
    return "Rp " + number.toLocaleString("id-ID");
  }

  calculateBtn.addEventListener("click", function () {
    let income = parseFloat(incomeInput.value);

    // Validation
    if (isNaN(income) || income <= 0) {
      resultDiv.innerHTML = "<p>❌ Please enter a valid number</p>";
      return;
    }

    const needs = income * 0.5;
    const wants = income * 0.3;
    const savings = income * 0.2;

    resultDiv.innerHTML = `
      <p>${language[currentLang].resultNeeds}: ${formatRupiah(needs)}</p>
      <p>${language[currentLang].resultWants}: ${formatRupiah(wants)}</p>
      <p>${language[currentLang].resultSavings}: ${formatRupiah(savings)}</p>
    `;
  });

  // Default language
  setLanguage("en");

});
