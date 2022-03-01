import React from "react";

export function MovieList({DummyData,Editfun,Dletefun}) {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Movie Name</th>
          <th scope="col">Movie Discription</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
{
    DummyData.map((element,index)=>{
        return (
            <tbody>
            <tr>
            <td key={index}>{index}</td>
              <td>{element.title}</td>
              <td>{element.discription}</td>
              <td><button className="btn" onClick={()=>Editfun(index)}>Edit</button></td>
              <td><button className="btn btn-danger" onClick={()=>Dletefun(index)}>Dlete</button></td>
            </tr>
          </tbody>
       
        )
    })
}
</table>
  );
}
