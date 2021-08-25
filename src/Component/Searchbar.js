import React,{useState} from 'react'
import Jsondata from "./MOCK_DATA.json"
import Pagenation from './Pagenation';
function Searchbar() {
    const [data, setData] = useState('');
    const [currpage, setCurrpage] = useState(1);
    const [pageperdata, setPageperdata] = useState(50);
    const indexlastdata = currpage*pageperdata;
    const indexfirstdata = indexlastdata-pageperdata;
    const paginate=(no)=>{
        setCurrpage(no);

    }
    return (
        <div>
            <input type="text" placeholder="Search........" value={data} onChange={(event)=>{setData(event.target.value);}}></input>
            <div>
                  
                {Jsondata.slice(indexfirstdata,indexlastdata)
                .filter((val)=>{
                    if(data==""){
                        return val;
                    
                    }
                    
                    else if(val.first_name.toLowerCase().includes(data.toLowerCase())){
                        return val;

                    }
                })
                 
                .map((val,index)=>
                {
                    return (
                        <p key={index}>{val.first_name}</p>
                        );
                })
                 }
              
            </div>
            <Pagenation pageperdata={pageperdata} totaldata={Jsondata.length} paginate={paginate}/>
            
        </div>
    )
}

export default Searchbar
