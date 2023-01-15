import { ObjectId } from "mongodb";

export interface SingleSauna {
    name: string;
    _id: string | ObjectId;
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
