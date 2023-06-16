const mapping: Record<string, string> = {
  companies: 'company',
  invitations: 'invitation',
  services: 'service',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
