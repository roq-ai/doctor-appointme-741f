const mapping: Record<string, string> = {
  appointments: 'appointment',
  availabilities: 'availability',
  insurances: 'insurance',
  organizations: 'organization',
  patients: 'patient',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
