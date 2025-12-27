import fs from 'fs';
import path from 'path';

export interface ResourceInfo {
  title_jp: string;
  title_en: string;
  description: string;
  category: string[];
  languages: string[];
  link: string;
  image: string;
}

export function getResources(): ResourceInfo[] {
  const resourcesDirectory = path.resolve(process.cwd(), 'static/resources');
  const fullPath = path.join(resourcesDirectory, 'resources.json');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const resourcesJson = JSON.parse(fileContents);

  const resources: ResourceInfo[] = [];
  resourcesJson.forEach((resource: ResourceInfo) => {
    resources.push(resource);
  });

  return resources;
}
