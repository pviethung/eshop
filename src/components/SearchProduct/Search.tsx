import { useEffect, useRef, useState } from 'react';
import { MdOutlineSearch } from 'react-icons/md';
import useSWRImmutable from 'swr/immutable';
import { axiosInstance, PAGE_SIZE } from '../../services/firebase';
import { ResultItem, ResultWrap, SearchInput, SearchWrap } from './style';

//@ts-ignore
import FireStoreParser from 'firestore-parser';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../../models';

const Search = () => {
  let parsedData = useRef<any[]>([]);
  const [query, setQuery] = useState('');
  const [typing, setTyping] = useState(false);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setTyping(true);
  };

  const [filteredData, setFilteredData] = useState<any[]>([]);
  const { data, error, mutate } = useSWRImmutable<any>(
    '/products',
    (url) =>
      axiosInstance({
        method: 'GET',
        url: `${url}?pageSize=${PAGE_SIZE}`,
      }),
    { shouldRetryOnError: false }
  );

  useEffect(() => {
    if (error || !data) {
      parsedData.current = [];
    } else {
      parsedData.current =
        data.data.documents.map((document: any) => {
          return FireStoreParser(document.fields);
        }) || [];
    }

    return () => {};
  }, [data, error]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const filteredData =
        query.trim() !== ''
          ? parsedData.current.filter(
              ({ title, vendor, tags, type, description }: Product) => {
                return (
                  title.includes(query) ||
                  vendor.includes(query) ||
                  tags.includes(query) ||
                  type.includes(query) ||
                  description.includes(query)
                );
              }
            )
          : [];

      setTyping(false);
      setFilteredData(filteredData);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <SearchWrap>
      <SearchInput
        placeholder="SEARCH: "
        onClick={(e) => e.stopPropagation()}
        type="text"
        onChange={handleQueryChange}
        value={query}
      />
      <MdOutlineSearch fontSize={30} color="#777" />

      <ResultWrap>
        {filteredData.length > 0 &&
          filteredData.map((product: Product) => {
            return (
              <ResultItem key={product.id}>
                <Link href={`/products/${product.id}`}>
                  <a
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <Image
                      width={40}
                      height={50}
                      src={product.images[0]}
                      alt={product.title}
                    />
                    <p>{product.title}</p>
                  </a>
                </Link>
              </ResultItem>
            );
          })}
        {filteredData.length === 0 && !typing && query !== '' && (
          <ResultItem key="not-found-product">
            <a onClick={(event) => event.preventDefault()}>
              <p>There were none discovered ...</p>
            </a>
          </ResultItem>
        )}
      </ResultWrap>
    </SearchWrap>
  );
};
export default Search;
