// import { baseUrl } from '../utils/config';

function Img(props) {
	const { className, image, withCaption } = props;
	const caption = image?.metadata?.caption || image?.metadata?.fileName;

	console.log('Img', props);

	return (
		image && (
			<>
				<img className={className} src={image['@link']} alt={caption} />
				{withCaption && <div className="Img__caption">{caption}</div>}
			</>
		)
	);
}

export default Img;
