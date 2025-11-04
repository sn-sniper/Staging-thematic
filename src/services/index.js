import { apiSpec } from "../api/spec";
import { createResourceService, listResources } from "./apiService";

const serviceRegistry = new Map();

function buildService(resource) {
  if (!serviceRegistry.has(resource)) {
    serviceRegistry.set(resource, createResourceService(resource));
  }

  return serviceRegistry.get(resource);
}

export function getService(resource) {
  return buildService(resource);
}

export function getServices() {
  return listResources().reduce((acc, resource) => {
    acc[resource] = buildService(resource);
    return acc;
  }, {});
}

export function hasService(resource) {
  return Object.prototype.hasOwnProperty.call(apiSpec, resource);
}
