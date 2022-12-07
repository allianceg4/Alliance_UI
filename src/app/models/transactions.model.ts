export interface TransactionElement {
  assignee: string;
  id: number;
  status: string;
  subject: string;
  description: string;
  tracker: string;
  proof_of_payment?: File;
}
