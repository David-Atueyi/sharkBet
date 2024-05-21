interface transactionHistory {
  transactionAmount: string;
  transactionType: string;
  transactionDate: string;
  transactionTime: string;
  transactionStatus: string;
}

export interface IUseTransactionHistoryStore {
  transactionHistory: transactionHistory[];
  setTransactionHistory: (
    transactionAmount: string,
    transactionType: string,
    transactionDate: string,
    transactionTime: string,
    transactionStatus: string
  ) => void;
}
