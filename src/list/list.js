import React from 'react';
import {Button,Form,Table} from 'antd';
import styles from './style/index.css';
class Index extends React.Component{
  render(){
    const {
      data:{data,pagination},
      field,
      onChange,
      loading,

    } = this.props;
    const {columns,page,operator} = field;
    console.log(this.props);
    const tableColumns = Object.keys(columns).map(item => { 
      var obj = { 
        title:columns[item].label,
        dataIndex:item,
        key:item
      };
      if(columns[item].render){
        obj.render = columns[item].render;
      }
      return obj;
    });
    const pageProps= { 
      ...page,
      onChange:onChange,
      current:pagination.page,
      total:pagination.total
    }
    return(
      <div className={styles.tableList}>
        <div className={styles.tableListForm}></div>
        {operator && operator}
        <Table 
          rowKey="id"
          columns={tableColumns}
          dataSource={data}
          pagination={pageProps}
          loading={loading}
        />
      </div>
    );
  }
}

export default Index;