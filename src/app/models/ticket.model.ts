export interface TicketElement {
  ticketID: number;
  userID: number;
  statusID: number;
  subject: string;
  description: string;
  date: any;
  amount: number;
  hasconfirm: number;
  hasproof: number;
  transaction: number;
  hasinvoice: number;
  ismatched: number;
  iscredited: number;
}
