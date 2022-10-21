import { axiosInstance } from './axiosInstance';
import { getOrderIds } from './getOrderIds';

const parseNumber = (data: number) => {
  return {
    [Number.isInteger(data) ? 'integerValue' : 'doubleValue']: data.toString(),
  };
};
const parseString = (data: string) => {
  return {
    'stringValue': data,
  };
};
const parseArray = (data: any[]) => {
  for (let i = 0; i < data.length; i++) {
    let itemType = Object.prototype.toString.call(data[i]);
    switch (itemType) {
      case '[object Number]':
        data[i] = parseNumber(data[i]);
        break;
      case '[object String]':
        data[i] = parseString(data[i]);
        break;
      case '[object Array]':
        data[i] = parseArray(data[i]);
        break;
      case '[object Object]':
        data[i] = parseObject(data[i]);
        break;
      default:
        break;
    }
  }
  return {
    'arrayValue': {
      'values': [...data],
    },
  };
};
const parseObject = (data: any) => {
  for (const key in data) {
    let itemValue = data[key];

    let itemType = Object.prototype.toString.call(itemValue);
    switch (itemType) {
      case '[object Number]':
        data[key] = parseNumber(itemValue);
        break;
      case '[object String]':
        data[key] = parseString(itemValue);
        break;
      case '[object Array]':
        data[key] = parseArray([...itemValue]);
        break;
      case '[object Object]':
        data[key] = parseObject({ ...itemValue });
        break;
      default:
        break;
    }
  }

  return {
    'mapValue': {
      'fields': {
        ...data,
      },
    },
  };
};

const postOrderData = async (orderId: string, data: any) => {
  await axiosInstance({
    url: `orders?documentId=${orderId}`,
    method: 'POST',
    data: {
      'fields': {
        ...parseObject(data).mapValue.fields,
      },
    },
  });
};
const saveUserOrders = async (
  userId: string,
  orderId: string,
  prevOrderIds: any[]
) => {
  axiosInstance({
    url: `users/${userId}?updateMask.fieldPaths=orders`,
    method: 'PATCH',
    data: {
      'fields': {
        'orders': {
          'arrayValue': {
            'values': [...prevOrderIds, { 'stringValue': orderId }],
          },
        },
      },
    },
  });
};

// TODOs resitrct user table
export const postOrder = async (userId: string, cart: any, orderId: string) => {
  const data = JSON.parse(JSON.stringify(cart));
  let prevOrderIds = await getOrderIds(userId);
  prevOrderIds = prevOrderIds?.fields?.orders?.arrayValue?.values || [];

  try {
    await postOrderData(orderId, data);
    saveUserOrders(userId, orderId, prevOrderIds);
  } catch (err) {
    throw err;
  }
};
