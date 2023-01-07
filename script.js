const menu = [
    {
        id: 1,
        title: "Fluffiest Pudding",
        category: "dessert",
        image: "https://images.unsplash.com/photo-1605256107786-c598074d5027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
        desc: "Lorem ipsum",
    }
]

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function() {
    let displayMenu = menu.map(function(item){
        //console.log(item);
    
        return `<h1>${item.title}</h1>`
    })
    console.log(displayMenu)
})