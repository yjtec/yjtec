import React from 'react';
import styles from './style/index.css';
// export default function(props){
//   console.log(props);
//   return(
//     <div className={styles.tableListOperator}>
//       {props.render()}
//     </div>    
//   );
// }
export default class Operator extends React.Component{
  render(){
    return(
      <div className={styles.tableListOperator}>
       {this.props.children}
      </div>
    );
  }
}