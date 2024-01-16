export interface Entry {
  id: string;
  createdAt: string;
  content: string;
  analysis: {
    mood: string;
    summary: string;
    subject: string;
    negative: boolean;
    color: string;
  };
}

export interface CustomToolTipProps {
  label: string;
  payload: any;
  active: boolean;
}

export interface DataItem {
  sentimentScore: number;
  updatedAt: string;
}
