import React, { useState, useEffect } from 'react'
import API from '../utils/API'
import MaterialTable, { MTableFilterRow, MTableBody, MTableToolbar } from 'material-table'

// class Item extends Component {
//     state = {
//         items: [],
//         name: '',
//         date: '',
//         store: '',
//         search: ''
//     }

//     componentDidMount() {
//         this.loadItems()
//     }

//     loadItems = () => {
//         API.getItems()
//             .then(res => this.setState({ items: res.data, name: '', date: '', store: res.data[0].store}))
//             .catch(err => console.log(err))
        
//     }

//     deleteBook = id => {
//         API.deleteItem(id)
//             .then(res => this.loadItems())
//             .catch(err => console.log(err))
//     }

//     handleInputChange = e => {
//         let { name, value } = e.target
//         this.setState({
//             [name]: value
//         })
//     }

//     handleFormSubmit = e => {
//         e.preventDefault()
//         if (this.state.name && this.state.date) {
//             API.saveItem({
//                 name: this.state.name,
//                 date: this.state.date
//             })
//                 .then(res => this.loadItems())
//                 .catch(err => console.log(err))
//         }
//     }

//     render() {
//         return (
//             <>
//             {/* <input type='text' placeholder='Search..' name='search' value={this.state.search} onChange={this.handleInputChange} />
//             <table style={{textAlign: 'center'}}>
//                 <thead>
//                     <tr>
//                         <th onClick={() => console.log(this.state.display)}>Name</th>
//                         <th>Exp</th>
//                         <th></th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     { this.state.items.filter((item) => 
//             item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
//         ).map(item => 
//                                 <tr key={item.name}> 
//                                 <td>{item.name}</td>
//                                 <td>{item.date}</td>
//                                 <td>
//                                     <button onClick={()=>console.log('remove '+item._id)}>Remove</button>                                                   
//                                 </td>
//                                 </tr>)
//                                 }
//                 </tbody>
//             </table>
//              */}

//             Hello world.

            

//             </>
//            )
//     }

// }

function Item() {

    //let initialData = []
  
    // splits array so that every element has only one date and 
    // can be rendered as child in table
    let splitData = (fetchedData) => {
        let newarray = []
  
        if (fetchedData.length > 0) {

            fetchedData.forEach(x => {  
                x.date.length > 1 ? 
                x.date.map(y => 
                    y === x.date[0] ? 
                    newarray = [...newarray, {_id: x._id, name: x.name, date: y}] :
                    newarray = [...newarray, {_id: new Date().valueOf(), date: y, parentId: x._id}])
                : 
                newarray = [...newarray, {...x, date: x.date[0]}]
            })
        
        } 
        console.log(newarray)
        setData(newarray)
    }
  
    // Enforces sort on date
    let sortDate = () => {
      let a = data.sort(function(a, b){
        var aa = a.date.split('-').reverse().join(),
            bb = b.date.split('-').reverse().join();
        return aa < bb ? -1 : (aa > bb ? 1 : 0);
      })
      return a
    }
  
    useEffect(() => {
        API.getItems()
             .then(res => splitData(res.data))
             .catch(err => console.log(err))
    }, [])

    let [ data, setData ] = useState([])

    return (
      <>
        <div style={{ maxWidth: '80%', margin: 'auto', paddingTop: '1rem' }}>
          <MaterialTable
            columns={[
              { title: 'Name', field: 'name', sorting: false },
              { title: 'Date', field: 'date', sorting: false, customSort: sortDate() }
            ]}
            data={data}
            editable={{
              onRowAdd: newItem => new Promise((res, rej) => {
                setTimeout(() => {
                  setData([...data, newItem])
                  res()
                }, 1000)
              }),
              //onRowDelete: (item) => Promise.resolve(console.log(item))
              onRowDelete: oldItem => new Promise((res, rej) => {
                setTimeout(() => {
                  let i = data.indexOf(oldItem)
                  let temp = data
                  temp.splice(i, 1)
                  setData([...temp])
                  res()
                }, 1000)
              })
            }}
            options={{
              actionsColumnIndex: -1,
              paging: false,
              draggable: false,
              showTitle: false
            }}
            parentChildData={(row, rows) => rows.find(a => a._id === row.parentId)}
          />
        </div>
      </>
    );
  }

export default Item