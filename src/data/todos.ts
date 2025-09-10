export type Todo = {
  id: string;
  text: string;
  description: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate: Date;
  tags: string[];
};

export const todos: Todo[] = [
  {
    id: '1',
    text: 'Finalize Q3 marketing campaign',
    description: 'Review the campaign brief, check the budget, and approve the final creative assets. Coordinate with the design and content teams.',
    completed: false,
    priority: 'high',
    dueDate: new Date(new Date().setDate(new Date().getDate() + 2)),
    tags: ['marketing', 'planning'],
  },
  {
    id: '2',
    text: 'Develop new user onboarding flow',
    description: 'Design and implement a new multi-step onboarding process for new users to improve activation rates. A/B testing required.',
    completed: false,
    priority: 'high',
    dueDate: new Date(new Date().setDate(new Date().getDate() + 7)),
    tags: ['product', 'design', 'dev'],
  },
  {
    id: '3',
    text: 'Schedule team offsite event',
    description: 'Find a venue, arrange catering, and plan activities for the upcoming quarterly team offsite. Send out invites by EOW.',
    completed: false,
    priority: 'medium',
    dueDate: new Date(new Date().setDate(new Date().getDate() + 10)),
    tags: ['hr', 'team'],
  },
  {
    id: '4',
    text: 'Fix login page CSS bug',
    description: 'The login button is misaligned on mobile devices with screen widths less than 375px. Investigate and deploy a hotfix.',
    completed: true,
    priority: 'medium',
    dueDate: new Date(new Date().setDate(new Date().getDate() - 1)),
    tags: ['dev', 'bugfix'],
  },
  {
    id: '5',
    text: 'Prepare monthly performance report',
    description: 'Compile key metrics from analytics platforms and create a presentation for the leadership meeting next Monday.',
    completed: false,
    priority: 'medium',
    dueDate: new Date(new Date().setDate(new Date().getDate() + 4)),
    tags: ['data', 'reporting'],
  },
  {
    id: '6',
    text: 'Renew SSL certificate for main domain',
    description: 'The current SSL certificate is expiring in 30 days. Generate a new CSR and complete the renewal process with the provider.',
    completed: false,
    priority: 'high',
    dueDate: new Date(new Date().setDate(new Date().getDate() + 25)),
    tags: ['devops', 'security'],
  },
  {
    id: '7',
    text: 'Write blog post on new feature',
    description: 'Draft a blog post announcing the new "Project Templates" feature. Include screenshots and a call to action.',
    completed: false,
    priority: 'low',
    dueDate: new Date(new Date().setDate(new Date().getDate() + 14)),
    tags: ['marketing', 'content'],
  },
  {
    id: '8',
    text: 'Update third-party dependencies',
    description: 'Run `npm audit` to check for vulnerabilities and update outdated packages to their latest stable versions.',
    completed: true,
    priority: 'low',
    dueDate: new Date(new Date().setDate(new Date().getDate() - 5)),
    tags: ['dev', 'maintenance'],
  },
];