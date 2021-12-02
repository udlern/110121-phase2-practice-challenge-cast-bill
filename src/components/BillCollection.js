import React from 'react';
import BillCard from './BillCard';

export default function BillCollection({ bills }) {
  const displayBills = bills.map(bill => {
    return <BillCard key={bill.id} bill={bill}/>
  })

  return (
    <div className="ui four column grid">
      <div className="row">
        {displayBills}
      </div>
    </div>
  );
}
