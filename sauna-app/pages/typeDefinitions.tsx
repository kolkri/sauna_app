interface SingleSauna {
    name: string;
    id: string;
    address: string;
    saunaType: string[];
    website: string;
    description: string;
    swimming: string[];
    price: number;
    service: string[];
    latitude: number;
    longitude: number;
  }
  
export interface SaunaData {
    saunas: SingleSauna[];
  }

export interface SaunaProps {
  props: SaunaData;
  revalidate: number
}
