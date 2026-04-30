import { decideTemplate } from "./express/steps/decideTemplate.js";

import { locateSource } from "./express/steps/locateSource.js";
import { locateDestination } from "./express/steps/locateDestination.js";
import { createProject } from "./express/steps/createProject.js";
import { announce } from "./express/steps/announce.js";

import resolveFolderName from "../core/resolveFolderName.js";

export default ({ template, folderName }) => {
    const finalTemplate = decideTemplate({ inTemplate: template });

    const resolvedFolderName = resolveFolderName({
        name: folderName
    });

    const source = locateSource({ template: finalTemplate });
    const destination = locateDestination({ inResolvedFolderName: resolvedFolderName });

    createProject({ source, destination });

    announce({ inResolvedFolderName: resolvedFolderName });
};