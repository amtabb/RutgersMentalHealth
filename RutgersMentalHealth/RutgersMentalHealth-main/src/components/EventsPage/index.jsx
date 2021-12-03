import React,{useState} from "react";
import {useTable} from "react-table";
import { Link } from "react-router-dom";
import "./EventsPage.css";
const columns=[
 {
   Header:"date",
   accessor:"date",
 },
 {
   Header:"location",
   accessor:"location",
 },
 {
   Header:"seats",
   accessor:"seats",
 },
 {
   Header:"speakers",
   accessor:"speakers",
 },
 {
   Header:"about",
   accessor:"about",
 }
]
function EventsPage(props) {
 const {
   logo,
   image4,
   searchPlaceholde,
   image3,
   place,
   text15,
   inspiration,
   text16,
   events,
   rectangle28,
   text17,
   rectangle29,
   location,
   rectangle30,
   seat25People,
   rectangle31,
   speakers4Exerts,
   aboutTheEvent,
   whatYouWillLearn,
   title,
   rectangle33,
   rectangle32,
 } = props;
 const [tabledata,settabledata]=useState([]);
const tableInstant=useTable({
 columns,
 data:tabledata
})
const {
 getTableBodyProps,
 getTableProps,
 headerGroups,
 rows,
 prepareRow
}=tableInstant;
React.useEffect(()=>{
 fetch("https://rutgersmentalhealth.herokuapp.com/events").then(res=>res.json()).then(res=>settabledata(res));
},[]);
 return (
   <div className="container-center-horizontal">
     <div className="events-page screen">
       <div className="overlap-group4-2">
         <div className="images-2">
           <img className="logo-2" src={logo} />
           <img className="image-4-2" src={image4} />
          
           <img className="image-3-2" src={image3} />
         </div>
         <div className="overlap-group1-3">
           <Link to="/landing-page" className="align-self-flex-center">
             <div className="place-2 mulish-bold-wild-sand-24px">{place}</div>
           </Link>
           <div className="overlap-group-5">
             <div className="text-1 mulish-bold-wild-sand-36px">{text15}</div>
             <div className="inspiration-2 mulish-bold-wild-sand-24px">{inspiration}</div>
           </div>
           <div className="overlap-group2-2">
             <div className="text-1 mulish-bold-wild-sand-36px">{text16}</div>
             <Link to="/inspiration-page">
               <div className="events-2 mulish-bold-wild-sand-24px">{events}</div>
             </Link>
           </div>
         </div>
       </div>
       <div className="flex-row-3">
         <div className="overlap-group6">
           <img className="rectangle-28" src={rectangle28} />
           <div className="text-17 roboto-normal-black-25px">{text17}</div>
         </div>
         <div className="overlap-group5-1">
           <img className="rectangle-29" src={rectangle29} />
           <div className="location roboto-normal-black-25px">{location}</div>
         </div>
         <div className="overlap-group3-2">
           <img className="rectangle-30" src={rectangle30} />
           <div className="seat-25-people roboto-normal-black-25px">{seat25People}</div>
         </div>
         <div className="overlap-group7">
           <img className="rectangle-31" src={rectangle31} />
           <div className="speakers-4-exerts roboto-normal-black-25px">{speakers4Exerts}</div>
         </div>
       </div>
       <div className="flex-row-4">
       <table {...getTableProps()}>
           <thead>
             {headerGroups.map(headerGroup=>(
               <tr {...headerGroup.getHeaderGroupProps()}>
               {headerGroup.headers.map(column=>(
                 <th {...column.getHeaderProps()}>
                 {column.render("Header")}
                   </th>
               ))}
 
                 </tr>
             ))}
           </thead>
           <tbody {...getTableBodyProps}>
                 {rows.map(row=>{
                   prepareRow(row);
                   return (
                     <tr {...row.getRowProps()}>
                       {row.cells.map(cell=>{
                         return (
                           <td {...cell.getCellProps()}>
                             {cell.render("Cell")}
 
                             </td>
                         )
                       })}
                       </tr>
                   )
                 })}
           </tbody>
         </table>
       </div>
     </div>
   </div>
 );
}
 
export default EventsPage;
 
