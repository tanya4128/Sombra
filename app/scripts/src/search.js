// load JSON
var searchResult = [];

$.getJSON('./data.json', function (data) {
    searchResult = data;
});

var searchResultList = document.getElementById('search_result_list');

function onSearchSubmit(element) {
    if (element.value === ""){
        return
    }

    while (searchResultList.firstChild) {
        searchResultList.removeChild(searchResultList.firstChild);
    }

    for (var i = 0; i < searchResult.length; i++) {
        var value = searchResult[i];
        if (value.indexOf(element.value) !== -1) {
            var item = document.createElement("li");
            var aItem = document.createElement("a");

            aItem.href = "#";
            aItem.text = value;

            item.appendChild(aItem);
            searchResultList.appendChild(item);
        }
    }
}

function onSearchFocus(element) {
    while (searchResultContainer.firstChild) {
        searchResultContainer.removeChild(searchResultContainer.firstChild);
    }

    defaultSearchResult = ["MEN SHOES", "KIDS"];

    for (var i = 0; i < defaultSearchResult.length; i++) {
        var value = defaultSearchResult[i];
        var item = document.createElement("li");
        var aItem = document.createElement("a");

        aItem.href = "#";
        aItem.text = value;

        item.appendChild(aItem);
        searchResultContainer.appendChild(item);
    }
}

