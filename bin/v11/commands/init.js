import { decideTemplate } from "./init/steps/decideTemplate.js";

import { locateSource } from "./init/steps/locateSource.js";
import { locateDestination } from "./init/steps/locateDestination.js";
import { createProject } from "./init/steps/createProject.js";
import { announce } from "./init/steps/announce.js";

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