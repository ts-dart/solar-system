import SolImg from '../images/Sol.png';
import MercurioImg from '../images/Mercurio.png';
import VenusImg from '../images/Venus.png';
import TerraImg from '../images/Terra.png';
import MarteImg from '../images/Marte.png';
import JupiterImg from '../images/Jupiter.png';
import SaturnoImg from '../images/Saturno.png';
import Uranoimg from '../images/Urano.png';
import Netunoimg from '../images/Netuno.png';
import MercurioImg2 from '../images/Mercurio2.png';
import VenusImg2 from '../images/Venus2.png';
import TerraImg2 from '../images/Terra2.png';
import MarteImg2 from '../images/Marte2.png';
import JupiterImg2 from '../images/Jupiter2.png';
import SaturnoImg2 from '../images/Saturno2.png';
import Uranoimg2 from '../images/Urano2.png';
import Netunoimg2 from '../images/Netuno2.png';
import SaturnoImg3 from '../images/Saturno2.png';

const stars = [
  {
    name: 'Sol', 
    image: [SolImg], 
    nameClass: 'Sol',
  },
  { 
    name: 'Mercúrio', 
    image: [MercurioImg, MercurioImg2], 
    nameClass: 'Mercurio', 
    size: 5, 
    orbitDuration: '4s' 
  },
  { 
    name: 'Vênus', 
    image: [VenusImg, VenusImg2], 
    nameClass: 'Venus', 
    size: 10, 
    orbitDuration: '6s' 
  },
  { 
    name: 'Terra', 
    image: [TerraImg, TerraImg2], 
    nameClass: 'Terra', 
    size: 15, 
    orbitDuration: '8s' 
  },
  { 
    name: 'Marte', 
    image: [MarteImg, MarteImg2], 
    nameClass: 'Marte', 
    size: 12, 
    orbitDuration: '10s' 
  },
  { 
    name: 'Júpiter', 
    image: [JupiterImg, JupiterImg2], 
    nameClass: 'Jupiter', 
    size: 28, 
    orbitDuration: '12s' 
  },
  { 
    name: 'Saturno', 
    image: [SaturnoImg, SaturnoImg2, SaturnoImg3],
    nameClass: 'Saturno', 
    size: 22, 
    orbitDuration: '14s' 
  },
  { 
    name: 'Urano', 
    image: [Uranoimg, Uranoimg2], 
    nameClass: 'Urano', 
    size: 18, 
    orbitDuration: '16s' 
  },
  { 
    name: 'Netuno', 
    image: [Netunoimg, Netunoimg2], 
    nameClass: 'Netuno', 
    size: 16, 
    orbitDuration: '18s' 
  },
];

export default stars;
