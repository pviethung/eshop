import { debounce } from 'debounce';
import { useMemo, useState } from 'react';
import { getTrackBackground, Range } from 'react-range';
import { useTheme } from 'styled-components';
import { moneyFormat } from '../../utils';
import DropdownCollapsible from '../DropdownCollapsible';

interface CollectionFilterPriceProps {
  onFilterPrice: (values: { min: number; max: number } | null) => void;
}

const STEP = 1;
const MIN = 15;
const MAX = 300;

const CollectionFilterPrice = ({
  onFilterPrice,
}: CollectionFilterPriceProps) => {
  const [values, setValues] = useState([25, 300]);
  const { mainColor } = useTheme();
  const onFilterPriceMemo = useMemo(
    () =>
      debounce((min: number, max: number) => {
        onFilterPrice({ min, max });
      }, 500),
    [onFilterPrice]
  );

  return (
    <DropdownCollapsible trigger="price">
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => {
          setValues(values);
          onFilterPriceMemo(values[0], values[1]);
        }}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: '100px',
              display: 'flex',
              width: '100%',
              padding: '10px',
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: '5px',
                width: '100%',
                borderRadius: '4px',
                background: getTrackBackground({
                  values,
                  colors: ['#ccc', mainColor, '#ccc'],
                  min: MIN,
                  max: MAX,
                }),
                alignSelf: 'center',
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ index, props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '30px',
              width: '30px',
              outline: 'none',
              borderRadius: '4px',
              backgroundColor: '#FFF',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0px 2px 6px #AAA',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-28px',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '14px',
                padding: '4px',
                borderRadius: '4px',
                backgroundColor: mainColor,
              }}
            >
              {moneyFormat(values[index])}
            </div>
            <div
              style={{
                height: '16px',
                width: '5px',
                backgroundColor: isDragged ? mainColor : '#CCC',
              }}
            />
          </div>
        )}
      />
    </DropdownCollapsible>
  );
};
export default CollectionFilterPrice;
