export type ProjectItem = {
    title: string,
    description: string,
    palette?: string[],
    recipe?: string;
    yarn_type?: string;
    size?: string;
    thumbnail: string;
    images?: string[];
}

export type ProjectItemRow = {
    items: ProjectItem[];
    title: string;
}
