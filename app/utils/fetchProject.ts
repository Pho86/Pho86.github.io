import eamigo from "../../public/projects/eamigo/project.json";
import tenryou from "../../public/projects/tenryou/project.json";
import localtome from "../../public/projects/localtome/project.json";
import neko from "../../public/projects/neko/project.json";

export default async function Projects() {
    const projects = [eamigo, tenryou, localtome, neko];
    return projects;
}

export function linearSearch(names: string[], projectName: string) {
    let found = false;
    let index = 0;
    for (let i = 0; i < names.length; i++ && !found) {
        if (projectName == names[i]) {
            index = i;
            found = true;
        }
    }
    if (!found) {
        return -1;
    } else {
        return index;
    }
}

export const ProjectPull = async (project: string) => {
    const projects = await Projects();
    const total = [];
    for (let i = 0; i < projects.length; i++) {
        total.push(projects[i].projectname);
    }
    const index = await linearSearch(total, project);
    if (index == -1) {
        return false;
    } else {
        return projects[index];
    }
};