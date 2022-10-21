import ReactImageMagnify from 'react-image-magnify';

const ProductImageZoom = ({
  imgSrc,
  width,
  height,
  enlargedImagePortalId,
}: {
  imgSrc: string;
  width: number;
  height: number;
  enlargedImagePortalId?: string;
}) => {
  return (
    <div style={{ position: 'relative' }}>
      <ReactImageMagnify
        {...{
          enlargedImageContainerStyle: {
            maxWidth: '700px',
          },
          enlargedImageContainerDimensions: {
            width: 600,
            height: 600,
          },
          smallImage: {
            alt: 'Wristwatch by Ted Baker London',
            isFluidWidth: true,
            src: imgSrc,
          },
          largeImage: {
            src: imgSrc,
            width: width,
            height: height,
          },
        }}
      />
    </div>
  );
};
export default ProductImageZoom;
