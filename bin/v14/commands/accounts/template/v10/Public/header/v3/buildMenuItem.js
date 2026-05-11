import { createLi } from "./createLi.js";
import { createAnchor } from "./createAnchor.js";
import { createLabel } from "./createLabel.js";
import { createIcon } from "./createIcon.js";

const getKSTableConfig = ({
    tableName,
    endPoints,
    columnsConfig
}) => {
    const config = getDefaultKSTableConfig();

    config.tableName = tableName;

    config.endPoints = endPoints;

    config.columnsConfig = columnsConfig;

    return config;
};

const getDefaultKSTableConfig = () => {
    return {
        containerId: 'kSTableContainer',

        tableName: "",

        mode: "create",

        layout: {
            verticalPosition: "top",
            type: "table",
        },

        endPoints: {
            create: "",
            update: "",
            delete: "",
            read: "",
            find: ""
        },

        options: {
            firstRow: {
                showSearch: true
            },

            vertical: {
                showVertical: true,
                isDisabled: false,
                showSaveButton: true
            },

            dataList: {
                show: true,
            },

            table: {
                isDisabled: false,
                showTable: true,
                showRowOptions: false,
                showSerial: true,
                showFooter: false,

                footer: {
                    showDataList: true
                }
            },

            focus: {
                priority: ["vertical", "footer", "search"]
            }
        },

        columnsConfig: [],

        uiClasses: {
            form: {
                formClass: 'grid grid-cols-3 gap-x-8 gap-y-4 p-6 verticalForm',
                buttonClass: 'mt-2 px-4 py-1 bg-green-500 text-white',
                rowClass: 'flex items-center space-x-4',
                labelClass: 'w-24 text-sm font-medium',
                inputClass: 'flex-1 border rounded px-3 py-2'
            }
        },

        callbacks: {
            table: {
                onDelete: async ({ toDeletePk }) => {
                    const fromDelete = await startFetchAsGet({
                        inQuery: {
                            ParentPk: toDeletePk
                        }
                    });

                    return await fromDelete;
                }
            }
        }
    };
};

export const buildMenuItem = (item, classes = {}) => {
    const li = createLi(classes.liClass);

    const a = createAnchor(item, classes.aClass);

    const span = createLabel(item, classes.spanClass);

    const svg = createIcon(item, classes.svgClass);

    if (item.onClick) {
        a.addEventListener("click", async (event) => {
            event.preventDefault();

            const config = getKSTableConfig({
                tableName: "LedgerNames",

                endPoints: {
                    create: "/Api/V9/ItemsTable/Insert",
                    read: "/Api/V1/journals/ShowAll"
                },

                columnsConfig: [
                    { columnName: "AccountName" },
                    { columnName: "Date" }
                ]
            });

            await callKSTable(config);

            item.onClick(event);
        });
    };

    a.append(svg, span);

    li.appendChild(a);

    return li;
};


export const buildMenuItem1 = (item, classes = {}) => {
    const li = createLi(classes.liClass);

    const a = createAnchor(item, classes.aClass);

    const span = createLabel(item, classes.spanClass);

    const svg = createIcon(item, classes.svgClass);

    if (item.onClick) {
        a.addEventListener("click", async (event) => {
            event.preventDefault();
            // console.log("bbbbbbb : ", event);
            const config = {
                containerId: 'kSTableContainer',
                tableName: "LedgerNames",
                mode: "create", // or "show" "create"
                layout: {
                    verticalPosition: "top", // or left/right/bottom
                    type: "table", // "vertical" | "table" | "vertical-table"
                },
                endPoints: {
                    create: "/Api/V9/ItemsTable/Insert",
                    update: "",
                    delete: "/Api/V9/BillsTable/Delete",
                    read: "/Api/V1/journals/ShowAll",
                    find: "/Api/V9/BillsTable/find"
                },
                options: {
                    firstRow: {
                        showSearch: true
                    },
                    vertical: {
                        showVertical: true,
                        isDisabled: false,
                        showSaveButton: true
                    },
                    dataList: {
                        show: true,
                    },
                    table: {
                        isDisabled: false,
                        showTable: true,
                        showRowOptions: false,
                        showSerial: true,
                        showFooter: false,
                        footer: {
                            showDataList: true
                        }
                    },
                    focus: {
                        priority: ["vertical", "footer", "search"]
                    }
                },
                columnsConfig: [
                    {
                        columnName: "AccountName"
                    },
                    {
                        columnName: "LedgerParentName"
                    },
                    {
                        columnName: "GstRegistrationType"
                    },
                    {
                        columnName: "PartyGSTIN"
                    }
                ],
                uiClasses: {
                    form: {
                        formClass: 'grid grid-cols-3 gap-x-8 gap-y-4 p-6 verticalForm',
                        buttonClass: 'mt-2 px-4 py-1 bg-green-500 text-white',
                        rowClass: 'flex items-center space-x-4',
                        labelClass: 'w-24 text-sm font-medium',
                        inputClass: 'flex-1 border rounded px-3 py-2'
                    }
                },
                callbacks: {
                    table: {
                        onDelete: async ({ toDeletePk }) => {
                            const fromDelete = await startFetchAsGet({
                                inQuery: {
                                    ParentPk: toDeletePk
                                }
                            });

                            return await fromDelete;
                        }
                    }
                }
            };

            await callKSTable(config);

            item.onClick(event);
        });
    };

    a.append(svg, span);

    li.appendChild(a);

    return li;
};

const callKSTable = async (config) => {
    console.log('window.KSTable', window.KSTable);

    if (window.KSTable?.initTableOnly) {
        console.log("table loaded from window.KSTable");

        return window.KSTable.initTableOnly(config); // extension or CDN
    } else {
        const { initTableOnly } = await import("../../../../../../KSTableAi/V28/entry.js"); // local
        // const { initTableOnly } = await import("https://keshavsoft.github.io/KsJsTableAi/Public/kstable.js"); // local

        return initTableOnly(config);
    };
};