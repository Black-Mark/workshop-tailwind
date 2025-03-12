import { Link } from 'react-router-dom';
import img1 from '../../../assets/images/1.PNG';
import img2 from '../../../assets/images/2.PNG';
import img3 from '../../../assets/images/3.PNG';
import img4 from '../../../assets/images/4.PNG';
import routes from '../../../constants/routes';

export default function TailwindConsumer() {
    return (
        <div>
        <div className="grid grid-cols-2 gap-4 p-4">
            <img src={img1} alt="Image 1" className="w-full h-auto rounded-lg shadow-md transition-transform duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px]" />
            <img src={img2} alt="Image 2" className="w-full h-auto rounded-lg shadow-md transition-transform duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px]" />
            <img src={img3} alt="Image 3" className="w-full h-auto rounded-lg shadow-md transition-transform duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px]" />
            <img src={img4} alt="Image 4" className="w-full h-auto rounded-lg shadow-md transition-transform duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px]" />
        </div>
            <Link to={routes.activities} className="next-button">Activities?</Link>
        </div>
    );
}