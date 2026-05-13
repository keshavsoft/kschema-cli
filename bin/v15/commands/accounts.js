import { locateSource } from "./accounts/steps/locateSource.js";
import { locateDestination } from "./accounts/steps/locateDestination.js";
import { createProject } from "./accounts/steps/createProject.js";
import { announce } from "./accounts/steps/announce.js";

import resolveFolderName from "../core/resolveFolderName.js";

export default ({ folderName = "" }) => {
    const resolvedFolderName = resolveFolderName({
        name: folderName,
        inType: "Accounts"
    });

    const source = locateSource();
    const destination = locateDestination({ inResolvedFolderName: resolvedFolderName });

    createProject({ source, destination });

    announce({ inResolvedFolderName: resolvedFolderName });
};