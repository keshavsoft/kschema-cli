import { buildMenuItem } from "./buildMenuItem.js";

const buildHeader = () => {
    const ul = document.getElementById("menu");

    const liStockItems = forStockItems();

    ul.prepend(liStockItems);

    const liLedger = forLedgers();

    ul.prepend(liLedger);
};

const forStockItems = () => {
    return buildMenuItem({
        inTextToShow: "StockItems",
        inHtmlId: "StockItemsHtmlId",
        inIconPaths: [
            "M3 7l9 4 9-4",
            "M3 7l9-4 9 4",
            "M3 7v10l9 4 9-4V7",
            "M12 11v10"
        ]
    });
};

const forLedgers = () => {
    return buildMenuItem({
        inTextToShow: "Ledgers",
        inHtmlId: "LedgersHtmlId",
        inIconPaths: [
            "M4 6h16",
            "M4 10h16",
            "M4 14h10",
            "M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
        ]
    });
};
export { buildHeader };
