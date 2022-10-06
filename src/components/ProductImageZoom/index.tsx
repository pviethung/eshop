import ReactImageMagnify from 'react-image-magnify';

const ProductImageZoom = () => {
  return (
    <div>
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: 'Wristwatch by Ted Baker London',
            isFluidWidth: true,
            src: 'https://cdn.shopify.com/s/files/1/1473/1066/products/DOUBLE_SIDED_BERMUDA_SHORTS_1024x1024.jpg?v=1473774996',
          },
          largeImage: {
            src: 'https://cdn.shopify.com/s/files/1/1473/1066/products/DOUBLE_SIDED_BERMUDA_SHORTS_1024x1024.jpg?v=1473774996',
            width: 1200,
            height: 1800,
          },
        }}
      />
    </div>
  );
};
export default ProductImageZoom;
