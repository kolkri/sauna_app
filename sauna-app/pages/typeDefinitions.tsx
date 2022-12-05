interface SingleSauna {
    name: string;
    id: string;
    address: string;
    saunaType: string[];
    website: string;
    description: string;
    swimming: string[];
    price: number;
    service: string[]
  }
  
export interface SaunaData {
    saunas: SingleSauna[];
  }