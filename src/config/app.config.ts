interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Owner', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Foox',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage their freelancer profile',
    'Apply for jobs',
    'Manage their worklog',
    'Update their user info',
  ],
  ownerAbilities: [
    'Manage hiring',
    'Manage freelancer profile',
    'Manage worklog',
    'Manage user',
    'Manage company',
    'Manage job',
    'Manage application',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/671e04a9-f0e1-491f-b577-53286534a22c',
};
