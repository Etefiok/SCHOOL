import React from 'react';

const Table = ({ data}) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
          <th>Column 4</th>
          <th>Column 5</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.column1}</td>
            <td>{item.column2}</td>
            <td>{item.column3}</td>
            <td>{item.column4}</td>
            <td>{item.column5}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Tablee = () => {
    const handlePrint = () => {
      const printContents = document.querySelector('.printable-area').outerHTML;
      const originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
    };

  const dataArray = [
    { column1: 'Data 1', column2: 'Data 2', column3: 'Data 3', column4: 'Data 4', column5: 'Data 5' },
    { column1: 'Data 6', column2: 'Data 7', column3: 'Data 8', column4: 'Data 9', column5: 'Data 10' },
    { column1: 'Data 11', column2: 'Data 12', column3: 'Data 13', column4: 'Data 14', column5: 'Data 15' },
    { column1: 'Data 16', column2: 'Data 17', column3: 'Data 18', column4: 'Data 19', column5: 'Data 19' },
    { column1: 'Data 16', column2: 'Data 17', column3: 'Data 18', column4: 'Data 19', column5: 'Data 19' },
    { column1: 'Data 16', column2: 'Data 17', column3: 'Data 18', column4: 'Data 19', column5: 'Data 19' },
    { column1: 'Data 16', column2: 'Data 17', column3: 'Data 18', column4: 'Data 19', column5: 'Data 19' },
    { column1: 'Data 16', column2: 'Data 17', column3: 'Data 18', column4: 'Data 19', column5: 'Data 19' },
    { column1: '', column2: '', column3: '', column4: '', column5: '' },
  ];
    

  return (
    <div>
     <div className="printable-area">
        <h1>Result</h1>
        <h5>this is my result sheet</h5>
        <Table data={dataArray} />
      </div>

      <style>
        {`
          .table {
            border-collapse: collapse;
            width: 100%;
          }
          .table th, .table td {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
          }
        `}
      </style>
      
      <button onClick={handlePrint}>Print</button>
    </div>
  );
};

export default Tablee;
