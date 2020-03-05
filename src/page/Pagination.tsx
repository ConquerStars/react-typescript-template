import React from 'react'
import { Pagination } from 'antd-mobile';

import ShoppingList from 'page/demo'

export default () => (
  <div className="pagination-container" >
    <p className="sub-title">Button with text</p>
    <Pagination total={5} current={1} />

    <p className="sub-title">Button with text and icon</p>
    <Pagination total={5}
      className="custom-pagination-with-icon"
      current={1}
    />

    <p className="sub-title">Hide number</p>
    <Pagination simple total={5} current={1} />

    <p className="sub-title">Show number only</p>
    <Pagination mode="number" total={5} current={3} />

    <p className="sub-title">Point style</p>
    <Pagination mode="pointer" total={5} current={2} style={{ marginBottom: '16px' }} />
    <ShoppingList />
  </div>
);


