const addCatForm = document.getElementById("addCatForm");
addCatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = FormData(addCatForm)
    debugger
    console.log(data.name);
});