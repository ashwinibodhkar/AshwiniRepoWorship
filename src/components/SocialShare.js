// import React from 'react';
// import PropTypes from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FacebookShareButton,FacebookIcon, WhatsappShareButton } from 'react-share';

// const Share = ({ socialConfig, tags }) => (
// 	<div className="post-social">
// 		<FacebookShareButton 
//                 url={"http://letsworship.netlify.app"}
//                 quote={"View Lyrics With Original Chords"}
//                 className={classes.socialMediaButton}>
//                  <FacebookIcon size={36} />
//               </FacebookShareButton>
		
// 		<WhatsappShareButton url={socialConfig.config.url} className="button is-outlined is-rounded whatsapp" title={socialConfig.config.title} >
// 			<span className="icon">
// 				<FontAwesomeIcon icon={['fab', 'whatsapp']} />
// 			</span>
// 			<span className="text">WhatsApp</span>
// 		</WhatsappShareButton>
// 	</div>
// );

// Share.propTypes = {
// 	socialConfig: PropTypes.shape({
// 		twitterHandle: PropTypes.string.isRequired,
// 		config: PropTypes.shape({
// 			url: PropTypes.string.isRequired,
// 			title: PropTypes.string.isRequired,
// 		}),
// 	}).isRequired,
// 	tags: PropTypes.arrayOf(PropTypes.string),
// };
// Share.defaultProps = {
// 	tags: [],
// };

// export default Share;