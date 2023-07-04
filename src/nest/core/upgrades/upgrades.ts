// upgrades.ts

import { logger as mainLogger } from "@/utils/logger";

import { ProjectProps } from "../project/project";
import { upgradeProject_2x_to_30 } from "./upgrade_2x_to_30";
import { upgradeProject_30_to_31 } from "./upgrade_30_to_31";
import { upgradeProject_31_to_32 } from "./upgrade_31_to_32";
// import { upgradeProject_32_to_40 } from "./upgrade_32_to_40";

const logger = mainLogger.getSubLogger({ name: "upgrade" });

const VERSION = process.env.APP_VERSION as string | "";

const projectUpgrades = [
  upgradeProject_2x_to_30,
  upgradeProject_30_to_31,
  upgradeProject_31_to_32,
  // upgradeProject_32_to_40,
];

/**
 * Upgrades project to be compatible with the latest release.
 * It also checks if projects are valid and corrects some problems.
 * @param project Object which should be transformed
 * @returns project
 */

export function upgradeProject(project: any): ProjectProps {
  const projectId = project.id || project._id;
  logger.trace("upgrade project:", projectId?.slice(0, 6));
  if (Object.keys(project).length === 0) {
    return {};
  }

  if (!("version" in project)) {
    return project;
  }

  const oldVersion = project.version;

  for (const upgrade of projectUpgrades) {
    project = upgrade(project);

    if (VERSION.startsWith(project.version)) {
      break;
    }
  }

  if (oldVersion !== project.version) {
    const projectId = project.id;
    if (projectId) {
      logger.debug(
        `upgrade project (${project.id.slice(0, 6)}): ${oldVersion} -> ${
          project.version
        }`
      );
    }
  }


  console.log(project)

  return project;
}
