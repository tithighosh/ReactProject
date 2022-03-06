import "./List.css";

function List ({itemList,updateItemList}){
    const deleteItemFromList = key =>{
    const newList = itemList.filter(item0bj =>{
            return item0bj.key !==key;

        });
        updateItemList(newList);
    };
   return (
   <div>
       {itemList.map(item0bj=>{
          return (
          <div key={item0bj.key} className="Item">
              <p>{item0bj.item}</p>
              <button onClick={() => deleteItemFromList(item0bj.key)}>x</button>
          </div>
          );
       })}
   </div>
   );
}

export default List;