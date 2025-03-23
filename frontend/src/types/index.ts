export interface Income {
  id: string;
  client: string;
  amount: number;
  date: string;
  status: 'paid' | 'pending';
}

export interface Invoice {
  id: string;
  client: string;
  amount: number;
  date: string;
  status: 'paid' | 'pending';
  invoiceNumber: string;
}