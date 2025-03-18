(function(window, document) {
    const listSagaIndex = [
        "Wallace_&_Gromit_Vengeance_Most_Fowl",
        "Alarum",
        "Wicked",
        "Kinda_Pregnant"
    ]
    console.log("loader");
    if (typeof window.listSagaIndex === "undefined") {
        window.listSagaIndex = listSagaIndex;
    } else {
        console.log("Error en la lib ...");
    }
})(window, document);