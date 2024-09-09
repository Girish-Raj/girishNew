import React ,{useState} from 'react'
import Card from '../Card/Card'
import "./Offer.css"
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
const Offer = () => {
    const [cardShow , setcardShow] = useState(false)

    const showCard = ()=>{
        setcardShow(!cardShow)

    }
  return (
    <div className='Offer-container'>
        <div className='Offer-wrapper'>
          <h1>Start with a 7 day free trial</h1>
          <div className='all-offers'>
            <Card main = {false}/>
            <Card main = {true}/>
            <Card main = {false}/>
          </div>
          <div className='offers-deails'>
            <div className='time-offer'>
                <CircleNotificationsIcon/>
                <h3>Limited time offer</h3>
            </div>
            <span>|</span>
            <div className='time-offer'>
                <span>-20%</span>
                <h3>when u buy two level together</h3>
            </div>
            <span>|</span>
            <div className='time-offer'>
            <span>-20%</span>
            <h3>when u buy two level together</h3>
            </div>

          </div>
          <h4 onClick={showCard} style={{ cursor: 'pointer' }}>show more plans</h4>
          <div className={cardShow ? 'other-cards' : 'hide-cards'}>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
    </div>
  )
}

export default Offer