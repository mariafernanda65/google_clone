const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event) {
    if(event.code === "Enter") {
        search();
    }
});
function search() {
    const input = searchInput.value;

    window.location.href=`https://www.google.com/search?q=${input}&rlz=1C5CHFA_enNZ948NZ948&oq=${input}&aqs=chrome.0.35i39i362l3j46i39i199i362i465j35i39i362l4.230625195j0j15&sourceid=chrome&ie=UTF-8`
} 