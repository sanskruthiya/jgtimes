import { getResources } from '$lib/getResources';

export async function load() {
  const resources = getResources();

  return {
    resources
  };
}