import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

function Review() {
    const location = useLocation();
    const { movie } = location.state;

    return (
        <>
            <Header />
            <Navbar />
            <div className="review-container">
                <div className="review-heading">
                    <h1>{movie.title}</h1>
                </div>
                <img src={movie.image} alt={movie.title} className="review-image" />
                <div className="review-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ante, blandit ac lectus porta, consequat lacinia urna. Donec ac nisi eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean quis nunc a lorem aliquam laoreet. Integer pellentesque ultrices arcu. Quisque at neque scelerisque, cursus urna nec, semper ante. Pellentesque sit amet sapien non nisi finibus tincidunt. Proin porttitor magna eros, ac facilisis quam sodales sed. Sed ultricies rutrum nisi ac accumsan. Sed pharetra molestie quam, non eleifend lorem malesuada et. Curabitur commodo euismod sapien a pellentesque. Nam pulvinar aliquet bibendum. Ut non nisl quam. Nulla nisi nunc, sodales et erat sit amet, tristique malesuada ante. Etiam eleifend tellus nec mi molestie, sed pellentesque ipsum sagittis.

Quisque cursus aliquet ante eu tristique. Donec vel lectus non nibh sagittis gravida ut egestas arcu. Donec sagittis facilisis scelerisque. Proin vulputate hendrerit urna, eu sagittis sem venenatis id. Aliquam ultricies justo eget viverra vehicula. In egestas fermentum pretium. Nullam semper vulputate orci, sed egestas leo ornare eget. Maecenas eget dignissim urna. Duis in augue blandit, eleifend leo nec, cursus felis. Vivamus faucibus in tortor a facilisis.

Donec ac nisl suscipit, vulputate diam vel, ornare neque. Integer pretium mauris nulla, sed porttitor tortor volutpat sed. Vivamus id eros orci. Suspendisse mi lacus, gravida volutpat tincidunt nec, placerat quis arcu. Maecenas quis vehicula enim, et pulvinar mi. Proin scelerisque malesuada aliquam. Etiam volutpat facilisis massa, ornare laoreet justo egestas tincidunt. Pellentesque tempor arcu enim, quis imperdiet ipsum iaculis imperdiet. Donec gravida malesuada sollicitudin. Aliquam sodales neque pulvinar augue viverra, a convallis leo posuere. In laoreet, sem nec vestibulum aliquam, erat urna venenatis nisi, quis laoreet orci diam quis ex. Nam ornare felis id purus porta vulputate. Fusce a lacus eros.

Vestibulum efficitur mauris vitae fringilla gravida. Nunc sit amet elementum lectus. In in libero porttitor, finibus lorem in, molestie quam. Integer eros risus, tristique in magna in, luctus finibus nibh. Vivamus ultricies nibh in purus scelerisque pretium. Aliquam condimentum volutpat libero at mollis. In vulputate vitae sapien vitae scelerisque. Proin finibus ex non metus interdum rhoncus. Etiam posuere est leo, elementum egestas mi facilisis vitae. Cras laoreet vel velit ut tempus. Duis interdum sed ante et lobortis. Nullam dictum nunc non neque lobortis, ut vehicula metus maximus. Praesent sed pellentesque est. Aliquam interdum leo quis ullamcorper suscipit.

Vivamus nisi mauris, rutrum sed dictum eget, efficitur tincidunt ante. Morbi id porta nisi, eget aliquam odio. Donec ut enim aliquet, finibus felis et, suscipit lorem. Integer ipsum mi, rhoncus eu tincidunt at, porttitor non neque. Ut tincidunt ante purus, a fringilla magna pharetra vel. Cras sit amet diam eu diam fringilla facilisis. Fusce tempor rhoncus venenatis. Morbi tempor cursus tincidunt. Praesent velit lectus, aliquam sed mollis vel, tincidunt et risus. Aliquam quam est, ultricies sed dapibus a, aliquet quis orci.</p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Review;
