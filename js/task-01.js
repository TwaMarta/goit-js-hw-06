const list = document.querySelectorAll("li.item");
console.log(`Number of categories: ${list.length}`);

const categories = list.forEach(item => {
    const category = item.querySelector("h2").innerHTML;
    const categoryElements = item.querySelectorAll("li").length;
    console.log(`Category: ${category}`);
    console.log(`Elements: ${categoryElements}`);
});