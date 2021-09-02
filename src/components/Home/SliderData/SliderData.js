import { faUniversity, faUsers, faUserShield } from "@fortawesome/free-solid-svg-icons";
import slider1 from '../../../image/slider-1.jpg';
import slider2 from '../../../image/slider-2.jpg';
import slider3 from '../../../image/slider-3.jpg';
const sliderData = [
    {  
         title: "DU Students' Celebrating their Graduation Moment",
        text: "The main purpose of the University was to create new areas of knowledge and disseminate such knowledge nationally as well ...",
        info: [{icon: faUsers, text: "Regular Students : 37000 +"},{icon: faUsers, text:  'Affiliate College Students : 1,70,100 +'}],
        // info1: {icon: faUsers, text: "Regular Students : 37000 +"},
        // info2: {icon: faUsers, text:  'Affiliate College Students : 1,70,100 +'},
        image: slider1,
    },
    {  
         title: "The Glorious Journey",
        text: "On the first day of July 1921, the University of Dhaka opened its doors to students with Sir P.J. Hartog ...",
        info: [{icon: faUniversity, text: 'Departments : 83'},{icon: faUniversity, text: 'Institutes: 13'},{icon: faUniversity, text:'Research Centers: 54'}],
        // info1: {icon: faUniversity, text: 'Departments : 83'},
        // info2:  {icon: faUniversity, text: 'Institutes: 13'},
        // info3: {icon: faUniversity, text:'Research Centers: 54'},
        image: slider2
    },
    {
        title: "Welcome to the University of Dhaka",
        text: "On the first day of July 1921 the University of Dhaka opened its doors to students with Sir P.J. Hartog ...",
        info: [{icon: faUniversity,text: 'Founded : 1921'},{icon: faUserShield, text: 'Faculty Members : 2000+'}],
        // info1: {icon: faUniversity,text: 'Founded : 1921'},
        // info2: {icon: faUserShield, text: 'Faculty Members : 2000+'},
        image: slider3
    },
]

export default sliderData;