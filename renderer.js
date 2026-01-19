window.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("name");
  const button = document.getElementById("write");

  button.addEventListener("click", () => {
    const value = input.value.trim();
    if (!value) return;

    window.electronAPI.saveToJSON(value);
    input.value = "";
  });
});
