// function testing(){
//     $("p").each(function()
//     {
//         $(this).css("background-color","blue");
//     });
// }



const storeItems = [
    {
        name: 'TV',
        price: 800.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Phone',
        price: 700.00,
        inStock: false,
        details: '5G'
    },
    {
        name: 'Game Console',
        price: 300.00,
        inStock: true,
        details: 'The latest and greatest'
    },
    {
        name: 'Laptop',
        price: 1200.00,
        inStock: true,
        details: '16GB RAM 1TB SSD'
    },
    {
        name: 'Smart Watch',
        price: 200.00,
        inStock: false,
        details: 'Counts your steps'
    },
    {
        name: 'Headphones',
        price: 100.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Keyboard',
        price: 100.00,
        inStock: true,
        details: 'Types for you'
    },
    {
        name: 'HDMI Cord',
        price: 100.00,
        inStock: true,
        details: 'HDMI to USB type C'
    },
    {
        name: 'Monitor',
        price: 300.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Speaker',
        price: 200.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Video Game',
        price: 60.00,
        inStock: true,
        details: 'Enjoy for hours'
    },
];

let light = true;

//change theme, executes when you click the toggle button
function CHtheme(){
//if theme is light, change to dark
    if(light === true){

        light = false;

        $("body").css("background-color", "#2b2b2b");
        
        $(".rowItem").each(function(){
            $(this).css("background-color", "#424242");
            $(this).css("box-shadow", "2px 2px 4px rgba(255, 255, 255, 0.5)");
            $(this).css("color", "white");
        });
        $("#button").css("background-color", "#2b2b2b");
        $("#button").css("color", "white");
        $(".page-title").css("color", "white");
        $(".line").css("color", "white");

//change theme executes when you click the toggle button
    } else {
//changes from dark to light, which can be repeated over and over again
        light = true;

        $("body").css("background-color", "#eee");

        $(".rowItem").each(function(){
            $(this).css("background-color", "#fff");
            $(this).css("box-shadow", "2px 2px 4px rgba(0, 0, 0, 0.5)");
            $(this).css("color", "black");
        });
        $("#button").css("background-color", "#eee");
        $("#button").css("color", "black");
        $(".page-title").css("color", "black");
        $(".line").css("color", "black");

    }
}
//pop page allows the content from the const variable to be displayed without being typed out by hand in html
function popPage(){
    document.open();
//creates the box containers for the words
    document.write("<div class=\"box\">");
//gets the words / index information and displays it in an order specified
//in this case it goes "price", "name", "details"
    for(i = 0 ; i < storeItems.length ; i++ ){
        if(storeItems[i].inStock === true){
            document.write("<div class=\"rowItem\">");
            document.write("<div>");
            document.write(storeItems[i].price);
            document.write("</div>");
            document.write("<div>");
            document.write(storeItems[i].name);
            document.write("</div>");
            document.write("<div>");
            document.write(storeItems[i].details);
            document.write("</div>");
            document.write("</div>");
        }
    }

    document.write("</div>");

    document.close();
}

