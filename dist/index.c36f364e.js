//import reddit from './redditapi';
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
searchForm.addEventListener("submit", (e)=>{
    //console.log(123);
    //get search term
    const searchTerm = searchInput.value;
    const sortBy = document.querySelector('input[name="sortby"]:checked').value;
    //grt limit
    const searchLimit = document.getElementById("limit").value;
    //console.log(searchLimit);
    //check inout
    if (searchTerm === "") showMessage("Please add a search term", "alert-danger");
    searchInput.value = "";
    //search reddit
    reddit.search(searchTerm, searchLimit, sortBy);
    e.preventDefault();
});
function showMessage(message, className) {
    const div = document.createElement("div");
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const searchContainer = document.getElementById("search-container");
    const search = document.getElementById("search");
    searchContainer.insertBefore(div, search);
    //timeout 
    setTimeout(()=>document.querySelector(".alert").remove(), 3000);
}

//# sourceMappingURL=index.c36f364e.js.map
