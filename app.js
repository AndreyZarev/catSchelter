const addCatForm = document.getElementById("addCatForm");
addCatForm.addEventListener("submit", () => {
    const data = FormData(addCatForm)
    debugger
    console.log(data.name);
});