const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySelected = document.querySelector(".currency-selected");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  ); // valor em real
  const currencyValueConverted = document.querySelector(".currency-value"); // valor convertido em outras moedas

  const dolarToday = 4.94;
  const euroToday = 5.35;
  const ieneToday = 0.033;
  const francoToday = 5.58;
  const libraToday = 6.22;
  const bitcoinToday = 235541.01;
  const realToday = 0.2;

  if (currencySelected.value == "real") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue);
  }

  if (currencySelected.value == "dolar") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue);
  }

  if (currencySelected.value == "euro") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue);
  }

  if (currencySelected.value == "iene") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
    }).format(inputCurrencyValue);
  }

  if (currencySelected.value == "franco") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "CHF",
    }).format(inputCurrencyValue);
  }

  if (currencySelected.value == "libra") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue);
  }

  if (currencySelected.value == "bitcoin") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "XBT",
    }).format(inputCurrencyValue);
  }

  // convertendo REAL para outras moedas

  if (currencySelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue);
  }

  if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  if (currencySelect.value == "iene") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
    }).format(inputCurrencyValue / ieneToday);
  }

  if (currencySelect.value == "franco") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "CHF",
    }).format(inputCurrencyValue / francoToday);
  }

  if (currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday);
  }

  if (currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "XBT",
    }).format(inputCurrencyValue / bitcoinToday);
  }

  // convertendo DOLAR para outras moedas

  if (currencySelected.value == "dolar" && currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue);
  }

  if (currencySelected.value == "dolar" && currencySelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue * dolarToday);
  }

  if (currencySelected.value == "dolar" && currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue * 0.92);
  }

  if (currencySelected.value == "dolar" && currencySelect.value == "iene") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
    }).format(inputCurrencyValue * 150.28);
  }

  if (currencySelected.value == "dolar" && currencySelect.value == "franco") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "CHF",
    }).format(inputCurrencyValue * 0.88);
  }

  if (currencySelected.value == "dolar" && currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue * 0.79);
  }

  if (currencySelected.value == "dolar" && currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "XBT",
    }).format(inputCurrencyValue * 0.000019);
  }

  // convertendo EURO para outras moedas

  if (currencySelected.value == "euro" && currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue);
  }

  if (currencySelected.value == "euro" && currencySelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue * euroToday);
  }

  if (currencySelected.value == "euro" && currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue * 1.08);
  }

  if (currencySelected.value == "euro" && currencySelect.value == "iene") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
    }).format(inputCurrencyValue * 162.57);
  }

  if (currencySelected.value == "euro" && currencySelect.value == "franco") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "CHF",
    }).format(inputCurrencyValue * 0.95);
  }

  if (currencySelected.value == "euro" && currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue * 0.86);
  }

  if (currencySelected.value == "euro" && currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "XBT",
    }).format(inputCurrencyValue * 0.000021);
  }

  // convertendo IENE para outras moedas

  if (currencySelected.value == "iene" && currencySelect.value == "iene") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
    }).format(inputCurrencyValue);
  }

  if (currencySelected.value == "iene" && currencySelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue * ieneToday);
  }

  if (currencySelected.value == "iene" && currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue * 0.0067);
  }

  if (currencySelected.value == "iene" && currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue * 0.0062);
  }

  if (currencySelected.value == "iene" && currencySelect.value == "franco") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "CHF",
    }).format(inputCurrencyValue * 0.0059);
  }

  if (currencySelected.value == "iene" && currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue * 0.0053);
  }

  if (currencySelected.value == "iene" && currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "XBT",
    }).format(inputCurrencyValue * 0.00000013);
  }

  // convertendo FRANCO para outras moedas

  if (currencySelected.value == "franco" && currencySelect.value == "franco") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "CHF",
    }).format(inputCurrencyValue);
  }

  if (currencySelected.value == "franco" && currencySelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue * francoToday);
  }

  if (currencySelected.value == "franco" && currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue * 1.14);
  }

  if (currencySelected.value == "franco" && currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue * 1.05);
  }

  if (currencySelected.value == "franco" && currencySelect.value == "iene") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
    }).format(inputCurrencyValue * 170.83);
  }

  if (currencySelected.value == "franco" && currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue * 0.9);
  }

  if (currencySelected.value == "franco" && currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "XBT",
    }).format(inputCurrencyValue * 0.000022);
  }

  // convertendo LIBRA para outras moedas

  if (currencySelected.value == "libra" && currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue);
  }

  if (currencySelected.value == "libra" && currencySelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue * libraToday);
  }

  if (currencySelected.value == "libra" && currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue * 1.26);
  }

  if (currencySelected.value == "libra" && currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue * 1.17);
  }

  if (currencySelected.value == "libra" && currencySelect.value == "iene") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
    }).format(inputCurrencyValue * 189.92);
  }

  if (currencySelected.value == "libra" && currencySelect.value == "franco") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "CHF",
    }).format(inputCurrencyValue * 1.11);
  }

  if (currencySelected.value == "libra" && currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "XBT",
    }).format(inputCurrencyValue * 0.000025);
  }

  // convertendo BITCOIN para outras moedas

  if (
    currencySelected.value == "bitcoin" &&
    currencySelect.value == "bitcoin"
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "XBT",
    }).format(inputCurrencyValue);
  }

  if (currencySelected.value == "bitcoin" && currencySelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue * 253466.95);
  }

  if (currencySelected.value == "bitcoin" && currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue * 51353.8);
  }

  if (currencySelected.value == "bitcoin" && currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue * 47463.75);
  }

  if (currencySelected.value == "bitcoin" && currencySelect.value == "iene") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
    }).format(inputCurrencyValue * 7716139.54);
  }

  if (currencySelected.value == "bitcoin" && currencySelect.value == "franco") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "CHF",
    }).format(inputCurrencyValue * 45170.03);
  }

  if (currencySelected.value == "bitcoin" && currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue * 40643.45);
  }
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".currency-img");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar Americano";
    currencyImage.src = "./assets/dolar.png";
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./assets/euro.png";
  }

  if (currencySelect.value == "iene") {
    currencyName.innerHTML = "Iene";
    currencyImage.src = "./assets/simbolo-do-iene.png";
  }

  if (currencySelect.value == "franco") {
    currencyName.innerHTML = "Franco Suíço";
    currencyImage.src = "./assets/franco-suico.png";
  }

  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra Esterlina";
    currencyImage.src = "./assets/libra.png";
  }

  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImage.src = "./assets/bitcoin.png";
  }

  if (currencySelect.value == "real") {
    currencyName.innerHTML = "Real";
    currencyImage.src = "./assets/real.png";
  }

  convertValues();
}

