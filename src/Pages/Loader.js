import { useState } from 'react'
import { Link } from 'react-router-dom'
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import WheelComponent from "react-wheel-of-prizes";
import '../App.css'
export default function Loader() {
    // const { width, height } = useWindowSize()
    const [isClick, setIsClick] = useState(false)
    const segments = [
        "30",
        "Lost",
        "40",
        "almost",
        "750",
        "no luck",
        "50",
        "Try again",
        "Sorry",
    ];
    const segColors = [
        '#EE4040',
        '#F0CF50',
        '#815CD1',
        '#3DA5E0',
        '#34A24F',
        '#F9AA1F',
        '#EC3F3F',
        '#FF9000',
        '#34A24R'
    ]
    const onFinished = (winner) => {
        console.log(winner);
        if (winner !== 'Try again' || winner !== 'no luck' || winner !== 'almost' || winner !== 'Lost') {
            setIsClick(true)
            console.log('fdfdddddddddddd')
        }
        else {
            setIsClick(false)
        }
    };
    return (
        <div className="App">
            <div className="wheelspin">
                <WheelComponent
                    segments={segments}
                    segColors={segColors}
                    onFinished={(winner) => onFinished(winner)}
                    primaryColor="black"
                    contrastColor="white"
                    buttonText="Spin"
                    winningSegment='750'
                    isOnlyOnce={false}
                    size={190}
                    upDuration={500}
                    downDuration={600}
                    fontFamily="Arial"
                />
                {isClick ?
                    <div className='fall'>
                        <Confetti />
                    </div>
                    : ''}
                {
                    isClick ?
                        <div>
                            <h2 className='heading'>CONGRATULATIONS YOU HAVE WON!</h2>
                            <p className='para'>How To Claim :</p>
                            <p className='para'>1. Click "Claim Reward" Button</p>
                            <p className='para'>2. Complete Your Details</p>
                            <p className='para'>3. Get Your Voucher On Email in next 30 min.</p>
                            <p className='para'> Happy Shopping!</p>
                            <Link className='button' target='_' to='https://amitkumar0712.github.io/WEB-D/'>CLAIM NOW!!</Link>
                        </div> :
                        <>
                            <h2 className='heading'>
                                SPIN THE WHEEL &  GET A CHANCE TO WIN UPTO 750 VOOHOO GIFT CARD
                            </h2>
                        </>
                }
            </div>
        </div>
    );
}
