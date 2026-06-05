async function translateText() {
  let text = document.getElementById("inputText").value;
  let source = document.getElementById("sourceLang").value;
  let target = document.getElementById("targetLang").value;

  if (text.trim() === "") {
    document.getElementById("output").innerText = "Please enter text.";
    return;
  }

  document.getElementById("output").innerText = "Translating... ⏳";

  let url = `https://api.mymemory.translated.net/get?q=${text}&langpair=${source}|${target}`;

  try {
    let res = await fetch(url);
    let data = await res.json();

    document.getElementById("output").innerText =
      data.responseData.translatedText;

  } catch (err) {
    document.getElementById("output").innerText =
      "Translation failed. Try again.";
  }
}

// SWAP LANGUAGES
document.getElementById("swapBtn").addEventListener("click", () => {
  let source = document.getElementById("sourceLang");
  let target = document.getElementById("targetLang");

  [source.value, target.value] = [target.value, source.value];
});

// COPY TEXT
document.getElementById("copyBtn").addEventListener("click", () => {
  let output = document.getElementById("output").innerText;
  navigator.clipboard.writeText(output);
});