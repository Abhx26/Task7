import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from "../logo.webp"
import bottom from "../bottom-add-banner.webp"

const PromoBanner = () => {
    return (
        <div className="promo-banner ">
            <div className="logo">
                <Image src={logo} alt="Bunzo Logo"/>
            </div>
            <div className="promo-image">
                <Image src={bottom} alt="Food Promotion"  />
            </div>
            <div className="icon-container ">
                <FontAwesomeIcon icon={faSearch} />
                <FontAwesomeIcon icon={faUser} />
            </div>
        </div>
    );
};

export default PromoBanner;