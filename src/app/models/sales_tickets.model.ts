export interface SalesTicketElement {
  assignee: string;
  id: number;
  status: string;
  subject: string;
  description: string;
  tracker: string;
}

export interface BillingTicketElement {
  id: number;
  status: string;
  subject: string;
  description: string;
  date: number;
  serviceCharge: number;
}

