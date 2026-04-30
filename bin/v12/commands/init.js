import { locateSource } from "./init/steps/locateSource.js";
import { locateDestination } from "./init/steps/locateDestination.js";
import { createProject } from "./init/steps/createProject.js";
import { announce } from "./init/steps/announce.js";

import resolveFolderName from "../core/resolveFolderName.js";

export default ({ folderName = "" }) => {
    const resolvedFolderName = resolveFolderName({
        name: folderName
    });

    const source = locateSource();
    const destination = locateDestination({ inResolvedFolderName: resolvedFolderName });

    createProject({ source, destination });

    announce({ inResolvedFolderName: resolvedFolderName });
};