// orchestrator
export const buildMenuItem = ({
    inTextToShow,
    inHtmlId,
    inIconPaths
}) => {
    const textToShow = inTextToShow;
    const htmlId = inHtmlId;
    const iconPaths = inIconPaths;

    const li = createLi();
    const a = createAnchor({ inHtmlId: htmlId });
    const span = createLabel({ inTextToShow: textToShow });
    const svg = createIcon({ inIconPaths: iconPaths });

    a.append(span, svg);
    li.appendChild(a);

    return li;
};

const createLi = () => {
    return document.createElement("li");
};

// createAnchor
const createAnchor = ({ inHtmlId = "htmlId" }) => {
    const a = document.createElement("a");
    a.id = inHtmlId;
    a.className =
        "group flex items-center md:flex-col md:items-center gap-0 md:gap-1 cursor-pointer hover:bg-gray-700 px-2 py-1 rounded transition-colors duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-500";
    return a;
};

// createLabel (no transform → no height change)
const createLabel = ({ inTextToShow = "Menu1" }) => {
    const span = document.createElement("span");
    span.className =
        "md:order-2 font-medium transition-colors duration-200 group-hover:text-white";
    span.textContent = inTextToShow;
    return span;
};

// createIcon (safe transform: no layout shift)
const createIcon = ({ inIconPaths = [] }) => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute(
        "class",
        "w-6 h-6 md:order-1 md:mb-0 text-gray-400 group-hover:text-white transition-all duration-200 transform group-hover:scale-95 group-hover:-translate-y-0.5"
    );
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("stroke-width", "1.5");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");

    inIconPaths.forEach(d => {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", d);
        svg.appendChild(path);
    });

    return svg;
};