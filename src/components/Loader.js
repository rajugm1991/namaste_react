

const Loader =()=>{
    return (
        <div className="rest-container">
            {Array(10).fill('').map((i,index)=>  <div key={index} className="shimmer-card"/>)}
          
        </div>
    )
}

export default Loader;