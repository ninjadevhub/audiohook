export interface ICampaignTableItem {
  id: string | number;
  campaign: string;
  budget: string;
  duration: string;
  days_left: string;
  days_passed: string;
  impressions: number;
  cost: number;
  roas: number;
  budget_pacing_indica?: number;
}
export type ICampaignTableData = ICampaignTableItem[];
