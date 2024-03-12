import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";

const ShareButtons = ({ property }) => {
  const shareUrl = `${
    process.env.NEXT_PUBLIC_DOMAIN
  }/properties/${property._id.replace(/\s/g, "")}`;
  return (
    <>
      <h3 className="pt-2 text-xl font-bold text-center">
        Share this Porperty
      </h3>
      <div className="flex justify-center gap-3 pb-5 ">
        <FacebookShareButton
          url={shareUrl}
          quote={property.name}
          hashtag={`${property.type.replace(/\s/g, "")}ForRent`}
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>
        <TwitterShareButton
          url={shareUrl}
          title={property.name}
          hashtags={[`#${property.type}ForRent`]}
        >
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>
        <WhatsappShareButton
          url={shareUrl}
          subject={property.name}
          body={`CHeck out this property listing: ${shareUrl}`}
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>
        <EmailShareButton url={shareUrl} title={property.name} separator="::">
          <EmailIcon size={40} round={true} />
        </EmailShareButton>
      </div>
    </>
  );
};
export default ShareButtons;
