// import classes from './main-navigation.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { SaunaData } from '../lib/typeDefinitions'

import SaunaIcon1 from '../assets/SaunaIcon1.svg'
import SaunaIcon2 from '../assets/SaunaIcon2.svg'
import SaunaIcon3 from '../assets/SaunaIcon3.svg'
import SaunaIcon4 from '../assets/SaunaIcon4.svg'
import SaunaIcon5 from '../assets/SaunaIcon5.svg'
import LocationIcon from '../assets/LocationIcon.svg'

const iconArray: string[] = [SaunaIcon1, SaunaIcon2, SaunaIcon3, SaunaIcon4, SaunaIcon5]
let iconIndex: number = -1


function SaunaCard(props: SaunaData) {
  return (
    <div className='cardsContainer'>
          {props.saunas.map(sauna => {
            iconIndex += 1
            if (iconIndex === 5) {
              iconIndex = 0
            }
            return (
              <Link href={`/${sauna._id}`} className='saunaCard' key={sauna._id.toString()}>
                <div className='saunaCardOverlay'></div>
                <div className='saunaCardTextDiv'>
                    <h3>{sauna.name}</h3>
                    <p><Image className='locationIconImg' src={LocationIcon}  alt='location icon'/>{sauna.address}</p>
                </div>
                <div className='saunaCardImgDiv'>
                    <Image className='iconImg' src={iconArray[iconIndex]} alt='sauna icon'/>
                </div>
              </Link>
            )}
          )}
      </div>
  );
}

export default SaunaCard;