function changeCurrencyConvert() {
  const currencyNameConvert = document.getElementById("currency-name-convert");
  const currencyImageConvert = document.querySelector(".currency-img-convert");

  if (currencySelected.value == "dolar") {
    currencyNameConvert.innerHTML = "Dólar Americano";
    currencyImageConvert.src = "./assets/dolar.png";
  }

  if (currencySelected.value == "euro") {
    currencyNameConvert.innerHTML = "Euro";
    currencyImageConvert.src = "./assets/euro.png";
  }

  if (currencySelected.value == "iene") {
    currencyNameConvert.innerHTML = "Iene";
    currencyImageConvert.src = "./assets/simbolo-do-iene.png";
  }

  if (currencySelected.value == "franco") {
    currencyNameConvert.innerHTML = "Franco Suíço";
    currencyImageConvert.src = "./assets/franco-suico.png";
  }

  if (currencySelected.value == "libra") {
    currencyNameConvert.innerHTML = "Libra Esterlina";
    currencyImageConvert.src = "./assets/libra.png";
  }

  if (currencySelected.value == "bitcoin") {
    currencyNameConvert.innerHTML = "Bitcoin";
    currencyImageConvert.src = "./assets/bitcoin.png";
  }

  if (currencySelected.value == "real") {
    currencyNameConvert.innerHTML = "Real";
    currencyImageConvert.src = "./assets/real.png";
  }

  convertValues();
}

currencySelect.addEventListener("change", changeCurrency);
currencySelected.addEventListener("change", changeCurrencyConvert);
convertButton.addEventListener("click", convertValues);
