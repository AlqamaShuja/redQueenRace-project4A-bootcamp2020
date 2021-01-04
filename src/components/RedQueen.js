import React, { useState } from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import '../App.css';


const RedQueen = () => {
    const frame = [{transform:"translateX(100%)"}, {transform:"translateX(-100%)"}];
    const [playbackRate_RG, setPlaybackRate_RG] = useState(1);
    const [playbackRate_BG, setPlaybackRate_BG] = useState(0);

    const redQueen_alice = useWebAnimations({
        playbackRate: playbackRate_RG,
        keyframes:[
          {transform:"translateY(0)"},
          {transform:"translateY(-100%)"}
        ],
        timing:{
        duration:600,
        iterations:Infinity,
        easing:"steps(7, end)",
        playbackRate:1,
        }
    });
    
    const background1Movement = useWebAnimations({
        playbackRate: playbackRate_BG,
        keyframes: frame,
        timing:{
            duration:36000,
            iterations:Infinity,
        }
    });

    const background2Movement = useWebAnimations({
        playbackRate: playbackRate_BG,
        keyframes:frame,
        timing:{
            duration:36000,
            iterations:Infinity,
        }
    });

    const foreground1Movement = useWebAnimations({
        playbackRate: playbackRate_BG,
        keyframes:frame,
        timing:{
            duration:12000,
            iterations:Infinity,
        }
    });

    const foreground2Movement = useWebAnimations({
        playbackRate: playbackRate_BG,
        keyframes:frame,
        timing:{
            duration:12000,
            iterations:Infinity,
            
        }
    });

    // Increasing Speed
    var playbackRateAdjustment = function (){
        if(playbackRate_RG < 0.8){
            setPlaybackRate_BG((playbackRate_RG/2)*-1);
        }else if(playbackRate_RG > 1.2){
            setPlaybackRate_BG(playbackRate_RG/2);
        }else{
            setPlaybackRate_BG(0.7);
        }
    }

    function makeMoreFaster() {
        setPlaybackRate_RG(playbackRate_RG * 1.1);
        playbackRateAdjustment();
    }

    window.addEventListener("click", makeMoreFaster);

    return ( 
        <div id="wrapper">
            <div className="sky"></div>
            <div className="earth">
                <div id="red-queen_and_alice">
                    <img id="red-queen_and_alice_sprite" 
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" 
                    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x" 
                    alt="Alice and the Red Queen running to stay in place."
                    ref={redQueen_alice.ref}
                    />
                </div>
            </div>

            <div className="scenery" id="foreground1" ref={foreground1Movement.ref}>
                <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" 
                    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" "/>
            </div>

            <div className="scenery" id="foreground2" ref={foreground2Movement.ref} >    
                <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" 
                    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" "/>
                <img id="w_rook_upright" 
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" 
                    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" "/>
            </div>

            <div className="scenery" id="background1" ref={background1Movement.ref} >
                <img id="r_pawn_upright" 
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" 
                    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" "/>
                <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" 
                    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" "/>
                <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" 
                    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" "/>
            </div>

            <div className="scenery" id="background2" ref={background2Movement.ref} >
                <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" 
                    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" "/>
                <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" 
                    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" "/>
                <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" 
                    srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" "/>
            </div>
        </div>
    );
}
 
export default RedQueen;